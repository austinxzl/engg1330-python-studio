(() => {
  'use strict';

  // The text area accepts input while the editor's local assets load.
  window.createPlaygroundEditor = function (host, persist) {
    const fallback = document.createElement('textarea');
    fallback.className = 'pg-fallback';
    fallback.spellcheck = false;
    fallback.autocapitalize = 'off';
    fallback.setAttribute('autocorrect', 'off');
    const mount = document.createElement('div');
    mount.className = 'pg-monaco';
    mount.hidden = true;
    host.replaceChildren(fallback, mount);

    const buffers = new Map();
    let file;
    let api;
    let editor;
    let disposed = false;
    let notice;
    let loading = false;
    const label = () => t('Code editor for ', '代码编辑器：') + file.name;

    function open(next) {
      const previous = file;
      if (editor && previous && previous !== next && buffers.has(previous))
        buffers.get(previous).view = editor.saveViewState();
      file = next;
      if (!editor) {
        if (fallback.value !== file.content) fallback.value = file.content;
        fallback.setAttribute('aria-label', label());
        return;
      }
      const language = /\.py$/i.test(file.name) ? 'python' : 'plaintext';
      let buffer = buffers.get(file);
      if (!buffer) {
        const model = api.editor.createModel(file.content, language);
        model.updateOptions({tabSize: 4, insertSpaces: true});
        model.onDidChangeContent(() => {
          const value = model.getValue();
          if (next.content !== value) { next.content = value; persist(); }
        });
        buffer = {model};
        buffers.set(file, buffer);
      }
      if (buffer.model.getLanguageId() !== language) api.editor.setModelLanguage(buffer.model, language);
      if (buffer.model.getValue() !== file.content) buffer.model.setValue(file.content);
      if (editor.getModel() !== buffer.model) {
        editor.setModel(buffer.model);
        if (buffer.view) editor.restoreViewState(buffer.view);
      }
      editor.updateOptions({ariaLabel: label()});
    }

    fallback.addEventListener('input', () => { file.content = fallback.value; persist(); });
    async function load() {
      if (loading) return;
      loading = true;
      try {
        api = await window.PgMonaco.load();
        if (disposed) return;
        const focused = document.activeElement === fallback;
        const start = fallback.selectionStart, end = fallback.selectionEnd;
        api.editor.defineTheme('pystudio-dark', {
          base: 'vs-dark', inherit: true, rules: [],
          colors: {'editor.background': '#1b1c2b', 'editor.foreground': '#e5e6f0',
            'editorLineNumber.foreground': '#8e8da4', 'editorLineNumber.activeForeground': '#e5e1f5',
            'editor.lineHighlightBackground': '#232435', 'editorCursor.foreground': '#e3d8fd',
            'editor.selectionBackground': '#494160', 'editorIndentGuide.background1': '#343447'}
        });
        mount.hidden = false;
        editor = api.editor.create(mount, {
          model: null, theme: 'pystudio-dark', automaticLayout: true, minimap: {enabled: false},
          fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
          fontSize: 16, lineHeight: 24, lineNumbersMinChars: 3, scrollBeyondLastLine: false,
          padding: {top: 10, bottom: 10}, glyphMargin: false, folding: true, fixedOverflowWidgets: true,
          autoIndent: 'full', detectIndentation: false, tabSize: 4, insertSpaces: true,
          scrollbar: {verticalScrollbarSize: 9, horizontalScrollbarSize: 9}, ariaLabel: label()
        });
        open(file);
        const model = editor.getModel();
        const a = model.getPositionAt(start), b = model.getPositionAt(end);
        editor.setSelection(new api.Range(a.lineNumber, a.column, b.lineNumber, b.column));
        fallback.hidden = true;
        host.dataset.engine = 'monaco';
        notice?.remove();
        if (focused) editor.focus();
      } catch {
        if (disposed) return;
        editor?.dispose();
        editor = null;
        mount.hidden = true;
        fallback.hidden = false;
        if (!notice) {
          notice = document.createElement('button');
          notice.type = 'button';
          notice.className = 'pg-retry-editor';
          notice.textContent = t('Reload advanced editor', '重新加载高级编辑器');
          notice.addEventListener('click', load);
        }
        host.append(notice);
      } finally {
        loading = false;
      }
    }

    return {
      open, load,
      forgetRemoved(files) {
        for (const [savedFile, buffer] of buffers) {
          if (!files.includes(savedFile)) {
            if (editor?.getModel() === buffer.model) editor.setModel(null);
            buffer.model.dispose();
            buffers.delete(savedFile);
          }
        }
      },
      focus() { if (editor) editor.focus(); else fallback.focus(); },
      goToLine(number) {
        if (editor) {
          const model = editor.getModel();
          const line = Math.max(1, Math.min(number, model.getLineCount()));
          editor.setSelection(new api.Range(line, 1, line, model.getLineMaxColumn(line)));
          editor.revealLineInCenterIfOutsideViewport(line);
          editor.focus();
        } else {
          const lines = fallback.value.split('\n');
          const index = Math.max(0, Math.min(number, lines.length) - 1);
          const start = lines.slice(0,index).reduce((n,line) => n + line.length + 1, 0);
          fallback.focus();
          fallback.setSelectionRange(start, start + lines[index].length);
        }
      },
      dispose() {
        disposed = true;
        editor?.dispose();
        for (const {model} of buffers.values()) model.dispose();
        buffers.clear();
      }
    };
  };
})();
