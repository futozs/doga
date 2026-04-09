// ══════════════════════════════════════════════════════════════════════
// HTML TUDÁSPRÓBA – Kérdésbank
// 30 feleletválasztós + 15 kódírós kérdés
// ══════════════════════════════════════════════════════════════════════

const htmlQuizBank = {

  // ── FELELETVÁLASZTÓS KÉRDÉSEK (30 db) ────────────────────────────────

  mc: [

    // 1. kategória: Dokumentum alapjai
    {
      id:'mc1',
      question:'Melyik sor biztosítja, hogy az ékezetes betűk helyesen jelenjenek meg?',
      options:[
        '<meta charset="UTF-16">',
        '<meta charset="UTF-8">',
        '<meta lang="hu">',
        '<meta encoding="utf">'
      ],
      correct:1,
      explanation:'A charset="UTF-8" biztosítja hogy az összes ékezetes karakter (á, é, ő, ú...) helyesen jelenjen meg.'
    },
    {
      id:'mc2',
      question:'Hová kerül a charset meta tag?',
      options:[
        'A <body> elejére',
        'A <head> elembe, lehetőleg az első sorba',
        'Bárhová az oldalon',
        'A <html> tagbe'
      ],
      correct:1,
      explanation:'A <head> elembe kerül, lehetőleg az első sorba, hogy a böngésző még a tartalom feldolgozása előtt tudja a kódolást.'
    },
    {
      id:'mc3',
      question:'Mit jelent a lang="hu" a <html> tagon?',
      options:[
        'A betűméretet állítja be',
        'Jelzi hogy az oldal magyar nyelvű — a böngésző és a képernyőolvasó is ezt használja',
        'Csak kötelező elem, semmire sem jó',
        'A karakterkódolást adja meg'
      ],
      correct:1,
      explanation:'A lang attribútum a dokumentum nyelvét jelöli meg. A képernyőolvasók és fordítóprogramok is ezt használják.'
    },
    {
      id:'mc4',
      question:'Hogyan lehet egy CSS fájlt bekapcsolni a HTML oldalba?',
      options:[
        '<css src="style.css">',
        '<style href="style.css">',
        '<link rel="stylesheet" href="style.css">',
        '<import css="style.css">'
      ],
      correct:2,
      explanation:'A <link rel="stylesheet" href="style.css"> a helyes szintaxis a CSS fájl bekapcsolásához.'
    },
    {
      id:'mc5',
      question:'Hol jelenik meg a <title> tartalma?',
      options:[
        'Az oldal tetején nagy betűkkel',
        'A böngésző fülén',
        'A <header> elemben automatikusan',
        'Sehol, csak keresőmotoroknak szól'
      ],
      correct:1,
      explanation:'A <title> tartalma a böngésző fülén jelenik meg, és ez látszik a keresési találatokban is.'
    },

    // 2. kategória: Címsorok és bekezdés
    {
      id:'mc6',
      question:'Hány szintű címsor létezik HTML-ben?',
      options:['3','4','6','9'],
      correct:2,
      explanation:'HTML-ben 6 szintű címsor van: h1-től h6-ig. A h1 a legfontosabb, a h6 a legkisebb.'
    },
    {
      id:'mc7',
      question:'Melyik a legfontosabb, legkiemelkedőbb címsor?',
      options:['<h6>','<h3>','<h1>','<title>'],
      correct:2,
      explanation:'A <h1> a legfőbb címsor — oldalanként általában csak egy van belőle.'
    },
    {
      id:'mc8',
      question:'Mit csinál a <p> tag?',
      options:[
        'Félkövér szöveget hoz létre',
        'Egy bekezdést jelöl — előtte és utána automatikus térköz jelenik meg',
        'Pontozott listát hoz létre',
        'Új sort kezd'
      ],
      correct:1,
      explanation:'A <p> bekezdést jelöl. A böngésző automatikusan térközt hagy előtte és utána.'
    },
    {
      id:'mc9',
      question:'Mi a hiba ebben a kódban?\n<h1>Főcím<h1>\n<p>Bekezdés</p>',
      options:[
        'A <p> nem kerülhet <h1> után',
        'A <h1> záró tagból hiányzik a perjel: </h1>',
        'Hiányzik a <br> a sorok között',
        'Nincs hiba'
      ],
      correct:1,
      explanation:'A záró tagban mindig kell a perjel: </h1>. Nélküle a böngésző nem tudja, hol ér véget a címsor.'
    },

    // 3. kategória: id és class
    {
      id:'mc10',
      question:'Mi a különbség az id és a class között?',
      options:[
        'Semmi, ugyanúgy működnek',
        'Az id egyedi — csak egy elemnek lehet, a class többnek is',
        'A class egyedi, az id többnek is adható',
        'Az id csak CSS-ben használható'
      ],
      correct:1,
      explanation:'Az id egyedi azonosító — egy oldalon csak egy elem kaphatja. A class-t viszont tetszőleges számú elem kaphatja.'
    },
    {
      id:'mc11',
      question:'Melyik a helyes szintaxis?',
      options:[
        '<p class="#bevezeto">Szöveg</p>',
        '<p id=".bevezeto">Szöveg</p>',
        '<p class="bevezeto">Szöveg</p>',
        '<p #id="bevezeto">Szöveg</p>'
      ],
      correct:2,
      explanation:'A class értéke idézőjelek között, # vagy . nélkül szerepel a HTML-ben.'
    },
    {
      id:'mc12',
      question:'Mire jó az id attribútum a linkeknél?',
      options:[
        'Semmire, csak CSS-hez kell',
        'Hivatkozni lehet rá az oldalon belül, pl. href="#fejlec"',
        'Megadja a link céloldalát',
        'Egyedi stílust ad a linknek'
      ],
      correct:1,
      explanation:'Az id-vel jelölt elemre a href="#azonosito" szintaxissal lehet az oldalon belül ugrani.'
    },

    // 4. kategória: Listák
    {
      id:'mc13',
      question:'Melyik listában jelennek meg számok?',
      options:['<ul>','<ol>','<li>','<dl>'],
      correct:1,
      explanation:'Az <ol> (ordered list = rendezett lista) automatikusan számozza az elemeket.'
    },
    {
      id:'mc14',
      question:'Mit fog megjeleníteni ez a kód?\n<ul>\n  <li>Kutya</li>\n  <li>Macska</li>\n</ul>',
      options:[
        '1. Kutya, 2. Macska',
        'Pontozott lista: • Kutya, • Macska',
        'Kutya Macska egymás mellett',
        'Semmi, hiányzik a type attribútum'
      ],
      correct:1,
      explanation:'Az <ul> (unordered list = rendezetlen lista) pontokkal jeleníti meg az elemeket.'
    },
    {
      id:'mc15',
      question:'Mi a hiba ebben a kódban?\n<ol>\n  <p>Alma</p>\n  <p>Körte</p>\n</ol>',
      options:[
        'Az <ol> nem tud gyümölcsöket listázni',
        'A lista elemeket <li> tagbe kell írni, nem <p>-be',
        'Hiányzik a start attribútum',
        'Nincs hiba'
      ],
      correct:1,
      explanation:'A lista elemeket mindig <li> tagbe kell írni, függetlenül attól, hogy <ul> vagy <ol> a konténer.'
    },

    // 5. kategória: Kép
    {
      id:'mc16',
      question:'Melyik attribútum adja meg a kép forrását?',
      options:['href','link','src','url'],
      correct:2,
      explanation:'Az src (source = forrás) attribútum adja meg a képfájl elérési útját.'
    },
    {
      id:'mc17',
      question:'Mire való az alt attribútum a képnél?',
      options:[
        'A kép méretét adja meg',
        'Szöveg jelenik meg ha a kép nem töltődik be, és leírja a kép tartalmát',
        'A kép felirata az oldalon',
        'Csak keresőmotoroknak szól, a látogatónak nem látszik'
      ],
      correct:1,
      explanation:'Az alt szöveg jelenik meg ha a kép nem töltődik be, és a képernyőolvasók is ezt olvassák fel.'
    },
    {
      id:'mc18',
      question:'Mi a különbség az alt és a title attribútum között képnél?',
      options:[
        'Semmi, ugyanazt csinálják',
        'Az alt a kép helyett jelenik meg ha nem tölt be, a title egérmutatóra megjelenő buborék szöveg',
        'A title kötelező, az alt nem',
        'A title a kép méretét adja meg'
      ],
      correct:1,
      explanation:'Az alt a kép helyettesítő szövege, a title tooltip szöveg amit hover-re mutat a böngésző.'
    },
    {
      id:'mc19',
      question:'Melyik a helyes képbeszúrás?',
      options:[
        '<img src="kep.jpg" alt="Leírás">',
        '<image src="kep.jpg">',
        '<img href="kep.jpg">',
        '<img>kep.jpg</img>'
      ],
      correct:0,
      explanation:'Az <img> páratlan tag (nincs záró tag), src adja meg a képet, alt kötelező attribútum.'
    },

    // 6. kategória: Linkek
    {
      id:'mc20',
      question:'Mit csinál a target="_blank" a linknél?',
      options:[
        'Üres oldalt nyit',
        'Új böngészőfülön nyitja meg a linket',
        'Letölti a fájlt',
        'Megakadályozza a link megnyitását'
      ],
      correct:1,
      explanation:'A target="_blank" hatására a link új böngészőfülön (vagy ablakban) nyílik meg.'
    },
    {
      id:'mc21',
      question:'Hogyan lehet az oldalon belül egy elemre ugrani?',
      options:[
        '<a href="www.oldal.hu#fejlec">',
        '<a href="#fejlec"> és a cél elemen id="fejlec"',
        '<a jump="fejlec">',
        '<a href=".fejlec">'
      ],
      correct:1,
      explanation:'A # szimbólum után az id értékét kell írni. A cél elemen id="fejlec" attribútumnak kell lennie.'
    },
    {
      id:'mc22',
      question:'Mi a hiba ebben?\n<a href="#">Kattints ide</a>',
      options:[
        'Hiányzik a target attribútum',
        'Nem hiba — a # ideiglenesen üres linket jelent',
        'A href értéke nem lehet #',
        'Hiányzik a záró tag'
      ],
      correct:1,
      explanation:'A href="#" teljesen érvényes, fejlesztés közben placeholder linkként szokták használni.'
    },

    // 7. kategória: Szövegformázás
    {
      id:'mc23',
      question:'Melyik tag teszi félkövérré a szöveget?',
      options:['<i>','<u>','<b>','<em>'],
      correct:2,
      explanation:'A <b> félkövérré teszi a szöveget. A <strong> szintén félkövér, de fontos tartalmat is jelöl.'
    },
    {
      id:'mc24',
      question:'Mit csinál a <br> tag?',
      options:[
        'Új bekezdést kezd',
        'Sortörést illeszt be a szövegbe',
        'Vízszintes vonalat húz',
        'Üres sort hagy ki'
      ],
      correct:1,
      explanation:'A <br> páratlan tag — sortörést illeszt be anélkül, hogy új bekezdést hozna létre.'
    },
    {
      id:'mc25',
      question:'Mit fog megjeleníteni ez?\n<p>Ez <b>félkövér</b>, ez <i>dőlt</i>, ez <u>aláhúzott</u>.</p>',
      options:[
        'Semmi, ezek elavult tagek',
        'Egy bekezdés ahol a szavak a jelzett stílussal jelennek meg',
        'Három külön bekezdés',
        'Hibaüzenet'
      ],
      correct:1,
      explanation:'A <b>, <i>, <u> tagek ma is érvényes HTML elemek, a jelzett vizuális stílust alkalmazzák.'
    },
    {
      id:'mc26',
      question:'Mire való a <span> tag?',
      options:[
        'Új sort kezd',
        'Szövegrész kiemelésére vagy stílusozására, nem töri meg a szövegfolyamot',
        'Bekezdést jelöl',
        'Csak képekre használható'
      ],
      correct:1,
      explanation:'A <span> inline elem — a szövegen belül jelöl ki egy részt, sortörés nélkül.'
    },

    // 8. kategória: Táblázat
    {
      id:'mc27',
      question:'Melyik elem jelöli a táblázat fejléc celláját?',
      options:['<td>','<tr>','<th>','<thead>'],
      correct:2,
      explanation:'A <th> (table header) fejléc cellát jelöl — alapból félkövér és középre igazított.'
    },
    {
      id:'mc28',
      question:'Mit csinál a <thead> elem?',
      options:[
        'A táblázat fejléc része, segít az áttekinthetőségben',
        'Egy fejléc cellát jelöl',
        'A táblázat szélességét adja meg',
        'Kötelező elem, nélküle nem jelenik meg a táblázat'
      ],
      correct:0,
      explanation:'A <thead> csoportosítja a fejlécsorokat. Nem kötelező, de jó gyakorlat szemantikai és stílusozási szempontból.'
    },
    {
      id:'mc29',
      question:'Mi a helyes sorrend egy táblázatban?',
      options:[
        '<table> → <td> → <tr>',
        '<table> → <tr> → <td>',
        '<tr> → <table> → <td>',
        '<table> → <th> → <tbody>'
      ],
      correct:1,
      explanation:'A helyes sorrend: <table> tartalmazza a <tr> sorokat, a sorok pedig <td> vagy <th> cellákat.'
    },
    {
      id:'mc30',
      question:'Mi hiányzik ebből a táblázatból?\n<table>\n  <tr><th>Név</th><th>Kor</th></tr>\n  <tr><td>Anna</td><td>16</td></tr>\n</table>',
      options:[
        'Hiányzik a <caption>',
        'Hiányzik a border attribútum',
        'A fejlécsor nincs <thead>-be, az adatsor nincs <tbody>-ba foglalva',
        'Nincs hiba, ez teljesen helyes'
      ],
      correct:2,
      explanation:'Szemantikailag helyesebb ha a fejlécsort <thead>, az adatsorokat <tbody> fogja össze.'
    },
    {
      id:'mc31',
      question:'Melyik CSS típus a legerősebb (legmagasabb prioritású)?',
      options:[
        'External — <link rel="stylesheet" href="style.css">',
        'Internal — <style> tag a <head>-ben',
        'Inline — <h1 style="color: blue;">Főcím</h1>',
        'Mindhárom egyforma'
      ],
      correct:2,
      explanation:'Az inline stílus a legerősebb — közvetlenül az elemen van megadva, felülírja az external és internal stílusokat.'
    },
    {
      id:'mc32',
      question:'Hová kerül a külső CSS fájlt bekapcsoló <link> tag?',
      options:[
        'A <body> elejére',
        'A <head> elembe',
        'A <html> tagbe',
        'Bárhová az oldalon'
      ],
      correct:1,
      explanation:'A <link rel="stylesheet"> mindig a <head> elembe kerül, hogy a böngésző a tartalom megjelenítése előtt betöltse a stílust.'
    }

  ],

  // ── KÓDÍRÓS KÉRDÉSEK (15 db) ─────────────────────────────────────────
  // Ezek Monaco szerkesztővel jelennek meg, ellenőrzés a végén történik.

  fillin: [

    {
      id:'f1', points:5,
      question:'Helyezd el az img mappában található kiscica.jpg képet a főcím után! Ha a kép nem jeleníthető meg, vagy ha az egeret a kép fölé viszed, a kiscica felirat jelenjen meg.',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Képek</title>
</head>
<body>
  <h1>Kedvenc állatom</h1>

</body>
</html>`,
      checks:[
        { label:'Van <img> elem',                              fn:(h,d)=>!!d.querySelector('img') },
        { label:'A kép forrása: img/kiscica.jpg',             fn:(h,d)=>d.querySelector('img')?.getAttribute('src')==='img/kiscica.jpg' },
        { label:'Az alt attribútum értéke: kiscica',          fn:(h,d)=>d.querySelector('img')?.getAttribute('alt')?.trim()==='kiscica' },
        { label:'A title attribútum értéke: kiscica',         fn:(h,d)=>d.querySelector('img')?.getAttribute('title')?.trim()==='kiscica' },
        { label:'A kép a <h1> után van',                      fn:(h,d)=>{ const h1=d.querySelector('h1'), img=d.querySelector('img'); return !!(h1&&img&&(h1.compareDocumentPosition(img)&Node.DOCUMENT_POSITION_FOLLOWING)); } }
      ]
    },

    {
      id:'f2', points:4,
      question:'Tedd kattinthatóvá a Google szót úgy, hogy a https://www.google.com oldalra mutasson és új lapon nyíljon meg!',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Kedvenc oldalak</title>
</head>
<body>
  <h1>Kedvenc oldalak</h1>
  <p>A legjobb kereső a Google, amit mindennap használunk.</p>
</body>
</html>`,
      checks:[
        { label:'Van <a> link',                                    fn:(h,d)=>!!d.querySelector('a') },
        { label:'A link a Google oldalra mutat',                   fn:(h,d)=>d.querySelector('a')?.getAttribute('href')==='https://www.google.com' },
        { label:'A link új lapon nyílik meg (target="_blank")',    fn:(h,d)=>d.querySelector('a[target="_blank"]')?.textContent?.trim()==='Google' },
        { label:'A link szövege: Google',                          fn:(h,d)=>d.querySelector('a')?.textContent?.trim()==='Google' }
      ]
    },

    {
      id:'f3', points:1,
      question:'Az oldal nyelve angolra van állítva. Változtasd magyarrá!',
      starterHtml:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Oldalam</title>
</head>
<body>
  <h1>Üdvözöllek!</h1>
</body>
</html>`,
      checks:[
        { label:'A html tag lang attribútuma: hu',   fn:(h,d)=>d.querySelector('html')?.getAttribute('lang')==='hu' }
      ]
    },

    {
      id:'f4', points:3,
      question:'A navigációs menüpont linkjére kattintva ugorjon az oldal a Kapcsolat részre! Ahhoz hogy ez működjön, előbb lásd el a megfelelő címsort a kapcsolat egyedi azonosítóval.',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Bemutatkozás</title>
</head>
<body>
  <nav>
    <a href="#">Kapcsolat</a>
  </nav>
  <h2>Rólam</h2>
  <p>Szeretek programozni és weboldalt készíteni.</p>
  <h2>Kapcsolat</h2>
  <p>kapcsolat@example.com</p>
</body>
</html>`,
      checks:[
        { label:'A Kapcsolat címsornak van id attribútuma',        fn:(h,d)=>!!d.querySelector('h2[id]') },
        { label:'Az id értéke: kapcsolat',                         fn:(h,d)=>!!d.querySelector('[id="kapcsolat"]') },
        { label:'A navigációs link a #kapcsolat-ra mutat',        fn:(h,d)=>!!d.querySelector('a[href="#kapcsolat"]') }
      ]
    },

    {
      id:'f5', points:3,
      question:'Készíts egy számozott felsorolást a kedvenc tantárgyaiddal!',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Tantárgyak</title>
</head>
<body>

</body>
</html>`,
      checks:[
        { label:'Van <ol> elem',                          fn:(h,d)=>!!d.querySelector('ol') },
        { label:'Legalább 3 <li> elem van benne',        fn:(h,d)=>d.querySelectorAll('ol li').length>=3 },
        { label:'Minden listaelem szöveget tartalmaz',   fn:(h,d)=>[...d.querySelectorAll('ol li')].every(li=>li.textContent.trim()!=='') }
      ]
    },

    {
      id:'f6', points:3,
      question:'Készíts bevásárlólistát számozatlan felsorolás segítségével, legyen benne legalább 3 megvásárolni kívánt termék.',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Bevásárlólista</title>
</head>
<body>

</body>
</html>`,
      checks:[
        { label:'Van <ul> elem',                          fn:(h,d)=>!!d.querySelector('ul') },
        { label:'Legalább 3 <li> elem van benne',        fn:(h,d)=>d.querySelectorAll('ul li').length>=3 },
        { label:'Minden listaelem szöveget tartalmaz',   fn:(h,d)=>[...d.querySelectorAll('ul li')].every(li=>li.textContent.trim()!=='') }
      ]
    },

    {
      id:'f7', points:4,
      question:'A táblázat fejrészéből hiányoznak a fejléc cellák. Helyezd el a Név, Kor, Nem szavakat a megfelelő helyre!',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Táblázat</title>
</head>
<body>
  <table border="1">
    <thead>
      <tr>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Anna</td>
        <td>25</td>
        <td>nő</td>
      </tr>
      <tr>
        <td>Béla</td>
        <td>30</td>
        <td>férfi</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`,
      checks:[
        { label:'Van legalább 3 <th> cella a fejlécsorban',      fn:(h,d)=>d.querySelectorAll('thead th').length>=3 },
        { label:'A fejléc tartalmazza a "Név" szót',             fn:(h,d)=>[...d.querySelectorAll('thead th')].some(th=>th.textContent.trim()==='Név') },
        { label:'A fejléc tartalmazza a "Kor" szót',             fn:(h,d)=>[...d.querySelectorAll('thead th')].some(th=>th.textContent.trim()==='Kor') },
        { label:'A fejléc tartalmazza a "Nem" szót',             fn:(h,d)=>[...d.querySelectorAll('thead th')].some(th=>th.textContent.trim()==='Nem') }
      ]
    },

    {
      id:'f8', points:5,
      question:'A táblázat sorait és oszlopait rendezd el úgy, hogy a fejléc cellákat tartalmazó sor kerüljön a fejrészbe (thead), az adatcellákat tartalmazó sorok pedig a táblázat törzsrészébe (tbody)!',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Táblázat</title>
</head>
<body>
  <table border="1">
    <tr>
      <th>Név</th>
      <th>Kor</th>
      <th>Város</th>
    </tr>
    <tr>
      <td>Anna</td>
      <td>25</td>
      <td>Budapest</td>
    </tr>
    <tr>
      <td>Béla</td>
      <td>30</td>
      <td>Pécs</td>
    </tr>
  </table>
</body>
</html>`,
      checks:[
        { label:'Van <thead> a táblázatban',                         fn:(h,d)=>!!d.querySelector('table thead') },
        { label:'Van <tbody> a táblázatban',                         fn:(h,d)=>!!d.querySelector('table tbody') },
        { label:'A <th> cellák a <thead>-ben vannak',               fn:(h,d)=>d.querySelectorAll('thead th').length>=3 },
        { label:'Az adatsorok a <tbody>-ban vannak',                 fn:(h,d)=>d.querySelectorAll('tbody tr').length>=2 },
        { label:'A <tbody>-ban csak <td> cellák vannak',            fn:(h,d)=>d.querySelectorAll('tbody td').length>=6 }
      ]
    },

    {
      id:'f9', points:2,
      question:'A táblázatból hiányzik egy adat. Egészítsd ki a hiányos sort a megfelelő cellával!',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Táblázat</title>
</head>
<body>
  <table border="1">
    <thead>
      <tr>
        <th>Név</th>
        <th>Kor</th>
        <th>Város</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Anna</td>
        <td>25</td>
        <td>Budapest</td>
      </tr>
      <tr>
        <td>Béla</td>
        <td>30</td>
      </tr>
      <tr>
        <td>Csilla</td>
        <td>22</td>
        <td>Győr</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`,
      checks:[
        { label:'Minden adatsorban pontosan 3 <td> cella van',   fn:(h,d)=>[...d.querySelectorAll('tbody tr')].every(r=>r.querySelectorAll('td').length===3) },
        { label:'A hiányos sor ki van egészítve szöveggel',      fn:(h,d)=>{ const rows=[...d.querySelectorAll('tbody tr')]; return rows.length>=3 && rows[1].querySelectorAll('td').length===3 && rows[1].querySelectorAll('td')[2].textContent.trim()!==''; } }
      ]
    },

    {
      id:'f10', points:5,
      question:'Készíts egy táblázatot, amelynek első sora fejléc cellákat tartalmaz, a többi sor adatcellákat! A táblázatnak 3 oszlopa és összesen 3 sora legyen.',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Táblázat</title>
</head>
<body>

</body>
</html>`,
      checks:[
        { label:'Van <table> a <body>-ban',                          fn:(h,d)=>!!d.querySelector('body table') },
        { label:'Az első sorban legalább 3 <th> fejléc cella van',  fn:(h,d)=>d.querySelectorAll('tr:first-child th').length>=3 },
        { label:'Legalább 2 adatsor van <td> cellákkal',            fn:(h,d)=>d.querySelectorAll('tr:not(:first-child)').length>=2 },
        { label:'Minden adatsorban legalább 3 <td> cella van',      fn:(h,d)=>[...d.querySelectorAll('tr:not(:first-child)')].every(r=>r.querySelectorAll('td').length>=3) },
        { label:'Minden cella szöveget tartalmaz',                  fn:(h,d)=>[...d.querySelectorAll('th,td')].every(c=>c.textContent.trim()!=='') }
      ]
    },

    {
      id:'f11', points:3,
      question:'A táblázatban az első sor adatcellákat tartalmaz, holott fejléc celláknak kellene lenniük. Javítsd ki!',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Táblázat</title>
</head>
<body>
  <table border="1">
    <thead>
      <tr>
        <td>Tantárgy</td>
        <td>Tanár</td>
        <td>Terem</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Matematika</td>
        <td>Kiss Péter</td>
        <td>101</td>
      </tr>
      <tr>
        <td>Magyar</td>
        <td>Nagy Éva</td>
        <td>203</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`,
      checks:[
        { label:'A fejlécsorban nincsenek <td> cellák',            fn:(h,d)=>d.querySelectorAll('thead td').length===0 },
        { label:'A fejlécsorban legalább 3 <th> cella van',        fn:(h,d)=>d.querySelectorAll('thead th').length>=3 },
        { label:'Az adatsorok <td> cellái megmaradtak',            fn:(h,d)=>d.querySelectorAll('tbody td').length>=6 }
      ]
    },

    {
      id:'f12', points:2,
      question:'A táblázat fejlécében a "Személyes adatok" cella két oszlopot von össze. Végezd el a szükséges módosítást!',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Táblázat</title>
</head>
<body>
  <table border="1">
    <thead>
      <tr>
        <th>Személyes adatok</th>
        <th>Város</th>
      </tr>
      <tr>
        <th>Név</th>
        <th>Kor</th>
        <th>Lakóhely</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Anna</td>
        <td>25</td>
        <td>Budapest</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`,
      checks:[
        { label:'A "Személyes adatok" cellán van colspan attribútum',   fn:(h,d)=>{ const th=[...d.querySelectorAll('thead th')].find(t=>t.textContent.trim()==='Személyes adatok'); return !!(th&&th.hasAttribute('colspan')); } },
        { label:'A colspan értéke 2',                                   fn:(h,d)=>{ const th=[...d.querySelectorAll('thead th')].find(t=>t.textContent.trim()==='Személyes adatok'); return th?.getAttribute('colspan')==='2'; } }
      ]
    },

    {
      id:'f13', points:2,
      question:'Az alábbi versszak sorai folyamatosan futnak egymás után. Tördeld sortörésekkel úgy, hogy minden sor külön sorban jelenjen meg!\n\nTalpra magyar, hí a haza!\nItt az idő, most vagy soha!\nRabok legyünk vagy szabadok?\nEz a kérdés, válasszatok!',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Vers</title>
</head>
<body>
  <h1>Petőfi Sándor: Nemzeti dal</h1>
  <p>Talpra magyar, hí a haza! Itt az idő, most vagy soha! Rabok legyünk vagy szabadok? Ez a kérdés, válasszatok!</p>
</body>
</html>`,
      checks:[
        { label:'Van legalább 3 <br> tag a bekezdésben',         fn:(h,d)=>d.querySelectorAll('p br').length>=3 },
        { label:'A vers szövege megmaradt',                       fn:(h,d)=>{ const p=d.querySelector('p'); return !!(p&&p.textContent.includes('Talpra')&&p.textContent.includes('válasszatok')); } }
      ]
    },

    {
      id:'f14', points:3,
      question:'Az alábbi bekezdésben tedd félkövérré a "HTML" szót, aláhúzottá a "nélkülözhetetlen" szót, és dőlttá a "webfejlesztő" szót!',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Szövegformázás</title>
</head>
<body>
  <p>A HTML weboldalak készítésére szolgál, nélkülözhetetlen eszköz minden webfejlesztő számára.</p>
</body>
</html>`,
      checks:[
        { label:'"HTML" szó félkövér',           fn:(h,d)=>{ const el=d.querySelector('b,strong'); return !!(el&&el.textContent.includes('HTML')); } },
        { label:'"nélkülözhetetlen" szó aláhúzott', fn:(h,d)=>{ const el=d.querySelector('u,ins'); return !!(el&&el.textContent.includes('nélkülözhetetlen')); } },
        { label:'"webfejlesztő" szó dőlt',        fn:(h,d)=>{ const el=d.querySelector('em,i'); return !!(el&&el.textContent.includes('webfejlesztő')); } }
      ]
    },

    {
      id:'f15', points:5,
      question:'Írj egy főcímet "HTML tananyag" szöveggel, alá egy alcímet "Alapok" szöveggel, az alcím után pedig egy bekezdést "A HTML a weboldalak alapja." szöveggel!',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Struktúra</title>
</head>
<body>

</body>
</html>`,
      checks:[
        { label:'A főcím szövege: "HTML tananyag"',              fn:(h,d)=>d.querySelector('h1')?.textContent?.trim()==='HTML tananyag' },
        { label:'Az alcím szövege: "Alapok"',                    fn:(h,d)=>d.querySelector('h2')?.textContent?.trim()==='Alapok' },
        { label:'A bekezdés szövege: "A HTML a weboldalak alapja."', fn:(h,d)=>d.querySelector('p')?.textContent?.trim()==='A HTML a weboldalak alapja.' },
        { label:'A h2 a h1 után van',                            fn:(h,d)=>{ const h1=d.querySelector('h1'),h2=d.querySelector('h2'); return !!(h1&&h2&&(h1.compareDocumentPosition(h2)&Node.DOCUMENT_POSITION_FOLLOWING)); } },
        { label:'A bekezdés a h2 után van',                      fn:(h,d)=>{ const h2=d.querySelector('h2'),p=d.querySelector('p'); return !!(h2&&p&&(h2.compareDocumentPosition(p)&Node.DOCUMENT_POSITION_FOLLOWING)); } }
      ]
    },

    {
      id:'f16', points:4,
      question:'Kattintható kép! Ha a képre kattintunk, új oldalon nyissa meg a https://hu.wikipedia.org/wiki/Macska weboldalt!',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Kattintható kép</title>
</head>
<body>
  <h1>Kedvenc állatom</h1>
  <img src="img/kiscica.jpg" alt="kiscica" title="kiscica">
</body>
</html>`,
      checks:[
        { label:'Van <a> link az oldalon',                                fn:(h,d)=>!!d.querySelector('a') },
        { label:'A link a Wikipedia macska oldalra mutat',               fn:(h,d)=>d.querySelector('a')?.getAttribute('href')==='https://hu.wikipedia.org/wiki/Macska' },
        { label:'A link új lapon nyílik meg (target="_blank")',          fn:(h,d)=>!!d.querySelector('a[target="_blank"]') },
        { label:'A kép az <a> tagen belül van',                          fn:(h,d)=>!!d.querySelector('a img') }
      ]
    },

    {
      id:'f17', points:2,
      question:'A bekezdésben a "Fontos" szó legyen piros és félkövér! A stílus már el van készítve a <style> blokkban — olvasd ki belőle az osztály nevét és rendeld hozzá a span elemhez!',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Osztályjelölő</title>
  <style>
    .kiemelt { color: red; font-weight: bold; }
  </style>
</head>
<body>
  <p>Ez egy <span>Fontos</span> üzenet.</p>
</body>
</html>`,
      checks:[
        { label:'A span-on van class attribútum',          fn:(h,d)=>d.querySelector('span')?.hasAttribute('class') },
        { label:'A class értéke: kiemelt',                 fn:(h,d)=>d.querySelector('span.kiemelt')!==null }
      ]
    },

    {
      id:'f18', points:5,
      question:'A főcím után írd be a következő 3 mondatot, mindegyiket külön bekezdésbe!\n\n1. A HTML a weboldalak szerkezetét határozza meg.\n2. A CSS a weboldalak megjelenéséért felelős.\n3. A JavaScript a weboldalak interaktivitását biztosítja.',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Webes technológiák</title>
</head>
<body>
  <h1>Webes technológiák</h1>

</body>
</html>`,
      checks:[
        { label:'Legalább 3 bekezdés van',                                        fn:(h,d)=>d.querySelectorAll('p').length>=3 },
        { label:'Az első bekezdés szövege helyes',                               fn:(h,d)=>d.querySelectorAll('p')[0]?.textContent?.trim()==='A HTML a weboldalak szerkezetét határozza meg.' },
        { label:'A második bekezdés szövege helyes',                             fn:(h,d)=>d.querySelectorAll('p')[1]?.textContent?.trim()==='A CSS a weboldalak megjelenéséért felelős.' },
        { label:'A harmadik bekezdés szövege helyes',                            fn:(h,d)=>d.querySelectorAll('p')[2]?.textContent?.trim()==='A JavaScript a weboldalak interaktivitását biztosítja.' },
        { label:'Minden bekezdés a <h1> után van',                               fn:(h,d)=>{ const h1=d.querySelector('h1'); return [...d.querySelectorAll('p')].every(p=>!!(h1&&(h1.compareDocumentPosition(p)&Node.DOCUMENT_POSITION_FOLLOWING))); } }
      ]
    },

    {
      id:'f19', points:1,
      question:'Az oldalon az ékezetes betűk kérdőjelként jelennek meg. Javítsd ki!',
      starterHtml:
`<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="ISO-8859-1">
  <title>Ékezetes oldal</title>
</head>
<body>
  <h1>Árvíztűrő tükörfúrógép</h1>
  <p>Az ékezetes betűk: á, é, í, ó, ö, ő, ú, ü, ű</p>
</body>
</html>`,
      checks:[
        { label:'A charset értéke UTF-8',   fn:(h,d)=>{ const m=d.querySelector('meta[charset]'); return m?.getAttribute('charset')?.toUpperCase()==='UTF-8'; } }
      ]
    }

  ]   // fillin vége

};
