const ICONS={
  econom:'i-building',comfort:'i-layers',business:'i-briefcase','private-house':'i-house',
  urgent:'i-bolt',month:'i-calendar',looking:'i-eye',
  kitchen:'i-kitchen',wardrobe:'i-wardrobe','walkin-closet':'i-hanger',bedroom:'i-bed',
  hallway:'i-door',vanity:'i-mirror',bathroom:'i-bath','tv-zone':'i-tv'
};

const CLASS_OPTIONS=[
  {id:'econom',label:'Эконом-класс',sub:'Практичные решения'},
  {id:'comfort',label:'Комфорт-класс',sub:'Баланс качества и бюджета'},
  {id:'business',label:'Бизнес-класс',sub:'Повышенный уровень материалов'},
  {id:'private-house',label:'Частный дом',sub:'Комплексное решение'}
];
const URGENCY_OPTIONS=[
  {id:'urgent',label:'Срочно',sub:'До 2 недель'},
  {id:'month',label:'В течение месяца',sub:'Планируем ближайший запуск'},
  {id:'looking',label:'Присматриваюсь',sub:'Изучаю варианты'}
];
const STYLES=[
  {id:'modern',label:'Современный'},
  {id:'classic',label:'Классический'},
  {id:'minimal',label:'Минимализм'},
  {id:'loft',label:'Лофт'}
];
const CATEGORIES={
  kitchen:{label:'Кухня',step1Title:'Выберите форму кухни',
    step1:[{id:'straight',label:'Прямая'},{id:'corner',label:'Угловая'},{id:'p-shape',label:'П-образная'},{id:'island',label:'С островом'}],
    step3:[{id:'light',label:'Подсветка'},{id:'gold-handles',label:'Ручки золото'},{id:'no-handles',label:'Без ручек'},{id:'glass',label:'Стеклянные фасады'}]},
  wardrobe:{label:'Шкаф',step1Title:'Выберите тип шкафа',
    step1:[{id:'sliding',label:'Шкаф-купе'},{id:'hinged',label:'Распашной'},{id:'built-in',label:'Встроенный'},{id:'corner',label:'Угловой'}],
    step3:[{id:'mirror',label:'Зеркало'},{id:'light',label:'Подсветка'},{id:'glass',label:'Стекло'},{id:'glossy',label:'Глянец'}]},
  'walkin-closet':{label:'Гардеробная',step1Title:'Выберите тип гардеробной',
    step1:[{id:'open',label:'Открытая'},{id:'closed',label:'Закрытая'},{id:'combo',label:'Комбинированная'},{id:'island',label:'С островом'}],
    step3:[{id:'light',label:'Подсветка'},{id:'baskets',label:'Корзины'},{id:'mirror',label:'Зеркало'},{id:'iron-board',label:'Гладильная доска'}]},
  bedroom:{label:'Спальня',step1Title:'Выберите комплект',
    step1:[{id:'bed',label:'Кровать'},{id:'bed-nightstands',label:'Кровать + тумбы'},{id:'bed-wardrobe',label:'Кровать + шкаф'},{id:'full-set',label:'Полный комплект'}],
    step3:[{id:'soft-headboard',label:'Мягкое изголовье'},{id:'lift-mechanism',label:'Подъёмный механизм'},{id:'light',label:'Подсветка'},{id:'nightstands',label:'Тумбы'}]},
  hallway:{label:'Прихожая',step1Title:'Выберите тип прихожей',
    step1:[{id:'wardrobe-hanger',label:'Шкаф + вешалка'},{id:'wardrobe-mirror',label:'Шкаф + зеркало'},{id:'wardrobe-cabinet',label:'Шкаф + тумба'},{id:'full-set',label:'Полный комплект'}],
    step3:[{id:'seat',label:'Сиденье'},{id:'light',label:'Подсветка'},{id:'full-mirror',label:'Зеркало в полный рост'},{id:'shoe-cabinet',label:'Обувная тумба'}]},
  vanity:{label:'Туалетный столик',step1Title:'Выберите тип столика',
    step1:[{id:'with-mirror',label:'С зеркалом'},{id:'with-light',label:'С подсветкой'},{id:'with-drawers',label:'С ящиками'},{id:'corner',label:'Угловой'}],
    step3:[{id:'light',label:'Подсветка'},{id:'drawers',label:'Ящики'},{id:'pouf',label:'Пуф'},{id:'sockets',label:'Розетки'}]},
  bathroom:{label:'Санузел',step1Title:'Выберите тип мебели',
    step1:[{id:'sink-cabinet',label:'Тумба с раковиной'},{id:'tall-cabinet',label:'Пенал'},{id:'mirror-cabinet',label:'Зеркальный шкаф'},{id:'full-set',label:'Полный комплект'}],
    step3:[{id:'light',label:'Подсветка'},{id:'dryer',label:'Сушилка'},{id:'basket',label:'Корзина'},{id:'glass-shelves',label:'Стеклянные полки'}]},
  'tv-zone':{label:'ТВ-зона',step1Title:'Выберите тип ТВ-зоны',
    step1:[{id:'tv-stand',label:'Тумба под ТВ'},{id:'wall-unit',label:'Стенка'},{id:'stand-shelves',label:'Тумба + полки'},{id:'stand-wardrobe',label:'Тумба + шкаф'}],
    step3:[{id:'light',label:'Подсветка'},{id:'cable-channel',label:'Кабель-канал'},{id:'glass-shelves',label:'Стеклянные полки'},{id:'stand',label:'Подставка'}]}
};
const PROCESS_STEPS=[
  {time:'День 1',title:'Заявка и консультация',text:'Обсуждаем идею, пожелания и ориентир по бюджету.'},
  {time:'День 2',title:'Бесплатный замер',text:'Фиксируем размеры, коммуникации и особенности помещения.'},
  {time:'День 3',title:'Проект и точная смета',text:'Согласовываем конструкцию, материалы, наполнение и стоимость.'},
  {time:'День 4',title:'Договор и оплата',text:'Фиксируем проект, сроки, комплектацию и запускаем заказ.'},
  {time:'Дни 5–15',title:'Производство',text:'Изготавливаем мебель по утверждённому проекту.'},
  {time:'День 15',title:'Доставка и монтаж',text:'Устанавливаем мебель и проверяем каждый узел вместе с вами.'}
];
const REVIEWS=[
  {who:'Айгерим Т.',where:'ЖК Green Line, Алматы',text:'Кухня получилась ровно как в проекте. Особенно понравилось, что материалы показали заранее и стоимость после согласования не менялась.'},
  {who:'Мурат С.',where:'Астана, район Есиль',text:'Гардеробную проектировали под нестандартную нишу. Всё встало точно, монтаж закончили за один день.'},
  {who:'Дана К.',where:'Алматы, Бостандыкский район',text:'Схема оплаты сняла опасения. После установки спокойно всё проверили, только потом внесли оставшуюся сумму.'}
];
const FAQ=[
  {q:'Сколько стоит мебель под ключ?',a:'Стоимость зависит от размеров, материалов и комплектации. На сайте показываем ориентировочный диапазон, а точную смету готовим после замера.'},
  {q:'Можно ли внести изменения в проект?',a:'Да. До утверждения 3D-проекта можно корректировать планировку, материалы и детали.'},
  {q:'В каких городах вы работаете?',a:'Основные регионы — Алматы, Астана и область. Возможность работы в других городах уточнит менеджер.'},
  {q:'Сколько занимает замер?',a:'Обычно 30–40 минут. Замер бесплатный и ни к чему не обязывает.'},
  {q:'Как проходит оплата?',a:'30% вносится на старте производства, остальные 70% — после установки и проверки мебели.'}
];

const state={cls:null,urgency:null,category:null,step1:null,style:null,details:[],name:'',phone:''};
const STEP_ORDER=['q1','q2','q3','c1','c2','c3','form'];
const TOTAL_STEPS=STEP_ORDER.length;

const icon=(id)=>`<svg><use href="#${id}"></use></svg>`;
const checkIcon=()=>`<span class="option-check">${icon('i-check')}</span>`;
const imageFor=(category,stage,id)=>{
  if(category!=='kitchen') return null;
  if(stage==='step1'){
    if(id==='straight') return 'assets/kitchen-straight-warm-minimal.png';
    if(id==='corner') return 'assets/kitchen-corner-warm-minimal.png';
    if(id==='p-shape') return 'assets/kitchen-u-warm-minimal.png';
  }
  if(stage==='step2'){
    if(id==='modern') return 'assets/kitchen-straight-warm-minimal.png';
    if(id==='minimal') return 'assets/kitchen-u-warm-minimal.png';
    if(id==='classic') return 'assets/kitchen-corner-warm-minimal.png';
  }
  return null;
};

function placeholder(){
  const el=document.createElement('span');
  el.className='photo-placeholder';
  return el;
}
function updateProgress(stepId){
  const idx=STEP_ORDER.indexOf(stepId);
  const n=idx<0?TOTAL_STEPS:idx+1;
  document.getElementById('progressFill').style.width=`${n/TOTAL_STEPS*100}%`;
  document.getElementById('progressLabel').textContent=`Шаг ${n} из ${TOTAL_STEPS}`;
}
function renderQuizOptions(){
  const q1=document.getElementById('q1-list');
  CLASS_OPTIONS.forEach(item=>{
    const button=document.createElement('button');
    button.className='option';
    button.innerHTML=`<span class="option-icon"><img src="assets/icons-3d/${item.id}.png" alt=""></span><span class="option-text"><strong>${item.label}</strong><small>${item.sub}</small></span>${checkIcon()}`;
    button.onclick=()=>{state.cls=item.id;selectSingle(q1,button);setTimeout(()=>transition('q1','q2'),500)};
    q1.appendChild(button);
  });
  const q2=document.getElementById('q2-list');
  URGENCY_OPTIONS.forEach(item=>{
    const button=document.createElement('button');
    button.className='option';
    button.innerHTML=`<span class="option-icon"><img src="assets/icons-3d/${item.id}.png" alt=""></span><span class="option-text"><strong>${item.label}</strong><small>${item.sub}</small></span>${checkIcon()}`;
    button.onclick=()=>{state.urgency=item.id;selectSingle(q2,button);setTimeout(()=>transition('q2','q3'),180)};
    q2.appendChild(button);
  });
  const q3=document.getElementById('q3-list');
  Object.entries(CATEGORIES).forEach(([key,item])=>{
    const button=document.createElement('button');
    button.className='category-option';
    button.innerHTML=`<span class="category-media"><img src="assets/categories/${key}.png" alt="${item.label}"></span><span class="category-name">${item.label}</span>`;
    button.onclick=()=>{
      state.category=key;state.step1=null;state.style=null;state.details=[];
      selectSingle(q3,button);renderC1();transition('q3','c1');
    };
    q3.appendChild(button);
  });
}
function selectSingle(container,chosen){
  [...container.children].forEach(el=>el.classList.remove('selected'));
  chosen.classList.add('selected');
}
function makePhotoOption(opt,stage,multiple=false){
  const button=document.createElement('button');
  button.className=`photo-option photo-option--${stage}`;
  const imgPath=imageFor(state.category,stage,opt.id);
  if(imgPath){
    const img=document.createElement('img');img.src=imgPath;img.alt=opt.label;button.appendChild(img);
  }else button.appendChild(placeholder());
  const check=document.createElement('span');check.className='photo-check';check.innerHTML=icon('i-check');button.appendChild(check);
  const caption=document.createElement('span');caption.className='photo-caption';caption.textContent=opt.label;button.appendChild(caption);
  if(multiple&&state.details.includes(opt.id)) button.classList.add('selected');
  return button;
}
function renderC1(){
  const cat=CATEGORIES[state.category];if(!cat)return;
  document.getElementById('c1-label').textContent=`Шаг 4 · ${cat.label}`;
  document.getElementById('c1-title').textContent=cat.step1Title;
  const list=document.getElementById('c1-list');list.innerHTML='';
  cat.step1.forEach(opt=>{
    const button=makePhotoOption(opt,'step1');
    button.onclick=()=>{state.step1=opt.id;selectSingle(list,button);setTimeout(()=>{renderC2();transition('c1','c2')},180)};
    list.appendChild(button);
  });
}
function renderC2(){
  const list=document.getElementById('c2-list');list.innerHTML='';
  STYLES.forEach(opt=>{
    const button=makePhotoOption(opt,'step2');
    button.onclick=()=>{state.style=opt.id;selectSingle(list,button);setTimeout(()=>{renderC3();transition('c2','c3')},180)};
    list.appendChild(button);
  });
}
function renderC3(){
  const cat=CATEGORIES[state.category],list=document.getElementById('c3-list');list.innerHTML='';
  cat.step3.forEach(opt=>{
    const button=makePhotoOption(opt,'step3',true);
    button.onclick=()=>{
      const idx=state.details.indexOf(opt.id);
      if(idx>-1)state.details.splice(idx,1);else state.details.push(opt.id);
      button.classList.toggle('selected');
    };
    list.appendChild(button);
  });
}
function nextStep(from){
  const idx=STEP_ORDER.indexOf(from);
  transition(from,STEP_ORDER[Math.min(idx+1,STEP_ORDER.length-1)]);
}
function prevStep(from){
  const idx=STEP_ORDER.indexOf(from);if(idx<=0)return;
  transition(from,STEP_ORDER[idx-1]);
}
function transition(fromKey,toKey){
  const from=document.getElementById(`step-${fromKey}`),to=document.getElementById(`step-${toKey}`);
  from.classList.remove('active');
  setTimeout(()=>{to.classList.add('active');updateProgress(toKey);window.scrollTo({top:0,behavior:'smooth'})},120);
}
function submitForm(){
  const nameInput=document.getElementById('inp-name'),phoneInput=document.getElementById('inp-phone');
  const name=nameInput.value.trim(),phone=phoneInput.value.trim(),digits=phone.replace(/\D/g,'');
  const nameOk=name&&!/\d/.test(name),phoneOk=digits.length>=10;
  nameInput.classList.toggle('error',!nameOk);phoneInput.classList.toggle('error',!phoneOk);
  document.getElementById('err-name').classList.toggle('show',!nameOk);
  document.getElementById('err-phone').classList.toggle('show',!phoneOk);
  if(!nameOk||!phoneOk)return;
  state.name=name;state.phone=phone;
  document.getElementById('step-form').classList.remove('active');
  document.getElementById('topbar').style.display='none';
  document.getElementById('trustDock').classList.add('hidden');
  setTimeout(()=>{document.getElementById('step-loading').classList.add('active');startLoading()},160);
}
function startLoading(){
  const rows=[...document.querySelectorAll('#loadingList div')];let index=0;
  const timer=setInterval(()=>{
    if(index<rows.length){rows[index].classList.add('done');index++;return}
    clearInterval(timer);renderResult();
    document.getElementById('step-loading').classList.remove('active');
    setTimeout(()=>{
      document.getElementById('step-result').classList.add('active');
      document.getElementById('warming').classList.add('visible');
      window.scrollTo({top:0,behavior:'smooth'});
    },150);
  },650);
}
function renderResult(){
  const cat=CATEGORIES[state.category];
  const form=cat.step1.find(item=>item.id===state.step1);
  const style=STYLES.find(item=>item.id===state.style);
  const resultImg=document.getElementById('resultImg');resultImg.innerHTML='';
  const imgPath=imageFor(state.category,'step1',state.step1)||imageFor(state.category,'step2',state.style);
  if(imgPath){const img=document.createElement('img');img.src=imgPath;img.alt=`${cat.label}: ${form.label}`;resultImg.appendChild(img)}else resultImg.appendChild(placeholder());
  document.getElementById('resultHeadline').textContent=`${state.name}, ваша концепция «${cat.label}» готова`;
  document.getElementById('resultParams').innerHTML=[cat.label,form.label,style.label].map(x=>`<span class="badge">${x}</span>`).join('');
  const detailBox=document.getElementById('resultDetails');detailBox.innerHTML='';
  if(state.details.length){
    state.details.forEach(id=>{
      const opt=cat.step3.find(item=>item.id===id);
      const div=document.createElement('div');div.className='detail-mini';div.textContent=opt.label;detailBox.appendChild(div);
    });
  }else detailBox.innerHTML='<div class="detail-mini">Без дополнительных опций</div>';
  const premium=state.cls==='business';
  document.getElementById('priceValue').textContent=premium?'от 1 500 000 до 3 000 000 ₸':'от 800 000 до 1 500 000 ₸';
  const cls=CLASS_OPTIONS.find(item=>item.id===state.cls).label;
  const urgency=URGENCY_OPTIONS.find(item=>item.id===state.urgency).label;
  const details=state.details.length?state.details.map(id=>cat.step3.find(item=>item.id===id).label).join(', '):'без дополнительных опций';
  const text=encodeURIComponent(`Здравствуйте! Хочу заказать бесплатный замер.

Имя: ${state.name}
Телефон: ${state.phone}

Мебель: ${cat.label}
Класс: ${cls}
Срочность: ${urgency}

Конфигуратор:
- Форма: ${form.label}
- Стиль: ${style.label}
- Детали: ${details}`);
  document.getElementById('waMainBtn').href=`https://wa.me/77766387416?text=${text}`;
}
function renderWarming(){
  const portfolio=document.getElementById('portfolioCarousel');
  for(let i=1;i<=8;i++){
    const card=document.createElement('article');card.className='case-card';
    card.innerHTML=`<span class="photo-placeholder"></span><div class="case-info"><strong>Индивидуальный проект</strong><span>от ${850+(i-1)*120} 000 ₸ · ${10+i} дней</span></div>`;
    portfolio.appendChild(card);
  }
  const process=document.getElementById('processSteps');
  PROCESS_STEPS.forEach((item,index)=>{
    const row=document.createElement('article');row.className='process-item';
    row.innerHTML=`<b>0${index+1}</b><div><span class="process-time">${item.time}</span><h3>${item.title}</h3><p>${item.text}</p></div>`;process.appendChild(row);
  });
  const reviews=document.getElementById('reviewsList');
  REVIEWS.forEach(item=>{
    const card=document.createElement('article');card.className='review';
    card.innerHTML=`<div class="review-media"><span>Фото клиента</span></div><div class="review-body"><strong>${item.who}</strong><small>${item.where}</small><p>${item.text}</p></div>`;reviews.appendChild(card);
  });
  const faq=document.getElementById('faqList');
  FAQ.forEach(item=>{
    const row=document.createElement('div');row.className='faq-item';
    row.innerHTML=`<button class="faq-question"><span>${item.q}</span><span>+</span></button><div class="faq-answer">${item.a}</div>`;
    row.querySelector('button').onclick=()=>row.classList.toggle('open');faq.appendChild(row);
  });
}

renderQuizOptions();
renderWarming();
updateProgress('q1');
