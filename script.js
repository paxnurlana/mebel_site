const ICONS={
  econom:'i-building',comfort:'i-layers',business:'i-briefcase','private-house':'i-house',
  urgent:'i-bolt',month:'i-calendar',looking:'i-eye',
  kitchen:'i-kitchen',wardrobe:'i-wardrobe','walkin-closet':'i-hanger',bedroom:'i-bed',
  hallway:'i-door',vanity:'i-mirror',bathroom:'i-bath','tv-zone':'i-tv'
};

const CLASS_OPTIONS=[
  {id:'econom',label:'Р­РєРѕРЅРѕРј-РєР»Р°СЃСЃ',sub:'РџСЂР°РєС‚РёС‡РЅС‹Рµ СЂРµС€РµРЅРёСЏ'},
  {id:'comfort',label:'РљРѕРјС„РѕСЂС‚-РєР»Р°СЃСЃ',sub:'Р‘Р°Р»Р°РЅСЃ РєР°С‡РµСЃС‚РІР° Рё Р±СЋРґР¶РµС‚Р°'},
  {id:'business',label:'Р‘РёР·РЅРµСЃ-РєР»Р°СЃСЃ',sub:'РџРѕРІС‹С€РµРЅРЅС‹Р№ СѓСЂРѕРІРµРЅСЊ РјР°С‚РµСЂРёР°Р»РѕРІ'},
  {id:'private-house',label:'Р§Р°СЃС‚РЅС‹Р№ РґРѕРј',sub:'РљРѕРјРїР»РµРєСЃРЅРѕРµ СЂРµС€РµРЅРёРµ'}
];
const URGENCY_OPTIONS=[
  {id:'urgent',label:'РЎСЂРѕС‡РЅРѕ',sub:'Р”Рѕ 2 РЅРµРґРµР»СЊ'},
  {id:'month',label:'Р’ С‚РµС‡РµРЅРёРµ РјРµСЃСЏС†Р°',sub:'РџР»Р°РЅРёСЂСѓРµРј Р±Р»РёР¶Р°Р№С€РёР№ Р·Р°РїСѓСЃРє'},
  {id:'looking',label:'РџСЂРёСЃРјР°С‚СЂРёРІР°СЋСЃСЊ',sub:'РР·СѓС‡Р°СЋ РІР°СЂРёР°РЅС‚С‹'}
];
const STYLES=[
  {id:'modern',label:'РЎРѕРІСЂРµРјРµРЅРЅС‹Р№'},
  {id:'classic',label:'РљР»Р°СЃСЃРёС‡РµСЃРєРёР№'},
  {id:'minimal',label:'РњРёРЅРёРјР°Р»РёР·Рј'},
  {id:'loft',label:'Р›РѕС„С‚'}
];
const CATEGORIES={
  kitchen:{label:'РљСѓС…РЅСЏ',step1Title:'Р’С‹Р±РµСЂРёС‚Рµ С„РѕСЂРјСѓ РєСѓС…РЅРё',
    step1:[{id:'straight',label:'РџСЂСЏРјР°СЏ'},{id:'corner',label:'РЈРіР»РѕРІР°СЏ'},{id:'p-shape',label:'Рџ-РѕР±СЂР°Р·РЅР°СЏ'},{id:'island',label:'РЎ РѕСЃС‚СЂРѕРІРѕРј'}],
    step3:[{id:'light',label:'РџРѕРґСЃРІРµС‚РєР°'},{id:'gold-handles',label:'Р СѓС‡РєРё Р·РѕР»РѕС‚Рѕ'},{id:'no-handles',label:'Р‘РµР· СЂСѓС‡РµРє'},{id:'glass',label:'РЎС‚РµРєР»СЏРЅРЅС‹Рµ С„Р°СЃР°РґС‹'}]},
  wardrobe:{label:'РЁРєР°С„',step1Title:'Р’С‹Р±РµСЂРёС‚Рµ С‚РёРї С€РєР°С„Р°',
    step1:[{id:'sliding',label:'РЁРєР°С„-РєСѓРїРµ'},{id:'hinged',label:'Р Р°СЃРїР°С€РЅРѕР№'},{id:'built-in',label:'Р’СЃС‚СЂРѕРµРЅРЅС‹Р№'},{id:'corner',label:'РЈРіР»РѕРІРѕР№'}],
    step3:[{id:'mirror',label:'Р—РµСЂРєР°Р»Рѕ'},{id:'light',label:'РџРѕРґСЃРІРµС‚РєР°'},{id:'glass',label:'РЎС‚РµРєР»Рѕ'},{id:'glossy',label:'Р“Р»СЏРЅРµС†'}]},
  'walkin-closet':{label:'Р“Р°СЂРґРµСЂРѕР±РЅР°СЏ',step1Title:'Р’С‹Р±РµСЂРёС‚Рµ С‚РёРї РіР°СЂРґРµСЂРѕР±РЅРѕР№',
    step1:[{id:'open',label:'РћС‚РєСЂС‹С‚Р°СЏ'},{id:'closed',label:'Р—Р°РєСЂС‹С‚Р°СЏ'},{id:'island',label:'РЎ РѕСЃС‚СЂРѕРІРѕРј'}],
    step3:[{id:'light',label:'РџРѕРґСЃРІРµС‚РєР°'},{id:'baskets',label:'РљРѕСЂР·РёРЅС‹'},{id:'mirror',label:'Р—РµСЂРєР°Р»Рѕ'},{id:'iron-board',label:'Р“Р»Р°РґРёР»СЊРЅР°СЏ РґРѕСЃРєР°'}]},
  bedroom:{label:'РЎРїР°Р»СЊРЅСЏ',step1Title:'Р’С‹Р±РµСЂРёС‚Рµ РєРѕРјРїР»РµРєС‚',
    step1:[{id:'bed',label:'РљСЂРѕРІР°С‚СЊ'},{id:'bed-nightstands',label:'РљСЂРѕРІР°С‚СЊ + С‚СѓРјР±С‹'},{id:'bed-wardrobe',label:'РљСЂРѕРІР°С‚СЊ + С€РєР°С„'},{id:'full-set',label:'РџРѕР»РЅС‹Р№ РєРѕРјРїР»РµРєС‚'}],
    step3:[{id:'soft-headboard',label:'РњСЏРіРєРѕРµ РёР·РіРѕР»РѕРІСЊРµ'},{id:'lift-mechanism',label:'РџРѕРґСЉС‘РјРЅС‹Р№ РјРµС…Р°РЅРёР·Рј'},{id:'light',label:'РџРѕРґСЃРІРµС‚РєР°'},{id:'nightstands',label:'РўСѓРјР±С‹'}]},
  hallway:{label:'РџСЂРёС…РѕР¶Р°СЏ',step1Title:'Р’С‹Р±РµСЂРёС‚Рµ С‚РёРї РїСЂРёС…РѕР¶РµР№',
    step1:[{id:'wardrobe-hanger',label:'РЁРєР°С„ + РІРµС€Р°Р»РєР°'},{id:'wardrobe-mirror',label:'РЁРєР°С„ + Р·РµСЂРєР°Р»Рѕ'},{id:'wardrobe-cabinet',label:'РЁРєР°С„ + С‚СѓРјР±Р°'},{id:'full-set',label:'РџРѕР»РЅС‹Р№ РєРѕРјРїР»РµРєС‚'}],
    step3:[{id:'seat',label:'РЎРёРґРµРЅСЊРµ'},{id:'light',label:'РџРѕРґСЃРІРµС‚РєР°'},{id:'full-mirror',label:'Р—РµСЂРєР°Р»Рѕ РІ РїРѕР»РЅС‹Р№ СЂРѕСЃС‚'},{id:'shoe-cabinet',label:'РћР±СѓРІРЅР°СЏ С‚СѓРјР±Р°'}]},
  vanity:{label:'РўСѓР°Р»РµС‚РЅС‹Р№ СЃС‚РѕР»РёРє',step1Title:'Р’С‹Р±РµСЂРёС‚Рµ С‚РёРї СЃС‚РѕР»РёРєР°',
    step1:[{id:'with-mirror',label:'Р‘Р°Р·РѕРІС‹Р№ С‚СѓР°Р»РµС‚РЅС‹Р№ СЃС‚РѕР»РёРє'},{id:'full-set',label:'РџРѕР»РЅР°СЏ Р±СЊСЋС‚Рё-Р·РѕРЅР°'}],
    step3:[{id:'light',label:'РџРѕРґСЃРІРµС‚РєР°'},{id:'drawers',label:'РЇС‰РёРєРё'},{id:'pouf',label:'РџСѓС„'},{id:'sockets',label:'Р РѕР·РµС‚РєРё'}]},
  bathroom:{label:'РЎР°РЅСѓР·РµР»',step1Title:'Р’С‹Р±РµСЂРёС‚Рµ С‚РёРї РјРµР±РµР»Рё',
    step1:[{id:'sink-cabinet',label:'РўСѓРјР±Р° РїРѕРґ СЂР°РєРѕРІРёРЅСѓ'},{id:'full-set',label:'РџРѕР»РЅР°СЏ РєРѕРјРїРѕР·РёС†РёСЏ'}],
    step3:[{id:'light',label:'РџРѕРґСЃРІРµС‚РєР°'},{id:'dryer',label:'РЎСѓС€РёР»РєР°'},{id:'basket',label:'РљРѕСЂР·РёРЅР°'},{id:'glass-shelves',label:'РЎС‚РµРєР»СЏРЅРЅС‹Рµ РїРѕР»РєРё'}]},
  'tv-zone':{label:'РўР’-Р·РѕРЅР°',step1Title:'Р’С‹Р±РµСЂРёС‚Рµ С‚РёРї РўР’-Р·РѕРЅС‹',
    step1:[{id:'tv-stand',label:'РњРёРЅРёРјР°Р»РёСЃС‚РёС‡РЅР°СЏ РўР’-Р·РѕРЅР°'},{id:'full-set',label:'РџРѕР»РЅР°СЏ РўР’-СЃС‚РµРЅР°'}],
    step3:[{id:'light',label:'РџРѕРґСЃРІРµС‚РєР°'},{id:'cable-channel',label:'РљР°Р±РµР»СЊ-РєР°РЅР°Р»'},{id:'glass-shelves',label:'РЎС‚РµРєР»СЏРЅРЅС‹Рµ РїРѕР»РєРё'},{id:'stand',label:'РџРѕРґСЃС‚Р°РІРєР°'}]}
};
const PROCESS_STEPS=[
  {time:'Р”РµРЅСЊ 1',title:'Р—Р°СЏРІРєР° Рё РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ',text:'РћР±СЃСѓР¶РґР°РµРј РёРґРµСЋ, РїРѕР¶РµР»Р°РЅРёСЏ Рё РѕСЂРёРµРЅС‚РёСЂ РїРѕ Р±СЋРґР¶РµС‚Сѓ.'},
  {time:'Р”РµРЅСЊ 2',title:'Р‘РµСЃРїР»Р°С‚РЅС‹Р№ Р·Р°РјРµСЂ',text:'Р¤РёРєСЃРёСЂСѓРµРј СЂР°Р·РјРµСЂС‹, РєРѕРјРјСѓРЅРёРєР°С†РёРё Рё РѕСЃРѕР±РµРЅРЅРѕСЃС‚Рё РїРѕРјРµС‰РµРЅРёСЏ.'},
  {time:'Р”РµРЅСЊ 3',title:'РџСЂРѕРµРєС‚ Рё С‚РѕС‡РЅР°СЏ СЃРјРµС‚Р°',text:'РЎРѕРіР»Р°СЃРѕРІС‹РІР°РµРј РєРѕРЅСЃС‚СЂСѓРєС†РёСЋ, РјР°С‚РµСЂРёР°Р»С‹, РЅР°РїРѕР»РЅРµРЅРёРµ Рё СЃС‚РѕРёРјРѕСЃС‚СЊ.'},
  {time:'Р”РµРЅСЊ 4',title:'Р”РѕРіРѕРІРѕСЂ Рё РѕРїР»Р°С‚Р°',text:'Р¤РёРєСЃРёСЂСѓРµРј РїСЂРѕРµРєС‚, СЃСЂРѕРєРё, РєРѕРјРїР»РµРєС‚Р°С†РёСЋ Рё Р·Р°РїСѓСЃРєР°РµРј Р·Р°РєР°Р·.'},
  {time:'Р”РЅРё 5вЂ“15',title:'РџСЂРѕРёР·РІРѕРґСЃС‚РІРѕ',text:'РР·РіРѕС‚Р°РІР»РёРІР°РµРј РјРµР±РµР»СЊ РїРѕ СѓС‚РІРµСЂР¶РґС‘РЅРЅРѕРјСѓ РїСЂРѕРµРєС‚Сѓ.'},
  {time:'Р”РµРЅСЊ 15',title:'Р”РѕСЃС‚Р°РІРєР° Рё РјРѕРЅС‚Р°Р¶',text:'РЈСЃС‚Р°РЅР°РІР»РёРІР°РµРј РјРµР±РµР»СЊ Рё РїСЂРѕРІРµСЂСЏРµРј РєР°Р¶РґС‹Р№ СѓР·РµР» РІРјРµСЃС‚Рµ СЃ РІР°РјРё.'}
];
const REVIEWS=[
  {who:'РђР№РіРµСЂРёРј Рў.',where:'Р–Рљ Green Line, РђР»РјР°С‚С‹',text:'РљСѓС…РЅСЏ РїРѕР»СѓС‡РёР»Р°СЃСЊ СЂРѕРІРЅРѕ РєР°Рє РІ РїСЂРѕРµРєС‚Рµ. РћСЃРѕР±РµРЅРЅРѕ РїРѕРЅСЂР°РІРёР»РѕСЃСЊ, С‡С‚Рѕ РјР°С‚РµСЂРёР°Р»С‹ РїРѕРєР°Р·Р°Р»Рё Р·Р°СЂР°РЅРµРµ Рё СЃС‚РѕРёРјРѕСЃС‚СЊ РїРѕСЃР»Рµ СЃРѕРіР»Р°СЃРѕРІР°РЅРёСЏ РЅРµ РјРµРЅСЏР»Р°СЃСЊ.'},
  {who:'РњСѓСЂР°С‚ РЎ.',where:'РђСЃС‚Р°РЅР°, СЂР°Р№РѕРЅ Р•СЃРёР»СЊ',text:'Р“Р°СЂРґРµСЂРѕР±РЅСѓСЋ РїСЂРѕРµРєС‚РёСЂРѕРІР°Р»Рё РїРѕРґ РЅРµСЃС‚Р°РЅРґР°СЂС‚РЅСѓСЋ РЅРёС€Сѓ. Р’СЃС‘ РІСЃС‚Р°Р»Рѕ С‚РѕС‡РЅРѕ, РјРѕРЅС‚Р°Р¶ Р·Р°РєРѕРЅС‡РёР»Рё Р·Р° РѕРґРёРЅ РґРµРЅСЊ.'},
  {who:'Р”Р°РЅР° Рљ.',where:'РђР»РјР°С‚С‹, Р‘РѕСЃС‚Р°РЅРґС‹РєСЃРєРёР№ СЂР°Р№РѕРЅ',text:'РЎС…РµРјР° РѕРїР»Р°С‚С‹ СЃРЅСЏР»Р° РѕРїР°СЃРµРЅРёСЏ. РџРѕСЃР»Рµ СѓСЃС‚Р°РЅРѕРІРєРё СЃРїРѕРєРѕР№РЅРѕ РІСЃС‘ РїСЂРѕРІРµСЂРёР»Рё, С‚РѕР»СЊРєРѕ РїРѕС‚РѕРј РІРЅРµСЃР»Рё РѕСЃС‚Р°РІС€СѓСЋСЃСЏ СЃСѓРјРјСѓ.'}
];
const FAQ=[
  {q:'РЎРєРѕР»СЊРєРѕ СЃС‚РѕРёС‚ РјРµР±РµР»СЊ РїРѕРґ РєР»СЋС‡?',a:'РЎС‚РѕРёРјРѕСЃС‚СЊ Р·Р°РІРёСЃРёС‚ РѕС‚ СЂР°Р·РјРµСЂРѕРІ, РјР°С‚РµСЂРёР°Р»РѕРІ Рё РєРѕРјРїР»РµРєС‚Р°С†РёРё. РќР° СЃР°Р№С‚Рµ РїРѕРєР°Р·С‹РІР°РµРј РѕСЂРёРµРЅС‚РёСЂРѕРІРѕС‡РЅС‹Р№ РґРёР°РїР°Р·РѕРЅ, Р° С‚РѕС‡РЅСѓСЋ СЃРјРµС‚Сѓ РіРѕС‚РѕРІРёРј РїРѕСЃР»Рµ Р·Р°РјРµСЂР°.'},
  {q:'РњРѕР¶РЅРѕ Р»Рё РІРЅРµСЃС‚Рё РёР·РјРµРЅРµРЅРёСЏ РІ РїСЂРѕРµРєС‚?',a:'Р”Р°. Р”Рѕ СѓС‚РІРµСЂР¶РґРµРЅРёСЏ 3D-РїСЂРѕРµРєС‚Р° РјРѕР¶РЅРѕ РєРѕСЂСЂРµРєС‚РёСЂРѕРІР°С‚СЊ РїР»Р°РЅРёСЂРѕРІРєСѓ, РјР°С‚РµСЂРёР°Р»С‹ Рё РґРµС‚Р°Р»Рё.'},
  {q:'Р’ РєР°РєРёС… РіРѕСЂРѕРґР°С… РІС‹ СЂР°Р±РѕС‚Р°РµС‚Рµ?',a:'РћСЃРЅРѕРІРЅС‹Рµ СЂРµРіРёРѕРЅС‹ вЂ” РђР»РјР°С‚С‹, РђСЃС‚Р°РЅР° Рё РѕР±Р»Р°СЃС‚СЊ. Р’РѕР·РјРѕР¶РЅРѕСЃС‚СЊ СЂР°Р±РѕС‚С‹ РІ РґСЂСѓРіРёС… РіРѕСЂРѕРґР°С… СѓС‚РѕС‡РЅРёС‚ РјРµРЅРµРґР¶РµСЂ.'},
  {q:'РЎРєРѕР»СЊРєРѕ Р·Р°РЅРёРјР°РµС‚ Р·Р°РјРµСЂ?',a:'РћР±С‹С‡РЅРѕ 30вЂ“40 РјРёРЅСѓС‚. Р—Р°РјРµСЂ Р±РµСЃРїР»Р°С‚РЅС‹Р№ Рё РЅРё Рє С‡РµРјСѓ РЅРµ РѕР±СЏР·С‹РІР°РµС‚.'},
  {q:'РљР°Рє РїСЂРѕС…РѕРґРёС‚ РѕРїР»Р°С‚Р°?',a:'30% РІРЅРѕСЃРёС‚СЃСЏ РЅР° СЃС‚Р°СЂС‚Рµ РїСЂРѕРёР·РІРѕРґСЃС‚РІР°, РѕСЃС‚Р°Р»СЊРЅС‹Рµ 70% вЂ” РїРѕСЃР»Рµ СѓСЃС‚Р°РЅРѕРІРєРё Рё РїСЂРѕРІРµСЂРєРё РјРµР±РµР»Рё.'}
];

const state={cls:null,urgency:null,category:null,step1:null,style:null,details:[],name:'',phone:''};
const STEP_ORDER=['q1','q2','q3','c1','c2','c3','form'];
const TOTAL_STEPS=STEP_ORDER.length;

const icon=(id)=>`<svg><use href="#${id}"></use></svg>`;
const checkIcon=()=>`<span class="option-check">${icon('i-check')}</span>`;
const imageFor=(category,stage,id)=>{
  const maps={
    kitchen:{straight:'assets/kitchen-straight.webp',corner:'assets/kitchen-corner.webp','p-shape':'assets/kitchen-u-shape.webp',island:'assets/kitchen-island.webp'},
    wardrobe:{sliding:'assets/wardrobe-sliding.webp',hinged:'assets/wardrobe-hinged.webp','built-in':'assets/wardrobe-built-in.webp',corner:'assets/wardrobe-corner.webp'},
    'walkin-closet':{open:'assets/walkin-open.webp',closed:'assets/walkin-closed.webp',island:'assets/walkin-island.webp'},
    bedroom:{bed:'assets/bed.webp','bed-nightstands':'assets/bed-nightstands.webp','bed-wardrobe':'assets/bed-wardrobe.webp','full-set':'assets/full-bedroom.webp'},
    hallway:{'wardrobe-hanger':'assets/hallway-hanger.webp','wardrobe-mirror':'assets/hallway-mirror.webp','wardrobe-cabinet':'assets/hallway-bench.webp','full-set':'assets/hallway-full-set.webp'},
    vanity:{'with-mirror':'assets/vanity-mirror.webp','full-set':'assets/vanity-full-set.webp'},
    bathroom:{'sink-cabinet':'assets/bathroom-vanity.webp','full-set':'assets/bathroom-full-set.webp'},
    'tv-zone':{'tv-stand':'assets/tv-minimal.webp','full-set':'assets/tv-full-wall.webp'}
  };
  const map=maps[category]||{};
  if(stage==='step1' && map[id]) return map[id];
  if(stage==='step2' && category==='kitchen'){
    if(id==='modern') return map.straight;
    if(id==='minimal') return map['p-shape'];
    if(id==='classic') return map.corner;
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
  document.getElementById('progressLabel').textContent=`РЁР°Рі ${n} РёР· ${TOTAL_STEPS}`;
}
function renderQuizOptions(){
  const q1=document.getElementById('q1-list');
  CLASS_OPTIONS.forEach(item=>{
    const button=document.createElement('button');
    button.className='option';
    button.innerHTML=`<span class="option-icon"><img src="assets/icons-3d/${item.id}.png" alt=""></span><span class="option-text"><strong>${item.label}</strong><small>${item.sub}</small></span>${checkIcon()}`;
    button.onclick=()=>{state.cls=item.id;selectSingle(q1,button);setTimeout(()=>transition('q1','q2'),180)};
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
  document.getElementById('c1-label').textContent=`РЁР°Рі 4 В· ${cat.label}`;
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
  setTimeout(()=>{renderResult();document.getElementById('step-result').classList.add('active');document.getElementById('warming').classList.add('visible');window.scrollTo({top:0,behavior:'smooth'})},520);
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
  const resultTitles={kitchen:'РљРѕРЅС†РµРїС†РёСЏ РІР°С€РµР№ РєСѓС…РЅРё РіРѕС‚РѕРІР°',wardrobe:'РљРѕРЅС†РµРїС†РёСЏ РІР°С€РµРіРѕ С€РєР°С„Р° РіРѕС‚РѕРІР°','walkin-closet':'РљРѕРЅС†РµРїС†РёСЏ РІР°С€РµР№ РіР°СЂРґРµСЂРѕР±РЅРѕР№ РіРѕС‚РѕРІР°',bedroom:'РљРѕРЅС†РµРїС†РёСЏ РІР°С€РµР№ СЃРїР°Р»СЊРЅРё РіРѕС‚РѕРІР°',hallway:'РљРѕРЅС†РµРїС†РёСЏ РІР°С€РµР№ РїСЂРёС…РѕР¶РµР№ РіРѕС‚РѕРІР°',vanity:'РљРѕРЅС†РµРїС†РёСЏ РІР°С€РµРіРѕ С‚СѓР°Р»РµС‚РЅРѕРіРѕ СЃС‚РѕР»РёРєР° РіРѕС‚РѕРІР°',bathroom:'РљРѕРЅС†РµРїС†РёСЏ РІР°С€РµР№ РјРµР±РµР»Рё РґР»СЏ РІР°РЅРЅРѕР№ РіРѕС‚РѕРІР°','tv-zone':'РљРѕРЅС†РµРїС†РёСЏ РІР°С€РµР№ РўР’-Р·РѕРЅС‹ РіРѕС‚РѕРІР°'};
  document.getElementById('resultHeadline').textContent=resultTitles[state.category]||'РљРѕРЅС†РµРїС†РёСЏ РІР°С€РµР№ РјРµР±РµР»Рё РіРѕС‚РѕРІР°';
  document.getElementById('resultParams').innerHTML=[cat.label,form.label,style.label].map(x=>`<span class="badge">${x}</span>`).join('');
  const detailBox=document.getElementById('resultDetails');detailBox.innerHTML='';
  if(state.details.length){
    state.details.forEach(id=>{
      const opt=cat.step3.find(item=>item.id===id);
      const div=document.createElement('div');div.className='detail-mini';div.textContent=opt.label;detailBox.appendChild(div);
    });
  }else detailBox.innerHTML='<div class="detail-mini">Р‘РµР· РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹С… РѕРїС†РёР№</div>';
  const premium=state.cls==='business';
  document.getElementById('priceValue').textContent=premium?'РѕС‚ 1 500 000 РґРѕ 3 000 000 в‚ё':'РѕС‚ 800 000 РґРѕ 1 500 000 в‚ё';
  const cls=CLASS_OPTIONS.find(item=>item.id===state.cls).label;
  const urgency=URGENCY_OPTIONS.find(item=>item.id===state.urgency).label;
  const details=state.details.length?state.details.map(id=>cat.step3.find(item=>item.id===id).label).join(', '):'Р±РµР· РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹С… РѕРїС†РёР№';
  const text=encodeURIComponent(`Р—РґСЂР°РІСЃС‚РІСѓР№С‚Рµ! РҐРѕС‡Сѓ Р·Р°РєР°Р·Р°С‚СЊ Р±РµСЃРїР»Р°С‚РЅС‹Р№ Р·Р°РјРµСЂ.

РРјСЏ: ${state.name}
РўРµР»РµС„РѕРЅ: ${state.phone}

РњРµР±РµР»СЊ: ${cat.label}
РљР»Р°СЃСЃ: ${cls}
РЎСЂРѕС‡РЅРѕСЃС‚СЊ: ${urgency}

РљРѕРЅС„РёРіСѓСЂР°С‚РѕСЂ:
- Р¤РѕСЂРјР°: ${form.label}
- РЎС‚РёР»СЊ: ${style.label}
- Р”РµС‚Р°Р»Рё: ${details}`);
  document.getElementById('waMainBtn').href=`https://wa.me/77766387416?text=${text}`;
}
function renderWarming(){
  const portfolio=document.getElementById('portfolioCarousel');
  for(let i=1;i<=8;i++){
    const card=document.createElement('article');card.className='case-card';
    card.innerHTML=`<img class="case-image" src="assets/kitchen-straight.webp" alt="РџСЂРѕРµРєС‚ РјРµР±РµР»Рё"><div class="case-info"><strong>РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Р№ РїСЂРѕРµРєС‚</strong><span>РѕС‚ ${850+(i-1)*120} 000 в‚ё В· ${10+i} РґРЅРµР№</span></div>`;
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
    card.innerHTML=`<div class="review-media"><img src="assets/kitchen-straight.webp" alt="РџСЂРѕРµРєС‚ РєР»РёРµРЅС‚Р°"></div><div class="review-body"><strong>${item.who}</strong><small>${item.where}</small><p>${item.text}</p></div>`;reviews.appendChild(card);
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

