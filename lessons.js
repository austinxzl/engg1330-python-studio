window.Teaching = (() => {
  'use strict';

  const chapters = window.LESSONS;
  const editorUI = new Map();
  const lastRuns = new Map();
  let language, position, checked;
  const dataKey = (id,n) => 'lesson-draft:' + id + ':' + n;
  const pageUrl = (id, n=1) => '#lesson/' + id + '/' + n;
  const find = selector => main.querySelector(selector);

  function inline(text) {
    return esc(text).replace(/`([^`\n]+)`/g,'<code>$1</code>');
  }

  function pair(en, cn) {
    return '<div class="lt-pair">' +
      (language !== 'en' ? '<p lang="zh-CN">'+inline(cn)+'</p>' : '') +
      (language !== 'zh' ? '<p lang="en">'+inline(en)+'</p>' : '') + '</div>';
  }

  function title(en, cn) {
    if (language === 'en') return esc(en);
    if (language === 'zh') return esc(cn);
    return esc(cn) + ' <span lang="en">' + esc(en) + '</span>';
  }

  function languagePicker() {
    return '<label class="lt-language"><span>'+t('Lesson text','讲解语言')+'</span><select id="lt-language">' +
      [['both','中文 + English'],['zh','中文'],['en','English']].map(([key,name]) =>
        '<option value="'+key+'"'+(key===language?' selected':'')+'>'+name+'</option>').join('')+'</select></label>';
  }

  function wirePicker(id, rawStep) {
    find('#lt-language').onchange = e => {
      window.PythonRunner.stop();
      language = e.target.value;
      save('lesson-language',language);
      render(id,rawStep);
    };
  }

  function index() {
    const last = read('lesson-last',null);
    const first = chapters.find(c=>c.unit===last) || chapters[0];
    main.innerHTML = '<div class="lt-index-head"><div><div class="eyebrow">ENGG1330 · L2–L9</div><h1>'+
      title('Learn Python','逐章学 Python')+'</h1>'+
      pair('Read the example, run it, then change one thing and run it again.',
           '先看例子，点「运行」，再改一处代码，观察结果怎样变化。')+
      '<a class="mx-button" href="'+pageUrl(first.unit,position[first.unit]||1)+'">'+
      (last?t('Continue learning','继续上次学习'):t('Start Lecture 2','从第 2 讲开始'))+'</a></div>'+languagePicker()+'</div>'+
      '<div class="lt-chapter-list">'+chapters.map(c=>{
        const u=unitById(c.unit);
        return '<a class="lt-chapter" style="'+theme(u)+'" href="'+pageUrl(c.unit,position[c.unit]||1)+'">'+
          '<span class="topic-icon">'+icon(u[5],22)+'</span><div><div class="eyebrow">'+c.unit+' · '+c.sections.length+
          t(' lessons',' 个小节')+(checked[c.unit]?' · '+t('Check passed','自测已通过'):'')+'</div><h2>'+
          title(u[1],u[2])+'</h2>'+pair(c.goals,c.goalsZh)+'</div></a>';
      }).join('')+'</div>';
    wirePicker();
  }

  function toolbar(c,u,step) {
    const options=c.sections.map((s,i) => {
      const name = language === 'en' ? s.title : language==='zh'?s.titleZh:s.titleZh+' / '+s.title;
      return '<option value="'+(i+1)+'"'+(step===i+1?' selected':'')+'>'+(i+1)+'. '+esc(name)+'</option>';
    }).join('')+'<option value="check"'+(step==='check'?' selected':'')+'>'+t('Chapter check','章末自测')+'</option>';
    return '<div class="lt-tools"><a class="crumb" href="#learn">'+icon('book',16)+t('All chapters','全部章节')+'</a>'+languagePicker()+
      '</div><div class="lt-chapter-bar" style="'+theme(u)+'"><div class="lt-chapter-id"><span class="topic-icon">'+icon(u[5],21)+
      '</span><div><div class="eyebrow">'+lesson(u)+'</div><strong>'+title(u[1],u[2])+'</strong></div></div>'+
      '<label class="lt-jump">'+t('Jump to a lesson','选择小节')+'<select id="lt-jump">'+options+'</select></label></div><details class="lt-roadmap"><summary>'+title('What you’ll learn','本章学什么')+'</summary>'+pair(c.goals,c.goalsZh)+'</details>';
  }

  function stepNav(prev,next,nextName) {
    return '<nav class="lt-step-nav" aria-label="'+t('Lesson navigation','教程导航')+'">'+
      (prev?'<a class="mx-secondary" href="'+prev+'">'+t('Previous','上一步')+'</a>':'<span></span>')+
      '<a class="mx-button" href="'+next+'">'+nextName+'</a></nav>';
  }

  function errorHelp(error) {
    const last=error.trim().split('\n').pop();
    const name=last.split(':')[0];
    const tips={
      NameError:['Check the spelling and capital letters of the name on the last line of the error. Find the assignment that should run before Python uses that name.', '看报错最后一行指出的名字，检查拼写和大小写，再找到首次使用它之前应该执行的赋值。'],
      IndentationError:['Find the line number in the message. After a block header ending in a colon, indent the instructions that belong inside it together.', '找到报错行号。以冒号结尾的语句会开启一个代码块，检查属于这个块的各行是否缩进到同一层。'],
      ValueError:['Read the value named in the last line of the error. If this line converts input, print the original text and check whether the conversion accepts it.', '查看最后一行提到的值。如果出错的地方在转换输入，先打印原始文字，看看它是否符合转换要求。'],
      IndexError:['Print the index and the length of the sequence together. For a sequence of length 3, the nonnegative indices are 0, 1 and 2.', '把下标和序列长度一起打印。长度为 3 时，能使用的非负下标是 0、1、2。'],
      EOFError:['Open the input box below the editor. Supply one line for each input() call reached by your program, then run it again.', '展开编辑器下方的输入框。程序每执行一次 input()，就要有一行可读。补上所需的输入，再运行。'],
      TypeError:['Read the types or arguments named on the last line. Check the values on the failing line with type(value).', '查看报错最后一行提到的类型或参数。可以用 type(值) 检查出错那一行用到的值。'],
      ZeroDivisionError:['Trace the divisor at the failing line. Try a zero input and a nonzero input to see which path reaches the division.', '跟踪出错那行的除数。分别用零和非零输入运行，观察程序走哪条路径时会执行除法。'],
      RecursionError:['Trace the first few calls. Find the stopping condition and check that each recursive call moves closer to it.', '跟踪前几次调用，找出终止条件，检查每次递归的参数是否更接近它。']
    };
    return tips[name]?pair(...tips[name]):'';
  }

  function lessonPage(c,step) {
    const i=step-1,u=unitById(c.unit),s=c.sections[i];
    const key=dataKey(c.unit,step),draft=read(key,{});
    if(!editorUI.has(key)) editorUI.set(key,{});
    const ui=editorUI.get(key);
    main.innerHTML=toolbar(c,u,step)+'<div class="lt-reader"><article class="lt-reading"><div class="eyebrow">'+
      t('Lesson ','小节 ')+step+' / '+c.sections.length+'</div><h1>'+title(s.title,s.titleZh)+'</h1>'+
      pair(s.en,s.zh)+'<section class="lt-change"><h2>'+title('Change it','动手改一处')+'</h2>'+pair(s.tryEn,s.tryZh)+
      '</section><details class="lt-original"><summary>'+t('Original example output','原始示例的输出')+
      '</summary><pre>'+esc(s.output)+'</pre></details></article>'+
      '<div class="lt-lab ex-workspace"><div class="ex-editor"><div class="ex-editor-bar"><div class="ex-file">'+icon('code',16)+
      '<span>example.py</span></div><span>Python 3</span></div>'+window.PythonEditor.frame(t('Editable example','可修改的示例'),'lt-keys')+
      '<div class="ex-actions"><button type="button" class="ex-submit" id="lt-run">'+icon('play',16)+t('Run','运行')+
      '</button><button type="button" class="ex-run" id="lt-trace">'+t('Trace lines','逐行跟踪')+
      '</button><button type="button" class="ex-stop" id="lt-stop" hidden>'+t('Stop','停止')+
      '</button><button type="button" class="lt-reset" id="lt-reset">'+t('Restore example','恢复示例')+'</button></div></div>'+
      '<details class="lt-input"'+(s.input || draft.input || s.code.includes('input(')?' open':'')+'><summary>'+
      t('Input for input()', '给 input() 的输入')+'</summary><label for="lt-input">'+
      t('One line per input() call','每次 input() 读取一行')+'</label><textarea id="lt-input" rows="2" spellcheck="false"></textarea></details>'+
      '<div id="lt-report" aria-live="polite"></div><p id="lt-keys">'+t('⌘ / Ctrl + Enter to run. Esc, then Tab to leave the editor.',
      '⌘ / Ctrl + Enter 运行；按 Esc 再按 Tab 可离开编辑器。')+'</p></div></div>'+
      stepNav(i?pageUrl(c.unit,step-1):'#learn',pageUrl(c.unit,step===c.sections.length?'check':step+1),
        step===c.sections.length?t('Take chapter check','章末自测'):t('Next lesson','下一小节'));
    const root=find('.lt-lab'),stdin=find('#lt-input'),report=find('#lt-report');
    const run=find('#lt-run'),trace=find('#lt-trace'),stop=find('#lt-stop'),reset=find('#lt-reset');
    const outputState = () => lastRuns.get(key);
    let busy=false, generation=0;
    stdin.value=draft.input ?? s.input;
    function changed() {
      if(busy) stopRun();
      lastRuns.delete(key);
      report.replaceChildren();
      save(key,{code:code.value,input:stdin.value});
    }
    const code=window.PythonEditor.attach(root,draft.code??s.code,ui,changed);
    root.style.setProperty('--lesson-lines',Math.min(19,Math.max(5,code.value.split('\n').length)));
    stdin.addEventListener('input',changed);
    const setBusy = value => {
      busy=value;
      run.disabled=trace.disabled=value;
      stop.hidden=!value;
    };
    function stopRun() {
      generation++;
      window.PythonRunner.stop();
      setBusy(false);
      report.textContent=t('Stopped.','已停止。');
    }
    function display() {
      const result=outputState();
      if(!result) return;
      let html='<div class="lt-output"><h3>'+t('Output','运行结果')+'</h3><pre>'+
        esc(result.output || t('(no output)','（无输出）'))+'</pre>'+
        (result.error?'<p class="lt-error">'+esc(result.error)+'</p>'+errorHelp(result.error):'')+'</div>';
      if(result.trace?.steps.length) html+='<section id="lt-trace-panel"></section>';
      report.innerHTML=html;
      if(result.trace?.steps.length) displayStep(result,0);
    }
    function displayStep(result,index) {
      const steps=result.trace.steps, frame=steps[index], name=frame.scope==='<module>'?t('main program','主程序'):frame.scope+'()';
      const vars=Object.entries(frame.variables);
      const panel=find('#lt-trace-panel');
      panel.innerHTML='<div class="lt-trace-title"><b>'+t('Execution trace','执行轨迹')+'</b><span>'+t('Step ','第 ')+(index+1)+' / '+steps.length+'</span></div>'+
        '<div class="lt-trace-location">'+esc(name)+' · '+(frame.event==='line'?t('Before line ','执行前，第 '):frame.event==='exception'?t('Exception on line ','异常，第 '):t('Leaving scope at line ','离开此层，第 '))+
        frame.line+t('',' 行')+'</div><pre>'+esc(result.source.split('\n')[frame.line-1]||'')+'</pre>'+
        '<h4>'+t('Local variables','当前变量')+'</h4>'+
        (vars.length?'<dl>'+vars.map(([k,v])=>'<div><dt>'+esc(k)+'</dt><dd>'+esc(v)+'</dd></div>').join('')+'</dl>':'<p>'+t('No values assigned here yet.','这里还没有已赋值的变量。')+'</p>')+
        (frame.scope!=='<module>' && frame.event==='return' && frame.returned!==undefined?'<p>'+t('Return value','返回值')+' <code>'+esc(frame.returned)+'</code></p>':'')+
        (frame.exception?'<p>'+esc(frame.exception)+'</p>':'')+
        '<div class="lt-trace-controls"><button type="button" id="lt-back" aria-label="'+t('Previous trace step','上一步轨迹')+'"'+(!index?' disabled':'')+'>'+t('Back','上一步')+'</button>'+
        '<input id="lt-slider" aria-label="'+t('Trace step','轨迹步数')+'" type="range" min="1" max="'+steps.length+'" value="'+(index+1)+'">'+
        '<button type="button" id="lt-forward"'+(index===steps.length-1?' disabled':'')+'>'+t('Step','下一步')+'</button></div>'+
        (result.trace.limited?'<small>'+t('Showing the first 180 steps.','显示前 180 步。')+'</small>':'');
      find('#lt-back').onclick=()=>displayStep(result,index-1);
      find('#lt-forward').onclick=()=>displayStep(result,index+1);
      find('#lt-slider').onchange=e=>{displayStep(result,Number(e.target.value)-1);find('#lt-slider').focus();};
    }
    async function execute(withTrace) {
      if(busy) return;
      const ticket=++generation,source=code.value;
      const active=()=>root.isConnected && generation===ticket;
      setBusy(true);
      lastRuns.delete(key);
      try {
        const [result]=await window.PythonRunner.run(source,[stdin.value],status=>{
          if(active()) report.textContent=status==='loading'?t('Loading Python…','正在加载 Python…'):t('Running…','正在运行…');
        },{trace:withTrace});
        if(!active()) return;
        lastRuns.set(key,{...result,source});
        display();
      } catch(error) {
        if(active()) report.textContent=String(error.message||error);
      } finally { if(active()) setBusy(false); }
    }
    run.onclick=()=>execute(false);
    trace.onclick=()=>execute(true);
    stop.onclick=stopRun;
    reset.onclick=()=>{
      if(busy) stopRun();
      code.value=s.code;
      stdin.value=s.input;
      code.dispatchEvent(new Event('input'));
      code.focus();
    };
    root.onkeydown=e=>{if((e.ctrlKey||e.metaKey)&&e.key==='Enter'){e.preventDefault();execute(false);}};
    display();
  }

  const examApproaches = {
    L2: ['In the February ticket problem, work out the last valid day first. Trace three dates on paper: an ordinary day, the last day, and the first invalid day. Test 1900 and 2000 to check the century rule.',
         '做二月维护工单时，先算当年二月有几天。在纸上分别走一遍普通日期、最后一天和第一个无效日期，再用 1900 年和 2000 年检查整百年份的规则。'],
    L3: ['For the tool counter, draw a row for each transaction with the old quantity, the requested change and the proposed quantity. Update the dictionary only after deciding whether to accept the transaction.',
         '做工具柜台题时，每笔交易写一行：原库存、变化量、预计新库存。先判断是否接受，再更新字典。用同一种工具连续两次出库，检查上一次的结果有没有保留。'],
    L4: ['Decode the packet by undoing the last operation first. Trace one letter through the reversal and the reverse shift. Pick a letter near A to test wraparound.',
         '做数据包解码时，先撤销发送方的最后一步。挑一个字符，跟踪它反转后的位置，再计算反向移位后的字母。选 A 附近的字母检查绕回 Z 的情况。'],
    L5: ['For the shift log, write one tuple for each file line. Keep the original list beside its copy. Trace a deduction larger than the original shift and check both totals.',
         '做工时簿题时，把文件每一行写成一个元组，原列表和副本并排列出。选一笔大于原工时的扣减，检查两个总数分别怎样变化。'],
    L6: ['For the tariff problem, try 0, 1, 5 and 6 minutes. Write the expected fee beside each input. When testing a candidate function, check what the loop does after the first case that passes.',
         '做计费题时，先为 0、1、5、6 分钟分别写下应收费用。检查候选函数时，特别跟踪第一个用例通过后，循环还会不会检查后面的用例。'],
    L7: ['For the instrument snapshot, draw the dictionary names and the lists they point to. Follow the label assignment, then the append. Read the three reports from your diagram.',
         '做仪表快照题时，画出三个字典及其读数列表的指向。先跟踪标签赋值，再跟踪 append，最后沿图上每条引用读出三份报告。'],
    L8: ['For the motor catalogue, include two motors with equal ratings. Sort them, then trace the search for a threshold equal to that rating. Check which of the tied motors is returned.',
         '做电机目录题时，放入两台额定值相同的电机。排好序后，把门槛设为这个额定值，手推查找，看看返回的是同分电机中的哪一台。'],
    L9: ['For the box tree, start with one integer leaf. Write what that recursive call returns. Draw the two child results beside their parent and merge them before choosing the median positions.',
         '做箱树题时，从一个整数叶子开始，写下这次递归应该返回什么。把两个子调用的结果写在父节点旁，先归并，再确定中位数的下标。']
  };

  function checkPage(c) {
    const q=c.check, u=unitById(c.unit);
    const key='lesson-prediction:'+c.unit, state=read(key,{text:'',submitted:false});
    const number=chapters.indexOf(c),next=chapters[number+1];
    main.innerHTML=toolbar(c,u,'check')+'<section class="lt-check"><div class="eyebrow">'+c.unit+' · '+t('Chapter check','章末自测')+
      '</div><h1>'+title('Predict the output','先手推，再核对')+'</h1>'+pair(q.en,q.zh)+
      '<pre class="lt-check-code"><code>'+esc(q.code)+'</code></pre><form id="lt-check-form"><label for="lt-prediction">'+t('Your predicted output','你预测的输出')+
      '</label><input id="lt-prediction" autocomplete="off" spellcheck="false"><button class="mx-button">'+t('Check answer','核对答案')+
      '</button></form><div id="lt-verdict" aria-live="polite"></div></section>'+
      '<div class="lt-apply"><h2>'+title('Apply it','用考试题练一遍')+'</h2>'+pair(...examApproaches[c.unit])+
      ['-1','-10'].map(suffix=>bank.find(p=>p.id===c.unit+suffix)).map(p=>
        '<a href="#exercise/'+p.id+'"><b>'+esc(p.id)+'</b><span>'+title(p.title,p.titleZh)+'</span></a>').join('')+'</div>'+
      stepNav(pageUrl(c.unit,c.sections.length),next?pageUrl(next.unit,1):'#review',
        next?t('Start Lecture ','进入第 ')+next.unit.slice(1)+t('',' 讲'):t('Full-course review','全课程总复习'));
    const field=find('#lt-prediction'), verdict=find('#lt-verdict');
    field.value=state.text;
    function assess() {
      const correct=field.value.replace(/\s/g,'')===q.answer.replace(/\s/g,'');
      verdict.innerHTML='<h2>'+ (correct?t('Correct','答对了'):t('Compare the output','对照输出'))+
        '</h2><pre>'+esc(q.answer)+'</pre>'+pair(q.why,q.whyZh);
      if(correct){checked[c.unit]=true;save('lesson-checks',checked);}
    }
    field.oninput=()=>{save(key,{text:field.value,submitted:false});verdict.replaceChildren();};
    find('#lt-check-form').onsubmit=e=>{
      e.preventDefault();
      if(!field.value.trim()){field.focus();return;}
      save(key,{text:field.value,submitted:true});assess();
    };
    if(state.submitted) assess();
  }

  function render(id,rawStep) {
    if (!position) {
      language=read('lesson-language','both');
      position=read('lesson-positions',{});
      checked=read('lesson-checks',{});
    }
    const c=chapters.find(chapter=>chapter.unit===id);
    if(!c){index();return;}
    const requested=rawStep||position[id]||1;
    const step=requested==='check'?'check':Math.max(1,Math.min(c.sections.length,Math.floor(Number(requested))||1));
    position[id]=step;save('lesson-positions',position);save('lesson-last',id);
    if(step==='check') checkPage(c);
    else lessonPage(c,step);
    find('#lt-jump').onchange=e=>{location.hash=pageUrl(id,e.target.value);};
    wirePicker(id,step);
  }

  return {render};
})();
