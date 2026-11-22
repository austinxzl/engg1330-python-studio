function courseReview() {
  chrome('library');
  const capstone = bank.find(q => q.id === 'C-1');
  const recaps = units.slice(0,8).map(unit => ({
    unit, q:bank.find(x => x.id === unit[0] + '-10')
  }));
  const skills = [
    t('Decide whether a reading is outside the safe range.','判断读数是否超出安全区间。'),
    t('Group readings into a dictionary and count alerts.','用字典归集读数并统计报警次数。'),
    t('Split each record and normalize the station name.','拆分记录并统一站名格式。'),
    t('Collect values in visit order and construct the report rows.','按访问顺序收集数值，构建报告的各行。'),
    t('Implement a function with a specified return value.','按给定接口编写函数并返回结果。'),
    t('Build the report while preserving the original nested lists.','构建报告，并保持原始嵌套列表不变。'),
    t('Rank stations by two keys and look up a target station.','按两个排序键排列站点，并查询指定站点。'),
    t('Visit records at every depth of the nested batch.','用递归访问嵌套批次中各层的记录。')
  ];
  main.innerHTML = '<a class="crumb" href="#library">'+icon('book',16)+t('Practice library','练习题库')+'</a>'+
    '<section class="review-lead"><div class="eyebrow">L2–L9 · '+t('Course review','全课程总复习')+'</div>'+
    '<h1>'+esc(zh?capstone.titleZh:capstone.title)+'</h1><p>'+
    t('Turn a nested sensor log into a ranked report. Write one Python function that brings together the skills from all eight lectures.',
      '把嵌套的传感器日志整理成一份按报警次数排序的报告。写一个 Python 函数，就能把八讲的知识放在同一道题里练。')+
    '</p><a class="mx-button" href="#exercise/C-1">'+(solved.has('C-1')?t('Revisit the full-course problem','回顾全课程综合题'):t('Open full-course problem','开始全课程综合题'))+'</a>'+
    '<details><summary>'+t('Where each lecture fits','每一讲用在哪里')+'</summary><ul>'+recaps.map(({unit},i)=>'<li><b>'+unit[0]+'</b> '+skills[i]+'</li>').join('')+'</ul></details></section>'+
    '<div class="section-head review-heading"><div><h2>'+t('Lecture review problems','各讲综合题')+'</h2><p>'+
    t('One integrated problem per lecture, collected on this page.','每讲一道综合题，集中在这里，任选一题即可开始。')+'</p></div></div>'+
    '<div class="question-list">'+recaps.map(({unit,q})=>'<a class="qrow" href="#exercise/'+q.id+'"><span class="qno '+(solved.has(q.id)?'complete':'')+'">'+unit[0]+'</span>'+
      '<span class="qbody"><strong>'+esc(zh?q.titleZh:q.title)+'</strong><small>'+names(unit)+' · '+esc(zh?q.topicZh:q.topic)+'</small></span>'+
      '<span class="level '+q.level.toLowerCase()+'">'+levelName(q.level)+'</span></a>').join('')+'</div>';
}
