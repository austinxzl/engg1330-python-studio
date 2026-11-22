/* A submitted attempt is locked before Python starts. Each completed test is
   checkpointed so a reload or a network interruption can resume marking. */
window.ExamSession = (() => {
  'use strict';

  const prefix = 'pystudio:mock:v1:';
  const duration = 120 * 60 * 1000;
  const memory = new Map();
  const grading = new Map();

  function readAttempt(id) {
    if (!id) return null;
    try {
      const json = localStorage.getItem(prefix + id);
      if (json && !memory.get(id)?.unsaved) return JSON.parse(json);
    } catch { /* Use the current tab when storage is unavailable. */ }
    return memory.get(id)?.record ?? null;
  }

  function saveAttempt(record) {
    let unsaved = false;
    try {
      localStorage.setItem(prefix + record.id, JSON.stringify(record));
    } catch {
      unsaved = true;
      window.dispatchEvent(new Event('exam-storage-full'));
    }
    memory.set(record.id, {record, unsaved});
    return record;
  }

  function attempts() {
    const ids = new Set(memory.keys());
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith(prefix)) ids.add(key.slice(prefix.length));
      }
    } catch { /* Memory-only session. */ }
    return [...ids].map(readAttempt).filter(Boolean).sort((a,b) => b.started - a.started);
  }

  function create(paper) {
    const pending = attempts().find(a => a.paper === paper && a.state !== 'marked');
    if (pending) return pending;
    const started = Date.now();
    return saveAttempt({
      id: crypto.randomUUID(), paper, started, deadline: started + duration,
      state: 'open', answers: {}, selected: 0, results: {}
    });
  }

  function lock(id) {
    const a = readAttempt(id);
    if (!a || a.state !== 'open') return a;
    a.finished = Math.min(Date.now(), a.deadline);
    a.expired = Date.now() >= a.deadline;
    a.state = 'locked';
    return saveAttempt(a);
  }

  function change(id, update) {
    const a = readAttempt(id);
    if (!a || a.state !== 'open') return false;
    if (Date.now() >= a.deadline) { lock(id); return false; }
    update(a);
    saveAttempt(a);
    return true;
  }

  function answered(q, answer) {
    return typeof answer === 'string' && answer.trim() !== '' &&
      (q.kind === 'trace' || answer.trim() !== q.starter.trim());
  }

  function mark(q, result) {
    if (!result || result.blank) return 0;
    return q.kind === 'trace' ? (result.correct ? 3 : 0) :
      result.cases.filter(c => c.pass).length * 2;
  }

  function score(a, questions) {
    return questions.reduce((total, q, index) => total + mark(q, a.results[index]), 0);
  }

  const normalTrace = text => text.replace(/\s/g, '');
  const normalOutput = text => text.replace(/\r\n?/g, '\n').replace(/\n$/, '');
  function changed(a) {
    saveAttempt(a);
    window.dispatchEvent(new CustomEvent('exam-mark-update', {detail:a.id}));
  }

  async function markAttempt(id) {
    const a = readAttempt(id);
    if (!a || !['locked','retry'].includes(a.state)) return;
    const questions = window.MOCK_PAPERS.find(p => p.id === a.paper).questions;
    const runner = window.PythonRunner.create();
    a.state = 'locked';
    delete a.failure;
    changed(a);
    try {
      for (const [i, q] of questions.entries()) {
        const answer = a.answers[i];
        if (!answered(q, answer)) {
          a.results[i] = {blank:true};
          continue;
        }
        if (q.kind === 'trace') {
          a.results[i] = {correct:normalTrace(answer) === normalTrace(q.answer)};
          continue;
        }
        const result = a.results[i] ??= {cases:[]};
        for (let j = result.cases.length; j < q.tests.length; j++) {
          const test = q.tests[j];
          let output = '', error = '';
          try {
            const [actual] = await runner.run(answer + '\n\n' + q.driver, [test.input]);
            output = normalOutput(actual.output);
            error = actual.error;
          } catch (e) {
            if (e.name !== 'ExecutionLimit') throw e;
            error = e.message;
          }
          result.cases.push({
            pass: !error && output === normalOutput(test.output),
            output: output.slice(0, 1200), clipped: output.length > 1200,
            error: error.slice(0, 1600)
          });
          changed(a);
        }
      }
      a.state = 'marked';
    } catch (e) {
      // Infrastructure failures carry no grade penalty. Answers stay sealed.
      a.state = 'retry';
      a.failure = String(e.message || e).slice(0, 800);
    } finally {
      runner.stop();
      changed(a);
    }
  }

  function grade(id) {
    if (!grading.has(id)) {
      const task = navigator.locks
        ? navigator.locks.request(prefix + id, () => markAttempt(id))
        : Promise.resolve().then(() => markAttempt(id));
      grading.set(id, task.finally(() => grading.delete(id)));
    }
    return grading.get(id);
  }

  // Hidden tabs may throttle timers. The absolute deadline also guards every edit.
  function settle() {
    for (const a of attempts()) {
      if (a.state === 'open' && Date.now() >= a.deadline) {
        changed(lock(a.id));
        grade(a.id);
      } else if (a.state === 'locked') grade(a.id);
    }
  }
  window.addEventListener('pageshow', settle);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) settle(); });
  setInterval(settle, 4000);
  return {attempts, read:readAttempt, create, lock, change, answered, mark, score, grade, settle};
})();
