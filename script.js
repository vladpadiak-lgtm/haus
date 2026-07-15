const RAW_HOUSES = [
  ["Липова тиша", "Компактний сучасний", 92, 176000, 4, 3, 1, "Мурований", "A0", 10, "Новинка", "Теплий одноповерховий дім із захищеною терасою та логічним денним ядром."],
  ["Північний двір", "Скандинавський", 108, 211000, 4, 3, 1, "Каркасний", "A0", 10, "Вибір редакції", "Світлий будинок навколо приватного внутрішнього дворика — для сімейного життя без зайвих коридорів."],
  ["Карпатський лан", "Сучасна садиба", 126, 244000, 5, 3, 1, "Мурований", "A0", 12, "Популярний", "Сучасне прочитання словацької сільської хати з довгою кухнею-вітальнею та виходом у сад."],
  ["Татранський схил", "Альпійський", 84, 169000, 3, 2, 2, "Каркасний", "A1", 9, "Компактний", "Невеликий будинок для схилу з глибокими звисами, кам'яним цоколем і двома спальнями нагорі."],
  ["Світлий куб", "Мінімалістичний", 142, 326000, 5, 4, 2, "Монолітний", "A0", 14, "Архітектурний", "Стримана міська вілла з великим склінням, приватною терасою та гнучким кабінетом."],
  ["Цегляний сад", "Дворовий", 118, 242000, 4, 3, 1, "Мурований", "A0", 12, "Тихий двір", "Одноповерховий цегляний дім із камерним садом у центрі та природним світлом у кожній кімнаті."],
  ["Ялинова хижа", "Дерев'яний", 68, 128000, 3, 2, 1, "Каркасний", "A1", 8, "Найкраща ціна", "Проста й тепла лісова хижа для постійного проживання, з високою стелею та панорамним вікном."],
  ["Виноградна лінія", "Південний", 156, 352000, 5, 4, 1, "Мурований", "A1", 14, "Для великої сім'ї", "Низька вілла з довгою затіненою лоджією — для сонячної ділянки біля виноградників."],
  ["Сонячний контур", "Пасивний", 101, 203000, 4, 3, 1, "Каркасний", "A0", 10, "Енергія A0", "Раціональний пасивний будинок із південним склінням, перголою та мінімальними витратами на опалення."],
  ["Зелений атріум", "Атріумний", 134, 287000, 5, 3, 1, "Мурований", "A0", 13, "Зелений дах", "Кільце кімнат навколо затишного атріуму дає приватність навіть на щільній міській ділянці."],
  ["Два фронтони", "Сімейний", 149, 311000, 5, 4, 2, "Мурований", "A0", 14, "Просторий", "Два з'єднані об'єми розділяють активну й приватну частини будинку та створюють захищену терасу."],
  ["Перший дім", "Доступний", 76, 143000, 3, 2, 1, "CLT / модульний", "A1", 7, "Швидке будівництво", "Економний стартовий будинок без зайвих метрів: дві спальні, комора й відкрита кухня-вітальня."],
  ["Кам'яний горизонт", "Будинок на схилі", 164, 386000, 5, 4, 2, "Монолітний", "A0", 16, "Панорамний", "Ступінчастий будинок спирається на схил і відкриває краєвид із кожної житлової кімнати."],
  ["Чорна стодола", "Barnhouse", 121, 249000, 4, 3, 2, "Каркасний", "A0", 11, "Хіт", "Виразний силует стодоли, двосвітна вітальня та теплий дерев'яний інтер'єр у сучасній оболонці."],
  ["Тихий павільйон", "Павільйонний", 137, 335000, 5, 3, 1, "Монолітний", "A0", 15, "Преміальний", "Низький павільйон із глибоким дахом стирає межу між вітальнею, терасою та зрілим садом."],
  ["Білий двір", "Нова традиція", 97, 187000, 4, 3, 1, "Мурований", "A1", 10, "Локальний стиль", "Довгий білий дім із черепичним дахом продовжує образ традиційної садиби, але живе по-сучасному."],
  ["Березова алея", "Скандинавський", 115, 218000, 4, 3, 2, "Каркасний", "A0", 10, "Сімейний", "Компактний двоповерховий будинок залишає більше місця для саду й має три рівноцінні спальні."],
  ["Рівний крок", "Безбар'єрний", 112, 216000, 4, 3, 1, "Мурований", "A0", 11, "Без сходів", "Усі приміщення на одному рівні, широкі проходи й прямий вихід у сад роблять дім зручним на роки."],
  ["Міський просвіт", "Urban infill", 128, 307000, 5, 3, 3, "Мурований", "A0", 15, "Для вузької ділянки", "Вузький міський будинок із вертикальним плануванням, внутрішнім світловим колодязем і даховою терасою."],
  ["Травертиновий дворик", "Вілла", 178, 462000, 6, 4, 1, "Монолітний", "A0", 17, "З басейном", "Простора L-подібна вілла з літньою кухнею, маленьким басейном і приватним крилом спалень."],
  ["Плюс енергія", "Енергоактивний", 146, 337000, 5, 4, 2, "CLT / модульний", "A0", 11, "Сонячний дах", "Енергоефективна оболонка, тепловий насос і інтегровані панелі створюють будинок із мінімальним балансом споживання."],
  ["Стара липа", "Класичний", 123, 234000, 4, 3, 1, "Мурований", "A1", 12, "Класика", "Збалансований будинок із вальмовим дахом, критою терасою та окремою господарською зоною."],
  ["Срібне озеро", "Природний", 139, 301000, 5, 3, 2, "Каркасний", "A0", 13, "Біля води", "Розділені рівні дають панорамній вітальні більше висоти, а спальні залишаються камерними."],
  ["Шавлієвий дім", "Сучасний cottage", 91, 178000, 4, 3, 1, "Каркасний", "A0", 9, "Компактний", "Невеликий зелений котедж із сонячною кухнею та додатковою кімнатою для роботи чи гостей."],
  ["Два покоління", "Мультисімейний", 208, 520000, 7, 5, 2, "Мурований", "A0", 18, "2 входи", "Два з'єднані житлові крила дають родині близькість і водночас повну щоденну автономність."],
  ["Модуль 88", "Збірний", 88, 158000, 3, 2, 1, "CLT / модульний", "A0", 6, "6–8 місяців", "Точний заводський модуль швидко монтується на ділянці та легко розширюється додатковою кімнатою."],
  ["Глиняний берег", "Екологічний", 132, 289000, 5, 3, 1, "Мурований", "A0", 14, "Натуральні матеріали", "Масивні природні стіни стабілізують температуру, а зелений дах повертає площу саду."],
  ["Мансарда 172", "Міська класика", 172, 408000, 6, 4, 2, "Мурований", "A0", 17, "Елегантний", "Стриманий мансардний будинок із сучасною симетрією та повноцінною батьківською зоною."],
  ["Вугільна хижа", "Темний timber", 104, 207000, 4, 3, 2, "Каркасний", "A0", 10, "Лісовий", "Два зміщені дерев'яні об'єми формують захищений вхід і затишний простір навколо каміна."],
  ["Біла цегла", "Чистий сучасний", 119, 238000, 4, 3, 2, "Мурований", "A0", 12, "Міський", "Акуратний сімейний будинок для передмістя з кухнею до саду та кабінетом біля входу."],
  ["Кутова лінія", "Для кутової ділянки", 96, 191000, 4, 3, 1, "Мурований", "A1", 10, "Гнучка посадка", "Ламаний план правильно реагує на дві вулиці й закриває приватний сад від сусідів."],
  ["Три тераси", "Схилова вілла", 187, 482000, 6, 4, 3, "Монолітний", "A0", 18, "Складний рельєф", "Три рівні повторюють природний схил: гараж унизу, денна зона посередині, спальні над краєвидом."],
  ["Легкий старт", "Prefab", 82, 151000, 3, 2, 1, "CLT / модульний", "A1", 7, "Раціональний", "Фабрично підготовлений бунгало з простим контуром, терасою й місцем для майбутнього навісу."],
  ["Садова кімната", "Цегляний", 127, 258000, 5, 3, 1, "Мурований", "A0", 12, "Для саду", "Вітальня виступає в сад окремим світлим об'ємом і стає центром родинного життя."],
  ["Зимове сонце", "З оранжереєю", 151, 329000, 5, 4, 2, "Мурований", "A0", 14, "Зимовий сад", "Засклена оранжерея з'єднує традиційний фронтон із сучасною житловою частиною."],
  ["Куб 136", "Мінімалістичний", 136, 296000, 5, 4, 2, "Мурований", "A0", 13, "Компактна пляма", "Двоповерховий куб займає мінімум землі, а цегляний екран захищає терасу від сонця й поглядів."],
  ["Майстерня", "Craftsman", 144, 318000, 5, 4, 2, "Каркасний", "A1", 14, "З великим ґанком", "Глибокий ґанок і природні матеріали створюють гостинний характер, а план залишається сучасним."],
  ["Дві адреси", "Дуплекс", 166, 348000, 6, 4, 2, "Мурований", "A0", 15, "2 квартири", "Дві дзеркальні секції для оренди, родичів або спільного будівництва на одній ділянці."],
  ["А-Лінія", "A-frame", 73, 148000, 3, 2, 2, "Каркасний", "A1", 8, "Для відпочинку", "Високий трикутний простір і камін перетворюють компактний будинок вихідного дня на повноцінне житло."],
  ["Хребет", "Панорамний", 194, 505000, 6, 4, 2, "Монолітний", "A0", 18, "Краєвид", "Довгий низький будинок зависає над схилом і збирає панораму Карпат у суцільному вікні."],
];

const HOUSE_SK = [
  ["Lipové ticho", "Kompaktný moderný", "Novinka", "Teplý jednopodlažný dom s chránenou terasou a logickým denným jadrom."],
  ["Severný dvor", "Škandinávsky", "Voľba redakcie", "Svetlý dom okolo súkromného nádvoria pre rodinný život bez zbytočných chodieb."],
  ["Karpatská lúka", "Moderná usadlosť", "Obľúbený", "Súčasná interpretácia slovenskej vidieckej chalupy s dlhou kuchyňou, obývačkou a výstupom do záhrady."],
  ["Tatranský svah", "Alpský", "Kompaktný", "Menší dom do svahu s hlbokými presahmi, kamenným soklom a dvoma spálňami na poschodí."],
  ["Svetlá kocka", "Minimalistický", "Architektonický", "Striedma mestská vila s veľkým presklením, súkromnou terasou a flexibilnou pracovňou."],
  ["Tehlová záhrada", "Dvorový", "Tichý dvor", "Jednopodlažný tehlový dom s komornou záhradou uprostred a prirodzeným svetlom v každej miestnosti."],
  ["Smreková chata", "Drevený", "Najlepšia cena", "Jednoduchá a teplá lesná chata na celoročné bývanie s vysokým stropom a panoramatickým oknom."],
  ["Vinohradnícka línia", "Južný", "Pre veľkú rodinu", "Nízka vila s dlhou tienenou lodžiou pre slnečný pozemok pri vinohradoch."],
  ["Slnečný obrys", "Pasívny", "Energia A0", "Racionálny pasívny dom s južným presklením, pergolou a minimálnymi nákladmi na vykurovanie."],
  ["Zelené átrium", "Átriový", "Zelená strecha", "Prstenec miestností okolo útulného átria poskytuje súkromie aj na husto zastavanom mestskom pozemku."],
  ["Dva štíty", "Rodinný", "Priestranný", "Dva prepojené objemy oddeľujú aktívnu a súkromnú časť domu a vytvárajú chránenú terasu."],
  ["Prvý dom", "Dostupný", "Rýchla výstavba", "Úsporný štartovací dom bez nadbytočných metrov: dve spálne, komora a otvorená kuchyňa s obývačkou."],
  ["Kamenný horizont", "Dom vo svahu", "Panoramatický", "Stupňovitý dom sa opiera o svah a otvára výhľad z každej obytnej miestnosti."],
  ["Čierna stodola", "Barnhouse", "Hit", "Výrazná silueta stodoly, dvojpodlažná obývačka a teplý drevený interiér v súčasnom obale."],
  ["Tichý pavilón", "Pavilónový", "Prémiový", "Nízky pavilón s hlbokou strechou stiera hranicu medzi obývačkou, terasou a vzrastlou záhradou."],
  ["Biely dvor", "Nová tradícia", "Lokálny štýl", "Dlhý biely dom so škridlovou strechou nadväzuje na tradičnú usadlosť, no funguje moderne."],
  ["Brezová alej", "Škandinávsky", "Rodinný", "Kompaktný dvojpodlažný dom necháva viac miesta záhrade a ponúka tri rovnocenné spálne."],
  ["Rovný krok", "Bezbariérový", "Bez schodov", "Všetky miestnosti na jednej úrovni, široké priechody a priamy výstup do záhrady zaručujú pohodlie na roky."],
  ["Mestský priesvit", "Mestská zástavba", "Pre úzky pozemok", "Úzky mestský dom s vertikálnou dispozíciou, vnútorným svetlíkom a strešnou terasou."],
  ["Travertínové nádvorie", "Vila", "S bazénom", "Priestranná vila v tvare L s letnou kuchyňou, malým bazénom a súkromným krídlom spální."],
  ["Energia plus", "Energeticky aktívny", "Solárna strecha", "Úsporný obal, tepelné čerpadlo a integrované panely vytvárajú dom s minimálnou bilanciou spotreby."],
  ["Stará lipa", "Klasický", "Klasika", "Vyvážený dom s valbovou strechou, krytou terasou a oddelenou hospodárskou zónou."],
  ["Strieborné jazero", "Prírodný", "Pri vode", "Rozdelené úrovne dávajú panoramatickej obývačke väčšiu výšku, zatiaľ čo spálne ostávajú komorné."],
  ["Šalviový dom", "Moderný cottage", "Kompaktný", "Menší zelený cottage so slnečnou kuchyňou a dodatočnou izbou na prácu alebo pre hostí."],
  ["Dve generácie", "Viacgeneračný", "2 vstupy", "Dve prepojené obytné krídla dávajú rodine blízkosť a zároveň úplnú každodennú samostatnosť."],
  ["Modul 88", "Montovaný", "6–8 mesiacov", "Presný výrobný modul sa rýchlo montuje na pozemku a ľahko rozšíri o ďalšiu izbu."],
  ["Hlinený breh", "Ekologický", "Prírodné materiály", "Masívne prírodné steny stabilizujú teplotu a zelená strecha vracia plochu záhrade."],
  ["Manzarda 172", "Mestská klasika", "Elegantný", "Striedmy manzardový dom so súčasnou symetriou a plnohodnotnou rodičovskou zónou."],
  ["Uhoľná chata", "Tmavý timber", "Lesný", "Dva posunuté drevené objemy formujú chránený vstup a útulný priestor okolo kozuba."],
  ["Biela tehla", "Čistý moderný", "Mestský", "Úhľadný rodinný dom na predmestie s kuchyňou orientovanou do záhrady a pracovňou pri vstupe."],
  ["Rohová línia", "Pre rohový pozemok", "Flexibilné osadenie", "Lomený pôdorys správne reaguje na dve ulice a chráni súkromnú záhradu pred pohľadmi susedov."],
  ["Tri terasy", "Vila vo svahu", "Náročný terén", "Tri úrovne kopírujú prirodzený svah: garáž dolu, denná zóna uprostred a spálne nad výhľadom."],
  ["Ľahký štart", "Prefab", "Racionálny", "Výrobne pripravený bungalov s jednoduchým obrysom, terasou a miestom na budúci prístrešok."],
  ["Záhradná izba", "Tehlový", "Pre záhradu", "Obývačka vystupuje do záhrady ako samostatný svetlý objem a stáva sa centrom rodinného života."],
  ["Zimné slnko", "So zimnou záhradou", "Zimná záhrada", "Presklená zimná záhrada spája tradičný štít so súčasnou obytnou časťou."],
  ["Kocka 136", "Minimalistický", "Kompaktná stopa", "Dvojpodlažná kocka zaberá minimum pozemku a tehlová clona chráni terasu pred slnkom aj pohľadmi."],
  ["Remeselný dom", "Craftsman", "S veľkou verandou", "Hlboká veranda a prírodné materiály vytvárajú prívetivý charakter, pričom dispozícia zostáva moderná."],
  ["Dve adresy", "Dvojdom", "2 byty", "Dve zrkadlové sekcie na prenájom, pre príbuzných alebo spoločnú výstavbu na jednom pozemku."],
  ["A-Línia", "A-frame", "Na oddych", "Vysoký trojuholníkový priestor a kozub menia kompaktný víkendový dom na plnohodnotné bývanie."],
  ["Hrebeň", "Panoramatický", "Výhľad", "Dlhý nízky dom sa vznáša nad svahom a zachytáva panorámu Karpát v súvislom okne."],
];

const TRANSLATIONS = {
  uk: {
    "meta.title": "HAUS — 40 проєктів будинків для Словаччини",
    "meta.description": "HAUS — каталог із 40 проєктів будинків для Словаччини з орієнтовними кошторисами, матеріалами та фільтрами.",
    skip: "До каталогу", "brand.homeAria": "HAUS, на головну", "nav.aria": "Головна навігація", "nav.projects": "Проєкти", "nav.price": "Як рахуємо", "nav.about": "Про каталог", "header.cta": "Знайти свій дім", "language.aria": "Вибір мови",
    "hero.eyebrow": "Каталог для будівництва у Словаччині", "hero.titleHtml": "Дім, який можна<br />не лише уявити.", "hero.lead": "40 продуманих варіантів із площею, технологією, матеріалами та орієнтовним бюджетом будівництва.", "hero.projects": "Дивитися проєкти", "hero.priceLink": "Як формується ціна", "hero.budgetFrom": "бюджет від",
    "common.from": "від", "common.to": "до", "common.m": "м", "common.sqm": "м²", "common.monthsShort": "міс.",
    "trust.aria": "Переваги каталогу", "trust.options": "варіантів будинків", "trust.estimates": "оцінки для Словаччини", "trust.energy": "енергоефективні рішення", "trust.az": "А—Я", "trust.stages": "матеріали й етапи",
    "catalog.eyebrow": "Обрати проєкт", "catalog.title": "Будинки для різного життя", "catalog.intro": "Порівнюйте не лише фасади: дивіться на площу, конструкцію, енергоефективність і повний орієнтовний бюджет.",
    "filters.open": "Фільтри та сортування", "results.found": "проєктів знайдено", "sort.label": "Сортування", "sort.aria": "Сортування проєктів", "sort.recommended": "Рекомендовані", "sort.priceAsc": "Ціна: від нижчої", "sort.priceDesc": "Ціна: від вищої", "sort.areaAsc": "Площа: від меншої", "sort.areaDesc": "Площа: від більшої",
    "empty.title": "Таких проєктів поки немає", "empty.text": "Спробуйте розширити діапазон ціни або площі.", "empty.reset": "Скинути фільтри",
    "filters.title": "Фільтри", "filters.close": "Закрити фільтри", "filters.setup": "Налаштувати вибір", "filters.resetAll": "Скинути все", "filters.searchAria": "Пошук за назвою або типом", "filters.searchPlaceholder": "Назва, стиль або технологія", "filters.budget": "Бюджет будівництва", "filters.maxBudget": "Максимальний бюджет", "filters.area": "Площа", "filters.maxArea": "Максимальна площа", "filters.rooms": "Кількість кімнат", "filters.all": "Усі", "filters.floors": "Поверховість", "filters.oneFloor": "Одноповерховий", "filters.twoFloors": "Двоповерховий", "filters.threeFloors": "Три поверхи", "filters.tech": "Технологія", "filters.energy": "Енергоклас", "filters.reset": "Скинути", "filters.show": "Показати",
    "tech.masonry": "Мурований", "tech.frame": "Каркасний", "tech.modular": "CLT / модульний", "tech.monolithic": "Монолітний",
    "estimate.eyebrow": "Прозорий орієнтир", "estimate.title": "Що входить у ціну", "estimate.intro": "Вартість у картці — це орієнтовний бюджет будинку «під ключ» у Словаччині без землі, меблів і складних зовнішніх підключень.", "estimate.step1Title": "Основа й коробка", "estimate.step1Text": "Проєкт, земляні роботи, фундамент, несучі стіни та перекриття.", "estimate.step2Title": "Контур будинку", "estimate.step2Text": "Покрівля, вікна, двері, утеплення та зовнішній фасад.", "estimate.step3Title": "Інженерія", "estimate.step3Text": "Електрика, вода, каналізація, вентиляція та тепловий насос.", "estimate.step4Title": "Готовність до життя", "estimate.step4Text": "Стяжки, штукатурка, підлоги, санвузли та базове фарбування.",
    "about.eyebrow": "Важливо знати", "about.title": "Орієнтир для першого рішення, а не фінальна оферта.", "about.text": "Кошторис залежить від ділянки, геології, регіону, комплектації та підрядника. Перед будівництвом потрібні локальний проєкт, інженерні розрахунки й комерційні пропозиції.", "about.sourceLead": "Розрахунковий діапазон каталогу — приблизно €1 800–2 600/м². Орієнтири звірено зі словацькими оцінками вартості стандартних і пасивних будинків «під ключ» за 2025 рік та актуалізовано за індексами цін будівельних робіт. Джерела:", "about.statsLink": "дані Статистичного управління СР", "about.updated": "Актуалізація: липень 2026 року.",
    "footer.tagline": "Каталог житлових ідей для Словаччини.", "footer.copy": "© 2026 HAUS. Орієнтовні розрахунки.", "dialog.close": "Закрити деталі",
    "card.details": "Усі деталі", "card.roomsShort": "кімн.", "card.floorsShort": "пов.", "card.open": "Відкрити деталі проєкту {name}", "card.alt": "{name} — {style} будинок площею {area} м²",
    "modal.project": "Проєкт", "modal.area": "Площа", "modal.rooms": "Кімнати", "modal.bedrooms": "Спальні", "modal.floors": "Поверхи", "modal.energy": "Енергоклас", "modal.duration": "Термін", "modal.idea": "Ідея будинку", "modal.ideaSuffix": "Планування передбачає чіткий поділ на денну й приватну зони, технічне приміщення, місце для зберігання та прямий зв'язок із терасою.", "modal.turnkey": "Орієнтовно під ключ", "modal.sqmNote": "≈ {price} / м² · Словаччина, липень 2026",
    "plans.sketch": "ескізний проєкт", "plans.title": "Планування від А до Я", "plans.intro": "Орієнтовне зонування кімнат і корисних площ, адаптоване до площі та поверховості цього будинку.", "plans.concept": "Концепт", "plans.floorPlan": "План поверху", "plans.floor": "{number} поверх", "plans.gross": "м² брутто", "plans.aria": "{floor} будинку {name}", "plans.north": "Пн", "plans.scale": "{width} м · концептуальний масштаб 1:100", "plans.legendAria": "Позначення зон плану", "plans.day": "Денна зона", "plans.bedrooms": "Спальні", "plans.service": "Сервісні", "plans.passage": "Проходи", "plans.flex": "Гнучкі кімнати", "plans.footprintSize": "Габарит плями", "plans.footprintArea": "Площа забудови", "plans.minPlot": "Мін. ширина ділянки", "plans.terrace": "Тераса", "plans.orientation": "Краща орієнтація", "plans.disclaimer": "Це ескізна схема для порівняння варіантів. Для будівництва її потрібно адаптувати до ділянки, норм Словаччини, конструктивних розрахунків та інженерних мереж.",
    "room.living": "Кухня-вітальня", "room.entry": "Передпокій", "room.utility": "Технічна", "room.toilet": "Санвузол", "room.pantry": "Комора", "room.office": "Кабінет", "room.guest": "Гостьова", "room.hall": "Хол", "room.bath": "Ванна", "room.wardrobe": "Гардероб", "room.studio": "Студія", "room.bedroom": "Спальня {number}", "room.workshop": "Майстерня", "room.dayShort": "Денна зона", "room.entryShort": "Вхід",
    "materials.title": "З чого будуємо", "materials.tech": "Технологія", "materials.foundation": "Фундамент", "materials.walls": "Несучі стіни", "materials.insulation": "Утеплення", "materials.facade": "Фасад", "materials.roof": "Покрівля", "materials.heating": "Опалення",
    "budget.title": "Структура бюджету", "budget.shell": "Проєкт, фундамент і коробка", "budget.envelope": "Дах, вікна, утеплення, фасад", "budget.systems": "Інженерія та енергообладнання", "budget.finishes": "Внутрішні роботи й санвузли",
    "timeline.title": "Орієнтовний шлях будівництва", "timeline.t1": "1–2 міс.", "timeline.s1": "Адаптація проєкту та дозволи", "timeline.t2": "2–4 міс.", "timeline.s2": "Земляні роботи, фундамент, коробка", "timeline.t3": "2–4 міс.", "timeline.s3": "Контур, фасад та інженерія", "timeline.t4": "2–5 міс.", "timeline.s4": "Оздоблення, пусконалагодження, здача", "modal.disclaimer": "Оцінка не включає земельну ділянку, меблі, кухню, благоустрій, подовжені зовнішні мережі та нестандартні роботи через геологію чи складний доступ. Фінальний кошторис можливий після прив'язки проєкту до ділянки та пропозицій місцевих підрядників.",
  },
  sk: {
    "meta.title": "HAUS — 40 projektov domov pre Slovensko",
    "meta.description": "HAUS je katalóg 40 projektov domov pre Slovensko s orientačnými rozpočtami, materiálmi a filtrami.",
    skip: "Prejsť do katalógu", "brand.homeAria": "HAUS, domov", "nav.aria": "Hlavná navigácia", "nav.projects": "Projekty", "nav.price": "Ako počítame", "nav.about": "O katalógu", "header.cta": "Nájsť svoj dom", "language.aria": "Výber jazyka",
    "hero.eyebrow": "Katalóg pre výstavbu na Slovensku", "hero.titleHtml": "Dom, ktorý si možno<br />nielen predstaviť.", "hero.lead": "40 premyslených variantov s plochou, technológiou, materiálmi a orientačným rozpočtom výstavby.", "hero.projects": "Pozrieť projekty", "hero.priceLink": "Ako vzniká cena", "hero.budgetFrom": "rozpočet od",
    "common.from": "od", "common.to": "do", "common.m": "m", "common.sqm": "m²", "common.monthsShort": "mes.",
    "trust.aria": "Výhody katalógu", "trust.options": "variantov domov", "trust.estimates": "odhady pre Slovensko", "trust.energy": "energeticky úsporné riešenia", "trust.az": "A—Z", "trust.stages": "materiály a etapy",
    "catalog.eyebrow": "Vyberte si projekt", "catalog.title": "Domy pre rozličný život", "catalog.intro": "Porovnávajte viac než fasády: sledujte plochu, konštrukciu, energetickú efektívnosť a celý orientačný rozpočet.",
    "filters.open": "Filtre a zoradenie", "results.found": "nájdených projektov", "sort.label": "Zoradenie", "sort.aria": "Zoradenie projektov", "sort.recommended": "Odporúčané", "sort.priceAsc": "Cena: od najnižšej", "sort.priceDesc": "Cena: od najvyššej", "sort.areaAsc": "Plocha: od najmenšej", "sort.areaDesc": "Plocha: od najväčšej",
    "empty.title": "Takéto projekty zatiaľ nemáme", "empty.text": "Skúste rozšíriť rozsah ceny alebo plochy.", "empty.reset": "Vymazať filtre",
    "filters.title": "Filtre", "filters.close": "Zavrieť filtre", "filters.setup": "Nastaviť výber", "filters.resetAll": "Vymazať všetko", "filters.searchAria": "Hľadať podľa názvu alebo typu", "filters.searchPlaceholder": "Názov, štýl alebo technológia", "filters.budget": "Rozpočet výstavby", "filters.maxBudget": "Maximálny rozpočet", "filters.area": "Plocha", "filters.maxArea": "Maximálna plocha", "filters.rooms": "Počet izieb", "filters.all": "Všetky", "filters.floors": "Počet podlaží", "filters.oneFloor": "Jednopodlažný", "filters.twoFloors": "Dvojpodlažný", "filters.threeFloors": "Tri podlažia", "filters.tech": "Technológia", "filters.energy": "Energetická trieda", "filters.reset": "Vymazať", "filters.show": "Zobraziť",
    "tech.masonry": "Murovaný", "tech.frame": "Drevostavba", "tech.modular": "CLT / modulový", "tech.monolithic": "Monolitický",
    "estimate.eyebrow": "Transparentný odhad", "estimate.title": "Čo zahŕňa cena", "estimate.intro": "Cena na karte je orientačný rozpočet domu na kľúč na Slovensku bez pozemku, nábytku a náročných vonkajších prípojok.", "estimate.step1Title": "Základy a hrubá stavba", "estimate.step1Text": "Projekt, zemné práce, základy, nosné steny a stropy.", "estimate.step2Title": "Obálka domu", "estimate.step2Text": "Strecha, okná, dvere, zateplenie a vonkajšia fasáda.", "estimate.step3Title": "Technické zariadenia", "estimate.step3Text": "Elektrina, voda, kanalizácia, vetranie a tepelné čerpadlo.", "estimate.step4Title": "Pripravené na bývanie", "estimate.step4Text": "Potery, omietky, podlahy, kúpeľne a základné maľovanie.",
    "about.eyebrow": "Dôležité vedieť", "about.title": "Podklad pre prvé rozhodnutie, nie konečná ponuka.", "about.text": "Rozpočet závisí od pozemku, geológie, regiónu, vybavenia a dodávateľa. Pred výstavbou je potrebný miestny projekt, inžinierske výpočty a cenové ponuky.", "about.sourceLead": "Výpočtový rozsah katalógu je približne 1 800–2 600 €/m². Odhady sme porovnali so slovenskými cenami štandardných a pasívnych domov na kľúč za rok 2025 a aktualizovali podľa indexov cien stavebných prác. Zdroje:", "about.statsLink": "údaje Štatistického úradu SR", "about.updated": "Aktualizované: júl 2026.",
    "footer.tagline": "Katalóg nápadov na bývanie pre Slovensko.", "footer.copy": "© 2026 HAUS. Orientačné výpočty.", "dialog.close": "Zavrieť detail",
    "card.details": "Všetky detaily", "card.roomsShort": "izb.", "card.floorsShort": "podl.", "card.open": "Otvoriť detail projektu {name}", "card.alt": "{name} — {style} dom s plochou {area} m²",
    "modal.project": "Projekt", "modal.area": "Plocha", "modal.rooms": "Izby", "modal.bedrooms": "Spálne", "modal.floors": "Podlažia", "modal.energy": "Energetická trieda", "modal.duration": "Trvanie", "modal.idea": "Myšlienka domu", "modal.ideaSuffix": "Dispozícia jasne oddeľuje dennú a súkromnú zónu, obsahuje technickú miestnosť, úložný priestor a priame prepojenie s terasou.", "modal.turnkey": "Orientačne na kľúč", "modal.sqmNote": "≈ {price} / m² · Slovensko, júl 2026",
    "plans.sketch": "koncepčný projekt", "plans.title": "Dispozícia od A po Z", "plans.intro": "Orientačné zónovanie miestností a úžitkových plôch prispôsobené veľkosti a počtu podlaží tohto domu.", "plans.concept": "Koncept", "plans.floorPlan": "Pôdorys podlažia", "plans.floor": "{number}. podlažie", "plans.gross": "m² brutto", "plans.aria": "{floor} domu {name}", "plans.north": "S", "plans.scale": "{width} m · koncepčná mierka 1:100", "plans.legendAria": "Legenda zón pôdorysu", "plans.day": "Denná zóna", "plans.bedrooms": "Spálne", "plans.service": "Servisné", "plans.passage": "Komunikácie", "plans.flex": "Flexibilné izby", "plans.footprintSize": "Rozmery pôdorysu", "plans.footprintArea": "Zastavaná plocha", "plans.minPlot": "Min. šírka pozemku", "plans.terrace": "Terasa", "plans.orientation": "Najlepšia orientácia", "plans.disclaimer": "Ide o koncepčnú schému na porovnanie variantov. Pred výstavbou ju treba prispôsobiť pozemku, slovenským normám, statickým výpočtom a inžinierskym sieťam.",
    "room.living": "Kuchyňa a obývačka", "room.entry": "Zádverie", "room.utility": "Technická miestnosť", "room.toilet": "WC", "room.pantry": "Komora", "room.office": "Pracovňa", "room.guest": "Hosťovská izba", "room.hall": "Hala", "room.bath": "Kúpeľňa", "room.wardrobe": "Šatník", "room.studio": "Ateliér", "room.bedroom": "Spálňa {number}", "room.workshop": "Dielňa", "room.dayShort": "Denná zóna", "room.entryShort": "Vstup",
    "materials.title": "Z čoho staviame", "materials.tech": "Technológia", "materials.foundation": "Základy", "materials.walls": "Nosné steny", "materials.insulation": "Zateplenie", "materials.facade": "Fasáda", "materials.roof": "Strecha", "materials.heating": "Vykurovanie",
    "budget.title": "Štruktúra rozpočtu", "budget.shell": "Projekt, základy a hrubá stavba", "budget.envelope": "Strecha, okná, zateplenie, fasáda", "budget.systems": "Technické zariadenia a energetika", "budget.finishes": "Interiér a kúpeľne",
    "timeline.title": "Orientačný priebeh výstavby", "timeline.t1": "1–2 mes.", "timeline.s1": "Prispôsobenie projektu a povolenia", "timeline.t2": "2–4 mes.", "timeline.s2": "Zemné práce, základy a hrubá stavba", "timeline.t3": "2–4 mes.", "timeline.s3": "Obálka, fasáda a technické zariadenia", "timeline.t4": "2–5 mes.", "timeline.s4": "Dokončenie, spustenie a odovzdanie", "modal.disclaimer": "Odhad nezahŕňa pozemok, nábytok, kuchyňu, úpravu okolia, dlhé vonkajšie prípojky ani neštandardné práce spôsobené geológiou či náročným prístupom. Konečný rozpočet možno určiť po osadení projektu na pozemok a získaní ponúk miestnych dodávateľov.",
  },
};

const interpolate = (value, params = {}) => Object.entries(params).reduce(
  (result, [key, replacement]) => result.replaceAll(`{${key}}`, replacement),
  value,
);

let currentLanguage = (() => {
  try {
    return localStorage.getItem("haus-language") === "sk" ? "sk" : "uk";
  } catch {
    return "uk";
  }
})();

const t = (key, params) => interpolate(TRANSLATIONS[currentLanguage][key] ?? TRANSLATIONS.uk[key] ?? key, params);

const MATERIAL_PROFILES = {
  "Мурований": {
    foundation: "Монолітна залізобетонна плита",
    walls: "Керамічний блок 300 мм",
    insulation: "Мінеральна вата 180–220 мм",
    heating: "Тепловий насос + водяна тепла підлога",
  },
  "Каркасний": {
    foundation: "Утеплена залізобетонна плита",
    walls: "Дерев'яний каркас 240 мм",
    insulation: "Целюлоза / деревоволокно 240–300 мм",
    heating: "Тепловий насос + рекуперація",
  },
  "CLT / модульний": {
    foundation: "Гвинтові палі або утеплена плита",
    walls: "Заводські CLT / дерев'яні модулі",
    insulation: "Деревоволокно 220–260 мм",
    heating: "Повітряний тепловий насос + рекуперація",
  },
  "Монолітний": {
    foundation: "Монолітна плита та підпірні конструкції",
    walls: "Залізобетон + блокове заповнення",
    insulation: "Мінеральна вата 200–240 мм",
    heating: "Геотермальний або повітряний тепловий насос",
  },
};

const MATERIAL_PROFILES_SK = {
  "Мурований": {
    foundation: "Monolitická železobetónová doska",
    walls: "Keramický blok 300 mm",
    insulation: "Minerálna vlna 180–220 mm",
    heating: "Tepelné čerpadlo + teplovodné podlahové kúrenie",
  },
  "Каркасний": {
    foundation: "Zateplená železobetónová doska",
    walls: "Drevený rám 240 mm",
    insulation: "Celulóza / drevovlákno 240–300 mm",
    heating: "Tepelné čerpadlo + rekuperácia",
  },
  "CLT / модульний": {
    foundation: "Zemné skrutky alebo zateplená doska",
    walls: "Výrobné CLT / drevené moduly",
    insulation: "Drevovlákno 220–260 mm",
    heating: "Vzduchové tepelné čerpadlo + rekuperácia",
  },
  "Монолітний": {
    foundation: "Monolitická doska a oporné konštrukcie",
    walls: "Železobetón + výplňové murivo",
    insulation: "Minerálna vlna 200–240 mm",
    heating: "Geotermálne alebo vzduchové tepelné čerpadlo",
  },
};

const FACADES = ["Мінеральна штукатурка + модрина", "Клінкерна цегла + дерево", "Локальний камінь + штукатурка", "Вентильований фасад + дерево"];
const ROOFS = ["Фальцева металева покрівля", "Керамічна черепиця", "Плоска мембранна покрівля", "Метал + підготовка під сонячні панелі"];
const FACADES_SK = ["Minerálna omietka + smrekovec", "Klinkerová tehla + drevo", "Miestny kameň + omietka", "Odvetraná fasáda + drevo"];
const ROOFS_SK = ["Falcovaná plechová krytina", "Keramická škridla", "Plochá fóliová strecha", "Plech + príprava na solárne panely"];
const ORIENTATIONS = {
  uk: ["південь / південний захід", "південь / південний схід", "захід / південний захід"],
  sk: ["juh / juhozápad", "juh / juhovýchod", "západ / juhozápad"],
};

const houses = RAW_HOUSES.map((item, index) => {
  const [name, style, area, price, rooms, beds, floors, tech, energy, months, tag, description] = item;
  const materials = MATERIAL_PROFILES[tech];
  const materialsSk = MATERIAL_PROFILES_SK[tech];
  const [nameSk, styleSk, tagSk, descriptionSk] = HOUSE_SK[index];
  const footprint = Math.round(area / (floors === 1 ? 1 : floors === 2 ? 1.78 : 2.42));
  const aspectRatio = 1.26 + (index % 5) * 0.09;
  const buildingWidth = Number(Math.sqrt(footprint * aspectRatio).toFixed(1));
  const buildingDepth = Number((footprint / buildingWidth).toFixed(1));
  return {
    id: index + 1,
    name,
    style,
    area,
    price,
    rooms,
    beds,
    floors,
    tech,
    energy,
    months,
    tag,
    description,
    translations: {
      uk: { name, style, tag, description },
      sk: { name: nameSk, style: styleSk, tag: tagSk, description: descriptionSk },
    },
    image: `assets/houses/house-${String(index + 1).padStart(2, "0")}.webp`,
    alt: `${name} — ${style.toLowerCase()} будинок площею ${area} м²`,
    foundation: materials.foundation,
    walls: materials.walls,
    insulation: materials.insulation,
    heating: materials.heating,
    facade: FACADES[index % FACADES.length],
    roof: ROOFS[index % ROOFS.length],
    materials: {
      uk: { ...materials, facade: FACADES[index % FACADES.length], roof: ROOFS[index % ROOFS.length] },
      sk: { ...materialsSk, facade: FACADES_SK[index % FACADES_SK.length], roof: ROOFS_SK[index % ROOFS_SK.length] },
    },
    project: {
      code: `HAUS-SK-${String(index + 1).padStart(2, "0")}`,
      footprint,
      buildingWidth,
      buildingDepth,
      minPlotWidth: Math.ceil(buildingWidth + 7),
      terrace: Math.round(area * 0.14 + (index % 6)),
      orientationIndex: index % 3,
    },
  };
});

const formatEuro = (value) => new Intl.NumberFormat(currentLanguage === "sk" ? "sk-SK" : "uk-UA", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
}).format(value);

const localizedHouse = (house) => ({ ...house, ...house.translations[currentLanguage] });
const techLabel = (tech) => ({
  "Мурований": t("tech.masonry"),
  "Каркасний": t("tech.frame"),
  "CLT / модульний": t("tech.modular"),
  "Монолітний": t("tech.monolithic"),
}[tech] || tech);

const roundThousands = (value) => Math.round(value / 1000) * 1000;

const budgetParts = (house) => {
  const shell = roundThousands(house.price * 0.32);
  const envelope = roundThousands(house.price * 0.22);
  const systems = roundThousands(house.price * 0.23);
  const finishes = house.price - shell - envelope - systems;
  return { shell, envelope, systems, finishes };
};

const PLAN_COLORS = {
  living: "#f0d9ca",
  bedroom: "#dce7d9",
  service: "#d9e7e9",
  circulation: "#eee8dc",
  flex: "#e6deea",
};

function buildFloorPrograms(house) {
  const floorAreas = house.floors === 1
    ? [house.area]
    : house.floors === 2
      ? [Math.round(house.area * (house.id % 2 ? 0.54 : 0.51)), 0]
      : [Math.round(house.area * 0.38), Math.round(house.area * 0.34), 0];
  floorAreas[floorAreas.length - 1] = house.area - floorAreas.slice(0, -1).reduce((sum, value) => sum + value, 0);

  const bedroomAllocation = Array(house.floors).fill(0);
  if (house.floors === 1) {
    bedroomAllocation[0] = house.beds;
  } else if (house.floors === 2) {
    const groundBedroom = house.beds >= 4 && house.id % 4 === 0 ? 1 : 0;
    bedroomAllocation[0] = groundBedroom;
    bedroomAllocation[1] = house.beds - groundBedroom;
  } else {
    bedroomAllocation[1] = Math.ceil(house.beds * 0.6);
    bedroomAllocation[2] = house.beds - bedroomAllocation[1];
  }

  let bedroomNumber = 1;
  let extraRooms = Math.max(0, house.rooms - house.beds - 1);
  return floorAreas.map((floorArea, floorIndex) => {
    const rooms = [];
    if (floorIndex === 0) {
      rooms.push(
        { name: t("room.living"), type: "living", weight: 3.8 },
        { name: t("room.entry"), type: "circulation", weight: 0.72 },
        { name: t("room.utility"), type: "service", weight: 0.62 },
        { name: t("room.toilet"), type: "service", weight: 0.52 },
      );
      if (house.area > 115) rooms.push({ name: t("room.pantry"), type: "service", weight: 0.42 });
      if (extraRooms > 0) {
        rooms.push({ name: house.id % 2 ? t("room.office") : t("room.guest"), type: "flex", weight: 1.15 });
        extraRooms--;
      }
    } else {
      rooms.push(
        { name: t("room.hall"), type: "circulation", weight: 0.75 },
        { name: t("room.bath"), type: "service", weight: 0.82 },
      );
      if (bedroomAllocation[floorIndex] >= 3) rooms.push({ name: t("room.wardrobe"), type: "service", weight: 0.48 });
      if (extraRooms > 0 && floorIndex === house.floors - 1) {
        rooms.push({ name: t("room.studio"), type: "flex", weight: 1.2 });
        extraRooms--;
      }
    }

    for (let index = 0; index < bedroomAllocation[floorIndex]; index++) {
      rooms.push({ name: t("room.bedroom", { number: bedroomNumber++ }), type: "bedroom", weight: index === 0 && floorIndex > 0 ? 1.6 : 1.35 });
    }

    if (house.floors === 3 && floorIndex === 2 && bedroomAllocation[floorIndex] === 0) {
      rooms.push({ name: t("room.workshop"), type: "flex", weight: 1.8 });
    }

    const totalWeight = rooms.reduce((sum, room) => sum + room.weight, 0);
    const netArea = floorArea * 0.86;
    return {
      area: floorArea,
      label: house.floors === 1 ? t("plans.floorPlan") : t("plans.floor", { number: floorIndex + 1 }),
      rooms: rooms.map((room) => ({
        ...room,
        area: Math.max(2.5, Math.round((netArea * room.weight / totalWeight) * 10) / 10),
      })),
    };
  });
}

function partitionPlanRooms(rooms, rectangle, seed, depth = 0) {
  if (rooms.length === 1) return [{ room: rooms[0], ...rectangle }];
  const totalWeight = rooms.reduce((sum, room) => sum + room.weight, 0);
  let runningWeight = 0;
  let splitIndex = 1;
  for (let index = 0; index < rooms.length - 1; index++) {
    runningWeight += rooms[index].weight;
    splitIndex = index + 1;
    if (runningWeight >= totalWeight / 2) break;
  }
  splitIndex = Math.min(Math.max(splitIndex, 1), rooms.length - 1);
  const first = rooms.slice(0, splitIndex);
  const second = rooms.slice(splitIndex);
  const firstWeight = first.reduce((sum, room) => sum + room.weight, 0);
  const ratio = Math.min(0.7, Math.max(0.3, firstWeight / totalWeight));
  const splitVertically = rectangle.width / rectangle.height > 1.28
    || (rectangle.width / rectangle.height > 0.82 && (seed + depth) % 2 === 0);
  const gap = 4;

  if (splitVertically) {
    const firstWidth = rectangle.width * ratio;
    return [
      ...partitionPlanRooms(first, { ...rectangle, width: firstWidth - gap / 2 }, seed + 1, depth + 1),
      ...partitionPlanRooms(second, {
        x: rectangle.x + firstWidth + gap / 2,
        y: rectangle.y,
        width: rectangle.width - firstWidth - gap / 2,
        height: rectangle.height,
      }, seed + 3, depth + 1),
    ];
  }

  const firstHeight = rectangle.height * ratio;
  return [
    ...partitionPlanRooms(first, { ...rectangle, height: firstHeight - gap / 2 }, seed + 1, depth + 1),
    ...partitionPlanRooms(second, {
      x: rectangle.x,
      y: rectangle.y + firstHeight + gap / 2,
      width: rectangle.width,
      height: rectangle.height - firstHeight - gap / 2,
    }, seed + 3, depth + 1),
  ];
}

function renderPlanSvg(house, floor, floorIndex) {
  const localized = localizedHouse(house);
  const rotatedRooms = [...floor.rooms];
  const shift = (house.id + floorIndex) % rotatedRooms.length;
  rotatedRooms.push(...rotatedRooms.splice(0, shift));
  const rectangles = partitionPlanRooms(rotatedRooms, { x: 36, y: 48, width: 568, height: 324 }, house.id + floorIndex * 5);
  const roomMarkup = rectangles.map(({ room, x, y, width, height }) => {
    const compact = width < 105 || height < 68;
    const label = compact ? room.name.replace(t("room.living"), t("room.dayShort")).replace(t("room.entry"), t("room.entryShort")) : room.name;
    const fontSize = compact ? 11 : 14;
    return `
      <g>
        <rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${Math.max(1, width).toFixed(1)}" height="${Math.max(1, height).toFixed(1)}" rx="3" fill="${PLAN_COLORS[room.type]}" stroke="#fffdf8" stroke-width="4" />
        <text x="${(x + width / 2).toFixed(1)}" y="${(y + height / 2 - 4).toFixed(1)}" text-anchor="middle" class="plan-room-name" font-size="${fontSize}">${label}</text>
        <text x="${(x + width / 2).toFixed(1)}" y="${(y + height / 2 + 14).toFixed(1)}" text-anchor="middle" class="plan-room-area">${room.area.toFixed(1)} ${t("common.sqm")}</text>
      </g>`;
  }).join("");
  const windowOffset = 82 + (house.id % 4) * 54;
  return `
    <svg class="floor-plan-svg" viewBox="0 0 640 430" role="img" aria-label="${t("plans.aria", { floor: floor.label, name: localized.name })}">
      <rect x="30" y="42" width="580" height="336" rx="6" fill="#17352e" />
      ${roomMarkup}
      <line x1="${windowOffset}" y1="42" x2="${windowOffset + 82}" y2="42" class="plan-window" />
      <line x1="${440 - (house.id % 3) * 45}" y1="378" x2="${535 - (house.id % 3) * 45}" y2="378" class="plan-window" />
      <path d="M300 378v-28a28 28 0 0 1 28 28" class="plan-door" />
      <path d="M579 30v-18m0 0-7 9m7-9 7 9" class="north-arrow" />
      <text x="579" y="9" text-anchor="middle" class="north-label">${t("plans.north")}</text>
      <line x1="36" y1="399" x2="604" y2="399" class="dimension-line" />
      <text x="320" y="417" text-anchor="middle" class="dimension-text">${t("plans.scale", { width: house.project.buildingWidth.toFixed(1) })}</text>
    </svg>`;
}

function renderProjectPlans(house) {
  const floors = buildFloorPrograms(house);
  return `
    <section class="dialog-section project-plans">
      <div class="project-plans-head">
        <div>
          <p class="project-code">${house.project.code} · ${t("plans.sketch")}</p>
          <h3>${t("plans.title")}</h3>
          <p>${t("plans.intro")}</p>
        </div>
        <span class="concept-badge">${t("plans.concept")}</span>
      </div>
      <div class="plan-grid plan-grid-${house.floors}">
        ${floors.map((floor, index) => `
          <article class="plan-floor">
            <div class="plan-floor-title">
              <strong>${floor.label}</strong>
              <span>${floor.area} ${t("plans.gross")}</span>
            </div>
            ${renderPlanSvg(house, floor, index)}
          </article>
        `).join("")}
      </div>
      <div class="plan-legend" aria-label="${t("plans.legendAria")}">
        <span><i style="--legend-color: ${PLAN_COLORS.living}"></i>${t("plans.day")}</span>
        <span><i style="--legend-color: ${PLAN_COLORS.bedroom}"></i>${t("plans.bedrooms")}</span>
        <span><i style="--legend-color: ${PLAN_COLORS.service}"></i>${t("plans.service")}</span>
        <span><i style="--legend-color: ${PLAN_COLORS.circulation}"></i>${t("plans.passage")}</span>
        <span><i style="--legend-color: ${PLAN_COLORS.flex}"></i>${t("plans.flex")}</span>
      </div>
      <div class="project-facts">
        <div><span>${t("plans.footprintSize")}</span><strong>${house.project.buildingWidth.toFixed(1)} × ${house.project.buildingDepth.toFixed(1)} ${t("common.m")}</strong></div>
        <div><span>${t("plans.footprintArea")}</span><strong>≈ ${house.project.footprint} ${t("common.sqm")}</strong></div>
        <div><span>${t("plans.minPlot")}</span><strong>${house.project.minPlotWidth} ${t("common.m")}</strong></div>
        <div><span>${t("plans.terrace")}</span><strong>≈ ${house.project.terrace} ${t("common.sqm")}</strong></div>
        <div><span>${t("plans.orientation")}</span><strong>${ORIENTATIONS[currentLanguage][house.project.orientationIndex]}</strong></div>
      </div>
      <p class="plan-disclaimer">${t("plans.disclaimer")}</p>
    </section>`;
}

const grid = document.querySelector("#house-grid");
const template = document.querySelector("#house-card-template");
const resultCount = document.querySelector("#result-count");
const mobileResultCount = document.querySelector("#mobile-result-count");
const emptyState = document.querySelector("#empty-state");
const sortSelect = document.querySelector("#sort");
const dialog = document.querySelector("#house-dialog");
const dialogContent = document.querySelector("#dialog-content");

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.title = t("meta.title");
  document.querySelector('meta[name="description"]').setAttribute("content", t("meta.description"));
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
  });
}

function setLanguage(language) {
  if (!TRANSLATIONS[language] || language === currentLanguage) return;
  currentLanguage = language;
  try {
    localStorage.setItem("haus-language", language);
  } catch {
    // The site still works when storage is disabled.
  }
  applyTranslations();
  render();
  if (activeHouseId) openHouse(houses.find((house) => house.id === activeHouseId));
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

const controls = {
  search: document.querySelector("#search"),
  priceMin: document.querySelector("#price-min"),
  priceMax: document.querySelector("#price-max"),
  priceRange: document.querySelector("#price-range"),
  areaMin: document.querySelector("#area-min"),
  areaMax: document.querySelector("#area-max"),
  areaRange: document.querySelector("#area-range"),
};

function selectedValues(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map((input) => input.value);
}

function selectedRooms() {
  return document.querySelector('input[name="rooms"]:checked')?.value || "all";
}

function orderedRange(minControl, maxControl, fallbackMin, fallbackMax) {
  const first = Number.isFinite(Number(minControl.value)) ? Number(minControl.value) : fallbackMin;
  const second = Number.isFinite(Number(maxControl.value)) ? Number(maxControl.value) : fallbackMax;
  return { min: Math.min(first, second), max: Math.max(first, second) };
}

function filterHouses() {
  const query = controls.search.value.trim().toLocaleLowerCase(currentLanguage === "sk" ? "sk" : "uk");
  const price = orderedRange(controls.priceMin, controls.priceMax, 100000, 600000);
  const area = orderedRange(controls.areaMin, controls.areaMax, 60, 220);
  const rooms = selectedRooms();
  const floors = selectedValues("floors");
  const tech = selectedValues("tech");
  const energy = selectedValues("energy");

  return houses.filter((house) => {
    const uk = house.translations.uk;
    const sk = house.translations.sk;
    const searchable = `${uk.name} ${uk.style} ${sk.name} ${sk.style} ${house.tech} ${techLabel(house.tech)}`;
    const matchesQuery = !query || searchable.toLocaleLowerCase(currentLanguage === "sk" ? "sk" : "uk").includes(query);
    const matchesRooms = rooms === "all" || (rooms === "5" ? house.rooms >= 5 : house.rooms === Number(rooms));
    return matchesQuery
      && house.price >= price.min
      && house.price <= price.max
      && house.area >= area.min
      && house.area <= area.max
      && (!floors.length || floors.includes(String(house.floors)))
      && (!tech.length || tech.includes(house.tech))
      && (!energy.length || energy.includes(house.energy))
      && matchesRooms;
  });
}

function sortHouses(list) {
  const copy = [...list];
  switch (sortSelect.value) {
    case "price-asc": return copy.sort((a, b) => a.price - b.price);
    case "price-desc": return copy.sort((a, b) => b.price - a.price);
    case "area-asc": return copy.sort((a, b) => a.area - b.area);
    case "area-desc": return copy.sort((a, b) => b.area - a.area);
    default: return copy.sort((a, b) => a.id - b.id);
  }
}

function createCard(house) {
  const localized = localizedHouse(house);
  const card = template.content.firstElementChild.cloneNode(true);
  const image = card.querySelector(".card-image");
  const imageButton = card.querySelector(".card-image-button");
  const detailsButton = card.querySelector(".card-details-button");
  image.src = house.image;
  image.alt = t("card.alt", { name: localized.name, style: localized.style.toLocaleLowerCase(currentLanguage), area: house.area });
  card.querySelector(".card-badge").textContent = localized.tag;
  card.querySelector(".card-kicker").textContent = `${localized.style} · ${house.energy}`;
  card.querySelector(".card-title").textContent = localized.name;
  card.querySelector(".card-price").textContent = formatEuro(house.price);
  card.querySelector(".card-specs").innerHTML = `
    <span>${house.area} ${t("common.sqm")}</span>
    <span>${house.rooms} ${t("card.roomsShort")}</span>
    <span>${house.floors} ${t("card.floorsShort")}</span>
    <span>${techLabel(house.tech)}</span>
  `;
  card.querySelector("[data-card-details]").textContent = t("card.details");
  imageButton.setAttribute("aria-label", t("card.open", { name: localized.name }));
  imageButton.addEventListener("click", () => openHouse(house));
  detailsButton.addEventListener("click", () => openHouse(house));
  return card;
}

function render() {
  const list = sortHouses(filterHouses());
  grid.replaceChildren(...list.map(createCard));
  resultCount.textContent = list.length;
  mobileResultCount.textContent = list.length;
  emptyState.hidden = list.length > 0;
  grid.hidden = list.length === 0;
  updateActiveFilterCount();
}

let activeHouseId = null;

function openHouse(house) {
  activeHouseId = house.id;
  const localized = localizedHouse(house);
  const materials = house.materials[currentLanguage];
  const budget = budgetParts(house);
  const pricePerSquare = Math.round(house.price / house.area / 10) * 10;
  dialogContent.innerHTML = `
    <div class="dialog-hero">
      <img src="${house.image}" alt="${t("card.alt", { name: localized.name, style: localized.style.toLocaleLowerCase(currentLanguage), area: house.area })}" />
      <div class="dialog-hero-content">
        <p class="eyebrow">${t("modal.project")} ${String(house.id).padStart(2, "0")} · ${localized.style}</p>
        <h2 id="dialog-title">${localized.name}</h2>
      </div>
    </div>
    <div class="dialog-summary-grid">
      <div><span>${t("modal.area")}</span><strong>${house.area} ${t("common.sqm")}</strong></div>
      <div><span>${t("modal.rooms")}</span><strong>${house.rooms}</strong></div>
      <div><span>${t("modal.bedrooms")}</span><strong>${house.beds}</strong></div>
      <div><span>${t("modal.floors")}</span><strong>${house.floors}</strong></div>
      <div><span>${t("modal.energy")}</span><strong>${house.energy}</strong></div>
      <div><span>${t("modal.duration")}</span><strong>${house.months} ${t("common.monthsShort")}</strong></div>
    </div>
    <div class="dialog-body">
      <div class="dialog-lead">
        <div>
          <h3>${t("modal.idea")}</h3>
          <p>${localized.description} ${t("modal.ideaSuffix")}</p>
        </div>
        <div class="budget-card">
          <span>${t("modal.turnkey")}</span>
          <strong>${formatEuro(house.price)}</strong>
          <small>${t("modal.sqmNote", { price: formatEuro(pricePerSquare) })}</small>
        </div>
      </div>

      ${renderProjectPlans(house)}

      <div class="dialog-details-grid">
        <section class="dialog-section">
          <h3>${t("materials.title")}</h3>
          <ul class="material-list">
            <li><span>${t("materials.tech")}</span><strong>${techLabel(house.tech)}</strong></li>
            <li><span>${t("materials.foundation")}</span><strong>${materials.foundation}</strong></li>
            <li><span>${t("materials.walls")}</span><strong>${materials.walls}</strong></li>
            <li><span>${t("materials.insulation")}</span><strong>${materials.insulation}</strong></li>
            <li><span>${t("materials.facade")}</span><strong>${materials.facade}</strong></li>
            <li><span>${t("materials.roof")}</span><strong>${materials.roof}</strong></li>
            <li><span>${t("materials.heating")}</span><strong>${materials.heating}</strong></li>
          </ul>
        </section>

        <section class="dialog-section">
          <h3>${t("budget.title")}</h3>
          <ul class="budget-list">
            <li><span>${t("budget.shell")}</span><strong>${formatEuro(budget.shell)}</strong></li>
            <li><span>${t("budget.envelope")}</span><strong>${formatEuro(budget.envelope)}</strong></li>
            <li><span>${t("budget.systems")}</span><strong>${formatEuro(budget.systems)}</strong></li>
            <li><span>${t("budget.finishes")}</span><strong>${formatEuro(budget.finishes)}</strong></li>
          </ul>
        </section>
      </div>

      <section class="dialog-section" style="margin-top: 48px">
        <h3>${t("timeline.title")}</h3>
        <ol class="timeline-list">
          <li><span>${t("timeline.t1")}</span><strong>${t("timeline.s1")}</strong></li>
          <li><span>${t("timeline.t2")}</span><strong>${t("timeline.s2")}</strong></li>
          <li><span>${t("timeline.t3")}</span><strong>${t("timeline.s3")}</strong></li>
          <li><span>${t("timeline.t4")}</span><strong>${t("timeline.s4")}</strong></li>
        </ol>
      </section>

      <p class="dialog-disclaimer">
        ${t("modal.disclaimer")}
      </p>
    </div>
  `;
  if (!dialog.open) dialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeDialog() {
  activeHouseId = null;
  dialog.close();
  document.body.classList.remove("dialog-open");
}

document.querySelector("#dialog-close").addEventListener("click", closeDialog);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeDialog();
});
dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

function updateRange(range, target) {
  target.value = range.value;
  const min = Number(range.min);
  const max = Number(range.max);
  const percent = ((Number(range.value) - min) / (max - min)) * 100;
  range.style.setProperty("--range-progress", `${percent}%`);
}

controls.priceRange.addEventListener("input", () => {
  updateRange(controls.priceRange, controls.priceMax);
  render();
});
controls.areaRange.addEventListener("input", () => {
  updateRange(controls.areaRange, controls.areaMax);
  render();
});
controls.priceMax.addEventListener("input", () => {
  controls.priceRange.value = controls.priceMax.value;
  updateRange(controls.priceRange, controls.priceMax);
  render();
});
controls.areaMax.addEventListener("input", () => {
  controls.areaRange.value = controls.areaMax.value;
  updateRange(controls.areaRange, controls.areaMax);
  render();
});
controls.priceMin.addEventListener("input", render);
controls.areaMin.addEventListener("input", render);

function updateActiveFilterCount() {
  let count = 0;
  if (controls.search.value.trim()) count++;
  if (Number(controls.priceMin.value) > 100000 || Number(controls.priceMax.value) < 600000) count++;
  if (Number(controls.areaMin.value) > 60 || Number(controls.areaMax.value) < 220) count++;
  if (selectedRooms() !== "all") count++;
  count += selectedValues("floors").length + selectedValues("tech").length + selectedValues("energy").length;
  const badge = document.querySelector("#active-filter-count");
  badge.textContent = count;
  badge.hidden = count === 0;
}

function resetFilters() {
  controls.search.value = "";
  controls.priceMin.value = 100000;
  controls.priceMax.value = 600000;
  controls.priceRange.value = 600000;
  controls.areaMin.value = 60;
  controls.areaMax.value = 220;
  controls.areaRange.value = 220;
  document.querySelector('input[name="rooms"][value="all"]').checked = true;
  document.querySelectorAll('input[type="checkbox"]').forEach((input) => { input.checked = false; });
  sortSelect.value = "recommended";
  updateRange(controls.priceRange, controls.priceMax);
  updateRange(controls.areaRange, controls.areaMax);
  render();
}

document.querySelectorAll("input, select").forEach((control) => {
  if ([controls.priceRange, controls.areaRange, controls.priceMin, controls.priceMax, controls.areaMin, controls.areaMax].includes(control)) return;
  control.addEventListener(control.type === "search" ? "input" : "change", render);
});
document.querySelectorAll("[data-reset-filters]").forEach((button) => button.addEventListener("click", resetFilters));

const filterBackdrop = document.querySelector("#filter-backdrop");
const filterPanel = document.querySelector("#filters");
const openFiltersButton = document.querySelector("#open-filters");
const mobileFiltersQuery = window.matchMedia("(max-width: 1020px)");

function syncFilterPanelAccessibility() {
  if (!mobileFiltersQuery.matches) {
    document.body.classList.remove("filters-open");
    filterBackdrop.hidden = true;
    filterPanel.removeAttribute("inert");
    openFiltersButton.setAttribute("aria-expanded", "false");
    return;
  }
  const mobileAndClosed = mobileFiltersQuery.matches && !document.body.classList.contains("filters-open");
  filterPanel.toggleAttribute("inert", mobileAndClosed);
  openFiltersButton.setAttribute("aria-expanded", String(!mobileAndClosed && document.body.classList.contains("filters-open")));
}

function openFilters() {
  filterPanel.removeAttribute("inert");
  document.body.classList.add("filters-open");
  openFiltersButton.setAttribute("aria-expanded", "true");
  filterBackdrop.hidden = false;
  document.querySelector("#close-filters").focus();
}
function closeFilters() {
  document.body.classList.remove("filters-open");
  openFiltersButton.setAttribute("aria-expanded", "false");
  filterBackdrop.hidden = true;
  if (mobileFiltersQuery.matches) filterPanel.setAttribute("inert", "");
  openFiltersButton.focus();
}
openFiltersButton.addEventListener("click", openFilters);
document.querySelector("#close-filters").addEventListener("click", closeFilters);
document.querySelector("#apply-filters").addEventListener("click", closeFilters);
filterBackdrop.addEventListener("click", closeFilters);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("filters-open")) closeFilters();
});
mobileFiltersQuery.addEventListener("change", syncFilterPanelAccessibility);

updateRange(controls.priceRange, controls.priceMax);
updateRange(controls.areaRange, controls.areaMax);
syncFilterPanelAccessibility();
applyTranslations();
render();
