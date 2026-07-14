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

const FACADES = ["Мінеральна штукатурка + модрина", "Клінкерна цегла + дерево", "Локальний камінь + штукатурка", "Вентильований фасад + дерево"];
const ROOFS = ["Фальцева металева покрівля", "Керамічна черепиця", "Плоска мембранна покрівля", "Метал + підготовка під сонячні панелі"];

const houses = RAW_HOUSES.map((item, index) => {
  const [name, style, area, price, rooms, beds, floors, tech, energy, months, tag, description] = item;
  const materials = MATERIAL_PROFILES[tech];
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
    image: `assets/houses/house-${String(index + 1).padStart(2, "0")}.webp`,
    alt: `${name} — ${style.toLowerCase()} будинок площею ${area} м²`,
    foundation: materials.foundation,
    walls: materials.walls,
    insulation: materials.insulation,
    heating: materials.heating,
    facade: FACADES[index % FACADES.length],
    roof: ROOFS[index % ROOFS.length],
  };
});

const formatEuro = (value) => new Intl.NumberFormat("uk-UA", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
}).format(value);

const roundThousands = (value) => Math.round(value / 1000) * 1000;

const budgetParts = (house) => {
  const shell = roundThousands(house.price * 0.32);
  const envelope = roundThousands(house.price * 0.22);
  const systems = roundThousands(house.price * 0.23);
  const finishes = house.price - shell - envelope - systems;
  return { shell, envelope, systems, finishes };
};

const grid = document.querySelector("#house-grid");
const template = document.querySelector("#house-card-template");
const resultCount = document.querySelector("#result-count");
const mobileResultCount = document.querySelector("#mobile-result-count");
const emptyState = document.querySelector("#empty-state");
const sortSelect = document.querySelector("#sort");
const dialog = document.querySelector("#house-dialog");
const dialogContent = document.querySelector("#dialog-content");

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

function filterHouses() {
  const query = controls.search.value.trim().toLocaleLowerCase("uk");
  const priceMin = Number(controls.priceMin.value) || 0;
  const priceMax = Number(controls.priceMax.value) || Infinity;
  const areaMin = Number(controls.areaMin.value) || 0;
  const areaMax = Number(controls.areaMax.value) || Infinity;
  const rooms = selectedRooms();
  const floors = selectedValues("floors");
  const tech = selectedValues("tech");
  const energy = selectedValues("energy");

  return houses.filter((house) => {
    const matchesQuery = !query || `${house.name} ${house.style} ${house.tech}`.toLocaleLowerCase("uk").includes(query);
    const matchesRooms = rooms === "all" || (rooms === "5" ? house.rooms >= 5 : house.rooms === Number(rooms));
    return matchesQuery
      && house.price >= priceMin
      && house.price <= priceMax
      && house.area >= areaMin
      && house.area <= areaMax
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
  const card = template.content.firstElementChild.cloneNode(true);
  const image = card.querySelector(".card-image");
  const imageButton = card.querySelector(".card-image-button");
  const detailsButton = card.querySelector(".card-details-button");
  image.src = house.image;
  image.alt = house.alt;
  card.querySelector(".card-badge").textContent = house.tag;
  card.querySelector(".card-kicker").textContent = `${house.style} · ${house.energy}`;
  card.querySelector(".card-title").textContent = house.name;
  card.querySelector(".card-price").textContent = formatEuro(house.price);
  card.querySelector(".card-specs").innerHTML = `
    <span>${house.area} м²</span>
    <span>${house.rooms} кімн.</span>
    <span>${house.floors} пов.</span>
    <span>${house.tech}</span>
  `;
  imageButton.setAttribute("aria-label", `Відкрити деталі проєкту ${house.name}`);
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

function openHouse(house) {
  const budget = budgetParts(house);
  const pricePerSquare = Math.round(house.price / house.area / 10) * 10;
  dialogContent.innerHTML = `
    <div class="dialog-hero">
      <img src="${house.image}" alt="${house.alt}" />
      <div class="dialog-hero-content">
        <p class="eyebrow">Проєкт ${String(house.id).padStart(2, "0")} · ${house.style}</p>
        <h2 id="dialog-title">${house.name}</h2>
      </div>
    </div>
    <div class="dialog-summary-grid">
      <div><span>Площа</span><strong>${house.area} м²</strong></div>
      <div><span>Кімнати</span><strong>${house.rooms}</strong></div>
      <div><span>Спальні</span><strong>${house.beds}</strong></div>
      <div><span>Поверхи</span><strong>${house.floors}</strong></div>
      <div><span>Енергоклас</span><strong>${house.energy}</strong></div>
      <div><span>Термін</span><strong>${house.months} міс.</strong></div>
    </div>
    <div class="dialog-body">
      <div class="dialog-lead">
        <div>
          <h3>Ідея будинку</h3>
          <p>${house.description} Планування передбачає чіткий поділ на денну й приватну зони, технічне приміщення, місце для зберігання та прямий зв'язок із терасою.</p>
        </div>
        <div class="budget-card">
          <span>Орієнтовно під ключ</span>
          <strong>${formatEuro(house.price)}</strong>
          <small>≈ ${formatEuro(pricePerSquare)} / м² · Словаччина, липень 2026</small>
        </div>
      </div>

      <div class="dialog-details-grid">
        <section class="dialog-section">
          <h3>З чого будуємо</h3>
          <ul class="material-list">
            <li><span>Технологія</span><strong>${house.tech}</strong></li>
            <li><span>Фундамент</span><strong>${house.foundation}</strong></li>
            <li><span>Несучі стіни</span><strong>${house.walls}</strong></li>
            <li><span>Утеплення</span><strong>${house.insulation}</strong></li>
            <li><span>Фасад</span><strong>${house.facade}</strong></li>
            <li><span>Покрівля</span><strong>${house.roof}</strong></li>
            <li><span>Опалення</span><strong>${house.heating}</strong></li>
          </ul>
        </section>

        <section class="dialog-section">
          <h3>Структура бюджету</h3>
          <ul class="budget-list">
            <li><span>Проєкт, фундамент і коробка</span><strong>${formatEuro(budget.shell)}</strong></li>
            <li><span>Дах, вікна, утеплення, фасад</span><strong>${formatEuro(budget.envelope)}</strong></li>
            <li><span>Інженерія та енергообладнання</span><strong>${formatEuro(budget.systems)}</strong></li>
            <li><span>Внутрішні роботи й санвузли</span><strong>${formatEuro(budget.finishes)}</strong></li>
          </ul>
        </section>
      </div>

      <section class="dialog-section" style="margin-top: 48px">
        <h3>Орієнтовний шлях будівництва</h3>
        <ol class="timeline-list">
          <li><span>1–2 міс.</span><strong>Адаптація проєкту та дозволи</strong></li>
          <li><span>2–4 міс.</span><strong>Земляні роботи, фундамент, коробка</strong></li>
          <li><span>2–4 міс.</span><strong>Контур, фасад та інженерія</strong></li>
          <li><span>2–5 міс.</span><strong>Оздоблення, пусконалагодження, здача</strong></li>
        </ol>
      </section>

      <p class="dialog-disclaimer">
        Оцінка не включає земельну ділянку, меблі, кухню, благоустрій, подовжені зовнішні мережі та нестандартні роботи через геологію чи складний доступ. Фінальний кошторис можливий після прив'язки проєкту до ділянки та пропозицій місцевих підрядників.
      </p>
    </div>
  `;
  dialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeDialog() {
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
});
controls.areaMax.addEventListener("input", () => {
  controls.areaRange.value = controls.areaMax.value;
  updateRange(controls.areaRange, controls.areaMax);
});

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
  if (control === controls.priceRange || control === controls.areaRange) return;
  control.addEventListener(control.type === "search" ? "input" : "change", render);
});
document.querySelectorAll("[data-reset-filters]").forEach((button) => button.addEventListener("click", resetFilters));

const filterBackdrop = document.querySelector("#filter-backdrop");
function openFilters() {
  document.body.classList.add("filters-open");
  filterBackdrop.hidden = false;
  document.querySelector("#close-filters").focus();
}
function closeFilters() {
  document.body.classList.remove("filters-open");
  filterBackdrop.hidden = true;
  document.querySelector("#open-filters").focus();
}
document.querySelector("#open-filters").addEventListener("click", openFilters);
document.querySelector("#close-filters").addEventListener("click", closeFilters);
document.querySelector("#apply-filters").addEventListener("click", closeFilters);
filterBackdrop.addEventListener("click", closeFilters);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("filters-open")) closeFilters();
});

updateRange(controls.priceRange, controls.priceMax);
updateRange(controls.areaRange, controls.areaMax);
render();
