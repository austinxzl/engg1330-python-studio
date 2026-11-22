window.MockExams = (() => {
  'use strict';

  const session = window.ExamSession;
  const papers = window.MOCK_PAPERS;
  const paperFor = id => papers.find(p => p.id === id);
  const $ = selector => main.querySelector(selector);
  const local = (obj, key) => zh && obj[key + 'Zh'] ? obj[key + 'Zh'] : obj[key];
  const prompt = q => zh ? q.zh : q.en;
  const label = q => q.ref;
  const href = (p, a) => '#exam/' + p.id + (a ? '/' + a.id : '');
  const codeBox = text => '<pre class="mx-code"><code>' + esc(text) + '</code></pre>';
  const badge = text => '<span class="mx-badge">' + text + '</span>';
  const button = (id, text) => '<button type="button" class="mx-button" id="' + id + '">' + text + '</button>';
  const paperName = p => t('Paper ', '试卷 ') + p.id.padStart(2, '0');
  const clockText = ms => {
    const s = Math.max(0, Math.ceil(ms / 1000));
    return [Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60]
      .map(x => String(x).padStart(2, '0')).join(':');
  };
  let reviewFilter = 'all';
  let reviewId = '';
  let storageWarning = false;

  function brief(p) {
    return local(p, 'theme');
  }
  function marks(q) {
    return q.kind === 'trace' ? 3 : q.tests.length * 2;
  }
  function questionTitle(q) {
    return '<span class="mx-ref">Q' + label(q) + '</span> ' + esc(local(q, 'title'));
  }
  function locationParts() {
    return location.hash.slice(1).split('/');
  }
  function refresh() {
    const [page, id, attemptId] = locationParts();
    if (page === 'exam' || page === 'exams') show(page,id,attemptId);
  }
  function displayDate(started) {
    return new Intl.DateTimeFormat(zh ? 'zh-CN':'en-GB', {dateStyle:'medium',timeStyle:'short'}).format(started);
  }
  function paperStatus(p,a) {
    if (!a) return '';
    if (a.state === 'marked') return badge(session.score(a,p.questions) + ' / 100');
    if (a.state !== 'open') return badge(t('Submitted','已交卷'));
    return badge(t('In progress','进行中'));
  }
  function library() {
    const attempts = session.attempts();
    main.innerHTML = '<section class="mx-intro"><div class="eyebrow">ENGG1330</div><h1>' +
      t('Mock exams','模拟考试') + '</h1><p>' +
      t('Five original papers in the December 2022 format. Work under exam conditions, then review your score and the reasoning behind each answer.',
        '五套原创英文卷，按 2022 年 12 月试卷结构命题。限时独立作答，交卷后逐题查看得分和解题过程。') +
      '</p><div class="mx-meta">' + badge(t('120 minutes','120 分钟')) + badge(t('100 marks','100 分')) + badge(t('3 questions','3 道大题')) + '</div></section>' +
      '<div class="mx-catalog">' + papers.map(p => {
        const a = attempts.find(x => x.paper === p.id);
        return '<a class="mx-cover" href="' + href(p) + '"><div class="mx-cover-top"><span class="eyebrow">' +
          paperName(p) + '</span>' + paperStatus(p,a) + '</div><h2>' + esc(brief(p)) + '</h2><p>' +
          esc(local(p.questions[18],'title')) + '</p><span class="mx-open">' + t('Open paper','查看试卷') + '</span></a>';
      }).join('') + '</div>';
  }
  function paperPage(p) {
    const past = session.attempts().filter(a => a.paper === p.id);
    const pending = past.find(a => a.state !== 'marked');
    main.innerHTML = '<a class="crumb" href="#exams">'+t('All mock exams','全部模拟卷')+'</a>' +
      '<section class="mx-intro"><div class="eyebrow">' + paperName(p) + ' · ENGG1330</div><h1>' +
      esc(brief(p)) + '</h1><p>' + t('120 minutes · 100 marks · Answer every part.', '120 分钟 · 100 分 · 全部必答。') + '</p>' +
      '<div class="mx-rubric"><div><b>Q1 · 42</b><span>' + t('14 output predictions, 3 marks each. Spaces are ignored.', '14 道输出追踪，每道 3 分。忽略空白字符。') +
      '</span></div><div><b>Q2 · 32</b><span>' + t('Four independent functions, 8 marks each.', '4 个独立评分的函数，每问 8 分。') +
      '</span></div><div><b>Q3 · 26</b><span>' + esc(local(p.questions[18],'title')) + '</span></div></div>' +
      '<p>' + t('The timer continues when you leave. At the deadline your answers are locked. Each passing programming test earns 2 marks. Use the visible sample to try your code before submitting.',
                 '离开页面后计时继续，到时自动锁定答案。编程题每通过一组测试得 2 分，交卷前可以运行公开样例。') + '</p>' +
      button('mx-start',pending ? (pending.state === 'open' ? t('Resume exam','继续考试') : t('View submission','查看交卷状态')) : past.length ? t('Start a new attempt','重新考试') : t('Start timed exam','开始计时考试')) +
      '</section>' + (past.length ? '<section class="mx-history"><h2>' + t('Your attempts','考试记录') + '</h2>' + past.map(a =>
        '<a href="' + href(p,a) + '"><span>' + esc(displayDate(a.started)) + '</span>' + paperStatus(p,a) + '</a>').join('') + '</section>' : '');
    $('#mx-start').onclick = () => {location.hash = href(p, pending || session.create(p.id));};
  }

  function jumpGrid(p,a,index) {
    const buttons = (start,end) => p.questions.slice(start,end).map((q,k) => {
      const n = start + k, done = session.answered(q,a.answers[n]);
      return '<button type="button" data-to="' + n + '" class="mx-jump' + (done ? ' filled':'') + '" ' +
        (n === index ? 'aria-current="step"':'') + ' aria-label="Q' + q.ref + ' · ' +
        (done ? t('answered','已答') : t('unanswered','未答')) + '">' + q.ref + '</button>';
    }).join('');
    return '<aside class="mx-map"><h2>' + t('Answer sheet','答题卡') + '</h2><h3>Q1 · ' + t('Output tracing','输出追踪') +
      '</h3><div class="mx-jumps">' + buttons(0,14) + '</div><h3>Q2–3 · ' + t('Programming','编程') +
      '</h3><div class="mx-jumps">' + buttons(14,19) + '</div><small id="mx-count"></small></aside>';
  }
  function editPage(p,a) {
    const index = a.selected;
    const q = p.questions[index];
    const isTrace = q.kind === 'trace';
    main.innerHTML = '<div class="mx-exam-head"><div><a class="crumb" href="'+href(p)+'">'+paperName(p)+'</a><h1>' +
      t('Exam in progress','考试进行中')+'</h1></div><div class="mx-clock"><small>'+t('Time remaining','剩余时间')+
      '</small><strong id="mx-time" role="timer"></strong></div>'+button('mx-submit',t('Submit paper','交卷'))+'</div>' +
      '<div class="mx-work">' + jumpGrid(p,a,index) + '<section class="mx-question"><div class="mx-meta">' +
      badge(isTrace?t('Output tracing','输出追踪'):t('Function writing','编写函数')) + badge(marks(q)+t(' marks',' 分')) +
      '</div><h2>'+questionTitle(q)+'</h2><div class="mx-prose">'+esc(prompt(q))+'</div>' +
      (isTrace ? codeBox(q.code) : '<div class="mx-sample"><h3>'+t('Example call','示例调用')+'</h3>'+codeBox(q.tests[0].call)+
       '<h3>'+t('Return value','返回值')+'</h3>'+codeBox(q.tests[0].output)+'</div>') +
      '<label class="mx-label" for="mx-answer">'+(isTrace ? t('Predicted output','预测输出'):t('Your Python function','你的 Python 函数'))+'</label>' +
      '<textarea id="mx-answer" class="'+(isTrace?'mx-output':'mx-program')+'" spellcheck="false" autocapitalize="off" autocorrect="off" autocomplete="off"></textarea>' +
      (isTrace?'':'<button class="mx-secondary" id="mx-sample" type="button">'+t('Run sample','运行样例')+'</button><div class="mx-sample-report" id="mx-sample-report" aria-live="polite"></div>')+
      '<div class="mx-step">'+(index ? '<button class="mx-secondary" data-to="'+(index-1)+'">'+t('Previous','上一问')+'</button>':'<span></span>')+
      (index+1<p.questions.length?'<button class="mx-button" data-to="'+(index+1)+'">'+t('Next part','下一问')+'</button>':button('mx-final',t('Submit paper','交卷')))+'</div></section></div>';
    const field = $('#mx-answer');
    field.value = a.answers[index] ?? (isTrace ? '' : q.starter);
    function updateCount(record) {
      $('#mx-count').textContent = p.questions.filter((question,n) => session.answered(question,record.answers[n])).length+
        ' / 19 '+t('parts answered','小问已作答');
      const chip = $('.mx-jump[aria-current]');
      const done = session.answered(q,record.answers[index]);
      chip.classList.toggle('filled',done);
      chip.setAttribute('aria-label','Q'+q.ref+' · '+(done?t('answered','已答'):t('unanswered','未答')));
    }
    updateCount(a);
    field.oninput = () => {
      if (session.change(a.id, record => {record.answers[index] = field.value;})) {
        updateCount(session.read(a.id));
        const report = $('#mx-sample-report');
        if (report) report.replaceChildren();
      } else refresh();
    };
    if (!isTrace) {
      field.onkeydown = e => {
        if (e.key !== 'Enter' || e.isComposing) return;
        const line = field.value.slice(0,field.selectionStart).split('\n').pop();
        const indent = line.match(/^\s*/)[0] + (line.trimEnd().endsWith(':') ? '    ':'');
        if (!indent) return;
        e.preventDefault();
        field.setRangeText('\n'+indent,field.selectionStart,field.selectionEnd,'end');
        field.dispatchEvent(new Event('input'));
      };
      $('#mx-sample').onclick = async e => {
        const b=e.currentTarget, report=$('#mx-sample-report'), input=field.value;
        const current = () => report.isConnected && field.value === input;
        b.disabled=true;report.textContent=t('Starting Python…','正在启动 Python…');
        try {
          const [r]=await window.PythonRunner.run(input+'\n\n'+q.driver,[q.tests[0].input]);
          if(current()) report.innerHTML = '<b>' + (r.error?t('Python error','Python 错误'):t('Your output','实际输出')) + '</b>'+codeBox(r.error || r.output || t('(empty)','（空）'));
        } catch(err) {
          if(current()) report.textContent=err.message;
        } finally { b.disabled=false; }
      };
    }
    main.querySelectorAll('[data-to]').forEach(b => b.onclick = () => {
      session.change(a.id, record => {record.selected=Number(b.dataset.to);});
      window.PythonRunner.stop();
      refresh();
      $('.mx-question h2')?.scrollIntoView({block:'nearest'});
    });
    $('#mx-submit').onclick=()=>confirmSubmit(p,a);
    if ($('#mx-final')) $('#mx-final').onclick=()=>confirmSubmit(p,a);
    $('#mx-time').textContent=clockText(a.deadline-Date.now());
    $('#mx-time').dataset.deadline=a.deadline;
  }
  function confirmSubmit(p,a) {
    const current=session.read(a.id);
    const blank=p.questions.filter((q,i)=>!session.answered(q,current.answers[i])).length;
    const dialog=document.createElement('dialog');
    dialog.className='mx-dialog';
    dialog.innerHTML='<h2>'+t('Submit this paper?','确认交卷？')+'</h2><p>'+
      (blank?t(blank+' unanswered parts will earn zero. ', '还有 '+blank+' 个小问未答，将计 0 分。'):t('Every part has an answer. ','所有小问均已填写。'))+
      t('Your answers will be locked for marking.','确认后锁定本次答案并开始评分。')+
      '</p><div><button class="mx-secondary" id="mx-keep">'+t('Keep working','继续作答')+'</button>'+
      button('mx-confirm',t('Submit and mark','确认交卷并评分'))+'</div>';
    main.append(dialog);
    dialog.addEventListener('close',()=>dialog.remove(),{once:true});
    $('#mx-keep').onclick=()=>dialog.close();
    $('#mx-confirm').onclick=()=>{dialog.close();window.PythonRunner.stop();session.lock(a.id);refresh();};
    dialog.showModal();
  }
  function sealed(p,a) {
    const cases = Object.values(a.results).reduce((total,r) => total+(r.cases?.length || 0),0);
    const total = p.questions.reduce((sum,q,i) => sum + (q.tests && session.answered(q,a.answers[i]) ? q.tests.length:0),0);
    main.innerHTML='<a class="crumb" href="'+href(p)+'">'+paperName(p)+'</a><section class="mx-intro"><div class="eyebrow">'+
      t('Answers locked','答卷已锁定')+'</div><h1>'+(a.state==='retry'?t('Marking paused','评分已暂停'):t('Marking your paper','正在评分'))+
      '</h1><p>'+(a.expired?t('Time is up. Your saved answers were submitted automatically. ','考试时间已到，已自动提交保存的答案。'):'')+
      (a.state==='retry'?t('Your submitted work is saved. Reconnect and resume from the last completed test.','已保存答卷和已完成的评分。恢复网络后可从上次测试继续。'):
      t('Python is checking your functions against the marking cases.','Python 正在逐组运行测试，检查你的函数。'))+
      '</p><p aria-live="polite">'+cases+' / '+total+t(' programming tests marked',' 组编程测试已评阅')+'</p>'+
      (a.state==='retry'?codeBox(a.failure)+button('mx-retry',t('Resume marking','继续评分')):'')+'</section>';
    if (a.state==='retry') $('#mx-retry').onclick=()=>session.grade(a.id);
    else session.grade(a.id);
  }

  function testReview(test,result,j) {
    return '<details class="mx-case"><summary><span>'+t('Test ','测试 ')+(j+1)+'</span><b class="'+(result.pass?'mx-pass':'mx-miss')+'">'+
      (result.pass?t('Passed','通过'):result.error?t('Execution error','运行错误'):t('Wrong result','结果错误'))+
      '</b></summary><div class="mx-prose">'+esc(local(test,'why'))+'</div>'+
      '<div class="mx-example-grid"><div><h4>'+t('Call','调用')+'</h4>'+codeBox(test.call)+'</div><div><h4>'+t('Expected','预期')+
      '</h4>'+codeBox(test.output)+'</div><div><h4>'+t('Your output','实际输出')+'</h4>'+
      codeBox((result.output || t('(empty)','（空）'))+(result.clipped?' …':''))+'</div></div>'+
      (result.error?codeBox(result.error):'')+'</details>';
  }
  function reviewQuestion(q,a,i) {
    const result=a.results[i], points=session.mark(q,result), max=marks(q);
    const blank=result.blank, correct=points===max, trace=q.kind==='trace';
    const status=blank?t('Unanswered','未答'):correct?t('Correct','正确'):points?t('Partial credit','部分得分'):t('Incorrect','错误');
    let body='<div class="mx-review-content"><div class="mx-prose">'+esc(prompt(q))+'</div>';
    if (trace) {
      body+=codeBox(q.code)+'<div class="mx-example-grid"><div><h4>'+t('Your answer','你的答案')+'</h4>'+
        codeBox(blank?t('(unanswered)','（未答）'):a.answers[i])+'</div><div><h4>'+t('Correct output','正确输出')+'</h4>'+codeBox(q.answer)+'</div></div>';
    }
    body+='<h4>'+t('Walkthrough','解题过程')+'</h4><div class="mx-prose">'+esc(local(q,'why'))+'</div>';
    if(!trace){
      if(blank) body+='<div class="mx-prose">'+t('No function was submitted for this part.','本小问没有提交函数。')+'</div>';
      else {
        const failIdx=result.cases.findIndex(c=>!c.pass);
        if(failIdx>=0){
          const tc=q.tests[failIdx], actual=result.cases[failIdx];
          body+='<div class="mx-diagnosis"><h4>'+t('First failing case','首个未通过的用例')+'</h4>'+
            codeBox(tc.call)+'<p>'+esc(local(tc,'why'))+'</p><p>'+t('Expected','预期')+' <code>'+esc(tc.output)+'</code> · '+
            t('Received','实际')+' <code>'+esc(actual.error||actual.output||t('(empty)','（空）'))+'</code></p></div>';
        }
        body+=result.cases.map((r,j)=>testReview(q.tests[j],r,j)).join('')+
          '<details class="mx-case"><summary>'+t('Your submission','你提交的代码')+'</summary>'+codeBox(a.answers[i])+'</details>';
      }
      body+='<details class="mx-case"><summary>'+t('Reference function','参考函数')+'</summary>'+codeBox(q.solution)+'</details>';
    }
    return '<details class="mx-result"><summary><span>'+questionTitle(q)+'</span><span class="'+(correct?'mx-pass':'mx-miss')+
      '">'+status+'</span><b>'+points+' / '+max+'</b></summary>'+body+'</div></details>';
  }
  function review(p,a) {
    if(reviewId!==a.id){reviewFilter='missed';reviewId=a.id;}
    const all=p.questions, points=session.score(a,all);
    const missed=all.filter((q,i)=>session.mark(q,a.results[i])<marks(q)).length;
    const per=(from,to)=>all.slice(from,to).reduce((sum,q,n)=>sum+session.mark(q,a.results[from+n]),0);
    const elapsed=Math.max(0,Math.ceil((a.finished-a.started)/1000));
    main.innerHTML='<a class="crumb" href="'+href(p)+'">'+paperName(p)+'</a><section class="mx-summary"><div><div class="eyebrow">'+
      t('Exam review','试卷讲评')+'</div><h1>'+paperName(p)+' · '+t('Results','成绩')+'</h1><p>'+esc(displayDate(a.started))+' · '+
      t('Time used ','用时 ')+clockText(elapsed*1000)+(a.expired?' · '+t('Time expired','到时交卷'):'')+'</p></div>'+
      '<div class="mx-big-score">'+points+' <small>/ 100</small></div></section>'+
      '<div class="mx-subscores">'+[[t('Q1 · Output tracing','Q1 · 输出追踪'),per(0,14),42],
        [t('Q2 · Structured functions','Q2 · 分步编程'),per(14,18),32],[t('Q3 · Algorithm','Q3 · 算法'),per(18,19),26]].map(([name,n,max])=>
        '<div><span>'+name+'</span><b>'+n+' / '+max+'</b><progress max="'+max+'" value="'+n+'"></progress></div>').join('')+'</div>'+
      '<div class="mx-review-head"><h2>'+t('Question review','逐题讲评')+'</h2><div class="segmented">'+
      ['missed','all'].map(f=>'<button type="button" data-filter="'+f+'" aria-pressed="'+(reviewFilter===f)+'">'+
        (f==='all'?t('All parts','全部小问'):t('Lost marks','失分题'))+' ('+(f==='all'?all.length:missed)+')</button>').join('')+'</div></div>'+
      '<div class="mx-results">'+all.map((q,i)=>reviewFilter==='all'||session.mark(q,a.results[i])<marks(q)?reviewQuestion(q,a,i):'').join('')+
      (!missed&&reviewFilter==='missed'?'<p class="mx-empty">'+t('Full marks. Open All parts to revisit the solutions.','满分！切换到「全部小问」可回顾每问解析。')+'</p>':'')+'</div>';
    main.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{reviewFilter=b.dataset.filter;review(p,a);});
  }

  function show(page,id,attemptId) {
    const p=paperFor(id);
    if(page==='exams'||!p) {library();return;}
    let a=session.read(attemptId);
    if(!a||a.paper!==p.id){paperPage(p);return;}
    if(a.state==='open' && Date.now()>=a.deadline) a=session.lock(a.id);
    if(a.state==='marked') review(p,a);
    else if(a.state==='open') editPage(p,a);
    else sealed(p,a);
    if(storageWarning) {
      const warning=document.createElement('p');
      warning.className='mx-diagnosis';
      warning.textContent=t('Browser storage is unavailable. Keep this tab open until you have reviewed your score.',
                            '浏览器本地存储不可用。请保持此标签页打开，直到查看完得分。');
      main.prepend(warning);
    }
  }
  window.addEventListener('exam-storage-full',()=>{storageWarning=true;});
  window.addEventListener('exam-mark-update',e=>{
    if(locationParts()[2]===e.detail) refresh();
  });
  window.addEventListener('storage',e=>{
    const [page,,attemptId]=locationParts();
    if(!e.key?.startsWith('pystudio:mock:v1:') || !['exam','exams'].includes(page)) return;
    if(!attemptId || (e.key.endsWith(':'+attemptId)&&session.read(attemptId)?.state!=='open')) refresh();
  });
  setInterval(()=>{
    const clock=$('#mx-time');
    if(!clock) return;
    const left=Number(clock.dataset.deadline)-Date.now();
    clock.textContent=clockText(left);
    clock.classList.toggle('mx-urgent',left<5*60*1000);
    if(left<=0) refresh();
  },500);
  return {render:show};
})();
