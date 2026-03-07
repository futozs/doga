using Microsoft.Data.Sqlite;

namespace KandoTest;

public class Database
{
    private readonly string _connStr;

    public Database(string dbPath)
    {
        _connStr = $"Data Source={dbPath}";
    }

    public void Initialize()
    {
        using var conn = Open();
        Exec(conn, @"
            CREATE TABLE IF NOT EXISTS submissions (
                id          INTEGER PRIMARY KEY AUTOINCREMENT,
                name        TEXT NOT NULL,
                email       TEXT NOT NULL,
                osztaly     TEXT,
                csoport     TEXT,
                task_ids    TEXT,
                scores      TEXT,
                max_scores  TEXT,
                total_score INTEGER,
                max_total   INTEGER,
                duration    INTEGER,
                mode        TEXT,
                code_snapshot TEXT,
                submitted_at  TEXT DEFAULT (datetime('now', 'localtime'))
            );
            CREATE TABLE IF NOT EXISTS config (
                key   TEXT PRIMARY KEY,
                value TEXT
            );
            CREATE TABLE IF NOT EXISTS teachers (
                id            INTEGER PRIMARY KEY AUTOINCREMENT,
                username      TEXT UNIQUE NOT NULL,
                password_hash TEXT NOT NULL
            );
            INSERT OR IGNORE INTO config (key, value) VALUES ('test_mode', 'practice');
        ");
    }

    // ── Config ────────────────────────────────────────────────────────────────

    public string? GetConfig(string key)
    {
        using var conn = Open();
        using var cmd = conn.CreateCommand();
        cmd.CommandText = "SELECT value FROM config WHERE key = $key";
        cmd.Parameters.AddWithValue("$key", key);
        return cmd.ExecuteScalar()?.ToString();
    }

    public void SetConfig(string key, string value)
    {
        using var conn = Open();
        using var cmd = conn.CreateCommand();
        cmd.CommandText = "INSERT OR REPLACE INTO config (key, value) VALUES ($key, $value)";
        cmd.Parameters.AddWithValue("$key", key);
        cmd.Parameters.AddWithValue("$value", value);
        cmd.ExecuteNonQuery();
    }

    // ── Submissions ───────────────────────────────────────────────────────────

    public int SaveSubmission(SubmissionRequest r)
    {
        using var conn = Open();
        using var cmd = conn.CreateCommand();
        cmd.CommandText = @"
            INSERT INTO submissions
                (name, email, osztaly, csoport, task_ids, scores, max_scores,
                 total_score, max_total, duration, mode, code_snapshot)
            VALUES
                ($name, $email, $osztaly, $csoport, $task_ids, $scores, $max_scores,
                 $total_score, $max_total, $duration, $mode, $code_snapshot);
            SELECT last_insert_rowid();";

        cmd.Parameters.AddWithValue("$name",          r.Name);
        cmd.Parameters.AddWithValue("$email",         r.Email);
        cmd.Parameters.AddWithValue("$osztaly",       r.Osztaly ?? "");
        cmd.Parameters.AddWithValue("$csoport",       (object?)r.Csoport ?? DBNull.Value);
        cmd.Parameters.AddWithValue("$task_ids",      r.TaskIds);
        cmd.Parameters.AddWithValue("$scores",        r.Scores);
        cmd.Parameters.AddWithValue("$max_scores",    r.MaxScores);
        cmd.Parameters.AddWithValue("$total_score",   r.TotalScore);
        cmd.Parameters.AddWithValue("$max_total",     r.MaxTotal);
        cmd.Parameters.AddWithValue("$duration",      r.Duration);
        cmd.Parameters.AddWithValue("$mode",          r.Mode);
        cmd.Parameters.AddWithValue("$code_snapshot", (object?)r.CodeSnapshot ?? DBNull.Value);

        return Convert.ToInt32(cmd.ExecuteScalar());
    }

    public List<Submission> GetSubmissions(string? osztaly = null, string? csoport = null)
    {
        using var conn = Open();
        using var cmd = conn.CreateCommand();

        var where = new List<string>();
        if (osztaly != null) { where.Add("osztaly = $osztaly"); cmd.Parameters.AddWithValue("$osztaly", osztaly); }
        if (csoport != null) { where.Add("csoport = $csoport"); cmd.Parameters.AddWithValue("$csoport", csoport); }

        cmd.CommandText = $@"
            SELECT id, name, email, osztaly, csoport, task_ids, scores, max_scores,
                   total_score, max_total, duration, mode, submitted_at
            FROM submissions
            {(where.Count > 0 ? "WHERE " + string.Join(" AND ", where) : "")}
            ORDER BY submitted_at DESC";

        return ReadSubmissions(cmd, includeCode: false);
    }

    public Submission? GetSubmission(int id)
    {
        using var conn = Open();
        using var cmd = conn.CreateCommand();
        cmd.CommandText = @"
            SELECT id, name, email, osztaly, csoport, task_ids, scores, max_scores,
                   total_score, max_total, duration, mode, code_snapshot, submitted_at
            FROM submissions WHERE id = $id";
        cmd.Parameters.AddWithValue("$id", id);
        return ReadSubmissions(cmd, includeCode: true).FirstOrDefault();
    }

    public Stats GetStats()
    {
        using var conn = Open();

        var stats = new Stats();

        using (var cmd = conn.CreateCommand())
        {
            cmd.CommandText = @"
                SELECT
                    COUNT(*) as total,
                    SUM(CASE WHEN date(submitted_at) = date('now', 'localtime') THEN 1 ELSE 0 END) as today,
                    AVG(duration) as avg_dur,
                    AVG(CAST(total_score AS REAL) / NULLIF(max_total, 0) * 100) as avg_pct
                FROM submissions";
            using var reader = cmd.ExecuteReader();
            if (reader.Read())
            {
                stats.TotalSubmissions  = reader.IsDBNull(0) ? 0 : reader.GetInt32(0);
                stats.TodaySubmissions  = reader.IsDBNull(1) ? 0 : reader.GetInt32(1);
                stats.AvgDuration       = reader.IsDBNull(2) ? 0 : Math.Round(reader.GetDouble(2));
                stats.AvgScore          = reader.IsDBNull(3) ? 0 : Math.Round(reader.GetDouble(3), 1);
            }
        }

        using (var cmd = conn.CreateCommand())
        {
            cmd.CommandText = @"
                SELECT osztaly, COUNT(*) as cnt,
                       AVG(CAST(total_score AS REAL) / NULLIF(max_total, 0) * 100) as avg_pct
                FROM submissions GROUP BY osztaly ORDER BY osztaly";
            using var reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                stats.ByClass.Add(new ClassStat
                {
                    Osztaly  = reader.IsDBNull(0) ? "" : reader.GetString(0),
                    Count    = reader.GetInt32(1),
                    AvgScore = reader.IsDBNull(2) ? 0 : Math.Round(reader.GetDouble(2), 1)
                });
            }
        }

        return stats;
    }

    // ── Teachers ──────────────────────────────────────────────────────────────

    public void UpsertTeacher(string username, string passwordHash)
    {
        using var conn = Open();
        using var cmd = conn.CreateCommand();
        cmd.CommandText = @"
            INSERT INTO teachers (username, password_hash) VALUES ($u, $h)
            ON CONFLICT(username) DO UPDATE SET password_hash = $h";
        cmd.Parameters.AddWithValue("$u", username);
        cmd.Parameters.AddWithValue("$h", passwordHash);
        cmd.ExecuteNonQuery();
    }

    public string? GetPasswordHash(string username)
    {
        using var conn = Open();
        using var cmd = conn.CreateCommand();
        cmd.CommandText = "SELECT password_hash FROM teachers WHERE username = $u";
        cmd.Parameters.AddWithValue("$u", username);
        return cmd.ExecuteScalar()?.ToString();
    }

    // ── Helpers ───────────────────────────────────────────────────────────────

    private SqliteConnection Open()
    {
        var conn = new SqliteConnection(_connStr);
        conn.Open();
        return conn;
    }

    private static void Exec(SqliteConnection conn, string sql)
    {
        using var cmd = conn.CreateCommand();
        cmd.CommandText = sql;
        cmd.ExecuteNonQuery();
    }

    private static List<Submission> ReadSubmissions(SqliteCommand cmd, bool includeCode)
    {
        var list = new List<Submission>();
        using var r = cmd.ExecuteReader();
        while (r.Read())
        {
            int i = 0;
            var s = new Submission
            {
                Id          = r.GetInt32(i++),
                Name        = r.GetString(i++),
                Email       = r.GetString(i++),
                Osztaly     = r.IsDBNull(i) ? "" : r.GetString(i++),
                Csoport     = r.IsDBNull(i) ? null : r.GetString(i++),
                TaskIds     = r.IsDBNull(i) ? "" : r.GetString(i++),
                Scores      = r.IsDBNull(i) ? "" : r.GetString(i++),
                MaxScores   = r.IsDBNull(i) ? "" : r.GetString(i++),
                TotalScore  = r.IsDBNull(i) ? 0  : r.GetInt32(i++),
                MaxTotal    = r.IsDBNull(i) ? 0  : r.GetInt32(i++),
                Duration    = r.IsDBNull(i) ? 0  : r.GetInt32(i++),
                Mode        = r.IsDBNull(i) ? "" : r.GetString(i++),
            };
            if (includeCode)
            {
                s.CodeSnapshot = r.IsDBNull(i) ? null : r.GetString(i++);
            }
            else i++;
            s.SubmittedAt = r.IsDBNull(i) ? "" : r.GetString(i);
            list.Add(s);
        }
        return list;
    }
}
