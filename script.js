const CLASS_OPTIONS = [
  {id:'econom',label:'Квартира эконом-класса',sub:'Практичные решения'},
  {id:'comfort',label:'Квартира комфорт-класса',sub:'Баланс качества и бюджета'},
  {id:'business',label:'Квартира бизнес-класса',sub:'Повышенный уровень материалов'},
  {id:'private-house',label:'Частный дом',sub:'Комплексное решение'}
];

const URGENCY_OPTIONS = [
  {id:'urgent',label:'1–2 недели',sub:'Нужно начать в ближайшее время',icon:'urgent'},
  {id:'month',label:'В течение месяца',sub:'Планирую ближайший запуск',icon:'month'},
  {id:'quarter',label:'В течение 2–3 месяцев',sub:'Есть время спокойно подготовить проект',icon:'month'},
  {id:'looking',label:'Пока изучаю варианты',sub:'Сравниваю решения и стоимость',icon:'looking'}
];

const STAGE_OPTIONS = [
  {id:'ready',label:'Уже можно проводить замер',sub:'Помещение готово к точным замерам',icon:'measure'},
  {id:'renovation',label:'Идёт ремонт',sub:'Учтём текущие работы и коммуникации',icon:'repair'},
  {id:'keys-soon',label:'Получаем ключи в ближайшее время',sub:'Подготовим проект к моменту получения ключей',icon:'keys'},
  {id:'planning',label:'Пока только планируем',sub:'Поможем определить правильный порядок действий',icon:'plan'}
];

const STYLES = [
  {id:'modern',label:'Современный'},
  {id:'minimal',label:'Минимализм'},
  {id:'classic',label:'Классический'},
  {id:'custom',label:'Свой вариант'}
];

const PACKAGE_OPTIONS = [
  {
    id:'standard',
    label:'Стандарт',
    sub:'Практичные материалы и надёжная фурнитура',
    note:'Оптимальный баланс качества и бюджета'
  },
  {
    id:'premium',
    label:'Премиум',
    sub:'Фасады, покрытия и фурнитура повышенного класса',
    note:'Больше тактильности, ресурса и выразительных деталей'
  },
  {
    id:'undecided',
    label:'Пока не определился',
    sub:'Покажем оба варианта и объясним разницу',
    note:'Сравним материалы, фурнитуру и стоимость на консультации'
  }
];

let styleImagesPreloaded = false;
function preloadStyleImages(){
  if(styleImagesPreloaded) return;
  styleImagesPreloaded = true;
  [
    'assets/styles/style-modern.webp',
    'assets/styles/style-minimal.webp',
    'assets/styles/style-classic.webp',
    'assets/styles/style-custom.webp'
  ].forEach(src => {
    const image = new Image();
    image.src = src;
  });
}

const CATEGORIES = {
  kitchen:{
    label:'Кухня',
    step1Title:'Выберите форму кухни',
    step1:[
      {id:'straight',label:'Прямая'},
      {id:'corner',label:'Угловая'},
      {id:'p-shape',label:'П-образная'},
      {id:'island',label:'С островом'}
    ],
    step3:[
      {id:'light',label:'Подсветка',sub:'Рабочая и декоративная'},
      {id:'gold-handles',label:'Латунные ручки',sub:'Тёплый металлический акцент'},
      {id:'no-handles',label:'Без ручек',sub:'Чистые фасады и push-механизм'},
      {id:'glass',label:'Стеклянные фасады',sub:'Лёгкие витрины для посуды'}
    ]
  },
  wardrobe:{
    label:'Шкаф',
    step1Title:'Выберите тип шкафа',
    step1:[
      {id:'sliding',label:'Шкаф-купе'},
      {id:'hinged',label:'Распашной'},
      {id:'built-in',label:'Встроенный'},
      {id:'corner',label:'Угловой'}
    ],
    step3:[
      {id:'mirror',label:'Зеркало',sub:'На фасаде или внутри'},
      {id:'light',label:'Подсветка',sub:'Автоматическое включение'},
      {id:'glass',label:'Стеклянные секции',sub:'Для открытой демонстрации'},
      {id:'glossy',label:'Глянцевые фасады',sub:'Больше света и глубины'}
    ]
  },
  'walkin-closet':{
    label:'Гардеробная',
    step1Title:'Выберите тип гардеробной',
    step1:[
      {id:'open',label:'Открытая'},
      {id:'closed',label:'Закрытая'},
      {id:'island',label:'С островом'}
    ],
    step3:[
      {id:'light',label:'Подсветка',sub:'Внутри каждой секции'},
      {id:'baskets',label:'Выдвижные корзины',sub:'Для белья и аксессуаров'},
      {id:'mirror',label:'Зеркало',sub:'В полный рост'},
      {id:'iron-board',label:'Гладильная доска',sub:'Скрытая встроенная система'}
    ]
  },
  bedroom:{
    label:'Спальня',
    step1Title:'Выберите комплект',
    step1:[
      {id:'bed',label:'Кровать'},
      {id:'bed-nightstands',label:'Кровать + тумбы'},
      {id:'bed-wardrobe',label:'Кровать + шкаф'},
      {id:'full-set',label:'Полный комплект'}
    ],
    step3:[
      {id:'soft-headboard',label:'Мягкое изголовье',sub:'Тактильная обивка и комфорт'},
      {id:'lift-mechanism',label:'Подъёмный механизм',sub:'Дополнительное хранение'},
      {id:'light',label:'Подсветка',sub:'Мягкий вечерний сценарий'},
      {id:'nightstands',label:'Прикроватные тумбы',sub:'В едином дизайне'}
    ]
  },
  hallway:{
    label:'Прихожая',
    step1Title:'Выберите тип прихожей',
    step1:[
      {id:'wardrobe-hanger',label:'Шкаф + вешалка'},
      {id:'wardrobe-mirror',label:'Шкаф + зеркало'},
      {id:'wardrobe-cabinet',label:'Шкаф со встроенным пуфиком'},
      {id:'full-set',label:'Полный комплект'}
    ],
    step3:[
      {id:'seat',label:'Мягкое сиденье',sub:'Удобно переобуваться'},
      {id:'light',label:'Подсветка',sub:'В нишах и внутри шкафа'},
      {id:'full-mirror',label:'Зеркало в полный рост',sub:'Встроено в композицию'},
      {id:'shoe-cabinet',label:'Обувная тумба',sub:'Закрытое хранение обуви'}
    ]
  },
  vanity:{
    label:'Туалетный столик',
    step1Title:'Выберите тип столика',
    step1:[
      {id:'with-mirror',label:'Базовый туалетный столик'},
      {id:'full-set',label:'Полная бьюти-зона'}
    ],
    step3:[
      {id:'light',label:'LED-подсветка зеркала',sub:'Ровный свет для макияжа'},
      {id:'drawers',label:'Дополнительные ящики',sub:'Хранение косметики'},
      {id:'open-shelves',label:'Боковые открытые полки',sub:'Всё нужное под рукой'},
      {id:'sockets',label:'Встроенная розетка',sub:'Для фена и стайлера'}
    ]
  },
  bathroom:{
    label:'Санузел',
    step1Title:'Выберите тип мебели',
    step1:[
      {id:'sink-cabinet',label:'Тумба под раковину'},
      {id:'full-set',label:'Полная композиция'}
    ],
    step3:[
      {id:'light',label:'Подсветка',sub:'В зеркале и нишах'},
      {id:'dryer',label:'Сушилка',sub:'Скрытая функциональная секция'},
      {id:'basket',label:'Корзина для белья',sub:'Встроена в мебель'},
      {id:'glass-shelves',label:'Стеклянные полки',sub:'Лёгкое хранение мелочей'}
    ]
  },
  'tv-zone':{
    label:'ТВ-зона',
    step1Title:'Выберите тип ТВ-зоны',
    step1:[
      {id:'tv-stand',label:'Минималистичная ТВ-зона'},
      {id:'full-set',label:'Полная ТВ-стена'}
    ],
    step3:[
      {id:'light',label:'Подсветка',sub:'Мягкий свет за панелями'},
      {id:'cable-channel',label:'Скрытые провода',sub:'Чистая стена без кабелей'},
      {id:'glass-shelves',label:'Стеклянные полки',sub:'Для декора и техники'},
      {id:'stand',label:'Подвесная тумба',sub:'Хранение без визуального шума'}
    ]
  }
};

const PROCESS_STEPS = [
  {time:'День 1',title:'Заявка и консультация',text:'Обсуждаем идею, пожелания и ориентир по бюджету.'},
  {time:'День 2',title:'Бесплатный замер',text:'Фиксируем размеры, коммуникации и особенности помещения.'},
  {time:'День 3',title:'Проект и точная смета',text:'Согласовываем конструкцию, материалы, наполнение и стоимость.'},
  {time:'День 4',title:'Договор и оплата',text:'Фиксируем проект, сроки, комплектацию и запускаем заказ.'},
  {time:'Дни 5–15',title:'Производство',text:'Изготавливаем мебель по утверждённому проекту.'},
  {time:'День 15',title:'Доставка и монтаж',text:'Устанавливаем мебель и проверяем каждый узел вместе с вами.'}
];

const REVIEWS = [
  {who:'Айгерим Т.',where:'ЖК Green City, Алматы',text:'Кухня получилась ровно как в проекте. Материалы показали заранее, а стоимость после согласования не менялась.'},
  {who:'Мурат С.',where:'Медеуский район, Алматы',text:'Гардеробную спроектировали под нестандартную нишу. Всё встало точно, монтаж закончили аккуратно и без задержек.'},
  {who:'Дана К.',where:'Бостандыкский район, Алматы',text:'Понятная схема оплаты сняла опасения. После установки всё спокойно проверили и только потом внесли оставшуюся сумму.'},
  {who:'Алия Н.',where:'ЖК 4YOU, Алматы',text:'Прислала референс из Pinterest, а дизайнер адаптировал его под нашу квартиру. Особенно понравилось, как продумали хранение.'},
  {who:'Ерлан М.',where:'Наурызбайский район, Алматы',text:'Заказывали прихожую и шкафы в спальню. Замер, договор и монтаж прошли понятно, результат выглядит цельно и аккуратно.'}
];

const FAQ = [
  {q:'Сколько стоит мебель под ключ?',a:'Стоимость зависит от размеров, материалов и комплектации. На сайте показываем ориентировочный диапазон, а точную смету готовим после замера.'},
  {q:'Можно ли изменить проект?',a:'Да. До утверждения проекта можно скорректировать планировку, материалы и детали.'},
  {q:'В каких городах вы работаете?',a:'Основные регионы — Алматы, Астана и область. Возможность работы в других городах уточнит менеджер.'},
  {q:'Сколько занимает замер?',a:'Обычно 30–40 минут. Замер бесплатный и ни к чему не обязывает.'},
  {q:'Как проходит оплата?',a:'30% вносится на старте производства, оставшиеся 70% — после установки и проверки мебели.'}
];

const EXTRA_ICON_TYPES = {
  light:'light',
  'gold-handles':'handles',
  'no-handles':'touch',
  glass:'glass',
  mirror:'mirror',
  glossy:'shine',
  baskets:'basket',
  basket:'basket',
  'iron-board':'board',
  'soft-headboard':'headboard',
  'lift-mechanism':'lift',
  nightstands:'drawers',
  seat:'seat',
  'full-mirror':'mirror',
  'shoe-cabinet':'shoe',
  drawers:'drawers',
  'open-shelves':'shelves',
  sockets:'socket',
  dryer:'dryer',
  'glass-shelves':'shelves',
  'cable-channel':'cable',
  stand:'stand'
};

const state = {
  cls:null,
  urgency:null,
  category:null,
  step1:null,
  style:null,
  stage:null,
  package:null,
  details:[],
  name:'',
  phone:''
};

const STEP_ORDER = ['q1','q2','q3','c1','c2','c3','stage','package','form'];
const TOTAL_STEPS = STEP_ORDER.length;

const icon = id => `<svg aria-hidden="true"><use href="#${id}"></use></svg>`;
const checkIcon = () => `<span class="option-check">${icon('i-check')}</span>`;

function extraIcon(type){
  const shapes = {
    light:'<path d="M8 17h8M9 14h6l1.5-2.5a5 5 0 1 0-9 0L9 14Z"/><path d="M12 2V.5M4.8 5.2 3.6 4M19.2 5.2 20.4 4"/>',
    handles:'<rect x="4" y="5" width="16" height="14" rx="3"/><path d="M9 9v6M15 9v6"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/>',
    touch:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v5M12 13l3 2M12 13l-3 2"/>',
    glass:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M12 3v18M8 7l2-2M14 17l2-2"/>',
    mirror:'<rect x="6" y="2.5" width="12" height="19" rx="6"/><path d="m9 8 3-3M9 13l6-6"/>',
    shine:'<path d="M12 2 14 8l6 2-6 2-2 6-2-6-6-2 6-2 2-6Z"/><path d="m18 16 .8 2.2L21 19l-2.2.8L18 22l-.8-2.2L15 19l2.2-.8L18 16Z"/>',
    basket:'<path d="M4 9h16l-2 11H6L4 9Z"/><path d="M8 9a4 4 0 0 1 8 0M8 13v4M12 13v4M16 13v4"/>',
    board:'<path d="M5 8h14l-2 6H7L5 8Z"/><path d="m8 14-2 7M16 14l2 7"/>',
    headboard:'<path d="M4 20V9a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v11"/><path d="M8 5v15M16 5v15M4 15h16"/>',
    lift:'<path d="M3 18h18M5 17V9h12l3 5"/><path d="m14 10 3-3 3 3M17 7v7"/>',
    drawers:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 10h16M4 15h16M10 7h4M10 12.5h4M10 17.5h4"/>',
    seat:'<path d="M5 12h14v5H5zM7 17v4M17 17v4"/><path d="M6 12V8a6 6 0 0 1 12 0v4"/>',
    shoe:'<path d="M4 15c4 0 6-3 8-7 2 5 4 6 8 7v4H4v-4Z"/><path d="M8 15h8"/>',
    shelves:'<path d="M4 5h16M4 12h16M4 19h16"/><path d="M6 3v18M18 3v18"/>',
    socket:'<rect x="5" y="3" width="14" height="18" rx="4"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="10" r="1"/><path d="M10 16h4"/>',
    dryer:'<path d="M6 3v18M18 3v18M6 7h12M6 12h12M6 17h12"/>',
    cable:'<path d="M5 4v6a4 4 0 0 0 4 4h6a4 4 0 0 1 4 4v2"/><path d="M3 4h4M17 20h4"/>',
    stand:'<path d="M4 8h16v9H4zM7 17v3M17 17v3"/><path d="M9 12h6"/>',
    measure:'<path d="M4 18 18 4l2 2L6 20l-2-2Z"/><path d="m8 16-2-2m5-1-2-2m5-1-2-2m5-1-2-2"/>',
    repair:'<path d="m14 6 4-4 4 4-4 4"/><path d="m18 6-8 8"/><path d="m3 17 4 4 4-4-4-4-4 4Z"/>',
    keys:'<circle cx="8" cy="10" r="5"/><path d="m12 13 8 8m-3-3 2-2m-5-1 2-2"/>',
    plan:'<path d="M4 20V6l5-2 6 2 5-2v14l-5 2-6-2-5 2Z"/><path d="M9 4v14m6-12v14"/>'
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${shapes[type] || shapes.stand}</svg>`;
}

function packageIcon(type){
  if(type === 'premium'){
    return `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="m8 19 8-9h16l8 9-16 21L8 19Z"/><path d="m16 10 8 30 8-30M8 19h32"/></svg>`;
  }
  if(type === 'undecided'){
    return `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="17"/><path d="M18.5 18a6 6 0 0 1 11.5 2.5c0 5-6 5-6 10"/><path d="M24 36h.01"/></svg>`;
  }
  return `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 13h28v25H10z"/><path d="M10 21h28M18 13v25M30 13v25"/><path d="m20 31 3 3 6-7"/></svg>`;
}

function imageFor(category,stage,id){
  const maps = {
    kitchen:{straight:'assets/kitchen-straight.webp',corner:'assets/kitchen-corner.webp','p-shape':'assets/kitchen-u-shape.webp',island:'assets/kitchen-island.webp'},
    wardrobe:{sliding:'assets/wardrobe-sliding.webp',hinged:'assets/wardrobe-hinged.webp','built-in':'assets/wardrobe-built-in.webp',corner:'assets/wardrobe-corner.webp'},
    'walkin-closet':{open:'assets/walkin-open.webp',closed:'assets/walkin-closed.webp',island:'assets/walkin-island.webp'},
    bedroom:{bed:'assets/bed.webp','bed-nightstands':'assets/bed-nightstands.webp','bed-wardrobe':'assets/bed-wardrobe.webp','full-set':'assets/full-bedroom.webp'},
    hallway:{'wardrobe-hanger':'assets/hallway-hanger.webp','wardrobe-mirror':'assets/hallway-mirror.webp','wardrobe-cabinet':'assets/hallway-bench.webp','full-set':'assets/hallway-full-set.webp'},
    vanity:{'with-mirror':'assets/vanity-mirror.webp','full-set':'assets/vanity-full-set.webp'},
    bathroom:{'sink-cabinet':'assets/bathroom-vanity.webp','full-set':'assets/bathroom-full-set.webp'},
    'tv-zone':{'tv-stand':'assets/tv-minimal.webp','full-set':'assets/tv-full-wall.webp'}
  };
  const styleMaps = {
    modern:'assets/styles/style-modern.webp',
    minimal:'assets/styles/style-minimal.webp',
    classic:'assets/styles/style-classic.webp',
    custom:'assets/styles/style-custom.webp'
  };
  if(stage === 'step2') return styleMaps[id] || null;
  return stage === 'step1' ? (maps[category] || {})[id] || null : null;
}

function placeholder(){
  const el = document.createElement('span');
  el.className = 'photo-placeholder';
  return el;
}

function updateProgress(stepId){
  const idx = STEP_ORDER.indexOf(stepId);
  const n = idx < 0 ? TOTAL_STEPS : idx + 1;
  document.getElementById('progressFill').style.width = `${n / TOTAL_STEPS * 100}%`;
  document.getElementById('progressLabel').textContent = `Шаг ${n} из ${TOTAL_STEPS}`;
}

function selectSingle(container,chosen){
  [...container.children].forEach(el => el.classList.remove('selected'));
  chosen.classList.add('selected');
}

function renderQuizOptions(){
  const q1 = document.getElementById('q1-list');
  CLASS_OPTIONS.forEach(item => {
    const button = document.createElement('button');
    button.className = 'option';
    button.innerHTML = `<span class="option-icon"><img src="assets/icons-3d/${item.icon || item.id}.webp" alt=""></span><span class="option-text"><strong>${item.label}</strong><small>${item.sub}</small></span>${checkIcon()}`;
    button.onclick = () => {
      state.cls = item.id;
      selectSingle(q1,button);
      setTimeout(() => transition('q1','q2'),180);
    };
    q1.appendChild(button);
  });

  const q2 = document.getElementById('q2-list');
  URGENCY_OPTIONS.forEach(item => {
    const button = document.createElement('button');
    button.className = 'option';
    const urgencyIcon = item.id === 'quarter'
      ? '<span class="option-icon option-icon--hourglass" aria-hidden="true">⏳</span>'
      : `<span class="option-icon"><img src="assets/icons-3d/${item.icon || item.id}.webp" alt=""></span>`;
    button.innerHTML = `${urgencyIcon}<span class="option-text"><strong>${item.label}</strong><small>${item.sub}</small></span>${checkIcon()}`;
    button.onclick = () => {
      state.urgency = item.id;
      selectSingle(q2,button);
      setTimeout(() => transition('q2','q3'),180);
    };
    q2.appendChild(button);
  });

  const q3 = document.getElementById('q3-list');
  Object.entries(CATEGORIES).forEach(([key,item]) => {
    const button = document.createElement('button');
    button.className = 'category-option';
    button.innerHTML = `<span class="category-media"><img src="assets/categories/${key}.webp" alt="${item.label}"></span><span class="category-name">${item.label}</span>`;
    button.onclick = () => {
      state.category = key;
      state.step1 = null;
      state.style = null;
      state.stage = null;
      state.package = null;
      state.details = [];
      selectSingle(q3,button);
      preloadStyleImages();
      renderC1();
      setTimeout(() => transition('q3','c1'),180);
    };
    q3.appendChild(button);
  });
}

function makePhotoOption(opt,stage){
  const button = document.createElement('button');
  button.className = `photo-option photo-option--${stage}`;
  const imgPath = imageFor(state.category,stage,opt.id);
  if(imgPath){
    const img = document.createElement('img');
    img.src = imgPath;
    img.alt = opt.label;
    img.loading = stage === 'step2' ? 'eager' : 'lazy';
    img.decoding = 'async';
    img.width = 1200;
    img.height = 900;
    button.appendChild(img);
  }else{
    button.appendChild(placeholder());
  }
  const check = document.createElement('span');
  check.className = 'photo-check';
  check.innerHTML = icon('i-check');
  button.appendChild(check);
  const caption = document.createElement('span');
  caption.className = 'photo-caption';
  caption.textContent = opt.label;
  button.appendChild(caption);
  return button;
}

function renderC1(){
  const cat = CATEGORIES[state.category];
  if(!cat) return;
  document.getElementById('c1-label').textContent = `Шаг 4 · ${cat.label}`;
  document.getElementById('c1-title').textContent = cat.step1Title;
  const list = document.getElementById('c1-list');
  list.innerHTML = '';
  cat.step1.forEach(opt => {
    const button = makePhotoOption(opt,'step1');
    button.onclick = () => {
      state.step1 = opt.id;
      selectSingle(list,button);
      setTimeout(() => {
        renderC2();
        transition('c1','c2');
      },180);
    };
    list.appendChild(button);
  });
}

function renderC2(){
  const list = document.getElementById('c2-list');
  list.innerHTML = '';
  STYLES.forEach(opt => {
    const button = makePhotoOption(opt,'step2');
    button.onclick = () => {
      state.style = opt.id;
      selectSingle(list,button);
      setTimeout(() => {
        renderC3();
        transition('c2','c3');
      },180);
    };
    list.appendChild(button);
  });
}

function renderPackage(){
  const list = document.getElementById('package-list');
  list.innerHTML = '';
  PACKAGE_OPTIONS.forEach(opt => {
    const button = document.createElement('button');
    button.className = `package-card package-card--${opt.id}`;
    button.innerHTML = `
      <span class="package-icon">${packageIcon(opt.id)}</span>
      <span class="package-copy">
        <strong>${opt.label}</strong>
        <small>${opt.sub}</small>
        <em>${opt.note}</em>
      </span>
      <span class="package-check">${icon('i-check')}</span>`;
    button.onclick = () => {
      state.package = opt.id;
      selectSingle(list,button);
      setTimeout(() => {
        transition('package','form');
      },220);
    };
    list.appendChild(button);
  });
}

function renderStage(){
  const list = document.getElementById('stage-list');
  list.innerHTML = '';
  STAGE_OPTIONS.forEach((opt,index) => {
    const button = document.createElement('button');
    button.className = `option stage-option stage-option--tone-${index + 1}`;
    button.innerHTML = `
      <span class="stage-icon">${extraIcon(opt.icon)}</span>
      <span class="option-text"><strong>${opt.label}</strong><small>${opt.sub}</small></span>
      ${checkIcon()}`;
    button.onclick = () => {
      state.stage = opt.id;
      selectSingle(list,button);
      setTimeout(() => {
        renderPackage();
        transition('stage','package');
      },220);
    };
    list.appendChild(button);
  });
}

function renderC3(){
  const cat = CATEGORIES[state.category];
  const list = document.getElementById('c3-list');
  list.innerHTML = '';
  cat.step3.forEach((opt,index) => {
    const type = EXTRA_ICON_TYPES[opt.id] || 'stand';
    const button = document.createElement('button');
    button.className = `extra-option extra-option--tone-${index + 1}`;
    button.innerHTML = `
      <span class="extra-icon">${extraIcon(type)}</span>
      <span class="extra-copy"><strong>${opt.label}</strong><small>${opt.sub || ''}</small></span>
      <span class="extra-check">${icon('i-check')}</span>`;
    if(state.details.includes(opt.id)) button.classList.add('selected');
    button.onclick = () => {
      const idx = state.details.indexOf(opt.id);
      if(idx > -1) state.details.splice(idx,1);
      else state.details.push(opt.id);
      button.classList.toggle('selected');
    };
    list.appendChild(button);
  });
}

function nextStep(from){
  if(from === 'c3') renderStage();
  const idx = STEP_ORDER.indexOf(from);
  transition(from,STEP_ORDER[Math.min(idx + 1,STEP_ORDER.length - 1)]);
}

function prevStep(from){
  const idx = STEP_ORDER.indexOf(from);
  if(idx <= 0) return;
  transition(from,STEP_ORDER[idx - 1]);
}

function transition(fromKey,toKey){
  const from = document.getElementById(`step-${fromKey}`);
  const to = document.getElementById(`step-${toKey}`);
  if(!from || !to) return;
  from.classList.remove('active');
  setTimeout(() => {
    to.classList.add('active');
    updateProgress(toKey);
    window.scrollTo({top:0,behavior:'smooth'});
  },120);
}

function submitForm(){
  const nameInput = document.getElementById('inp-name');
  const phoneInput = document.getElementById('inp-phone');
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const digits = phone.replace(/\D/g,'');
  const nameOk = name && !/\d/.test(name);
  const phoneOk = digits.length >= 10;
  nameInput.classList.toggle('error',!nameOk);
  phoneInput.classList.toggle('error',!phoneOk);
  document.getElementById('err-name').classList.toggle('show',!nameOk);
  document.getElementById('err-phone').classList.toggle('show',!phoneOk);
  if(!nameOk || !phoneOk) return;
  state.name = name;
  state.phone = phone;
  document.getElementById('quizShell').classList.add('result-mode');
  document.getElementById('step-form').classList.remove('active');
  document.getElementById('topbar').style.display = 'none';
  document.getElementById('trustDock').classList.add('hidden');
  setTimeout(() => {
    renderResult();
    document.getElementById('step-result').classList.add('active');
    document.getElementById('warming').classList.add('visible');
    window.scrollTo({top:0,behavior:'smooth'});
  },520);
}

function renderResult(){
  const cat = CATEGORIES[state.category];
  const form = cat.step1.find(item => item.id === state.step1);
  const style = STYLES.find(item => item.id === state.style);
  const selectedStage = STAGE_OPTIONS.find(item => item.id === state.stage);
  const selectedPackage = PACKAGE_OPTIONS.find(item => item.id === state.package);
  const resultTitles = {
    kitchen:'Концепция вашей кухни готова',
    wardrobe:'Концепция вашего шкафа готова',
    'walkin-closet':'Концепция вашей гардеробной готова',
    bedroom:'Концепция вашей спальни готова',
    hallway:'Концепция вашей прихожей готова',
    vanity:'Концепция вашего туалетного столика готова',
    bathroom:'Концепция вашей мебели для ванной готова',
    'tv-zone':'Концепция вашей ТВ-зоны готова'
  };
  document.getElementById('resultHeadline').textContent = resultTitles[state.category] || 'Концепция вашей мебели готова';
  document.getElementById('resultParams').innerHTML = [
    cat.label,
    form.label,
    style.id === 'custom' ? 'Стиль по вашему референсу' : style.label,
    selectedStage.label,
    selectedPackage.label
  ].map(x => `<span class="badge">${x}</span>`).join('');

  const detailBox = document.getElementById('resultDetails');
  detailBox.innerHTML = '';
  if(state.details.length){
    state.details.forEach(id => {
      const opt = cat.step3.find(item => item.id === id);
      const div = document.createElement('div');
      div.className = 'detail-mini';
      div.textContent = opt.label;
      detailBox.appendChild(div);
    });
  }else{
    detailBox.innerHTML = '<div class="detail-mini">Без дополнительных опций</div>';
  }

  document.getElementById('priceValue').textContent = state.package === 'premium'
    ? 'от 1 500 000 до 3 000 000 ₸'
    : state.package === 'standard'
      ? 'от 800 000 до 1 500 000 ₸'
      : 'от 800 000 до 3 000 000 ₸';

  const cls = CLASS_OPTIONS.find(item => item.id === state.cls).label;
  const urgency = URGENCY_OPTIONS.find(item => item.id === state.urgency).label;
  const stage = STAGE_OPTIONS.find(item => item.id === state.stage).label;
  const details = state.details.length
    ? state.details.map(id => cat.step3.find(item => item.id === id).label).join(', ')
    : 'без дополнительных опций';
  const message = encodeURIComponent(`Здравствуйте! Хочу заказать бесплатный замер.

Имя: ${state.name}
Телефон: ${state.phone}

Мебель: ${cat.label}
Класс объекта: ${cls}
Срочность: ${urgency}
Этап помещения: ${stage}

Конфигуратор:
- Форма: ${form.label}
- Стиль: ${style.id === 'custom' ? 'по моему референсу' : style.label}
- Комплектация: ${selectedPackage.label}
- Детали: ${details}`);
  document.getElementById('waMainBtn').href = `https://wa.me/77766387416?text=${message}`;
}

function renderWarming(){
  const portfolio = document.getElementById('portfolioCarousel');
  for(let i = 1; i <= 8; i++){
    const card = document.createElement('article');
    card.className = 'case-card';
    card.innerHTML = `<img class="case-image" src="assets/kitchen-straight.webp" alt="Проект мебели"><div class="case-info"><strong>Индивидуальный проект</strong><span>от ${850 + (i - 1) * 120} 000 ₸ · ${10 + i} дней</span></div>`;
    portfolio.appendChild(card);
  }

  const process = document.getElementById('processSteps');
  PROCESS_STEPS.forEach((item,index) => {
    const row = document.createElement('article');
    row.className = 'process-item';
    row.innerHTML = `<b>0${index + 1}</b><div><span class="process-time">${item.time}</span><h3>${item.title}</h3><p>${item.text}</p></div>`;
    process.appendChild(row);
  });

  const reviews = document.getElementById('reviewsList');
  REVIEWS.forEach(item => {
    const card = document.createElement('article');
    card.className = 'review';
    card.innerHTML = `<div class="review-media"><img src="assets/kitchen-straight.webp" alt="Проект клиента"></div><div class="review-body"><strong>${item.who}</strong><small>${item.where}</small><p>${item.text}</p></div>`;
    reviews.appendChild(card);
  });

  const faq = document.getElementById('faqList');
  FAQ.forEach(item => {
    const row = document.createElement('div');
    row.className = 'faq-item';
    row.innerHTML = `<button class="faq-question"><span>${item.q}</span><span>+</span></button><div class="faq-answer">${item.a}</div>`;
    row.querySelector('button').onclick = () => row.classList.toggle('open');
    faq.appendChild(row);
  });
}

const phoneInput = document.getElementById('inp-phone');
phoneInput.addEventListener('input',event => {
  const digits = event.target.value.replace(/\D/g,'').replace(/^7/,'').slice(0,10);
  let value = '+7';
  if(digits.length) value += ` (${digits.slice(0,3)}`;
  if(digits.length >= 3) value += ')';
  if(digits.length > 3) value += ` ${digits.slice(3,6)}`;
  if(digits.length > 6) value += `-${digits.slice(6,8)}`;
  if(digits.length > 8) value += `-${digits.slice(8,10)}`;
  event.target.value = value;
});

renderQuizOptions();
renderWarming();
updateProgress('q1');
