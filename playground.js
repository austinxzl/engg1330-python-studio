(() => {
  'use strict';

  const storageKey = 'playground';
  const starter = 'message = "Hello, Python!"\nprint(message)\n';
  const cursor = new WeakMap();
  let project;
  let terminal = {state: 'ready', entry: '', text: ''};
  let stopView = null;

  function validName(name) {
    return typeof name === 'string' && name.length > 0 && name.length <= 120 &&
      name !== '.' && name !== '..' && !/[\\/\u0000-\u001f\u007f]/.test(name);
  }

  function openProject() {
    if (project) return;
    const saved = read(storageKey, null);
    const names = new Set();
    const files = (Array.isArray(saved?.files) ? saved.files : []).filter(file => {
      if (!validName(file?.name) || typeof file.content !== 'string' || names.has(file.name)) return false;
      names.add(file.name);
      return true;
    });
    if (!files.length) files.push({name: 'main.py', content: starter});
    project = {
      files, active: names.has(saved?.active) ? saved.active : files[0].name,
      stdin: typeof saved?.stdin === 'string' ? saved.stdin : ''
    };
  }

  function render() {
    openProject();
    const root = document.createElement('section');
    root.className = 'pg-page';
    root.setAttribute('aria-labelledby', 'pg-title');
    root.innerHTML =
      '<div class="pg-head"><div><h1 id="pg-title">' + t('Python playground', 'Python 自由编程') +
      '</h1><p>' + t('Write Python in the editor, then press Run to see the output.',
        '在编辑区写 Python，点「运行」就能看到输出。') +
      '</p></div><div class="pg-head-actions"><button type="button" data-action="download">' +
      t('Download file', '下载当前文件') + '</button></div></div>' +
      '<div class="pg-layout"><details class="pg-files"><summary>' + icon('folder') +
      t('Files', '文件') + '</summary><div><div class="pg-files-bar"><button type="button" data-action="new">' +
      t('+ New file', '＋ 新建文件') + '</button></div><div class="pg-file-list"></div>' +
      '<div class="pg-file-actions"><button type="button" data-action="rename">' + t('Rename', '重命名') +
      '</button><button type="button" data-action="delete">' + t('Delete', '删除') +
      '</button></div></div></details>' +
      '<div class="pg-workbench ex-workspace"><div class="pg-tabs" role="tablist" aria-label="' +
      t('Open files', '已打开的文件') + '"></div><div class="pg-editor" role="tabpanel" id="pg-panel"></div>' +
      '<div class="pg-toolbar"><button type="button" class="pg-run" data-action="run">' + icon('play') +
      t('Run', '运行') + '</button><button type="button" class="pg-stop" data-action="stop" hidden>' +
      t('Stop', '停止') + '</button><span class="pg-note pg-shortcut">Ctrl / ⌘ + Enter</span></div>' +
      '<section class="pg-console"><div class="pg-console-head"><h2>' + t('Output', '输出') +
      '</h2><span class="pg-status" role="status"></span><button type="button" data-action="clear">' +
      t('Clear', '清空输出') + '</button></div><pre class="pg-terminal" tabindex="0" aria-label="' +
      t('Program output', '程序输出') + '"></pre><button type="button" class="pg-secondary pg-jump" data-action="jump" hidden>' +
      t('Go to error line', '跳到出错行') + '</button><div class="pg-console-input"><label for="pg-stdin">' +
      t('Input for input()', '程序输入 input()') + '</label><textarea id="pg-stdin" rows="2" spellcheck="false" placeholder="' +
      t('Before running, enter one value per line.', '运行前在这里填好，每次 input() 读一行。') +
      '"></textarea></div></section></div></div>' +
      '<details class="pg-help"><summary>' + icon('book') + t('How to use the playground', '第一次使用？') +
      '</summary><ol id="pg-guide"><li>' +
      t('Write in the dark editor. Use print("Hello") to see a value in Output.',
        '在深色编辑区写代码。想看一个值，就写 print("Hello")，再点「运行」。') + '</li><li>' +
      t('For name = input(), type a name in the input box before you run. Each input() reads the next line.',
        '如果写了 name = input()，先在「程序输入」里填一个名字。每次 input() 会读下一行。') + '</li><li>' +
      t('To start with a blank page, open Files and choose New file. Files and input are saved in this browser. Download a file to keep a copy.',
        '想从空白开始，打开「文件」并点「新建文件」。代码和输入会保存在这个浏览器里，也可以下载文件留一份副本。') + '</li><li>' +
      t('Run the selected .py file with Ctrl / ⌘ + Enter. Press Esc then Tab to move out of the editor.',
        '按 Ctrl / ⌘ + Enter 运行当前 .py 文件。按 Esc 再按 Tab 可以离开编辑区。') +
      '</li></ol></details><dialog class="pg-file-dialog" aria-labelledby="pg-dialog-title"></dialog>';
    main.replaceChildren(root);
    const find = selector => root.querySelector(selector);
    const editorHost = find('.pg-editor');
    const stdin = find('#pg-stdin');
    const terminalNode = find('.pg-terminal');
    const dialog = find('dialog');
    const filesPanel = find('.pg-files');
    filesPanel.open = !window.matchMedia('(max-width:720px)').matches;
    const activeFile = () => project.files.find(file => file.name === project.active);
    const persist = () => save(storageKey, project);
    const editors = new Map();
    let visibleFrame;
    let busy = false;
    let editor;
    let runId = 0;
    let displayFrame = 0;
    stdin.value = project.stdin;
    stdin.addEventListener('input', () => { project.stdin = stdin.value; persist(); });

    function drawFiles() {
      const list = find('.pg-file-list'), tabs = find('.pg-tabs');
      for (const [file, frame] of editors) {
        if (!project.files.includes(file)) {
          frame.remove();
          editors.delete(file);
        }
      }
      const tabScroll = tabs.scrollLeft;
      list.replaceChildren();
      tabs.replaceChildren();
      project.files.forEach((file, index) => {
        const selected = file.name === project.active;
        function fileButton(kind) {
          const button = document.createElement('button');
          button.type = 'button';
          button.className = kind;
          button.dataset.file = file.name;
          button.title = file.name;
          button.innerHTML = icon(/\.py$/i.test(file.name) ? 'code' : 'type', 15) + '<span></span>';
          button.lastElementChild.textContent = file.name;
          return button;
        }
        const row = fileButton('pg-file');
        row.dataset.active = String(selected);
        if (selected) row.setAttribute('aria-current', 'true');
        list.append(row);
        const tab = fileButton('pg-tab');
        tab.id = 'pg-tab-' + index;
        tab.tabIndex = selected ? 0 : -1;
        tab.setAttribute('role', 'tab');
        tab.setAttribute('aria-selected', String(selected));
        tab.setAttribute('aria-controls', 'pg-panel');
        tabs.append(tab);
        if (selected) editorHost.setAttribute('aria-labelledby', tab.id);
      });
      tabs.scrollLeft = tabScroll;
      const selected = tabs.querySelector('[aria-selected="true"]');
      if (selected) {
        const delta = selected.getBoundingClientRect().right - tabs.getBoundingClientRect().right;
        const left = selected.getBoundingClientRect().left - tabs.getBoundingClientRect().left;
        if (delta > 0) tabs.scrollLeft += delta;
        else if (left < 0) tabs.scrollLeft += left;
      }
      find('[data-action="delete"]').disabled = project.files.length < 2;
    }

    function showEditor() {
      const file = activeFile();
      const label = t('Code editor for ', '代码编辑器：') + file.name;
      let frame = editors.get(file);
      if (visibleFrame && visibleFrame !== frame) visibleFrame.hidden = true;
      if (!frame || frame.querySelector('.ex-code').value !== file.content) {
        if (frame) frame.remove();
        editorHost.insertAdjacentHTML('beforeend', window.PythonEditor.frame(label, 'pg-guide'));
        frame = editorHost.lastElementChild;
        if (!cursor.has(file)) cursor.set(file, {});
        editor = window.PythonEditor.attach(frame, file.content, cursor.get(file), value => {
          file.content = value;
          persist();
        });
        editors.set(file, frame);
      } else {
        frame.hidden = false;
        editor = frame.querySelector('.ex-code');
        editor.setAttribute('aria-label', label);
      }
      visibleFrame = frame;
      editorHost.dataset.kind = /\.py$/i.test(file.name) ? 'python' : 'text';
    }

    function selectFile(name) {
      if (!project.files.some(file => file.name === name)) return;
      project.active = name;
      persist();
      drawFiles();
      showEditor();
      drawTerminal();
    }

    function errorLine() {
      if (terminal.state !== 'error' || !terminal.exception) return null;
      const frames = [...terminal.exception.matchAll(/^\s*File "(?:\/workspace\/)?([^"/\n]+)", line (\d+)/gm)];
      return frames.reverse().find(frame => project.files.some(file => file.name === frame[1]));
    }

    function drawTerminal() {
      const labels = {
        ready: t('Ready', '就绪'), loading: t('Loading Python…', '正在加载 Python…'),
        running: t('Running…', '正在运行…'), done: t('Finished', '已完成'),
        stopped: t('Stopped', '已停止'), error: t('Error', '出错了')
      };
      find('.pg-status').textContent = [terminal.entry, labels[terminal.state]].filter(Boolean).join(' · ');
      const nearBottom = terminalNode.scrollHeight - terminalNode.clientHeight - terminalNode.scrollTop < 24;
      terminalNode.textContent = terminal.text || (terminal.state === 'ready' ? t('Your output will appear here.', '运行后，输出会显示在这里。') :
        terminal.state === 'done' ? t('The program finished without printing anything.', '程序运行完毕，没有打印内容。') : '');
      if (nearBottom) terminalNode.scrollTop = terminalNode.scrollHeight;
      terminalNode.classList.toggle('pg-error', terminal.state === 'error');
      const jump = find('.pg-jump');
      jump.hidden = !errorLine();
      find('.pg-run').disabled = busy || !/\.py$/i.test(project.active);
      find('.pg-stop').hidden = !busy;
      find('[data-action="clear"]').disabled = busy || terminal.state === 'ready';
      find('.pg-shortcut').textContent = /\.py$/i.test(project.active) ? 'Ctrl / ⌘ + Enter' :
        t('Select a .py file to run it.', '选择一个 .py 文件即可运行。');
    }

    function mergeWrites(changes, before, original) {
      let changed = false;
      const previous = activeFile();
      for (const [name, content] of Object.entries(changes || {})) {
        if (!validName(name) || (content !== null && typeof content !== 'string')) continue;
        const existing = project.files.find(file => file.name === name);
        // An edit, rename or replacement made after Run belongs to the student.
        if (existing !== original.get(name) || existing?.content !== before[name]) continue;
        if (content === null) {
          if (!existing) continue;
          project.files.splice(project.files.indexOf(existing), 1);
        } else if (existing) existing.content = content;
        else project.files.push({name, content});
        changed = true;
      }
      if (!changed) return;
      if (!project.files.length) project.files.push({name: 'main.py', content: ''});
      if (!activeFile()) project.active = project.files[0].name;
      persist();
      drawFiles();
      if (editor.value !== activeFile().content || previous !== activeFile()) showEditor();
    }

    function stop() {
      if (!busy) return;
      ++runId;
      window.PythonRunner.stop();
      busy = false;
      terminal.state = 'stopped';
      drawTerminal();
    }

    async function run() {
      if (busy || !/\.py$/i.test(project.active)) return;
      const id = ++runId;
      const current = () => id === runId && root.isConnected;
      const entry = project.active;
      const original = new Map(project.files.map(file => [file.name, file]));
      const before = Object.assign(Object.create(null), Object.fromEntries(project.files.map(file => [file.name, file.content])));
      terminal = {state: 'loading', entry, text: ''};
      busy = true;
      drawTerminal();
      try {
        const [result] = await window.PythonRunner.run(before[entry], [stdin.value], status => {
          if (current()) { terminal.state = status; drawTerminal(); }
        }, {entry, files: before, captureFileChanges: true, timeoutMs: 30000, onOutput(chunk) {
          if (!current()) return;
          terminal.text += chunk;
          if (!displayFrame) displayFrame = requestAnimationFrame(() => {
            displayFrame = 0;
            if (current()) drawTerminal();
          });
        }});
        if (!current()) return;
        if (!terminal.text) terminal.text = (result.output || '') + (result.stderr || '');
        terminal.exception = result.exception || '';
        if (terminal.exception) {
          if (terminal.text && !terminal.text.endsWith('\n')) terminal.text += '\n';
          terminal.text += terminal.exception.trimEnd();
          if (/\bEOFError:/.test(terminal.exception)) terminal.text += '\n\n' + t(
            'Add one line in the input box for each input() call, then press Run again.',
            '在「程序输入」中为每次 input() 填一行，然后重新运行。');
        }
        terminal.state = terminal.exception ? 'error' : 'done';
        mergeWrites(result.fileChanges, before, original);
        if (result.fileChangesLimited) terminal.text += '\n' + t(
          'Some file changes exceeded the workspace limit (256 KiB per file, 64 changes or 1 MiB per run).',
          '部分文件改动超过保存上限（每个文件 256 KiB，每次运行最多 64 个改动、合计 1 MiB）。');
      } catch (error) {
        if (!current()) return;
        terminal.state = 'error';
        terminal.text += (terminal.text && !terminal.text.endsWith('\n') ? '\n' : '') + String(error.message || error);
      } finally {
        if (current()) { busy = false; drawTerminal(); }
      }
    }

    function fileDialog(action) {
      const file = activeFile();
      const deleting = action === 'delete';
      const renaming = action === 'rename';
      if (deleting && project.files.length < 2) return;
      const title = deleting ? t('Delete file?', '删除文件？') : renaming ? t('Rename file', '重命名文件') : t('New file', '新建文件');
      dialog.innerHTML = '<form><h2 id="pg-dialog-title">' + title + '</h2>' +
        (deleting ? '<p>' + t('Delete ', '要删除 ') + '<strong>' + esc(file.name) + '</strong>' + t(' from this workspace?', ' 吗？') + '</p>' :
          '<label for="pg-name">' + t('File name', '文件名') +
          '</label><input id="pg-name" maxlength="120" required autocomplete="off" spellcheck="false" placeholder="practice.py">') +
        '<p class="pg-error" role="alert" hidden></p><div class="pg-dialog-actions"><button type="button" data-action="cancel">' +
        t('Cancel', '取消') + '</button><button type="submit">' +
        (deleting ? t('Delete', '删除') : renaming ? t('Rename', '重命名') : t('Create', '创建')) + '</button></div></form>';
      dialog.showModal();
      const field = dialog.querySelector('input');
      if (field) {
        if (renaming) field.value = file.name;
        field.focus();
        field.select();
      } else dialog.querySelector('[data-action="cancel"]').focus();
      dialog.querySelector('form').onsubmit = event => {
        event.preventDefault();
        if ((deleting || renaming) && !project.files.includes(file)) {
          dialog.close();
          return;
        }
        if (deleting) {
          if (project.files.length < 2) { dialog.close(); return; }
          project.files.splice(project.files.indexOf(file), 1);
          project.active = project.files[0].name;
        } else {
          let name = field.value.trim();
          if (name && !name.includes('.')) name += '.py';
          let message = '';
          if (!validName(name)) message = t('Enter a file name without a folder path.', '请输入文件名，去掉文件夹路径。');
          else if (project.files.some(f => f.name === name && (!renaming || f !== file)))
            message = t('A file with that name already exists.', '这个文件名已存在。');
          if (message) {
            const error = dialog.querySelector('.pg-error');
            error.hidden = false;
            error.textContent = message;
            field.focus();
            return;
          }
          if (renaming) file.name = name;
          else project.files.push({name, content: ''});
          project.active = name;
        }
        dialog.close();
        selectFile(project.active);
        editor.focus();
      };
    }

    root.addEventListener('click', event => {
      const button = event.target.closest('button');
      if (!button || button.disabled) return;
      if (button.dataset.file !== undefined) {
        selectFile(button.dataset.file);
        find('.pg-tab[aria-selected="true"]').focus({preventScroll: true});
        return;
      }
      switch (button.dataset.action) {
        case 'run': run(); break;
        case 'stop': stop(); break;
        case 'clear': terminal = {state: 'ready', entry: '', text: ''}; drawTerminal(); break;
        case 'new': case 'rename': case 'delete': fileDialog(button.dataset.action); break;
        case 'cancel': dialog.close(); break;
        case 'jump': {
          const frame = errorLine();
          if (!frame) break;
          selectFile(frame[1]);
          const line = Math.min(Number(frame[2]), editor.value.split('\n').length) - 1;
          const lines = editor.value.split('\n');
          const start = lines.slice(0, line).reduce((pos, value) => pos + value.length + 1, 0);
          editor.focus();
          editor.setSelectionRange(start, start + lines[line].length);
          editor.scrollTop = Math.max(0, (line - 3) * parseFloat(getComputedStyle(editor).lineHeight));
          break;
        }
        case 'download': {
          const file = activeFile();
          const link = document.createElement('a');
          const url = URL.createObjectURL(new Blob([file.content], {type: 'text/plain;charset=utf-8'}));
          link.href = url;
          link.download = file.name;
          link.click();
          setTimeout(() => URL.revokeObjectURL(url), 1500);
          break;
        }
      }
    });
    root.addEventListener('keydown', event => {
      if (dialog.open || event.isComposing) return;
      if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        event.preventDefault();
        run();
      } else if (event.target.matches('.pg-tab') && ['ArrowRight','ArrowLeft','Home','End'].includes(event.key)) {
        event.preventDefault();
        const files = project.files;
        const index = files.indexOf(activeFile());
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? files.length - 1 :
          (index + (event.key === 'ArrowRight' ? 1 : -1) + files.length) % files.length;
        selectFile(files[next].name);
        find('.pg-tab[aria-selected="true"]').focus();
      }
    });
    drawFiles();
    showEditor();
    drawTerminal();
    stopView = () => {
      stop();
      cancelAnimationFrame(displayFrame);
      if (dialog.open) dialog.close();
    };
  }

  window.Playground = {render, leave() { if (stopView) { stopView(); stopView = null; } }};
})();
