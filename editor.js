(() => {
  "use strict";

  const paths = {
    back: "m12 5-7 7 7 7 M5 12h15",
    next: "m12 5 7 7-7 7 M19 12H4",
    expand: "m9 5 7 7-7 7",
    code: "m8 7-5 5 5 5 m8-10 5 5-5 5 m-3-13-2 16",
    run: "m7 4 13 8-13 8z",
    stop: "M6 6h12v12H6z",
    check: "m4 12 5 5L20 6",
    submit: "m4 12 16-8-5 16-4-6z m7 2 9-10",
    terminal: "m4 6 6 6-6 6 m9 0h7",
    file: "M6 3h8l4 4v14H6z M14 3v5h4",
    hint: "M8.5 15.5a7 7 0 1 1 7 0L15 18H9z M10 21h4",
    cross: "m6 6 12 12 M18 6 6 18"
  };
  const icon = name => '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + paths[name] + '"/></svg>';
  const escape = value => String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);

  // Ignore a console's final line terminator, preserving every other space and line.
  const consoleText = value => String(value ?? "").replace(/\r\n?/g, "\n").replace(/\n$/, "");
  const tokenPattern = /#[^\n]*|(?:[frbu]{0,2})(?:"""[\s\S]*?(?:"""|$)|'''[\s\S]*?(?:'''|$)|"(?:\\.|[^"\\\n])*(?:"|$)|'(?:\\.|[^'\\\n])*(?:'|$))|\b(?:False|True|None|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*(?=\s*\()/g;

  function highlight(code) {
    let html = "", position = 0;
    for (const match of code.matchAll(tokenPattern)) {
      const value = match[0];
      const kind = value.startsWith("#") ? "comment" : /['"]/.test(value) ? "string"
        : /^\d/.test(value) ? "number" : /^\s*\(/.test(code.slice(match.index + value.length)) ? "call" : "keyword";
      html += escape(code.slice(position, match.index)) + '<span class="ex-syn-' + kind + '">' + escape(value) + '</span>';
      position = match.index + value.length;
    }
    return html + escape(code.slice(position)) + "\n";
  }

  window.renderExercise = function renderExercise(q, ctx) {
    const main = document.getElementById("main");
    const ui = ctx.ui || {};
    const t = (en, zh) => ctx.zh ? zh : en;
    const solvedWord = t("Solved", "已通过");
    const level = ctx.zh ? ({ Easy: "基础", Medium: "进阶", Hard: "挑战" }[q.level] || q.level) : q.level;
    const sample = q.tests[0];
    const sampleInput = consoleText(sample.input);
    const testLabel = n => t("Test " + n, "测试 " + n);
    const readout = (label, value) =>
      '<div class="ex-readout"><div class="ex-label">' + escape(label) + '</div><pre>' +
      (value === "" ? '<span class="ex-empty">' + t("(empty)", "（空）") + "</span>" : escape(value)) + "</pre></div>";
    const fold = (key, title, content, symbol) =>
      '<details data-fold="' + key + '"' + (ui[key] ? " open" : "") + '><summary>' + icon(symbol) +
      '<span>' + escape(title) + '</span>' + icon("expand") + '</summary>' + content + '</details>';

    const root = document.createElement("div");
    root.className = "ex-workspace";
    root.innerHTML =
      '<div class="ex-top"><a class="ex-back" href="' + escape(ctx.groupUrl) + '">' + icon("back") +
      escape(ctx.groupName) + '</a><div class="ex-title"><div class="ex-meta"><span>' + escape(q.id) +
      '</span><span class="ex-level ex-level-' + escape(q.level.toLowerCase()) + '">' + escape(level) +
      '</span><span class="ex-solved"' + (ctx.solved ? "" : " hidden") + '>' + icon("check") + solvedWord + '</span></div><h1>' +
      escape(ctx.zh ? q.titleZh : q.title) + '</h1></div></div>' +
      '<div class="ex-grid"><section class="ex-brief ex-card" aria-labelledby="ex-problem">' +
      '<h2 id="ex-problem">' + t("Problem", "题目") + '</h2><div class="ex-prose">' + escape(ctx.zh ? q.zh : q.en) +
      '</div><div class="ex-example"><h3>' + t("Example", "样例") + '</h3><div class="ex-sample-pair">' +
      readout(t("Input", "输入"), sampleInput) + readout(t("Output", "输出"), consoleText(sample.output)) + '</div></div>' +
      '<div class="ex-folds">' + fold("hintOpen", t("Hint", "解题提示"), '<p>' + escape(ctx.zh ? q.hintZh : q.hint) + '</p>', "hint") +
      fold("solutionOpen", t("Reference solution", "参考答案"), '<pre class="ex-reference">' + escape(q.solution) + '</pre>', "code") +
      '</div></section><section class="ex-solve" aria-label="' + t("Python workspace", "Python 练习区") + '">' +
      '<div class="ex-editor"><div class="ex-editor-bar"><div class="ex-file">' + icon("file") +
      '<span>main.py</span></div><span class="ex-runtime"><i></i>Python 3</span></div>' +
      '<div class="ex-code-frame"><div class="ex-gutter" aria-hidden="true"><div></div></div><div class="ex-code-area">' +
      '<div class="ex-paint" aria-hidden="true"><pre></pre></div>' +
      '<textarea class="ex-code" wrap="off" spellcheck="false" autocapitalize="none" autocorrect="off" autocomplete="off" aria-label="' +
      t("Python code editor", "Python 代码编辑器") + '" aria-describedby="ex-keys"></textarea></div></div>' +
      '<div class="ex-actions"><button type="button" class="ex-run">' + icon("run") + t("Run code", "运行代码") +
      '</button><button type="button" class="ex-submit">' + icon("submit") + t("Submit", "提交判题") +
      '</button><button type="button" class="ex-stop" hidden>' + icon("stop") + t("Stop", "停止") + '</button></div></div>' +
      '<div class="ex-console ex-card"><div class="ex-console-title">' + icon("terminal") + '<h2>' + t("Console", "控制台") +
      '</h2></div><label class="ex-input-label" for="ex-stdin">' + t("Custom input", "自定义输入") +
      '</label><textarea id="ex-stdin" class="ex-stdin" spellcheck="false" autocapitalize="none" placeholder="' +
      t("One input line per input() call", "每次 input() 调用对应一行输入") + '"></textarea><div class="ex-report" aria-live="polite" aria-atomic="false"></div></div>' +
      '</section></div><div class="ex-bottom"><span id="ex-keys">' +
      t("Ctrl / ⌘ + Enter to run · Add Shift to submit · Esc, then Tab to leave the editor", "Ctrl / ⌘ + Enter 运行 · 同时按 Shift 提交 · 按 Esc 再按 Tab 离开编辑器") +
      '</span>' + (ctx.nextUrl ? '<a href="' + escape(ctx.nextUrl) + '">' + t("Next exercise", "下一题") + icon("next") + '</a>' : "") + '</div>';
    main.replaceChildren(root);

    const find = selector => root.querySelector(selector);
    const code = find(".ex-code");
    const paint = find(".ex-paint pre");
    const gutter = find(".ex-gutter > div");
    const stdin = find(".ex-stdin");
    const results = find(".ex-report");
    const runButton = find(".ex-run");
    const submitButton = find(".ex-submit");
    const stopButton = find(".ex-stop");
    let request = 0, busy = false, releaseTab = false;
    code.value = ctx.draft ?? q.starter;
    stdin.value = ui.stdin ?? sample.input;
    code.setSelectionRange(ui.start ?? 0, ui.end ?? 0);

    function alignPaint() {
      paint.style.transform = 'translate(' + -code.scrollLeft + 'px,' + -code.scrollTop + 'px)';
      gutter.style.transform = 'translateY(' + -code.scrollTop + 'px)';
    }
    function updateEditor(save) {
      paint.innerHTML = highlight(code.value);
      gutter.textContent = Array.from({length: code.value.split("\n").length}, (_, i) => i + 1).join("\n");
      alignPaint();
      if (save) ctx.saveDraft(code.value);
    }
    updateEditor(false);
    code.scrollTop = ui.scrollTop ?? 0;
    code.scrollLeft = ui.scrollLeft ?? 0;
    alignPaint();
    code.addEventListener("scroll", () => {
      ui.scrollTop = code.scrollTop;
      ui.scrollLeft = code.scrollLeft;
      alignPaint();
    });
    code.addEventListener("input", () => updateEditor(true));
    const rememberSelection = () => { ui.start = code.selectionStart; ui.end = code.selectionEnd; };
    code.addEventListener("select", rememberSelection);
    code.addEventListener("blur", rememberSelection);
    stdin.addEventListener("input", () => { ui.stdin = stdin.value; });
    root.querySelectorAll("[data-fold]").forEach(details => {
      details.addEventListener("toggle", () => { ui[details.dataset.fold] = details.open; });
    });

    function report() {
      const result = ui.result;
      if (!result) { results.replaceChildren(); return; }
      let html = "", state = "neutral";
      if (result.type === "running" || result.type === "stopped") {
        html = result.type === "stopped" ? t("Execution stopped.", "已停止运行。")
          : result.loading ? t("Loading Python…", "正在加载 Python…") : t("Running…", "正在运行…");
        if (result.total > 1) {
          html += " · " + t("Test ", "测试 ") + (result.index + 1) + " / " + result.total;
        }
      } else if (result.type === "error") {
        state = "fail";
        html = '<b>' + t("Could not finish", "未能完成运行") + '</b><pre>' + escape(result.message) + '</pre>';
      } else if (result.type === "custom") {
        state = result.error ? "fail" : "neutral";
        html = readout(t("Your output", "实际输出"), consoleText(result.output));
        if (result.error) html += readout(t("Python error", "Python 错误"), result.error);
      } else if (result.type === "grade") {
        const passed = result.cases.filter(test => test.ok).length;
        state = passed === q.tests.length ? "pass" : "fail";
        html = '<div class="ex-score">' + icon(state === "pass" ? "check" : "terminal") +
          t(passed + " of " + q.tests.length + " tests passed", "通过 " + passed + " / " + q.tests.length + " 项测试") +
          '</div><div class="ex-tests">' + result.cases.map((test, i) =>
            '<details' + (i === result.cases.findIndex(r => !r.ok) ? " open" : "") + '><summary><i class="' +
            (test.ok ? "ex-ok" : "ex-no") + '">' + icon(test.ok ? "check" : "cross") + '</i><span>' + testLabel(i + 1) +
            '</span><small>' + (test.ok ? t("Passed", "通过") : test.error ? t("Error", "错误") : t("Wrong output", "输出不符")) +
            '</small>' + icon("expand") + '</summary><div class="ex-test-values">' +
            readout(t("Input", "输入"), consoleText(q.tests[i].input)) +
            readout(t("Expected", "预期输出"), consoleText(q.tests[i].output)) +
            readout(t("Your output", "实际输出"), consoleText(test.output)) +
            (test.error ? readout(t("Python error", "Python 错误"), test.error) : "") +
            '</div></details>').join("") + '</div>';
      }
      results.className = 'ex-report ex-report-' + state;
      results.innerHTML = html;
    }
    if (ui.result?.type === "running") ui.result = {type:"stopped"};
    report();

    function setBusy(value) {
      busy = value;
      runButton.disabled = value;
      submitButton.disabled = value;
      stopButton.hidden = !value;
    }
    function stop() {
      if (!busy) return;
      ++request;
      window.PythonRunner.stop();
      setBusy(false);
      ui.result = {type:"stopped"};
      report();
    }
    async function execute(grade) {
      if (busy) return;
      const current = ++request;
      const active = () => current === request && root.isConnected;
      const inputs = grade ? q.tests.map(test => test.input) : [stdin.value];
      setBusy(true);
      ui.result = {type:"running", loading:true};
      report();
      try {
        const response = await window.PythonRunner.run(code.value, inputs, (status, index = 0) => {
          if (!active()) return;
          ui.result = {type:"running", loading:/load|init/i.test(String(status)), index, total:inputs.length};
          report();
        });
        if (!active()) return;
        if (!Array.isArray(response) || response.length !== inputs.length)
          throw new Error(t("The runner returned an incomplete response.", "运行器返回的结果不完整。"));
        if (grade) {
          const cases = response.map((item, i) => ({
            output: String(item.output ?? ""), error: String(item.error || ""),
            ok: !item.error && consoleText(item.output) === consoleText(q.tests[i].output)
          }));
          ui.result = {type:"grade", cases};
          report();
          if (cases.every(test => test.ok)) {
            find(".ex-solved").hidden = false;
            ctx.markSolved();
          }
        } else {
          ui.result = {type:"custom", output:String(response[0].output ?? ""), error:String(response[0].error || "")};
          report();
        }
      } catch (error) {
        if (active()) {
          ui.result = {type:"error", message:String(error?.message || error)};
          report();
        }
      } finally {
        if (active()) setBusy(false);
      }
    }

    runButton.addEventListener("click", () => execute(false));
    submitButton.addEventListener("click", () => execute(true));
    stopButton.addEventListener("click", stop);
    root.addEventListener("keydown", event => {
      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        event.preventDefault();
        execute(event.shiftKey);
      }
    });
    code.addEventListener("keydown", event => {
      const {key, shiftKey, metaKey, ctrlKey, altKey} = event;
      if (key === "Escape") { releaseTab = true; return; }
      if (releaseTab) { releaseTab = false; if (key === "Tab") return; }
      if (metaKey || ctrlKey || altKey || event.isComposing || (key !== "Tab" && key !== "Enter")) return;
      event.preventDefault();
      const start = code.selectionStart, end = code.selectionEnd;
      const lineStart = code.value.slice(0, start).lastIndexOf("\n") + 1;
      if (key === "Enter") {
        const before = code.value.slice(lineStart, start);
        const prefix = before.match(/^[ \t]*/)[0] + (before.trimEnd().endsWith(":") ? "    " : "");
        code.setRangeText("\n" + prefix, start, end, "end");
      } else if (start === end && !shiftKey) {
        const width = 4 - ((start - lineStart) % 4);
        code.setRangeText(" ".repeat(width), start, end, "end");
      } else {
        const lastChar = Math.max(start, end - 1);
        const nextLine = code.value.indexOf("\n", lastChar);
        const blockEnd = nextLine < 0 ? code.value.length : nextLine;
        const block = code.value.slice(lineStart, blockEnd);
        const lines = block.split("\n");
        const modified = lines.map(line => shiftKey ? line.replace(/^(?: {1,4}|\t)/, "") : "    " + line).join("\n");
        code.setRangeText(modified, lineStart, blockEnd, "start");
        if (start === end) {
          const caret = Math.max(lineStart, start + modified.length - block.length);
          code.setSelectionRange(caret, caret);
        } else {
          code.setSelectionRange(lineStart, lineStart + modified.length);
        }
      }
      rememberSelection();
      updateEditor(true);
    });
  };
})();
