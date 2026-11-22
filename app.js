'use strict';

const bank = window.QUESTIONS;
const main = document.querySelector('#main');
const units = [
  ['L2', 'Expressions & decisions', '表达式与条件判断', 'Arithmetic, types and conditional logic.', '练习算术、类型转换与条件逻辑。', 'branch', '#6754a3', '#efebf7'],
  ['L3', 'Collections & loops', '数据容器与循环', 'Work with sets, dictionaries and repeated steps.', '用集合、字典和循环处理数据。', 'layers', '#407c75', '#e5f2ee'],
  ['L4', 'Strings', '字符串', 'Slice, format and compare sequences of text.', '切片、格式化和比较字符串。', 'type', '#54718e', '#e8eff6'],
  ['L5', 'Working with data', '列表、元组与文件', 'Copy lists, unpack tuples and read text files.', '复制列表、解包元组和读取文本文件。', 'folder', '#916c45', '#f6efe6'],
  ['L6', 'Functions & testing', '函数与测试', 'Build reusable functions and test their limits.', '编写可复用函数并测试边界条件。', 'function', '#6e6392', '#eeebf5'],
  ['L7', 'Mutation & aliasing', '可变对象与别名', 'Follow references and track in-place changes.', '追踪引用，理解原地修改。', 'link', '#477989', '#e9f3f4'],
  ['L8', 'Search & sorting', '查找与排序', 'Trace comparisons, swaps and search paths.', '跟踪比较、交换和查找过程。', 'sort', '#8d6b72', '#f5ecee'],
  ['L9', 'Recursion & merge sort', '递归与归并排序', 'Break problems into smaller calls and merge results.', '拆解递归调用并合并结果。', 'tree', '#657e58', '#edf2e9'],
  ['M', 'Mixed practice', '综合练习', 'Trace programs, repair bugs and combine lecture topics.', '追踪程序、修复错误，综合运用不同讲次的知识。', 'grid', '#6754a3', '#efebf7'],
  ['C', 'Full-course review', '全课程综合题', 'An integrated problem spanning Lectures 2–9.', '一道融合第 2 至 9 讲的综合题。', 'book', '#6754a3', '#efebf7']
];
const svgPaths = {
  book: '<path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v14c-3-1-6-1-9 1-3-2-6-2-9-1zM12 6v14"/>',
  chart: '<path d="M4 19h16M7 15v-4m5 4V5m5 10V8"/>',
  translate: '<path d="M2 7h12M8 4v3m4 0c-1 4-4 8-9 10m2-7c1 2 3 4 6 6m2 4 4-10 4 10m-7-3h6"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
  branch:'<circle cx="7" cy="5" r="2.3"/><circle cx="7" cy="19" r="2.3"/><circle cx="18" cy="7" r="2.3"/><path d="M7 7.5v9m.2-2.5C13 14 18 13 18 9.5"/>',
  layers:'<path d="m3 7 9-4 9 4-9 4zm0 5 9 4 9-4m-18 5 9 4 9-4"/>',
  type:'<path d="M3 8V5h13v3M9.5 5v14m-3 0h6M15 12V9h7v3m-3.5-3v10m-2 0h4"/>',
  folder:'<path d="M3 8V6a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  function:'<path d="M4 20c3 1 4-1 5-6l1-6c.8-4 3-5 6-4M5 11h10m0 5 5 5m0-5-5 5"/>',
  link:'<path d="m10 13 4-4m-5 7-2 2a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m2-1 2-2a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0" transform="translate(1 0)"/>',
  sort:'<path d="M4 6h16M4 12h11M4 18h6"/>',
  tree:'<rect x="9" y="2" width="6" height="5" rx="1.5"/><path d="M12 7v4m-7 5v-5h14v5"/><rect x="2" y="16" width="6" height="5" rx="1.5"/><rect x="16" y="16" width="6" height="5" rx="1.5"/>',
  play:'<path d="m8 5 11 7-11 7z" fill="currentColor" stroke="none"/>',
  code:'<path d="m7 7-5 5 5 5m10-10 5 5-5 5m-4-14-3 18"/>',
  check:'<path d="m5 12 4 4L19 6"/>', circle:'<circle cx="12" cy="12" r="8"/>'
};
function icon(name,size=18){return '<svg aria-hidden="true" width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+svgPaths[name]+'</svg>';}
function esc(str){return String(str).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function read(key, fallback){try{return JSON.parse(localStorage.getItem('pystudio:'+key))??fallback;}catch{return fallback;}}
let storageOK = true;
function save(key,value){try{localStorage.setItem('pystudio:'+key,JSON.stringify(value));}catch{storageOK=false; setFooter();}}
let zh=read('zh',false), solved=new Set(read('solved',[])), drafts=read('drafts',{}), last=read('last','');
const editorState=new Map();
const t=(en,cn)=>zh?cn:en;
const byUnit=id=>bank.filter(q=>q.unit===id);
const unitById=id=>units.find(u=>u[0]===id);
const names=u=>u[zh?2:1], desc=u=>u[zh?4:3];
const lesson=u=>u[0]==='M'?t('Review set','综合题组'):t('Lecture ','第 ')+u[0].slice(1).padStart(2,'0')+t('',' 讲');
const levelName=x=>zh?({Easy:'基础',Medium:'进阶',Hard:'挑战'}[x]):x;
const solvedCount=qs=>qs.filter(q=>solved.has(q.id)).length;
function theme(u){return '--accent:'+u[6]+';--tint:'+u[7];}
function setFooter(){document.querySelector('#footnote').textContent=storageOK?t('Progress saved on this device','进度保存在此设备'):t('Device storage unavailable · session only','本地存储不可用，本次会话内有效');}
function chrome(active){
  document.documentElement.lang=zh?'zh-CN':'en';
  const navs=[['learn','layers',t('Learn','逐章学习')],['library','book',t('Practice library','练习题库')],['exams','grid',t('Mock exams','模拟考试')],['progress','chart',t('My progress','学习进度')]];
  document.querySelector('#nav').innerHTML=navs.map(([id,ic,label])=>'<a href="#'+id+'" '+(active===id?'aria-current="page"':'')+'>'+icon(ic,17)+label+'</a>').join('');
  const lang=document.querySelector('#language');
  lang.innerHTML=icon('translate')+'<span>'+t('中文','English')+'</span>';
  lang.setAttribute('aria-label',t('Translate into Chinese','Switch to English'));
  setFooter();
}
function resume(){return bank.find(q=>q.id===last)||bank.find(q=>!solved.has(q.id))||bank[0];}
function courseCard(u){
  const qs=byUnit(u[0]), count=solvedCount(qs);
  return '<a class="course-card" style="'+theme(u)+'" href="#unit/'+u[0]+'"><div class="card-top"><span class="topic-icon">'+icon(u[5],24)+'</span><span class="eyebrow">'+lesson(u)+'</span></div><h3>'+names(u)+'</h3><p>'+desc(u)+'</p><div class="card-bottom"><span>'+icon('code',15)+qs.length+t(' exercises',' 道练习')+'</span><span class="mini-progress" aria-label="'+count+' / '+qs.length+'">'+qs.map(q=>'<i class="'+(solved.has(q.id)?'done':'')+'"></i>').join('')+'</span></div></a>';
}
function statsLink(){return '<a class="library-progress" href="#progress">'+icon('chart',18)+solvedCount(bank)+' / '+bank.length+' '+t('solved','已完成')+'</a>';}
function library(mixed){
  chrome('library');
  main.innerHTML='<section class="hero"><div class="hero-art" aria-hidden="true"></div><div class="hero-content"><div class="course-label"><span>ENGG1330</span><i></i>'+t('Computer Programming I','计算机程序设计 I')+'</div><h1>'+t('Python practice<br><em>studio.</em>','Python <em>练习室</em>')+'</h1><p>'+t('Work through each lecture, write Python and test your solutions.','按讲次温习，在网页中编写 Python 并测试答案。')+'</p><a class="start" href="#exercise/'+resume().id+'">'+icon('play',17)+(last?t('Resume practice','继续练习'):t('Start practicing','开始练习'))+'</a><a class="hero-review" href="#review">'+t('Course review','总复习')+'</a></div></section>'+
  '<section class="library-block" id="collection"><div class="section-head"><div><h2>'+t('Practice library','练习题库')+'</h2><p>'+t('8 lectures','8 讲')+' <b>·</b> '+ bank.length+t(' original exercises',' 道原创练习')+'</p></div>'+statsLink()+'</div><div class="segmented"><a href="#library" '+(!mixed?'aria-current="true"':'')+'>'+icon('book',16)+t('Lecture sets','分讲练习')+'</a><a href="#mixed" '+(mixed?'aria-current="true"':'')+'>'+icon('grid',15)+t('Mixed practice','综合练习')+'</a><a href="#review">'+icon('layers',16)+t('Course review','总复习')+'</a></div>'+
  (mixed?'<div class="question-list">'+questionRows(byUnit('M'))+'</div>':'<div class="course-grid">'+units.slice(0,8).map(courseCard).join('')+'</div>')+'</section>';
}
function questionRows(qs){return qs.map((q,i)=>'<a class="qrow" href="#exercise/'+q.id+'"><span class="qno '+(solved.has(q.id)?'complete':'')+'">'+(solved.has(q.id)?icon('check',18):String(i+1).padStart(2,'0'))+'</span><span class="qbody"><strong>'+esc(zh?q.titleZh:q.title)+'</strong><small>'+esc(zh?q.topicZh:q.topic)+'</small></span><span class="level '+q.level.toLowerCase()+'">'+levelName(q.level)+'</span><span class="row-play">'+icon('play',17)+'</span></a>').join('');}
function unitPage(u){
  chrome('library');
  let qs=byUnit(u[0]);
  main.innerHTML='<a class="crumb" href="#'+(u[0]==='M'?'mixed':'library')+'">'+icon('book',16)+t('Practice library','练习题库')+'</a><section class="unit-intro" style="'+theme(u)+'"><div class="topic-icon">'+icon(u[5],29)+'</div><div class="eyebrow">'+lesson(u)+'</div><h1>'+names(u)+'</h1><p>'+desc(u)+'</p><span class="unit-count">'+solvedCount(qs)+' / '+qs.length+t(' solved',' 已完成')+'</span>'+(u[0].startsWith('L')?'<a class="learn-unit-link" href="#lesson/'+u[0]+'/1">'+icon('book',16)+t('Learn this chapter','学习这一章')+'</a>':'')+'</section><div class="question-list">'+questionRows(qs)+'</div>';
}
function progress(){
  chrome('progress');
  main.innerHTML='<section class="progress-intro"><div class="eyebrow">ENGG1330</div><h1>'+t('My progress','学习进度')+'</h1><p>'+t('Exercises you have passed on this device.','在这台设备上已通过全部测试的练习。')+'</p><div class="big-count">'+solvedCount(bank)+'<small> / '+bank.length+'</small></div><progress max="'+bank.length+'" value="'+solvedCount(bank)+'"></progress></section><div class="progress-list">'+units.map(u=>{const qs=byUnit(u[0]),n=solvedCount(qs);return '<a class="progress-row" href="#unit/'+u[0]+'" style="'+theme(u)+'"><span class="topic-icon">'+icon(u[5])+'</span><span>'+names(u)+'</span><progress max="'+qs.length+'" value="'+n+'"></progress><small>'+n+' / '+qs.length+'</small></a>';}).join('')+'</div>';
}
function render(scroll=true){
  const [page,id]=location.hash.slice(1).split('/');
  if(window.PythonRunner) window.PythonRunner.stop();
  const q=bank.find(q=>q.id===id),u=unitById(id);
  main.className='site-main';
  if(page==='learn'||page==='lesson'){
    chrome('learn');
    window.Teaching.render(id,location.hash.split('/')[2]);
  }else if(page==='exams'||page==='exam'){
    chrome('exams');
    window.MockExams.render(page,id,location.hash.split('/')[2]);
  }else if(page==='review'||(page==='unit'&&id==='C')){
    courseReview();
  }else if(page==='exercise'&&q){
    chrome('library');main.className+=' exercise-page';last=q.id;save('last',last);
    const group=unitById(q.unit),next=byUnit(q.unit)[byUnit(q.unit).indexOf(q)+1];
    if(!editorState.has(q.id)) editorState.set(q.id,{});
    window.renderExercise(q,{zh,draft:drafts[q.id]??q.starter,solved:solved.has(q.id),ui:editorState.get(q.id),groupUrl:q.recap||q.unit==='C'?'#review':'#unit/'+q.unit,nextUrl:q.recap&&q.unit!=='L9'?'#exercise/L'+(Number(q.unit.slice(1))+1)+'-10':next?'#exercise/'+next.id:null,groupName:q.recap||q.unit==='C'?t('Course review','总复习'):names(group),saveDraft(code){drafts[q.id]=code;save('drafts',drafts);},markSolved(){solved.add(q.id);save('solved',[...solved]);}});
  }else if(page==='unit'&&u)unitPage(u);
  else if(page==='progress')progress();
  else library(page==='mixed');
  document.title=(page==='exercise'&&q?(zh?q.titleZh:q.title)+' · ':page==='exams'||page==='exam'?t('Mock exams','模拟考试')+' · ':page==='learn'||page==='lesson'?t('Learn Python','逐章学习')+' · ':'')+'PyStudio · ENGG1330';
  if(scroll) window.scrollTo(0,0);
}
document.querySelector('#language').onclick=()=>{zh=!zh;save('zh',zh);render(false);};
window.addEventListener('hashchange',e=>{
  const old=new URL(e.oldURL).hash,newHash=location.hash;
  const switching=['#mixed','#library'].includes(newHash)&&['#mixed','#library',''].includes(old);
  render(!switching);
});
render();
