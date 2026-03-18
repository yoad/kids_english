// ===== VOCABULARY DATA =====
const WORDS = {
  animals: [
    {word:'Dog',hebrew:'כלב',emoji:'🐶'},{word:'Cat',hebrew:'חתול',emoji:'🐱'},
    {word:'Bird',hebrew:'ציפור',emoji:'🐦'},{word:'Fish',hebrew:'דג',emoji:'🐟'},
    {word:'Horse',hebrew:'סוס',emoji:'🐴'},{word:'Cow',hebrew:'פרה',emoji:'🐄'},
    {word:'Rabbit',hebrew:'ארנב',emoji:'🐰'},{word:'Bear',hebrew:'דוב',emoji:'🐻'},
    {word:'Lion',hebrew:'אריה',emoji:'🦁'},{word:'Monkey',hebrew:'קוף',emoji:'🐵'},
    {word:'Elephant',hebrew:'פיל',emoji:'🐘'}
  ],
  food: [
    {word:'Apple',hebrew:'תפוח',emoji:'🍎'},{word:'Banana',hebrew:'בננה',emoji:'🍌'},
    {word:'Bread',hebrew:'לחם',emoji:'🍞'},{word:'Water',hebrew:'מים',emoji:'💧'},
    {word:'Milk',hebrew:'חלב',emoji:'🥛'},{word:'Egg',hebrew:'ביצה',emoji:'🥚'},
    {word:'Rice',hebrew:'אורז',emoji:'🍚'},{word:'Cake',hebrew:'עוגה',emoji:'🎂'},
    {word:'Pizza',hebrew:'פיצה',emoji:'🍕'},{word:'Ice Cream',hebrew:'גלידה',emoji:'🍦'}
  ],
  colors: [
    {word:'Red',hebrew:'אדום',emoji:'🔴'},{word:'Blue',hebrew:'כחול',emoji:'🔵'},
    {word:'Green',hebrew:'ירוק',emoji:'🟢'},{word:'Yellow',hebrew:'צהוב',emoji:'🟡'},
    {word:'Pink',hebrew:'ורוד',emoji:'🩷'},{word:'Orange',hebrew:'כתום',emoji:'🟠'},
    {word:'Purple',hebrew:'סגול',emoji:'🟣'},{word:'White',hebrew:'לבן',emoji:'⬜'},
    {word:'Black',hebrew:'שחור',emoji:'⬛'}
  ],
  numbers: [
    {word:'One',hebrew:'אחת',emoji:'1️⃣'},{word:'Two',hebrew:'שתיים',emoji:'2️⃣'},
    {word:'Three',hebrew:'שלוש',emoji:'3️⃣'},{word:'Four',hebrew:'ארבע',emoji:'4️⃣'},
    {word:'Five',hebrew:'חמש',emoji:'5️⃣'},{word:'Six',hebrew:'שש',emoji:'6️⃣'},
    {word:'Seven',hebrew:'שבע',emoji:'7️⃣'},{word:'Eight',hebrew:'שמונה',emoji:'8️⃣'},
    {word:'Nine',hebrew:'תשע',emoji:'9️⃣'},{word:'Ten',hebrew:'עשר',emoji:'🔟'}
  ],
  family: [
    {word:'Mom',hebrew:'אמא',emoji:'👩'},{word:'Dad',hebrew:'אבא',emoji:'👨'},
    {word:'Brother',hebrew:'אח',emoji:'👦'},{word:'Sister',hebrew:'אחות',emoji:'👧'},
    {word:'Baby',hebrew:'תינוק',emoji:'👶'},{word:'Grandma',hebrew:'סבתא',emoji:'👵'},
    {word:'Grandpa',hebrew:'סבא',emoji:'👴'}
  ],
  body: [
    {word:'Head',hebrew:'ראש',emoji:'🗣️'},{word:'Hand',hebrew:'יד',emoji:'✋'},
    {word:'Eye',hebrew:'עין',emoji:'👁️'},{word:'Ear',hebrew:'אוזן',emoji:'👂'},
    {word:'Nose',hebrew:'אף',emoji:'👃'},{word:'Mouth',hebrew:'פה',emoji:'👄'},
    {word:'Leg',hebrew:'רגל',emoji:'🦵'},{word:'Foot',hebrew:'כף רגל',emoji:'🦶'}
  ],
  clothes: [
    {word:'Shirt',hebrew:'חולצה',emoji:'👕'},{word:'Pants',hebrew:'מכנסיים',emoji:'👖'},
    {word:'Shoes',hebrew:'נעליים',emoji:'👟'},{word:'Hat',hebrew:'כובע',emoji:'🧢'},
    {word:'Dress',hebrew:'שמלה',emoji:'👗'},{word:'Socks',hebrew:'גרביים',emoji:'🧦'},
    {word:'Tie',hebrew:'עניבה',emoji:'👔'},{word:'Belt',hebrew:'חגורה',emoji:'🪢'}
  ],
  house: [
    {word:'Door',hebrew:'דלת',emoji:'🚪'},{word:'Bed',hebrew:'מיטה',emoji:'🛏️'},
    {word:'Chair',hebrew:'כיסא',emoji:'🪑'},{word:'Bath',hebrew:'אמבטיה',emoji:'🛁'},
    {word:'Kitchen',hebrew:'מטבח',emoji:'🍳'},{word:'Key',hebrew:'מפתח',emoji:'🔑'}
  ],
  transport: [
    {word:'Car',hebrew:'מכונית',emoji:'🚗'},{word:'Bus',hebrew:'אוטובוס',emoji:'🚌'},
    {word:'Airplane',hebrew:'מטוס',emoji:'✈️'},{word:'Bike',hebrew:'אופניים',emoji:'🚲'},
    {word:'Train',hebrew:'רכבת',emoji:'🚂'},{word:'Boat',hebrew:'סירה',emoji:'⛵'},
    {word:'Fire Truck',hebrew:'כבאית',emoji:'🚒'},{word:'Ambulance',hebrew:'אמבולנס',emoji:'🚑'},
    {word:'Police Car',hebrew:'ניידת משטרה',emoji:'🚓'}
  ],
  nature: [
    {word:'Sun',hebrew:'שמש',emoji:'☀️'},{word:'Moon',hebrew:'ירח',emoji:'🌙'},
    {word:'Star',hebrew:'כוכב',emoji:'⭐'},{word:'Tree',hebrew:'עץ',emoji:'🌳'},
    {word:'Flower',hebrew:'פרח',emoji:'🌸'},{word:'Rain',hebrew:'גשם',emoji:'🌧️'},
    {word:'Cloud',hebrew:'ענן',emoji:'☁️'}
  ],
  school: [
    {word:'Book',hebrew:'ספר',emoji:'📖'},{word:'Pen',hebrew:'עט',emoji:'🖊️'},
    {word:'Bag',hebrew:'תיק',emoji:'🎒'},{word:'Teacher',hebrew:'מורה',emoji:'👩‍🏫'},
    {word:'Friend',hebrew:'חבר',emoji:'🤝'}
  ],
  furniture: [
    {word:'Table',hebrew:'שולחן',emoji:'🪑'},{word:'Sofa',hebrew:'ספה',emoji:'🛋️'},
    {word:'Lamp',hebrew:'מנורה',emoji:'💡'},{word:'Shelf',hebrew:'מדף',emoji:'📚'},
    {word:'Desk',hebrew:'שולחן כתיבה',emoji:'🗄️'},{word:'Mirror',hebrew:'מראה',emoji:'🪞'},
    {word:'Clock',hebrew:'שעון',emoji:'🕐'},{word:'Closet',hebrew:'ארון',emoji:'🚪'}
  ],
  household: [
    {word:'Cup',hebrew:'כוס',emoji:'🥤'},{word:'Plate',hebrew:'צלחת',emoji:'🍽️'},
    {word:'Spoon',hebrew:'כפית',emoji:'🥄'},{word:'Fork',hebrew:'מזלג',emoji:'🍴'},
    {word:'Knife',hebrew:'סכין',emoji:'🔪'},{word:'Pot',hebrew:'סיר',emoji:'🍲'},
    {word:'Bowl',hebrew:'קערה',emoji:'🥣'},{word:'Broom',hebrew:'מטאטא',emoji:'🧹'},
    {word:'Towel',hebrew:'מגבת',emoji:'🧻'},{word:'Soap',hebrew:'סבון',emoji:'🧼'}
  ],
  alphabet: [
    {word:'A',hebrew:'אי',emoji:'🅰️'},{word:'B',hebrew:'בי',emoji:'🅱️'},
    {word:'C',hebrew:'סי',emoji:'©️'},{word:'D',hebrew:'די',emoji:'🇩'},
    {word:'E',hebrew:'אי',emoji:'🇪'},{word:'F',hebrew:'אף',emoji:'🇫'},
    {word:'G',hebrew:'ג׳י',emoji:'🇬'},{word:'H',hebrew:'אייצ׳',emoji:'🇭'},
    {word:'I',hebrew:'אי',emoji:'ℹ️'},{word:'J',hebrew:'ג׳יי',emoji:'🇯'},
    {word:'K',hebrew:'קיי',emoji:'🇰'},{word:'L',hebrew:'אל',emoji:'🇱'},
    {word:'M',hebrew:'אם',emoji:'Ⓜ️'},{word:'N',hebrew:'אן',emoji:'🇳'},
    {word:'O',hebrew:'או',emoji:'⭕'},{word:'P',hebrew:'פי',emoji:'🅿️'},
    {word:'Q',hebrew:'קיו',emoji:'🇶'},{word:'R',hebrew:'אר',emoji:'🇷'},
    {word:'S',hebrew:'אס',emoji:'🇸'},{word:'T',hebrew:'טי',emoji:'🇹'},
    {word:'U',hebrew:'יו',emoji:'🇺'},{word:'V',hebrew:'וי',emoji:'🇻'},
    {word:'W',hebrew:'דבליו',emoji:'🇼'},{word:'X',hebrew:'אקס',emoji:'❌'},
    {word:'Y',hebrew:'וואי',emoji:'🇾'},{word:'Z',hebrew:'זד',emoji:'🇿'}
  ]
};

const CATEGORIES = [
  {id:'animals',name:'חיות',emoji:'🐾'},{id:'food',name:'אוכל',emoji:'🍎'},
  {id:'colors',name:'צבעים',emoji:'🎨'},{id:'numbers',name:'מספרים',emoji:'🔢'},
  {id:'family',name:'משפחה',emoji:'👨‍👩‍👧‍👦'},{id:'body',name:'גוף',emoji:'🫀'},
  {id:'clothes',name:'בגדים',emoji:'👕'},{id:'house',name:'בית',emoji:'🏠'},
  {id:'transport',name:'תחבורה',emoji:'🚗'},{id:'nature',name:'טבע',emoji:'🌿'},
  {id:'school',name:'בית ספר',emoji:'📚'},{id:'furniture',name:'ריהוט',emoji:'🛋️'},
  {id:'household',name:'כלי בית',emoji:'🍽️'},{id:'alphabet',name:'אלפבית',emoji:'🔤'}
];

const BADGES = [
  {id:'first_word',name:'המילה הראשונה',emoji:'🌱',threshold:p=>p.totalLearned>=1},
  {id:'ten_words',name:'10 מילים!',emoji:'🌟',threshold:p=>p.totalLearned>=10},
  {id:'thirty_words',name:'30 מילים!',emoji:'🏆',threshold:p=>p.totalLearned>=30},
  {id:'first_game',name:'משחק ראשון',emoji:'🎮',threshold:p=>p.gamesPlayed>=1},
  {id:'five_games',name:'5 משחקים!',emoji:'🎯',threshold:p=>p.gamesPlayed>=5},
  {id:'perfect',name:'מושלם!',emoji:'💎',threshold:p=>p.perfectGames>=1},
  {id:'fifty_stars',name:'כוכב על',emoji:'👑',threshold:p=>p.stars>=50}
];

// ===== STATE =====
let state = { profile: null };
let learnState = { category: null, index: 0, timer: null };
let emojiGame = { words: [], round: 0, score: 0, total: 10 };
let spellingGame = { words: [], round: 0, score: 0, total: 8, current: null, filled: [] };
let memoryGame = { cards: [], flipped: [], matched: 0, attempts: 0, busy: false, pairs: 0 };

// ===== HELPERS =====
function shuffle(a) { const b=[...a]; for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];} return b; }
function getAllWords() { const r=[]; for(const c in WORDS) WORDS[c].forEach((w,i)=>r.push({...w,cat:c,idx:i})); return r; }
function speak(text) {
  if(!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text); u.lang='en-US'; u.rate=0.8;
  window.speechSynthesis.speak(u);
}

// ===== PERSISTENCE =====
function getProgress() {
  const key = `kids_english_${state.profile}`;
  const saved = localStorage.getItem(key);
  if(saved) return JSON.parse(saved);
  return { learned:{}, stars:0, badges:[], gamesPlayed:0, perfectGames:0 };
}
function saveProgress(data) { localStorage.setItem(`kids_english_${state.profile}`, JSON.stringify(data)); }
function addStars(n) {
  const p=getProgress(); p.stars+=n; saveProgress(p); updateStarsDisplay(p.stars);
}
function markWordLearned(cat, idx) {
  const p=getProgress();
  if(!p.learned[cat]) p.learned[cat]=[];
  if(!p.learned[cat].includes(idx)){ p.learned[cat].push(idx); p.stars++; saveProgress(p); checkBadges(); }
}
function getTotalLearned() {
  const p=getProgress(); let t=0;
  for(const c in p.learned) t+=p.learned[c].length;
  return t;
}
function getTotalWords() { let t=0; for(const c in WORDS) t+=WORDS[c].length; return t; }
function isWordLearned(cat, idx) { const p=getProgress(); return p.learned[cat] && p.learned[cat].includes(idx); }
function checkBadges() {
  const p=getProgress(); p.totalLearned=getTotalLearned();
  let newBadge=false;
  BADGES.forEach(b=>{ if(!p.badges.includes(b.id) && b.threshold(p)){ p.badges.push(b.id); newBadge=true; }});
  if(newBadge) saveProgress(p);
}

// ===== SCREEN NAV =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s=>{s.classList.remove('active'); s.style.display='none';});
  const el=document.getElementById(id);
  if(el){ el.classList.add('active'); el.style.display='flex'; }
  // Trigger screen-specific setup
  if(id==='screen-home') setupHome();
  if(id==='screen-categories') setupCategories();
  if(id==='screen-games') setupGames();
  if(id==='screen-profiles') setupProfiles();
  // Clear learn timer
  if(id!=='screen-learn' && learnState.timer){ clearTimeout(learnState.timer); learnState.timer=null; }
}

function updateStarsDisplay(stars) {
  document.getElementById('home-stars').textContent = `⭐ ${stars}`;
  const profileStarEl = document.getElementById(`${state.profile}-stars`);
  if(profileStarEl) profileStarEl.textContent = `⭐ ${stars}`;
}

// ===== PROFILES =====
function setupProfiles() {
  ['alon','romi'].forEach(p=>{
    const saved=localStorage.getItem(`kids_english_${p}`);
    const data=saved?JSON.parse(saved):{stars:0};
    document.getElementById(`${p}-stars`).textContent=`⭐ ${data.stars}`;
  });
}
function selectProfile(profile) {
  state.profile = profile;
  const root = document.documentElement.style;
  if(profile==='alon'){
    root.setProperty('--accent','var(--alon-primary)');
    root.setProperty('--gradient','var(--alon-gradient)');
  } else {
    root.setProperty('--accent','var(--romi-primary)');
    root.setProperty('--gradient','var(--romi-gradient)');
  }
  showScreen('screen-home');
}

// ===== HOME =====
function setupHome() {
  const isAlon = state.profile==='alon';
  document.getElementById('home-avatar').textContent = isAlon?'🚀':'🦄';
  document.getElementById('home-name').textContent = isAlon?'אלון - Alon':'רומי - Romi';
  const p=getProgress();
  updateStarsDisplay(p.stars);
  const total=getTotalWords(), learned=getTotalLearned();
  const pct = total>0?Math.round(learned/total*100):0;
  document.getElementById('home-progress-bar').style.width=pct+'%';
  document.getElementById('home-progress-text').textContent=`${pct}% מילים נלמדו (${learned}/${total})`;
  // Badges
  const bc=document.getElementById('home-badges'); bc.innerHTML='';
  BADGES.forEach(b=>{
    const el=document.createElement('div');
    el.className='badge'+(p.badges.includes(b.id)?' earned':'');
    el.textContent=b.emoji;
    el.title=b.name;
    bc.appendChild(el);
  });
}

// ===== LEARNING MODE =====
function startLearning() { showScreen('screen-categories'); }
function setupCategories() {
  const grid=document.getElementById('categories-grid'); grid.innerHTML='';
  CATEGORIES.forEach(cat=>{
    const p=getProgress(), learned=(p.learned[cat.id]||[]).length, total=WORDS[cat.id].length;
    const card=document.createElement('div');
    card.className='category-card';
    card.innerHTML=`<div class="category-emoji">${cat.emoji}</div><div class="category-name">${cat.name}</div><div class="category-progress">${learned}/${total}</div>`;
    card.onclick=()=>openCategory(cat.id);
    grid.appendChild(card);
  });
}
function openCategory(catId) {
  learnState.category=catId;
  learnState.index=0;
  const cat=CATEGORIES.find(c=>c.id===catId);
  document.getElementById('learn-category-title').textContent=`${cat.emoji} ${cat.name}`;
  showScreen('screen-learn');
  showFlashcard();
}
function showFlashcard() {
  const words=WORDS[learnState.category];
  const w=words[learnState.index];
  document.getElementById('flashcard-emoji').textContent=w.emoji;
  document.getElementById('flashcard-word').textContent=w.word;
  document.getElementById('flashcard-hebrew').textContent=w.hebrew;
  document.getElementById('flashcard-counter').textContent=`${learnState.index+1} / ${words.length}`;
  const badge=document.getElementById('learned-badge');
  badge.style.display=isWordLearned(learnState.category,learnState.index)?'block':'none';
  // Auto-speak
  setTimeout(()=>speak(w.word), 400);
  // Mark learned after 2 seconds
  if(learnState.timer) clearTimeout(learnState.timer);
  learnState.timer=setTimeout(()=>{
    markWordLearned(learnState.category, learnState.index);
    document.getElementById('learned-badge').style.display='block';
  }, 2000);
}
function speakCurrent() { speak(WORDS[learnState.category][learnState.index].word); }
function nextCard() {
  const words=WORDS[learnState.category];
  learnState.index=(learnState.index+1)%words.length;
  showFlashcard();
}
function prevCard() {
  const words=WORDS[learnState.category];
  learnState.index=(learnState.index-1+words.length)%words.length;
  showFlashcard();
}

// ===== PLAY MODE =====
function startPlaying() { showScreen('screen-games'); }
function setupGames() {
  const grid=document.getElementById('games-grid'); grid.innerHTML='';
  const learned=getTotalLearned();
  const games=[
    {id:'emoji-match',icon:'🎯',name:'התאם אימוג\'י',desc:'מצא את האימוג\'י הנכון',unlock:0},
    {id:'spelling',icon:'✏️',name:'מצא את האות',desc:'מצא את האות הראשונה',unlock:10},
    {id:'memory',icon:'🧠',name:'משחק זיכרון',desc:'מצא את הזוגות',unlock:15}
  ];
  games.forEach(g=>{
    const locked=learned<g.unlock;
    const card=document.createElement('div');
    card.className='game-card'+(locked?' locked':'');
    card.innerHTML=`<div class="game-icon">${locked?'🔒':g.icon}</div><div class="game-info"><div class="game-title">${g.name}</div><div class="game-desc">${locked?`למד ${g.unlock} מילים כדי לפתוח`:g.desc}</div></div>`;
    if(!locked) card.onclick=()=>startGame(g.id);
    grid.appendChild(card);
  });
}

function startGame(id) {
  if(id==='emoji-match') initEmojiMatch();
  else if(id==='spelling') initSpelling();
  else if(id==='memory') initMemory();
}

// ===== EMOJI MATCH GAME =====
function initEmojiMatch() {
  const all=getAllWords();
  emojiGame={words:shuffle(all).slice(0, 10), round:0, score:0, total:10, correct:0};
  showScreen('screen-emoji-match');
  showEmojiRound();
}
function showEmojiRound() {
  if(emojiGame.round>=emojiGame.total){ endEmojiMatch(); return; }
  const w=emojiGame.words[emojiGame.round];
  document.getElementById('emoji-word').textContent=w.word;
  document.getElementById('emoji-score').textContent=`⭐ ${emojiGame.score}`;
  document.getElementById('emoji-round').textContent=`${emojiGame.round+1} / ${emojiGame.total}`;
  document.getElementById('emoji-feedback').textContent='';
  document.getElementById('emoji-feedback').className='game-feedback';
  // Get wrong options
  const all=getAllWords().filter(x=>x.word!==w.word);
  const wrongs=shuffle(all).slice(0,3);
  const opts=shuffle([w,...wrongs]);
  const container=document.getElementById('emoji-options'); container.innerHTML='';
  opts.forEach(o=>{
    const btn=document.createElement('button');
    btn.className='emoji-option';
    btn.textContent=o.emoji;
    btn.onclick=()=>checkEmojiAnswer(btn, o.word===w.word);
    container.appendChild(btn);
  });
  setTimeout(()=>speak(w.word),300);
}
function speakGameWord() { speak(emojiGame.words[emojiGame.round]?.word||''); }
function checkEmojiAnswer(btn, correct) {
  const fb=document.getElementById('emoji-feedback');
  if(correct){
    btn.classList.add('correct-pop');
    fb.textContent='כל הכבוד! 🎉';
    fb.className='game-feedback correct';
    emojiGame.score+=2; emojiGame.correct++;
    document.getElementById('emoji-score').textContent=`⭐ ${emojiGame.score}`;
    if(window.confetti) confetti({particleCount:80,spread:60,origin:{y:0.7}});
    document.querySelectorAll('.emoji-option').forEach(b=>b.onclick=null);
    setTimeout(()=>{emojiGame.round++;showEmojiRound();},1500);
  } else {
    btn.classList.add('wrong-shake');
    fb.textContent='נסה שוב! 😊';
    fb.className='game-feedback wrong';
    setTimeout(()=>btn.classList.remove('wrong-shake'),400);
  }
}
function endEmojiMatch() {
  const p=getProgress();
  p.gamesPlayed++; addStars(emojiGame.score);
  if(emojiGame.correct===emojiGame.total){ p.perfectGames++; }
  saveProgress(p); checkBadges();
  const fb=document.getElementById('emoji-feedback');
  fb.textContent=`!סיימת! ${emojiGame.score} כוכבים ⭐`;
  fb.className='game-feedback correct';
  document.getElementById('emoji-word').textContent='🎊';
  document.getElementById('emoji-options').innerHTML=`<button class="btn-primary" onclick="showScreen('screen-games')">חזור למשחקים</button>`;
  document.getElementById('emoji-round').textContent='';
  if(window.confetti) confetti({particleCount:150,spread:100,origin:{y:0.6}});
}

// ===== SPELLING GAME =====
function initSpelling() {
  const learned=[];
  const p=getProgress();
  for(const cat in p.learned){
    p.learned[cat].forEach(idx=>{ if(WORDS[cat][idx]) learned.push(WORDS[cat][idx]); });
  }
  if(learned.length<3){ learned.push(...getAllWords().slice(0,5)); }
  let pool = learned;
  spellingGame={words:shuffle(pool).slice(0,8), round:0, score:0, total:Math.min(8,pool.length), filled:[], current:null};
  showScreen('screen-spelling');
  showSpellingRound();
}
function showSpellingRound() {
  if(spellingGame.round>=spellingGame.total){ endSpelling(); return; }
  const w=spellingGame.words[spellingGame.round];
  spellingGame.current=w; spellingGame.filled=[];
  document.getElementById('spelling-hint').textContent=w.emoji;
  document.getElementById('spelling-score').textContent=`⭐ ${spellingGame.score}`;
  document.getElementById('spelling-round').textContent=`${spellingGame.round+1} / ${spellingGame.total}`;
  document.getElementById('spelling-feedback').textContent='';
  document.getElementById('spelling-feedback').className='game-feedback';
  setTimeout(()=>speak(w.word),300);

  // Both kids get the easy "pick first letter" mode
  setupEasySpelling(w);
}
function setupEasySpelling(w) {
  // Show the word, ask to pick the first letter
  const slots=document.getElementById('spelling-slots');
  slots.innerHTML=`<div style="font-size:32px;font-weight:700;direction:ltr;letter-spacing:4px">${w.word}</div>`;
  document.querySelector('.btn-undo').style.display='none';
  const first=w.word[0].toUpperCase();
  const letters=[first];
  const alpha='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  while(letters.length<4){ const r=alpha[Math.floor(Math.random()*26)]; if(!letters.includes(r)) letters.push(r); }
  const choices=document.getElementById('letter-choices'); choices.innerHTML='';
  shuffle(letters).forEach(l=>{
    const btn=document.createElement('button');
    btn.className='letter-btn'; btn.textContent=l;
    btn.onclick=()=>{
      if(l===first){
        btn.style.borderColor='var(--correct)'; btn.style.background='#e8f5e9';
        spellingGame.score+=2;
        document.getElementById('spelling-feedback').textContent='נכון! 🎉';
        document.getElementById('spelling-feedback').className='game-feedback correct';
        if(window.confetti) confetti({particleCount:50,spread:40,origin:{y:0.7}});
        choices.querySelectorAll('.letter-btn').forEach(b=>b.onclick=null);
        setTimeout(()=>{spellingGame.round++;showSpellingRound();},1500);
      } else {
        btn.classList.add('wrong-shake');
        document.getElementById('spelling-feedback').textContent='נסה שוב! 😊';
        document.getElementById('spelling-feedback').className='game-feedback wrong';
        setTimeout(()=>btn.classList.remove('wrong-shake'),400);
      }
    };
    choices.appendChild(btn);
  });
}
function undoLetter() { /* no longer needed but kept for compat */ }
function speakSpellingWord() { speak(spellingGame.current?.word||''); }
function endSpelling() {
  const p=getProgress(); p.gamesPlayed++; addStars(spellingGame.score); saveProgress(p); checkBadges();
  document.getElementById('spelling-hint').textContent='🎊';
  document.getElementById('spelling-feedback').textContent=`!סיימת! ${spellingGame.score} כוכבים ⭐`;
  document.getElementById('spelling-feedback').className='game-feedback correct';
  document.getElementById('spelling-slots').innerHTML=`<button class="btn-primary" onclick="showScreen('screen-games')">חזור למשחקים</button>`;
  document.getElementById('letter-choices').innerHTML='';
  document.querySelector('.btn-undo').style.display='none';
  if(window.confetti) confetti({particleCount:150,spread:100,origin:{y:0.6}});
}

// ===== MEMORY GAME =====
function initMemory() {
  const pairs = 6;
  const learned=[]; const p=getProgress();
  for(const cat in p.learned) p.learned[cat].forEach(idx=>{if(WORDS[cat][idx]) learned.push(WORDS[cat][idx]);});
  if(learned.length<pairs){ const all=getAllWords(); while(learned.length<pairs) learned.push(all[learned.length]); }
  const selected=shuffle(learned).slice(0,pairs);
  const cards=[];
  selected.forEach((w,i)=>{
    cards.push({id:i,type:'emoji',content:w.emoji,word:w.word,pairId:i});
    cards.push({id:i,type:'word',content:w.word,pairId:i});
  });
  memoryGame={cards:shuffle(cards),flipped:[],matched:0,attempts:0,busy:false,pairs:pairs};
  showScreen('screen-memory');
  const grid=document.getElementById('memory-grid');
  grid.className = 'memory-grid ' + (pairs<=4?'grid-3':'grid-4');
  grid.innerHTML='';
  memoryGame.cards.forEach((c,i)=>{
    const card=document.createElement('div');
    card.className='memory-card'; card.dataset.index=i;
    card.innerHTML=`<div class="card-back">❓</div><div class="card-front">${c.type==='emoji'?`<span class="mem-emoji">${c.content}</span>`:`<span class="mem-text">${c.content}</span>`}</div>`;
    card.onclick=()=>flipCard(i);
    grid.appendChild(card);
  });
  document.getElementById('memory-score').textContent='ניסיונות: 0';
  document.getElementById('memory-feedback').textContent='';
}
function flipCard(idx) {
  if(memoryGame.busy) return;
  const cards=document.querySelectorAll('.memory-card');
  const card=cards[idx];
  if(card.classList.contains('flipped')||card.classList.contains('matched')) return;
  card.classList.add('flipped');
  const data=memoryGame.cards[idx];
  if(data.type==='word') speak(data.content);
  memoryGame.flipped.push(idx);
  if(memoryGame.flipped.length===2){
    memoryGame.busy=true; memoryGame.attempts++;
    document.getElementById('memory-score').textContent=`ניסיונות: ${memoryGame.attempts}`;
    const [a,b]=memoryGame.flipped;
    const da=memoryGame.cards[a], db=memoryGame.cards[b];
    if(da.pairId===db.pairId){
      setTimeout(()=>{
        cards[a].classList.add('matched'); cards[b].classList.add('matched');
        memoryGame.matched++; memoryGame.flipped=[]; memoryGame.busy=false;
        if(memoryGame.matched===memoryGame.pairs) endMemory();
      },500);
    } else {
      setTimeout(()=>{
        cards[a].classList.remove('flipped'); cards[b].classList.remove('flipped');
        memoryGame.flipped=[]; memoryGame.busy=false;
      },1000);
    }
  }
}
function endMemory() {
  const stars=Math.max(2, 6-Math.floor(memoryGame.attempts/memoryGame.pairs));
  const p=getProgress(); p.gamesPlayed++; addStars(stars);
  if(memoryGame.attempts<=memoryGame.pairs+2) p.perfectGames++;
  saveProgress(p); checkBadges();
  const fb=document.getElementById('memory-feedback');
  fb.textContent=`כל הכבוד! ${stars} כוכבים ⭐`;
  fb.className='game-feedback correct';
  if(window.confetti) confetti({particleCount:150,spread:100,origin:{y:0.6}});
  setTimeout(()=>{
    document.getElementById('memory-grid').innerHTML=`<button class="btn-primary" onclick="showScreen('screen-games')">חזור למשחקים</button>`;
  },2000);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', ()=>{
  showScreen('screen-profiles');
});
