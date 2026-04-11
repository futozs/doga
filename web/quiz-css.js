// ── CSS TUDÁSPRÓBA – KÉRDÉSBANK ──────────────────────────────────────────

const cssQuizBank = {

  // ════════════════════════════════════════════════════════════════════════
  // FELELETVÁLASZTÓS KÉRDÉSEK (34 db)
  // ════════════════════════════════════════════════════════════════════════

  mc: [

    // ── CSS ALAPOK ────────────────────────────────────────────────────────

    {
      id:'mc1',
      question:'Mit jelent a CSS betűszó?',
      options:['Cascading Style Sheets','Computer Style System','Creative Styling Software','Cascading Sheet Syntax'],
      correct:0,
      explanation:'CSS = Cascading Style Sheets – lépcsőzetes stíluslapok. A weboldalak megjelenéséért felelős.'
    },
    {
      id:'mc2',
      question:'Melyik a helyes CSS szintaxis?',
      options:['h1 { color: red; }','h1: color = red','{ h1 } color: red;','h1 | color: red;'],
      correct:0,
      explanation:'Szelektor, utána kapcsos zárójelben a tulajdonság: érték; párok. Minden deklaráció pontosvesszővel zárul.'
    },
    {
      id:'mc3',
      question:'Hova kerül az internal (belső) CSS stílus?',
      options:['A <head> részbe, <style> tagek közé','A <body> aljára','Külön .css fájlba','Az elemek style="" attribútumába'],
      correct:0,
      explanation:'Az internal stílus a <head> részben a <style>...</style> tagek között helyezkedik el.'
    },
    {
      id:'mc4',
      question:'Melyik a helyes CSS komment szintaxis?',
      options:['/* ez egy komment */','// ez egy komment','<!-- ez egy komment -->','# ez egy komment'],
      correct:0,
      explanation:'CSS-ben a kommentet /* és */ közé írjuk. A // és <!-- --> HTML/JS kommentek, CSS-ben nem működnek.'
    },
    {
      id:'mc5',
      question:'Ha ugyanarra az elemre inline, internal és external stílus is van megadva, melyik érvényesül?',
      options:['Az inline stílus (style="" attribútum)','Az internal stílus (<style> tagben)','Az external stílus (.css fájl)','Mindig az utolsóként megadott'],
      correct:0,
      explanation:'Az inline stílus (style="...") a legerősebb, felülírja az internal és external stílusokat.'
    },

    // ── SZELEKTOROK ───────────────────────────────────────────────────────

    {
      id:'mc6',
      question:'Mit jelent a . (pont) a CSS szelektorban?',
      options:['osztályjelölőre (class) hivatkozik','egyedi azonosítóra (id) hivatkozik','Minden elemre vonatkozik','pszeudóosztályra hivatkozik'],
      correct:0,
      explanation:'.kiemelt { } – a class="kiemelt" attribútummal rendelkező elemeket formázza.'
    },
    {
      id:'mc7',
      question:'Melyik CSS kód formázza a "cica" egyedi azonosítójú (id) elemet?',
      options:['#cica { }','.cica { }','cica { }','*cica { }'],
      correct:0,
      explanation:'A # (hashmark) az id szelektort jelöli. Az id egyedi, az oldalon csak egy elem viselheti.'
    },
    {
      id:'mc8',
      question:'Melyik CSS kódrészlet formázza az oldal ÖSSZES <p> elemét?',
      options:['p { color: gray; }','.p { color: gray; }','#p { color: gray; }','*p { color: gray; }'],
      correct:0,
      explanation:'Az elem neve (p, h1, div stb.) maga az elem-szelektor. Nem kell elé pont vagy hashmark.'
    },
    {
      id:'mc9',
      question:'Mire való a :hover?',
      options:['Ha az adott elem fölé visszük az egérmutatót, alkalmaz stílust','Kattintáskor alkalmaz stílust','Lapozáskor aktiválódik','Az elem az oldal tetején lebeg'],
      correct:0,
      explanation:'a:hover { } – akkor lép életbe, ha az egér az elem fölé kerül. Linkek és gombok kiemelésére nagyon hasznos.'
    },
    {
      id:'mc10',
      question:'Melyik elemkijelölő (szelektor) rendelkezik a LEGNAGYOBB prioritással?',
      options:['#cim { color: red }','.cim { color: red }','h1 { color: red }','* { color: red }'],
      correct:0,
      explanation:'Az ID szelektor (#) a legerősebb. Sorrendben: inline > #id > .class > elem > *'
    },

    // ── SZÖVEG STÍLUSOK ───────────────────────────────────────────────────

    {
      id:'mc11',
      question:'Mit csinál a font-weight: bold; tulajdonság?',
      options:['Félkövérré teszi a szöveget','Dőlttéleszi a szöveget','Aláhúzza a szöveget','Növeli a betűméretet'],
      correct:0,
      explanation:'font-weight szabályozza a betű vastagságát. Értékei: normal, bold, vagy 100–900 közötti szám.'
    },
    {
      id:'mc12',
      question:'Mit csinál a text-align: justify; tulajdonság?',
      options:['Sorkizárt igazítást állít be','Középre igazítja a szöveget','Jobbra igazítja a szöveget','Balra igazítja a szöveget'],
      correct:0,
      explanation:'justify: a sorok egyforma szélességűek lesznek (mint az újságban). Értékei még: left, center, right.'
    },
    {
      id:'mc13',
      question:'Mit csinál a text-transform: uppercase; tulajdonság?',
      options:['Az összes betűt nagybetűvé alakítja','Az összes betűt kisbetűvé alakítja','Kiskapitálissá teszi a szöveget','Vastag szegélybe foglalja a szöveget'],
      correct:0,
      explanation:'text-transform értékei: uppercase (NAGYBETŰ), lowercase (kisbetű), capitalize (Minden Szó Nagybetűvel), small-caps.'
    },
    {
      id:'mc14',
      question:'Melyik CSS tulajdonsággal tüntetjük el a link aláhúzását?',
      options:['text-decoration: none','underline: false','text-underline: off','link-decoration: remove'],
      correct:0,
      explanation:'text-decoration: none; eltávolítja az aláhúzást. Más értékei: underline, overline, line-through.'
    },
    {
      id:'mc15',
      question:'Mit csinál a font-style: italic; tulajdonság?',
      options:['Dőlttéleszi a szöveget','Félkövérré teszi a szöveget','Kiskapitálissá teszi a szöveget','Aláhúzza a szöveget'],
      correct:0,
      explanation:'font-style: italic → dőlt szöveg. Értékei: normal, italic, oblique.'
    },
    {
      id:'mc16',
      question:'Melyik tulajdonsággal lesznek a betűk kiskapitálisak?',
      options:['text-transform: small-caps','font-style: italic','text-decoration: underline','font-weight: bold'],
      correct:0,
      explanation:'text-transform: small-caps → a kisbetűk kisméretű nagybetűkké (kiskapitálissá) alakulnak. Más értékei: uppercase, lowercase, capitalize.'
    },
    {
      id:'mc17',
      question:'Mire való a font-family CSS tulajdonság?',
      options:['A szöveg betűtípusát (betűcsaládját) határozza meg','A betű vastagságát állítja be','A betűméretet szabályozza','A szöveg dőltségét határozza meg'],
      correct:0,
      explanation:'font-family: a szöveg betűcsaládját adja meg. Például: font-family: Arial, sans-serif; – ha az Arial nem elérhető, bármely talpak nélküli betűtípust fog használni a böngésző.'
    },

    // ── SZÍN ──────────────────────────────────────────────────────────────

    {
      id:'mc18',
      question:'Mi a különbség a color és a background-color között?',
      options:['color a szöveg színe, background-color a háttér színe','color a háttér, background-color a szöveg színe','Mindkettő ugyanaz, felcserélhetők','color az egész oldalra vonatkozik, background-color csak elemekre'],
      correct:0,
      explanation:'color = szöveg (előtér) színe. background-color = az elem hátterének a színe.'
    },
    {
      id:'mc19',
      question:'Melyik a helyes hex színkód a piros szín megadásához?',
      options:['#ff0000','ff0000','hex(255,0,0)','color(red)'],
      correct:0,
      explanation:'A hex szín # jellel kezdődik, majd 6 hexadecimális számjegyből áll (RRGGBB). #ff0000 = teljesen piros.'
    },
    {
      id:'mc20',
      question:'Mit jelenít meg a color: rgb(0, 255, 0); tulajdonság?',
      options:['Zöld szöveget','Kék szöveget','Szürke szöveget','Sárga szöveget'],
      correct:0,
      explanation:'rgb(piros, zöld, kék) – 0 és 255 közötti értékekkel. rgb(0,255,0) = élénkzöld (lime) szín.'
    },

    // ── DOBOZMODELL ───────────────────────────────────────────────────────

    {
      id:'mc21',
      question:'Mi a különbség a margin és a padding között?',
      options:['A margin a külső, a padding a belső margótávolságot állítja be','A margin a belső, a padding a külső margótávolságot állítja be','Mindkettő belső margótávolság, de különböző irányokban','A szöveg körüli és az elem körüli hely ugyanaz'],
      correct:0,
      explanation:'margin = az elem körüli külső üres terület (más elemektől való távolság). padding = az elem belseje és tartalma közötti hely.'
    },
    {
      id:'mc22',
      question:'Mit jelent a border: 3px dotted red;?',
      options:['3 képpont (px) vastag, pontozott vonalú, piros szegély','3 képpont (px) vastag, szaggatott vonalú, piros szegély','Piros háttér, 3 képpontos sarokkerekítéssel','3 képpont (px) vastag belső margótávolság, piros szegély'],
      correct:0,
      explanation:'A border shorthand: vastagság stílus szín sorrendben. dotted = pontozott. Stílusok: solid, dotted, dashed, double.'
    },
    {
      id:'mc23',
      question:'Mit csinál a margin: 0 auto; egy fix szélességű képen (img)?',
      options:['Vízszintesen középre igazítja a képet','Függőlegesen középre igazítja a képet','Eltünteti az összes margótávolságot','Automatikusan növeli a margótávolságot tartalomhoz igazodva'],
      correct:0,
      explanation:'margin: 0 auto – 0 a felső/alsó, auto a bal/jobb margó. Az auto értékek egyenlő arányban osztják el a maradék helyet → középre igazítás.'
    },
    {
      id:'mc24',
      question:'Mit jelent a padding: 10px 20px; (két értékkel)?',
      options:['10px fent és lent, 20px jobbra és balra állítja a belső margótávolságot','10px balra, 20px jobbra','20px fent és lent, 10px jobbra és balra','10px minden irányba, kivéve 20px jobbra'],
      correct:0,
      explanation:'Két értéknél: az első a fel/le (függőleges), a második a jobb/bal (vízszintes). padding: 10px 20px = 10px fent/lent, 20px jobb/bal.'
    },

    // ── HÁTTÉR ────────────────────────────────────────────────────────────

    {
      id:'mc25',
      question:'Melyik CSS tulajdonsággal adhatsz háttérképet egy elemnek?',
      options:['background-image: url("kep.jpg")','background: kep.jpg','img-background: url("kep.jpg")','background-src: "kep.jpg"'],
      correct:0,
      explanation:'background-image: url("fájlnév"); – megadja a háttérképet. Általában background-repeat és background-size tulajdonságokkal együtt szokás használni.'
    },

    // ── SZEGÉLY ───────────────────────────────────────────────────────────

    {
      id:'mc26',
      question:'Mit csinál a border-radius: 10px; tulajdonság?',
      options:['Az elem sarkait lekerekíti','10 képpont (px) vastag szegélyt rajzol az elem köré','Az elemet körré alakítja','Az elemek közötti távolságot állítja be'],
      correct:0,
      explanation:'border-radius: sarkokat kerekít le. 50%-ra állítva egy négyzet alakú elemet körré alakít. Nagyon hasznos gomboknál és kártyáknál.'
    },

    // ── BETŰMÉRET ─────────────────────────────────────────────────────────

    {
      id:'mc27',
      question:'Mi az alapértelmezett betűméret a legtöbb böngészőben?',
      options:['16px (= 1em)','12px','14px','18px'],
      correct:0,
      explanation:'A böngészők alapesetben 16px betűméretet alkalmaznak a body elemre, ami 1em-nek (vagy 1rem-nek) felel meg.'
    },
    {
      id:'mc28',
      question:'Mit csinál a width: 100%; tulajdonság?',
      options:['Az elem kitölti a szülőelem teljes szélességét','Az elem a képernyő teljes szélességét foglalja el','Az elem 100 képpont (px) széles lesz','Az elem automatikusan igazodik a tartalmához'],
      correct:0,
      explanation:'A % értéke mindig a szülőelemhez viszonyított. width: 100% → az elem ugyanolyan széles, mint a szülője.'
    },

    // ── MAGASSÁG ──────────────────────────────────────────────────────────

    {
      id:'mc34',
      question:'Melyik CSS tulajdonsággal adod meg egy elem magasságát?',
      options:['height','size','length','tall'],
      correct:0,
      explanation:'height: az elem magasságát állítja be (pl. height: 200px;). A width a szélességet, a height a magasságot szabályozza.'
    },

    // ── ELRENDEZÉS ────────────────────────────────────────────────────────

    {
      id:'mc29',
      question:'Mit csinál a float: left; tulajdonság?',
      options:['Az elemet balra úsztatja, a tartalom körbefolyja','Az elemet a bal szélre rögzíti, a többi elem alá kerül','Az elemet a szülőelem bal szélére igazítja, de nem befolyásolja a többit','Minden szöveget az elem bal oldalára gyűjt'],
      correct:0,
      explanation:'float: left – az elemet „kiemeli" a normál folyásból és balra tolja, a következő elemek (pl. szöveg) pedig körbefolyják. Képeknél és régebbi elrendezéseknél használják.'
    },

    // ── LISTA ─────────────────────────────────────────────────────────────

    {
      id:'mc30',
      question:'Mit csinál a list-style-image tulajdonság?',
      options:['Képet jelenít meg jelölőként a listaelemek előtt','Eltünteti a lista jelölőjét','Számozottá alakítja a listát','A lista elemeit vízszintesen jeleníti meg'],
      correct:0,
      explanation:'list-style-image: url("jelolo.png"); – egyedi képet jelenít meg a listaelemek jelölőjeként. Ha nincs kép elérhető, a list-style-type értéke lép érvénybe.'
    },

    // ── VEGYES ────────────────────────────────────────────────────────────

    {
      id:'mc31',
      question:'Az alábbi CSS kódban mi a hiba?\n\np {\n  color red;\n  font-size: 14px;\n}',
      options:['A color után hiányzik a kettőspont (:)','A p szelektor után hiányzik a pont','A font-size után hiányzik a pontosvessző','Nincs hiba, a kód helyes'],
      correct:0,
      explanation:'CSS szintaxis: tulajdonság: érték; – a kettőspont kötelező elválasztó a tulajdonság és az érték között.'
    },
    {
      id:'mc32',
      question:'Melyik CSS tulajdonsággal állítod be a SZÖVEG színét?',
      options:['color','text-color','font-color','foreground-color'],
      correct:0,
      explanation:'A szöveg (előtér) színe: color. Nincs "text-color" vagy "font-color" a CSS-ben!'
    },

    // ── TÁBLÁZAT ──────────────────────────────────────────────────────────

    {
      id:'mc33',
      question:'Melyik CSS tulajdonsággal olvad össze a táblázat celláinak szegélye?',
      options:['border-collapse: collapse','border-merge: single','table-border: collapse','cell-spacing: 0'],
      correct:0,
      explanation:'border-collapse: collapse; – a szomszédos cellák szegélye összeolvad, így nem lesz dupla vonal köztük. Alapértelmezés: separate (különálló szegélyek).'
    }

  ],   // mc vége

  // ════════════════════════════════════════════════════════════════════════
  // KÓDÍRÓS FELADATOK (19 db)
  // ════════════════════════════════════════════════════════════════════════

  fillin: [

    {
      id:'f1', points:5,
      question:'Stílusozd meg a body elemet az alábbiak szerint!\n\n– Háttérszín: #f5f0ff\n– Betűcsalád: Arial, sans-serif\n– Betűméret: 16px\n– Margótávolság minden oldalon: 0\n– Szövegszín: #222222',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Body stílus</title>
  <style>
    body {

    }
  </style>
</head>
<body>
  <h1>Üdvözlet</h1>
  <p>Ez egy bekezdés.</p>
</body>
</html>`,
      checks:[
        { label:'Háttérszín: #f5f0ff',          hint:'background-color: #f5f0ff;',         fn:(h)=>/background-color\s*:\s*#f5f0ff/i.test(h) },
        { label:'Betűcsalád tartalmaz Arial-t',  hint:'font-family: Arial, sans-serif;',     fn:(h)=>/font-family\s*:[^;]*Arial/i.test(h) },
        { label:'Betűméret: 16px',               hint:'font-size: 16px;',                    fn:(h)=>/font-size\s*:\s*16px/i.test(h) },
        { label:'Margótávolság: 0',              hint:'margin: 0;',                          fn:(h)=>/margin\s*:\s*0/i.test(h) },
        { label:'Szövegszín: #222222',           hint:'color: #222222;',                     fn:(h)=>/color\s*:\s*#222222/i.test(h) }
      ]
    },

    {
      id:'f2', points:3,
      question:'Formázd meg a h1 és a p elemeket!\n\nh1: szövegszín tengerkék (teal), középre igazított, 2em betűméretű\np: sorkizárt szöveg (justify)',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Szöveg stílus</title>
  <style>
    h1 {

    }
    p {

    }
  </style>
</head>
<body>
  <h1>Főcím</h1>
  <p>Ez egy hosszabb bekezdés szövege, amelyet sorkizártan szeretnénk megjeleníteni az oldalon.</p>
</body>
</html>`,
      checks:[
        { label:'h1 szövegszín: teal',          hint:'color: teal;',               fn:(h)=>/h1\s*\{[^}]*color\s*:\s*teal/i.test(h) },
        { label:'h1 középre igazított',          hint:'text-align: center;',         fn:(h)=>/h1\s*\{[^}]*text-align\s*:\s*center/i.test(h) },
        { label:'p: sorkizárt szöveg',           hint:'text-align: justify;',        fn:(h)=>/p\s*\{[^}]*text-align\s*:\s*justify/i.test(h) }
      ]
    },

    {
      id:'f3', points:1,
      question:'A kódban pontosan egy hiba van. Javítsd ki!',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Hiba javítás</title>
  <style>
    h1 {
      color red;
      font-size: 28px;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Hibás CSS</h1>
</body>
</html>`,
      checks:[
        { label:'color után kettőspont van (:)', hint:'color: red;  ← a kettőspont kötelező!', fn:(h)=>/color\s*:\s*red/i.test(h) }
      ]
    },

    {
      id:'f4', points:3,
      question:'Adj stílust a div elemnek!\n\n– Belső margótávolság (padding) minden oldalon: 20px\n– Külső margótávolság felül és alul: 15px, jobbra és balra: 0\n– Szegély: 2px solid #cccccc',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Dobozmodell</title>
  <style>
    div {

    }
  </style>
</head>
<body>
  <div>Ez egy doboz tartalommal.</div>
</body>
</html>`,
      checks:[
        { label:'Padding: 20px minden oldalon',     hint:'padding: 20px;',                  fn:(h)=>/padding\s*:\s*20px/i.test(h) },
        { label:'Margótávolság: 15px 0',            hint:'margin: 15px 0;',                  fn:(h)=>/margin\s*:\s*15px\s+0/i.test(h) },
        { label:'Szegély: 2px solid #cccccc',       hint:'border: 2px solid #cccccc;',       fn:(h)=>/border\s*:\s*2px\s+solid\s+#cccccc/i.test(h) }
      ]
    },

    {
      id:'f5', points:3,
      question:'Stílusozd meg a linkeket!\n\n– Szövegszín: #0066cc, ne legyen aláhúzás\n– Rámutatáskor (hover): legyen aláhúzott és a szín #003399',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Link stílus</title>
  <style>
    a {

    }
    a:hover {

    }
  </style>
</head>
<body>
  <p>Látogasd meg a <a href="#">Kandó iskolát</a> és a <a href="#">tananyagot</a>!</p>
</body>
</html>`,
      checks:[
        { label:'a: nincs aláhúzás',             hint:'text-decoration: none;',                  fn:(h)=>/a\s*\{[^}]*text-decoration\s*:\s*none/i.test(h) },
        { label:'a:hover – aláhúzott',           hint:'a:hover { text-decoration: underline; }',  fn:(h)=>/a\s*:\s*hover\s*\{[^}]*text-decoration\s*:\s*underline/i.test(h) },
        { label:'a:hover – sötétebb szín',       hint:'a:hover { color: #003399; }',              fn:(h)=>/a\s*:\s*hover\s*\{[^}]*color/i.test(h) }
      ]
    },

    {
      id:'f6', points:2,
      question:'A HTML-ben van egy "kiemelt" osztályú span elem. Add hozzá a CSS-t: piros szövegszín és félkövér betűstílus!',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Class szelektor</title>
  <style>

  </style>
</head>
<body>
  <p>Ez egy <span class="kiemelt">fontos</span> szöveg.</p>
</body>
</html>`,
      checks:[
        { label:'.kiemelt szelektor van a CSS-ben', hint:'.kiemelt { color: red; font-weight: bold; }', fn:(h)=>(/\.kiemelt\s*\{[^}]*color\s*:\s*red/i.test(h)) },
        { label:'.kiemelt: félkövér betűstílus',    hint:'font-weight: bold;',                          fn:(h)=>(/\.kiemelt\s*\{[^}]*font-weight\s*:\s*bold/i.test(h)) }
      ]
    },

    {
      id:'f7', points:4,
      question:'A navigációs gombnak (button) adj alap és hover stílust!\n\nAlap: háttér #4a90d9, fehér szöveg, nincs szegély, 10px 24px belső margótávolság\nHover: háttér #2c6fad, kurzor mutató (pointer)',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Hover stílus</title>
  <style>
    button {

    }
    button:hover {

    }
  </style>
</head>
<body>
  <button>Kattints ide</button>
</body>
</html>`,
      checks:[
        { label:'button: háttérszín #4a90d9',        hint:'background-color: #4a90d9;',        fn:(h)=>/button\s*\{[^}]*background-color\s*:\s*#4a90d9/i.test(h) },
        { label:'button: fehér szöveg',              hint:'color: white;',                      fn:(h)=>/button\s*\{[^}]*color\s*:\s*(white|#fff|#ffffff)/i.test(h) },
        { label:'button:hover: sötétebb háttér',     hint:'background-color: #2c6fad;',         fn:(h)=>/button\s*:\s*hover\s*\{[^}]*background-color/i.test(h) },
        { label:'button:hover: kurzor pointer',      hint:'cursor: pointer;',                   fn:(h)=>/button\s*:\s*hover\s*\{[^}]*cursor\s*:\s*pointer/i.test(h) }
      ]
    },

    {
      id:'f8', points:5,
      question:'Stílusozd meg az oldalt az ágazati vizsga stílusában!\n\nbody: Verdana betűcsalád, fehér (#ffffff) háttér\nh1: sötétkék (#1a237e), nagybetűs (uppercase), középre igazított\np: sorkizárt szöveg, 10px margótávolság felül és alul\na: szövegszín #1565c0, nincs aláhúzás',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Vizsga stílus</title>
  <style>
    body {

    }
    h1 {

    }
    p {

    }
    a {

    }
  </style>
</head>
<body>
  <h1>Webfejlesztés</h1>
  <p>A CSS segítségével stílusozhatjuk weboldalainkat. <a href="#">Bővebben</a></p>
</body>
</html>`,
      checks:[
        { label:'body: Verdana betűcsalád',       hint:'font-family: Verdana, sans-serif;',  fn:(h)=>/body\s*\{[^}]*font-family\s*:[^;]*Verdana/i.test(h) },
        { label:'h1: sötétkék szöveg (#1a237e)',  hint:'color: #1a237e;',                    fn:(h)=>/h1\s*\{[^}]*color\s*:\s*#1a237e/i.test(h) },
        { label:'h1: nagybetűs',                  hint:'text-transform: uppercase;',          fn:(h)=>/h1\s*\{[^}]*text-transform\s*:\s*uppercase/i.test(h) },
        { label:'p: sorkizárt szöveg',             hint:'text-align: justify;',               fn:(h)=>/p\s*\{[^}]*text-align\s*:\s*justify/i.test(h) },
        { label:'a: nincs aláhúzás',              hint:'text-decoration: none;',              fn:(h)=>/a\s*\{[^}]*text-decoration\s*:\s*none/i.test(h) }
      ]
    },

    {
      id:'f9', points:2,
      question:'Adj méretet a képnek (img)!\n\n– Szélesség: 200px\n– Magasság: 150px',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Képméret</title>
  <style>
    img {

    }
  </style>
</head>
<body>
  <img src="img/kiscica.jpg" alt="Cica">
</body>
</html>`,
      checks:[
        { label:'img: szélesség 200px',   hint:'width: 200px;',    fn:(h)=>/img\s*\{[^}]*width\s*:\s*200px/i.test(h) },
        { label:'img: magasság 150px',    hint:'height: 150px;',   fn:(h)=>/img\s*\{[^}]*height\s*:\s*150px/i.test(h) }
      ]
    },

    {
      id:'f10', points:5,
      question:'Egy weboldal fejlécét kell megformázni a következők szerint!\n\nheader: háttérszín #1e3a5f, fehér szöveg, 20px padding felül-alul, 40px jobbra-balra\nh1 a fejlécen belül: betűméret 1.8em, nincs margótávolság\nnav: margin-top 10px\nnav a: fehér szöveg, nincs aláhúzás, 0 15px padding',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Fejléc stílus</title>
  <style>
    header {

    }
    header h1 {

    }
    nav {

    }
    nav a {

    }
  </style>
</head>
<body>
  <header>
    <h1>Kandó Kálmán</h1>
    <nav>
      <a href="#">Rólunk</a>
      <a href="#">Képzések</a>
      <a href="#">Kapcsolat</a>
    </nav>
  </header>
</body>
</html>`,
      checks:[
        { label:'header: sötétkék háttér (#1e3a5f)',  hint:'background-color: #1e3a5f;',      fn:(h)=>/header\s*\{[^}]*background-color\s*:\s*#1e3a5f/i.test(h) },
        { label:'header: fehér szövegszín',           hint:'color: white;',                    fn:(h)=>/header\s*\{[^}]*color\s*:\s*(white|#fff|#ffffff)/i.test(h) },
        { label:'header h1: betűméret 1.8em',         hint:'font-size: 1.8em;',                fn:(h)=>/header\s+h1\s*\{[^}]*font-size\s*:\s*1\.8em/i.test(h) },
        { label:'nav a: fehér szöveg',                hint:'nav a { color: white; }',           fn:(h)=>/nav\s+a\s*\{[^}]*color\s*:\s*(white|#fff|#ffffff)/i.test(h) },
        { label:'nav a: nincs aláhúzás',              hint:'nav a { text-decoration: none; }',  fn:(h)=>/nav\s+a\s*\{[^}]*text-decoration\s*:\s*none/i.test(h) }
      ]
    },

    {
      id:'f11', points:3,
      question:'Stílusozd meg az ul listát!\n\n– Tüntesd el a lista jelölőit (pontokat)\n– Állítsd a padding-ot 0-ra\n– A listaelemek (li) legyenek zöldek (#2e7d32) és félkövérek',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Lista stílus</title>
  <style>
    ul {

    }
    li {

    }
  </style>
</head>
<body>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>
</body>
</html>`,
      checks:[
        { label:'ul: list-style: none',              hint:'list-style: none;',                 fn:(h)=>/ul\s*\{[^}]*list-style\s*:\s*none/i.test(h) },
        { label:'ul: padding: 0',                    hint:'padding: 0;',                       fn:(h)=>/ul\s*\{[^}]*padding\s*:\s*0/i.test(h) },
        { label:'li: zöld félkövér szöveg',          hint:'li { color: #2e7d32; font-weight: bold; }', fn:(h)=>/li\s*\{[^}]*color\s*:\s*#2e7d32/i.test(h) }
      ]
    },

    {
      id:'f12', points:2,
      question:'A bekezdésben lévő strong elemet formázd: dőlt és 1.1em méretű legyen! (A félkövér már adott, csak a dőlt és a méret hiányzik.)',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Font stílusok</title>
  <style>
    strong {

    }
  </style>
</head>
<body>
  <p>Ez egy bekezdés <strong>kiemelendő szöveggel</strong>.</p>
</body>
</html>`,
      checks:[
        { label:'strong: dőlt betűstílus',    hint:'font-style: italic;',    fn:(h)=>/strong\s*\{[^}]*font-style\s*:\s*italic/i.test(h) },
        { label:'strong: betűméret 1.1em',    hint:'font-size: 1.1em;',      fn:(h)=>/strong\s*\{[^}]*font-size\s*:\s*1\.1em/i.test(h) }
      ]
    },

    // ── ÚJ TÍPUS: CSS KOMMENTELÉS ─────────────────────────────────────────
    {
      id:'f13', points:4,
      question:'Az alábbi CSS kódban minden tulajdonság sorához írj egy kommentet (/* ... */), amely elmagyarázza, mit csinál az adott sor! A kommentnek legalább 4 karakter hosszúnak kell lennie.',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>CSS kommentelés</title>
  <style>
    body {
      background-color: #fafafa;
      font-family: Georgia, serif;
    }
    h1 {
      color: darkslateblue;
      text-align: center;
      font-size: 2em;
      text-transform: uppercase;
    }
  </style>
</head>
<body>
  <h1>Kommentelt CSS</h1>
</body>
</html>`,
      checks:[
        { label:'background-color során van komment',  hint:'background-color: #fafafa; /* szürke háttérszín */',  fn:(h)=>{ const l=h.split('\n').find(r=>/background-color/.test(r)); return !!(l&&/\/\*[^*]{4,}\*\//.test(l)); } },
        { label:'font-family során van komment',       hint:'font-family: Georgia, serif; /* betűcsalád */',       fn:(h)=>{ const l=h.split('\n').find(r=>/font-family/.test(r)); return !!(l&&/\/\*[^*]{4,}\*\//.test(l)); } },
        { label:'color során van komment',             hint:'color: darkslateblue; /* szövegszín */',              fn:(h)=>{ const l=h.split('\n').find(r=>/color\s*:/.test(r)); return !!(l&&/\/\*[^*]{4,}\*\//.test(l)); } },
        { label:'text-align során van komment',        hint:'text-align: center; /* középre igazítás */',         fn:(h)=>{ const l=h.split('\n').find(r=>/text-align/.test(r)); return !!(l&&/\/\*[^*]{4,}\*\//.test(l)); } }
      ]
    },

    {
      id:'f14', points:2,
      question:'Helyezd középre a képet! A képek (img) alapból nem középre igazítottak. Úgy teheted középre, ha display: block-ra állítod, és a margótávolságot auto-ra.\n\nTedd az img elemet középre: display: block és margin: 0 auto!',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Kép középre</title>
  <style>
    img {

    }
  </style>
</head>
<body>
  <img src="img/kiscica.jpg" alt="Cica">
</body>
</html>`,
      checks:[
        { label:'img: display: block',   hint:'display: block;',   fn:(h)=>/img\s*\{[^}]*display\s*:\s*block/i.test(h) },
        { label:'img: margin: 0 auto (vagy margin-left/right: auto)',   hint:'margin: 0 auto;  vagy  margin-left: auto; margin-right: auto;',   fn:(h)=>{ const sh=/img\s*\{[^}]*margin\s*:\s*(0\s+)?auto/i.test(h); const lh=/img\s*\{[^}]*margin-left\s*:\s*auto/i.test(h)&&/img\s*\{[^}]*margin-right\s*:\s*auto/i.test(h); return sh||lh; } }
      ]
    },

    {
      id:'f15', points:5,
      question:'Készíts egy kártyastílusú dobozt!\n\nbody: világosszürke (#f0f0f0) háttér\n.kartya: fehér háttér, 20px padding, 1px solid #ddd szegély, legfeljebb 400px széles, 10px felső-alsó + auto bal-jobb margótávolság\n.kartya h2: szövegszín #333333, nincs margótávolság\n.kartya p: szürke szöveg (#666666)',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Kártya stílus</title>
  <style>
    body {

    }
    .kartya {

    }
    .kartya h2 {

    }
    .kartya p {

    }
  </style>
</head>
<body>
  <div class="kartya">
    <h2>Kártya cím</h2>
    <p>Ez a kártya tartalma. Stílusozd meg a megadott utasítások szerint!</p>
  </div>
</body>
</html>`,
      checks:[
        { label:'body: világosszürke háttér',        hint:'background-color: #f0f0f0;',           fn:(h)=>/body\s*\{[^}]*background-color\s*:\s*#f0f0f0/i.test(h) },
        { label:'.kartya: fehér háttér',             hint:'background-color: white;',              fn:(h)=>(/\.kartya\s*\{[^}]*background-color\s*:\s*(white|#fff|#ffffff)/i.test(h)) },
        { label:'.kartya: max-width: 400px',         hint:'max-width: 400px;',                     fn:(h)=>(/\.kartya\s*\{[^}]*max-width\s*:\s*400px/i.test(h)) },
        { label:'.kartya h2: szövegszín #333333',    hint:'.kartya h2 { color: #333333; }',        fn:(h)=>(/\.kartya\s+h2\s*\{[^}]*color\s*:\s*#333333/i.test(h)) },
        { label:'.kartya p: szürke szöveg #666666',  hint:'.kartya p { color: #666666; }',         fn:(h)=>(/\.kartya\s+p\s*\{[^}]*color\s*:\s*#666666/i.test(h)) }
      ]
    },

    {
      id:'f16', points:2,
      question:'Formázd meg a h2 elemet szövegformázó tulajdonságokkal!\n\n– text-transform: small-caps\n– text-align: center\n– text-decoration: underline',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Szöveg formázás</title>
  <style>
    h2 {

    }
  </style>
</head>
<body>
  <h2>Szövegformázás CSS-sel</h2>
</body>
</html>`,
      checks:[
        { label:'text-transform: small-caps',   hint:'text-transform: small-caps;',   fn:(h)=>/h2\s*\{[^}]*text-transform\s*:\s*small-caps/i.test(h) },
        { label:'text-decoration: underline',   hint:'text-decoration: underline;',   fn:(h)=>/h2\s*\{[^}]*text-decoration\s*:\s*underline/i.test(h) }
      ]
    },

    {
      id:'f17', points:2,
      question:'A kódban egy hibás szegély szintaxis van. Javítsd ki úgy, hogy 3 képpont (px) vastag, szaggatott (dashed), #888888 színű szegély legyen!',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Szegély javítás</title>
  <style>
    div {
      border: dashed 3px;
      padding: 15px;
    }
  </style>
</head>
<body>
  <div>Ez egy szaggatott szegélyű doboz.</div>
</body>
</html>`,
      checks:[
        { label:'Szegély sorrendben: vastagság stílus szín',  hint:'border: 3px dashed #888888;  ← helyes sorrend!', fn:(h)=>/border\s*:\s*3px\s+dashed\s+#888888/i.test(h) },
        { label:'A padding: 15px megmaradt',                  hint:'ne töröld a padding: 15px; sort!',                fn:(h)=>/padding\s*:\s*15px/i.test(h) }
      ]
    },

    {
      id:'f18', points:4,
      question:'Különböző mértékegységeket kell használnod!\n\nbody: alapbetűméret 18px\nh1: betűméret 2em (az alap kétszerese)\n.doboz: szélesség 60%, max-width 800px\n.kis: betűméret 0.8em (az alap 80%-a)',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Mértékegységek</title>
  <style>
    body {

    }
    h1 {

    }
    .doboz {

    }
    .kis {

    }
  </style>
</head>
<body>
  <h1>Nagy cím</h1>
  <div class="doboz">
    <p class="kis">Kisebb szöveg a dobozban.</p>
  </div>
</body>
</html>`,
      checks:[
        { label:'body: font-size: 18px',     hint:'font-size: 18px;',   fn:(h)=>/body\s*\{[^}]*font-size\s*:\s*18px/i.test(h) },
        { label:'h1: font-size: 2em',        hint:'font-size: 2em;',    fn:(h)=>/h1\s*\{[^}]*font-size\s*:\s*2em/i.test(h) },
        { label:'.doboz: width: 60%',        hint:'width: 60%;',        fn:(h)=>(/\.doboz\s*\{[^}]*width\s*:\s*60%/i.test(h)) },
        { label:'.kis: font-size: 0.8em',    hint:'font-size: 0.8em;',  fn:(h)=>(/\.kis\s*\{[^}]*font-size\s*:\s*0\.8em/i.test(h)) }
      ]
    },

    {
      id:'f19', points:1,
      question:'Az oldal már tartalmaz internal stílust (h1 piros). Adj hozzá egy INLINE stílust közvetlenül a h1 tagre, amely zöldre állítja a szöveget! Figyeld meg, hogy az inline felülírja az internal stílust!',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>CSS prioritás</title>
  <style>
    h1 { color: red; }
  </style>
</head>
<body>
  <h1>Milyen színű leszek?</h1>
</body>
</html>`,
      checks:[
        { label:'A h1 tagen van style="" attribútum zöld színnel', hint:'<h1 style="color: green;">',  fn:(h,d)=>{ const el=d.querySelector('h1[style]'); return !!(el&&/color\s*:\s*(green|#008000|#00ff00|lime)/i.test(el.getAttribute('style')||'')); } }
      ]
    }

  ]   // fillin vége

};  // cssQuizBank vége
