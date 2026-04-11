// ══════════════════════════════════════════════════════════════════════
// BOOTSTRAP TUDÁSPRÓBA – Kérdésbank
// 25 feleletválasztós + 15 kódírós kérdés
// ══════════════════════════════════════════════════════════════════════

const bsQuizBank = {

  // ── FELELETVÁLASZTÓS KÉRDÉSEK (25 db) ────────────────────────────────

  mc: [

    // ── ALAPOK ───────────────────────────────────────────────────────────

    {
      id:'mc1',
      question:'Hova kerül a Bootstrap CSS hivatkozás (<link>) a HTML oldalon?',
      options:[
        '<body> elejére',
        '<head> elembe',
        '</body> zárótag elé',
        'Bárhová, a helye mindegy'
      ],
      correct:1,
      explanation:'A Bootstrap CSS-t a <head>-be kell beilleszteni, mielőtt az oldal tartalma betöltődne – így az összes elem már Bootstrap stílussal jelenik meg.'
    },

    {
      id:'mc2',
      question:'Hogyan alkalmazzuk a Bootstrap stílusokat egy HTML elemre?',
      options:[
        'Külön Bootstrap fájlt csatolunk az elemhez',
        'A class attribútumban adjuk meg a Bootstrap osztálynevet',
        'A style attribútumban írjuk a Bootstrap kódot',
        'JavaScript segítségével adjuk hozzá futás közben'
      ],
      correct:1,
      explanation:'A Bootstrap előre megírt CSS osztályokat tartalmaz. Ezeket a class attribútumban kell megadni: pl. class="text-center fw-bold".'
    },

    {
      id:'mc3',
      question:'Mi az előnye a Bootstrap CDN-ről való betöltésének a letöltéssel szemben?',
      options:[
        'Gyorsabb, mert a fájl a saját gépünkön van',
        'Nem kell fájlt tárolni a projektben, és mindig elérhető az interneten',
        'Offline is működik internet nélkül',
        'A CDN-es verzió több funkciót tartalmaz'
      ],
      correct:1,
      explanation:'A CDN (Content Delivery Network) egy internetes szerverről tölti be a Bootstrap fájlt. Nem kell letölteni és tárolni – de internet kapcsolat szükséges hozzá.'
    },

    // ── SZÖVEG STÍLUS ─────────────────────────────────────────────────────

    {
      id:'mc4',
      question:'Mit csinál a text-center Bootstrap osztály?',
      options:[
        'Félkövérré teszi a szöveget',
        'Középre igazítja a szöveget vízszintesen',
        'Nagybetűssé alakítja a szöveget',
        'Pirosra színezi a szöveget'
      ],
      correct:1,
      explanation:'A text-center az elem szövegét vízszintesen középre igazítja – ugyanaz, mint a CSS text-align: center tulajdonság.'
    },

    {
      id:'mc5',
      question:'Mi a fw-bold Bootstrap osztály HTML megfelelője?',
      options:[
        '<i> vagy <em>',
        '<u>',
        '<b> vagy <strong>',
        '<mark>'
      ],
      correct:2,
      explanation:'A fw-bold (font-weight: bold) félkövér stílust ad a szövegnek – ugyanazt éri el, mint a <b> vagy <strong> HTML tag, illetve a CSS font-weight: bold.'
    },

    {
      id:'mc6',
      question:'Mit tesz a text-uppercase Bootstrap osztály?',
      options:[
        'Aláhúzza a szöveget',
        'Kisebbre zsugorítja a betűket',
        'Nagybetűssé alakítja a szöveget',
        'Áthúzza a szöveget'
      ],
      correct:2,
      explanation:'A text-uppercase az összes betűt nagybetűvé alakítja – CSS-ben ez a text-transform: uppercase tulajdonság.'
    },

    {
      id:'mc7',
      question:'Melyik Bootstrap osztály teszi dőltté a szöveget?',
      options:[
        'fw-italic',
        'text-italic',
        'fst-italic',
        'font-italic'
      ],
      correct:2,
      explanation:'A fst-italic (font-style: italic) dőltté teszi a szöveget – ugyanazt éri el, mint a <i> vagy <em> HTML tag, illetve a CSS font-style: italic.'
    },

    {
      id:'mc8',
      question:'Milyen színű szöveget ad a text-danger Bootstrap osztály?',
      options:[
        'Kék',
        'Zöld',
        'Narancssárga',
        'Piros'
      ],
      correct:3,
      explanation:'A Bootstrap szemantikus szín osztályai: text-primary (kék), text-success (zöld), text-warning (narancssárga), text-danger (piros).'
    },

    // ── HÁTTÉRSZÍN ────────────────────────────────────────────────────────

    {
      id:'mc9',
      question:'Melyik Bootstrap osztály ad piros háttérszínt egy elemnek?',
      options:[
        'text-danger',
        'bg-red',
        'bg-danger',
        'background-danger'
      ],
      correct:2,
      explanation:'A bg- prefix jelöli a háttérszín osztályokat. bg-danger = piros, bg-success = zöld, bg-warning = narancssárga, bg-primary = kék háttér.'
    },

    {
      id:'mc10',
      question:'Mi a különbség a text-danger és bg-danger Bootstrap osztályok között?',
      options:[
        'Semmi, ugyanazt csinálják',
        'text-danger a szöveg színét változtatja pirosra, bg-danger a háttérszínt',
        'bg-danger a szövegszínt, text-danger a háttérszínt változtatja',
        'Mindkettő a szegély színét változtatja'
      ],
      correct:1,
      explanation:'A text- prefix a szöveg színére, a bg- prefix a háttérszínre vonatkozik. text-danger = piros szöveg, bg-danger = piros háttér.'
    },

    // ── KÉPEK ─────────────────────────────────────────────────────────────

    {
      id:'mc11',
      question:'Mire való az img-fluid Bootstrap osztály?',
      options:[
        'Fehér keretet ad a kép köré',
        'A kép automatikusan leszűkül kisebb képernyőn, nem nyúlik túl az oszlopán',
        'A képet középre igazítja',
        'Lekerekíti a kép sarkait'
      ],
      correct:1,
      explanation:'Az img-fluid reszponzívvá teszi a képet: max-width: 100% és height: auto értéket állít be, így a kép sosem nyúlik túl a befoglaló elemen.'
    },

    {
      id:'mc12',
      question:'Melyik Bootstrap osztálykombináció igazítja középre a képet?',
      options:[
        'text-center',
        'img-center',
        'd-block mx-auto',
        'align-center'
      ],
      correct:2,
      explanation:'A d-block (display: block) majd mx-auto (margin-left és margin-right: auto) teszi középre a képet – ez a CSS-es megoldással egyenértékű Bootstrap módszer.'
    },

    {
      id:'mc13',
      question:'Mit csinál a rounded Bootstrap osztály?',
      options:[
        'Lekerekíti az elem sarkait',
        'Fehér keretet ad az elem köré',
        'Reszponzívvá teszi a képet',
        'Kör alakúra vágja a képet'
      ],
      correct:0,
      explanation:'A rounded osztály border-radius-t ad az elemnek, amitől a sarkok lekerekítettnek tűnnek. CSS-ben: border-radius: 0.375rem.'
    },

    {
      id:'mc14',
      question:'Mit csinál az img-thumbnail Bootstrap osztály?',
      options:[
        'Lekerekíti a kép sarkait erősen',
        'Fehér keretes, enyhén lekerekített "bélyegkép" hatást ad',
        'Reszponzívvá teszi a képet',
        'Fekete szegélyt ad a kép köré'
      ],
      correct:1,
      explanation:'Az img-thumbnail fehér háttérű, enyhén lekerekített szegélyes keretet ad a képnek – "bélyegkép" kinézet. Érdemes az img-fluid-dal együtt használni.'
    },

    // ── TÁBLÁZAT ──────────────────────────────────────────────────────────

    {
      id:'mc15',
      question:'Mit csinál a table-bordered Bootstrap osztály?',
      options:[
        'Felváltva színezi a sorokat',
        'Szegélyt ad minden cellának és a táblázat keretének',
        'Reszponzívvá teszi a táblázatot',
        'Eltávolítja a szegélyeket'
      ],
      correct:1,
      explanation:'A table-bordered minden cellának és a táblázat keretének szegélyt ad. Mindig a table alaposztállyal együtt kell használni!'
    },

    {
      id:'mc16',
      question:'Mit csinál a table-striped Bootstrap osztály?',
      options:[
        'Szegélyt ad minden cellának',
        'Felváltva színezi a sorokat (zebracsíkos elrendezés)',
        'Hover effektet ad a sorokra',
        'A táblázatot vízszintesen görgethetővé teszi'
      ],
      correct:1,
      explanation:'A table-striped felváltva ad háttérszínt a soroknak – a "zebracsíkos" elrendezés megkönnyíti az olvasást. A table alaposztállyal együtt kell használni.'
    },

    // ── GRID ──────────────────────────────────────────────────────────────

    {
      id:'mc17',
      question:'Hány oszlopra osztja Bootstrap a sort (row)?',
      options:['6', '10', '12', '16'],
      correct:2,
      explanation:'A Bootstrap 12 oszlopos rácsrendszert használ. Azért 12, mert sok osztóval rendelkezik: felezni (6+6), harmadolni (4+4+4), negyedelni (3+3+3+3) is lehet.'
    },

    {
      id:'mc18',
      question:'Mit jelent a col-md-6 Bootstrap osztály?',
      options:[
        'Mobilon 6 pixeles hasábot hoz létre',
        'Közepes kijelzőn a sor felét foglalja el (6/12)',
        'Nagy kijelzőn 6 hasábos elrendezést hoz létre',
        'Minden képernyőn 6 egyforma oszlopot jelenít meg egymás mellett'
      ],
      correct:1,
      explanation:'col-md-6: "md" = medium (közepes képernyő), "6" = 6 oszlopnyi széles (a 12-ből = fél oldal). Kisebb képernyőn az elemek egymás alá kerülnek.'
    },

    {
      id:'mc19',
      question:'Fele-fele (50%–50%) hasábos elrendezést szeretnél közepes kijelzőn. Melyik osztályt kell mindkét div-re rakni?',
      options:['col-md-4', 'col-md-6', 'col-md-8', 'col-md-12'],
      correct:1,
      explanation:'6 + 6 = 12: mindkét hasáb a sor felét foglalja el. col-md-6 mindkét div-re → fele-fele elrendezés közepes képernyőn.'
    },

    {
      id:'mc20',
      question:'Három egyforma szélességű hasábot szeretnél nagy kijelzőn. Melyik osztályt kell mindhárom div-re rakni?',
      options:['col-lg-3', 'col-lg-4', 'col-lg-6', 'col-lg-12'],
      correct:1,
      explanation:'4 + 4 + 4 = 12: mindhárom hasáb egyharmad szélességű. col-lg-4: "lg" = large (nagy képernyő), 4/12 = egyharmad.'
    },

    {
      id:'mc21',
      question:'Mi a különbség a col-sm és a col-lg Bootstrap osztályok között?',
      options:[
        'col-sm nagyobb, col-lg kisebb hasábot jelent',
        'col-sm kis képernyőn, col-lg nagy képernyőn lép életbe az oszlopos elrendezés',
        'Semmi, csak stílusbeli különbség',
        'col-sm mobilon, col-lg tableten érvényes'
      ],
      correct:1,
      explanation:'A második rész (sm/md/lg) a töréspontot jelöli: col-sm kisebb képernyőktől, col-md közepestől, col-lg nagy képernyőktől lép életbe. Ennél kisebb képernyőn az elemek egymás alá kerülnek.'
    },

    {
      id:'mc22',
      question:'Az egyik hasáb col-md-4 osztályú. Melyik osztályt kell a mellé kerülő hasábra rakni, hogy a sort kitöltsék?',
      options:['col-md-4', 'col-md-6', 'col-md-8', 'col-md-10'],
      correct:2,
      explanation:'4 + 8 = 12 – a Bootstrap rácsban a sorban lévő hasábok összege mindig 12 kell legyen. col-md-4 mellé col-md-8 jön: 1/3 + 2/3 arány.'
    },

    // ── MARGÓK ÉS MÉRETEK ─────────────────────────────────────────────────

    {
      id:'mc23',
      question:'Mit jelent a my-3 Bootstrap osztály?',
      options:[
        'Vízszintes (bal-jobb) külső margót ad, 3-as értékkel',
        'Függőleges (fent-lent) külső margót ad, 3-as értékkel',
        '3 pixeles belső margót ad minden oldalon',
        'Felső belső margót ad, 3-as értékkel'
      ],
      correct:1,
      explanation:'m = margin (külső margó), y = függőleges irány (top + bottom egyszerre), 3 = az értéklépés. Tehát my-3 = felső és alsó külső margó egyszerre, 3-as értékkel.'
    },

    {
      id:'mc24',
      question:'Mi a különbség az m és a p prefix között (pl. mt-3 vs pt-3)?',
      options:[
        'Semmi, ugyanazt csinálják',
        'm = külső margó (margin), p = belső margó (padding)',
        'm = mobilon, p = PC-n érvényes',
        'p = pixeles méret, m = százalékos méret'
      ],
      correct:1,
      explanation:'m = margin (az elem körüli külső tér), p = padding (az elemen belüli tér a tartalom körül). mt-3 = felső külső margó, pt-3 = felső belső margó.'
    },

    {
      id:'mc25',
      question:'Mit jelent a w-50 Bootstrap osztály?',
      options:[
        'Az elem 50 pixeles szélességű',
        'Az elem a rendelkezésre álló szélesség 50%-át foglalja el',
        'Az elem 50 rem széles',
        'Az elem 50%-kal keskenyebb lesz mint alapból'
      ],
      correct:1,
      explanation:'A w- prefix szélességet (width) jelöl. Bootstrap %-os értékeket használ: w-25, w-50, w-75, w-100, w-auto. Tehát w-50 = width: 50%.'
    }

  ],

  // ── KÓDÍRÓS KÉRDÉSEK (15 db) ─────────────────────────────────────────

  fillin: [

    // ── SZÖVEG STÍLUSOK ───────────────────────────────────────────────────

    {
      id:'f1', points:2,
      question:'Tedd középre a bekezdés szövegét (text-center) és tedd félkövérré (fw-bold)!\n\nAdd mindkét osztályt a <p> elemre.',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Bootstrap szöveg</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
</head>
<body class="p-4">
  <p class="">Ez a bekezdés középre igazított és félkövér szöveget tartalmaz.</p>
</body>
</html>`,
      checks:[
        { label:'text-center osztály van az oldalon',  hint:'class="text-center fw-bold"', fn:(h,d)=>!!d.querySelector('.text-center') },
        { label:'fw-bold osztály van az oldalon',      hint:'class="text-center fw-bold"', fn:(h,d)=>!!d.querySelector('.fw-bold') }
      ]
    },

    {
      id:'f2', points:2,
      question:'Tedd nagybetűssé (text-uppercase) és pirossá (text-danger) a főcímet!\n\nAdd mindkét Bootstrap osztályt a <h2> elemre.',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Bootstrap szöveg</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
</head>
<body class="p-4">
  <h2 class="">Bootstrap szöveg stílusok</h2>
</body>
</html>`,
      checks:[
        { label:'text-uppercase osztály van az oldalon', hint:'class="text-uppercase text-danger"', fn:(h,d)=>!!d.querySelector('.text-uppercase') },
        { label:'text-danger osztály van az oldalon',    hint:'class="text-uppercase text-danger"', fn:(h,d)=>!!d.querySelector('.text-danger') }
      ]
    },

    {
      id:'f3', points:2,
      question:'Tedd dőltté (fst-italic) a bekezdést és igazítsd jobbra (text-end)!\n\nAdd mindkét Bootstrap osztályt a <p> elemre.',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Bootstrap szöveg</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
</head>
<body class="p-4">
  <p class="">Ez a szöveg dőlt és jobbra lesz igazítva.</p>
</body>
</html>`,
      checks:[
        { label:'fst-italic osztály van az oldalon', hint:'class="fst-italic text-end"', fn:(h,d)=>!!d.querySelector('.fst-italic') },
        { label:'text-end osztály van az oldalon',   hint:'class="fst-italic text-end"', fn:(h,d)=>!!d.querySelector('.text-end') }
      ]
    },

    {
      id:'f4', points:3,
      question:'A h3 elemre alkalmazd egyszerre: félkövér (fw-bold), zöld szövegszín (text-success) és középre igazítás (text-center)!\n\nMindhárom Bootstrap osztályt add ugyanarra a <h3> elemre.',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Bootstrap szöveg</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
</head>
<body class="p-4">
  <h3 class="">Kiemelt szöveg</h3>
  <p>Ez egy egyszerű bekezdés.</p>
</body>
</html>`,
      checks:[
        { label:'fw-bold osztály van az oldalon',     hint:'class="fw-bold text-success text-center"', fn:(h,d)=>!!d.querySelector('.fw-bold') },
        { label:'text-success osztály van az oldalon',hint:'class="fw-bold text-success text-center"', fn:(h,d)=>!!d.querySelector('.text-success') },
        { label:'text-center osztály van az oldalon', hint:'class="fw-bold text-success text-center"', fn:(h,d)=>!!d.querySelector('.text-center') }
      ]
    },

    // ── MARGÓK ────────────────────────────────────────────────────────────

    {
      id:'f5', points:2,
      question:'Add a my-4 Bootstrap osztályt mindkét bekezdésre, hogy legyen körülöttük megfelelő függőleges margó!',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Bootstrap margó</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
</head>
<body class="p-4">
  <p class="">Az első bekezdés szövege itt olvasható.</p>
  <p class="">A második bekezdés szövege itt olvasható.</p>
</body>
</html>`,
      checks:[
        { label:'Legalább egy my-4 osztály van az oldalon',  hint:'class="my-4"', fn:(h,d)=>!!d.querySelector('.my-4') },
        { label:'Mindkét bekezdésen van my-4 osztály',       hint:'class="my-4"', fn:(h,d)=>d.querySelectorAll('p.my-4').length>=2 }
      ]
    },

    {
      id:'f6', points:2,
      question:'A h2 elemre adj felső külső margót (mt-3), a bekezdésre adj alsó külső margót (mb-2)!',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Bootstrap margó</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
</head>
<body class="p-4">
  <h2 class="">Cím felső margóval</h2>
  <p class="">Bekezdés alsó margóval.</p>
</body>
</html>`,
      checks:[
        { label:'h2 elemen van mt-3 osztály', hint:'<h2 class="mt-3">', fn:(h,d)=>!!d.querySelector('h2.mt-3') },
        { label:'p elemen van mb-2 osztály',  hint:'<p class="mb-2">',  fn:(h,d)=>!!d.querySelector('p.mb-2') }
      ]
    },

    {
      id:'f7', points:2,
      question:'A div dobozra adj vízszintes belső margót (px-3) és függőleges belső margót (py-2)!\n\nMindkét Bootstrap osztályt add ugyanarra a div elemre.',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Bootstrap padding</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
</head>
<body class="p-4">
  <div class="border bg-light">Ez a doboz belső margóval rendelkezik majd.</div>
</body>
</html>`,
      checks:[
        { label:'px-3 osztály van a div-en', hint:'class="border bg-light px-3 py-2"', fn:(h,d)=>!!d.querySelector('div.px-3') },
        { label:'py-2 osztály van a div-en', hint:'class="border bg-light px-3 py-2"', fn:(h,d)=>!!d.querySelector('div.py-2') }
      ]
    },

    // ── GRID ──────────────────────────────────────────────────────────────

    {
      id:'f8', points:3,
      question:'Egészítsd ki a rácsot fele-fele (50%–50%) elrendezéssel!\n\n– A sor div-en maradjon a row osztály\n– Mindkét hasáb div-re add a col-6 osztályt',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Bootstrap rács</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
</head>
<body class="p-4">
  <div class="container">
    <div class="row">
      <div class="">
        <div style="background:#3b82f6;color:#fff;padding:24px;text-align:center;border-radius:6px;">Bal hasáb</div>
      </div>
      <div class="">
        <div style="background:#22c55e;color:#fff;padding:24px;text-align:center;border-radius:6px;">Jobb hasáb</div>
      </div>
    </div>
  </div>
</body>
</html>`,
      checks:[
        { label:'Van row osztályú div',              hint:'<div class="row">',     fn:(h,d)=>!!d.querySelector('.row') },
        { label:'Van col-6 osztályú elem',        hint:'class="col-6"',      fn:(h,d)=>!!d.querySelector('.col-6') },
        { label:'Legalább 2 col-6 osztályú elem', hint:'class="col-6"',      fn:(h,d)=>d.querySelectorAll('.col-6').length>=2 }
      ]
    },

    {
      id:'f9', points:3,
      question:'Hozz létre 1/3 – 2/3 arányú hasábos elrendezést!\n\n– A kisebb hasábra add a col-4 osztályt\n– A nagyobb hasábra add a col-8 osztályt',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Bootstrap rács</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
</head>
<body class="p-4">
  <div class="container">
    <div class="row">
      <div class="">
        <div style="background:#f59e0b;color:#fff;padding:24px;text-align:center;border-radius:6px;">Kisebb (1/3)</div>
      </div>
      <div class="">
        <div style="background:#8b5cf6;color:#fff;padding:24px;text-align:center;border-radius:6px;">Nagyobb (2/3)</div>
      </div>
    </div>
  </div>
</body>
</html>`,
      checks:[
        { label:'Van row osztályú div',    hint:'<div class="row">',    fn:(h,d)=>!!d.querySelector('.row') },
        { label:'Van col-4 osztály',    hint:'class="col-4"',     fn:(h,d)=>!!d.querySelector('.col-4') },
        { label:'Van col-8 osztály',    hint:'class="col-8"',     fn:(h,d)=>!!d.querySelector('.col-8') }
      ]
    },

    {
      id:'f10', points:3,
      question:'Hozz létre három egyforma szélességű hasábot!\n\nMindhárom hasáb div-re add a col-4 Bootstrap osztályt.',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Bootstrap rács</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
</head>
<body class="p-4">
  <div class="container">
    <div class="row">
      <div class="">
        <div style="background:#ef4444;color:#fff;padding:24px;text-align:center;border-radius:6px;">1. hasáb</div>
      </div>
      <div class="">
        <div style="background:#f97316;color:#fff;padding:24px;text-align:center;border-radius:6px;">2. hasáb</div>
      </div>
      <div class="">
        <div style="background:#eab308;color:#fff;padding:24px;text-align:center;border-radius:6px;">3. hasáb</div>
      </div>
    </div>
  </div>
</body>
</html>`,
      checks:[
        { label:'Van row osztályú div',                hint:'<div class="row">',  fn:(h,d)=>!!d.querySelector('.row') },
        { label:'Van col-4 osztályú elem',          hint:'class="col-4"',   fn:(h,d)=>!!d.querySelector('.col-4') },
        { label:'Mindhárom hasábon col-4 osztály',  hint:'class="col-4"',   fn:(h,d)=>d.querySelectorAll('.col-4').length>=3 }
      ]
    },

    // ── KÉPEK ─────────────────────────────────────────────────────────────

    {
      id:'f11', points:2,
      question:'Tedd reszponzívvá a képet az img-fluid Bootstrap osztállyal!\n\nAdd az img-fluid osztályt a kép elemre.',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Bootstrap kép</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
</head>
<body class="p-3">
  <div style="max-width:250px; border:1px solid #ccc; padding:8px;">
    <img src="img/kiscica.jpg" alt="Macska" class="">
  </div>
</body>
</html>`,
      checks:[
        { label:'Van img elem az oldalon',          hint:'<img ... class="img-fluid">', fn:(h,d)=>!!d.querySelector('img') },
        { label:'img-fluid osztály van a képen',    hint:'class="img-fluid"',           fn:(h,d)=>!!d.querySelector('img.img-fluid') }
      ]
    },

    {
      id:'f12', points:3,
      question:'Tedd reszponzívvá (img-fluid) a képet és igazítsd középre (d-block mx-auto)!\n\nMindhárom Bootstrap osztályt add a kép elemre.',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Bootstrap kép</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
</head>
<body class="p-3">
  <img src="img/kiscica.jpg" alt="Macska" class="" style="max-width:260px; height:auto;">
</body>
</html>`,
      checks:[
        { label:'img-fluid osztály van a képen', hint:'class="img-fluid d-block mx-auto"', fn:(h,d)=>!!d.querySelector('img.img-fluid') },
        { label:'d-block osztály van a képen',   hint:'class="img-fluid d-block mx-auto"', fn:(h,d)=>!!d.querySelector('img.d-block') },
        { label:'mx-auto osztály van a képen',   hint:'class="img-fluid d-block mx-auto"', fn:(h,d)=>!!d.querySelector('img.mx-auto') }
      ]
    },

    {
      id:'f13', points:2,
      question:'Add a képre a reszponzív (img-fluid) és a lekerekített sarok (rounded) Bootstrap osztályokat!',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Bootstrap kép</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
</head>
<body class="p-4">
  <img src="img/kiscica.jpg" alt="Macska" class="" style="max-width:300px;">
</body>
</html>`,
      checks:[
        { label:'img-fluid osztály van a képen', hint:'class="img-fluid rounded"', fn:(h,d)=>!!d.querySelector('img.img-fluid') },
        { label:'rounded osztály van a képen',   hint:'class="img-fluid rounded"', fn:(h,d)=>!!d.querySelector('img.rounded') }
      ]
    },

    // ── TÁBLÁZAT ──────────────────────────────────────────────────────────

    {
      id:'f14', points:2,
      question:'Add a Bootstrap alapstílusát (table) és a szegélyezett stílust (table-bordered) a táblázatra!\n\nMindkét osztályt add a <table> elemre.',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Bootstrap táblázat</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
</head>
<body class="p-4">
  <table class="">
    <thead>
      <tr><th>Név</th><th>Kor</th><th>Osztály</th></tr>
    </thead>
    <tbody>
      <tr><td>Anna</td><td>16</td><td>11.A</td></tr>
      <tr><td>Béla</td><td>17</td><td>11.B</td></tr>
    </tbody>
  </table>
</body>
</html>`,
      checks:[
        { label:'table alaposztály van a táblázaton',    hint:'class="table table-bordered"', fn:(h,d)=>!!d.querySelector('table.table') },
        { label:'table-bordered osztály van a táblázaton',hint:'class="table table-bordered"', fn:(h,d)=>!!d.querySelector('table.table-bordered') }
      ]
    },

    {
      id:'f15', points:3,
      question:'Add a táblázatra a Bootstrap alapstílusát (table), a zebracsíkos stílust (table-striped) és az egérmutató effektet (table-hover)!\n\nMindhárom osztályt add a <table> elemre.',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Bootstrap táblázat</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
</head>
<body class="p-4">
  <table class="">
    <thead>
      <tr><th>Név</th><th>Kor</th><th>Osztály</th></tr>
    </thead>
    <tbody>
      <tr><td>Anna</td><td>16</td><td>11.A</td></tr>
      <tr><td>Béla</td><td>17</td><td>11.B</td></tr>
      <tr><td>Csilla</td><td>16</td><td>11.A</td></tr>
    </tbody>
  </table>
</body>
</html>`,
      checks:[
        { label:'table alaposztály van a táblázaton',    hint:'class="table table-striped table-hover"', fn:(h,d)=>!!d.querySelector('table.table') },
        { label:'table-striped osztály van a táblázaton',hint:'class="table table-striped table-hover"', fn:(h,d)=>!!d.querySelector('table.table-striped') },
        { label:'table-hover osztály van a táblázaton',  hint:'class="table table-striped table-hover"', fn:(h,d)=>!!d.querySelector('table.table-hover') }
      ]
    }

  ]
};
