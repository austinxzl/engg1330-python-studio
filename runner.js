/* Each case owns its interpreter, modules and in-memory filesystem. */
(() => {
  "use strict";

  const loadTimeout = 90000;
  const caseTimeout = 6000;

  function snapshotWorkspace(files, entry, code) {
    if (files === undefined && entry === "main.py") return null;
    const snapshot = Object.assign(Object.create(null), files, {[entry]: code});
    for (const [name, text] of Object.entries(snapshot)) {
      if (!name || name === "." || name === ".." || /[\\/\x00-\x1f\x7f]/.test(name)) {
        throw new Error("Use a file name without folder separators or control characters.");
      }
      if (typeof text !== "string") throw new TypeError("Workspace files must contain text.");
    }
    return snapshot;
  }

  function startInterpreter() {
    const base = "https://cdn.jsdelivr.net/pyodide/v0.27.7/full/";
    const limit = 65536;
    const workspaceDir = "/workspace";

    function collectChanges(fs, files) {
      const changes = Object.create(null);
      let limited = false;
      let count = 0;
      let bytes = 0;
      const decoder = new TextDecoder("utf-8", {fatal: true, ignoreBOM: true});
      let names = [];
      try {
        // A program may remove the directory or replace it with a link.
        if (fs.isDir(fs.lstat(workspaceDir).mode)) names = fs.readdir(workspaceDir);
      } catch { /* Removing the workspace also removes the original files. */ }
      const present = new Set(names);
      function change(name, value, size) {
        if (count >= 64 || bytes + size > 1024 * 1024) {
          limited = true;
          return;
        }
        changes[name] = value;
        count += 1;
        bytes += size;
      }
      for (const name of Object.keys(files)) {
        if (!present.has(name)) change(name, null, 0);
      }
      for (const name of names) {
        if (name === "." || name === ".." || /[\\/\x00-\x1f\x7f]/.test(name)) continue;
        const path = workspaceDir + "/" + name;
        let data;
        try {
          const stat = fs.lstat(path);
          if (!fs.isFile(stat.mode)) continue;
          if (stat.size > 256 * 1024) {
            limited = true;
            continue;
          }
          data = fs.readFile(path);
        } catch {
          limited = true;
          continue;
        }
        if (data.includes(0)) continue;
        let value;
        try {
          value = decoder.decode(data);
        } catch { continue; }
        if (files[name] !== value) change(name, value, data.length);
      }
      return {fileChanges: changes, fileChangesLimited: limited};
    }

    self.onmessage = async ({ data }) => {
      let py;
      try {
        importScripts(base + "pyodide.js");
        py = await loadPyodide({ indexURL: base });
        const entry = data.entry || "main.py";
        let imports = data.code;
        if (data.files) {
          // Discover imports before placing user files on Python's module search path.
          py.globals.set("_studio_sources_json", JSON.stringify(data.files));
          py.globals.set("_studio_entry", entry);
          imports = py.runPython(`
import ast, json

def _workspace_imports(files, entry):
    pending = [entry]
    seen = set()
    packages = set()
    while pending:
        name = pending.pop()
        if name in seen:
            continue
        seen.add(name)
        try:
            tree = ast.parse(files[name])
        except (ValueError, SyntaxError):
            continue
        for node in ast.walk(tree):
            if isinstance(node, ast.Import):
                names = [alias.name for alias in node.names]
            elif isinstance(node, ast.ImportFrom) and node.module and not node.level:
                names = [node.module]
            else:
                continue
            for imported in names:
                module = imported.split(".")[0]
                local = module + ".py"
                if local in files:
                    pending.append(local)
                else:
                    packages.add(module)
    return "\\n".join("import " + module for module in sorted(packages))

_workspace_imports(json.loads(_studio_sources_json), _studio_entry)
`);
        }
        // Optional, separately distributed stdlib modules use this same pinned release.
        try {
          await py.loadPackagesFromImports(imports);
        } catch (error) {
          // A syntax error belongs to the student's file and gets a line number below.
          if (!String(error).includes("SyntaxError") && !String(error).includes("IndentationError")) throw error;
        }
      } catch (error) {
        self.postMessage({ type: "unavailable", message: "Could not load Python. Check your internet connection and retry. " + String(error).slice(0, 260) });
        return;
      }

      const input = new TextEncoder().encode(data.input);
      let position = 0;
      py.setStdin({
        read(buffer) {
          const size = Math.min(buffer.length, input.length - position);
          buffer.set(input.subarray(position, position + size));
          position += size;
          return size;
        }
      });

      let used = 0;
      // Keep byte chunks so a UTF-8 character split across writes survives decoding.
      const stdout = [];
      const stderr = [];
      const decoders = data.stream ? {stdout: new TextDecoder(), stderr: new TextDecoder()} : null;
      const segments = [];
      let lastSend = -Infinity;
      let queuedLength = 0;
      function flushOutput() {
        if (!segments.length) return;
        self.postMessage({type: "output", segments});
        segments.length = 0;
        queuedLength = 0;
        lastSend = performance.now();
      }
      function queueOutput(channel, text) {
        if (!text) return;
        const previous = segments[segments.length - 1];
        if (previous && previous.channel === channel) previous.text += text;
        else segments.push({channel, text});
        queuedLength += text.length;
        // Send the first write immediately. Batch print loops into readable updates.
        if (queuedLength >= 8192 || performance.now() - lastSend >= 32) flushOutput();
      }
      function capture(chunks, channel) {
        return { write(buffer) {
          const size = Math.min(buffer.length, limit - used);
          if (size > 0) {
            const bytes = buffer.slice(0, size);
            chunks.push(bytes);
            if (decoders) queueOutput(channel, decoders[channel].decode(bytes, {stream: true}));
          }
          used += size;
          if (size < buffer.length) {
            flushOutput();
            self.postMessage({ type: "limit" });
            throw new Error("Output limit exceeded");
          }
          return buffer.length;
        } };
      }
      function decode(chunks) {
        const decoder = new TextDecoder();
        return chunks.map(part => decoder.decode(part, { stream: true })).join("") + decoder.decode();
      }
      py.setStdout(capture(stdout, "stdout"));
      py.setStderr(capture(stderr, "stderr"));
      self.postMessage({ type: "running" });
      let failure = "";
      let trace;
      try {
        const entry = data.entry || "main.py";
        if (data.files) {
          py.FS.mkdir(workspaceDir);
          py.FS.chdir(workspaceDir);
          for (const [name, contents] of Object.entries(data.files)) py.FS.writeFile(name, contents);
        } else {
          py.FS.writeFile(entry, data.code);
        }
        py.globals.set("_studio_entry", entry);
        py.globals.set("_studio_workspace", Boolean(data.files));
        py.globals.set("_studio_stream", Boolean(data.stream));
        py.globals.set("_want_trace", Boolean(data.trace));
        if (data.trace) py.runPython(`
import json, reprlib
_steps, _cutoff = [], False

def _watch(frame, event, result):
    global _cutoff
    if frame.f_code.co_filename != _studio_entry:
        return None
    if event in ("line", "return", "exception"):
        if len(_steps) >= 180:
            _cutoff = True
            return None
        variables = {}
        simple = (str, int, float, bool, list, tuple, dict, set, range, type(None))
        for name, value in frame.f_locals.items():
            if not name.startswith("__") and type(value) in simple:
                variables[name] = reprlib.repr(value)[:100]
                if len(variables) == 12:
                    break
        step = dict(line=frame.f_lineno, scope=frame.f_code.co_name,
                    event=event, variables=variables)
        if event == "return" and type(result) in simple:
            step["returned"] = reprlib.repr(result)[:100]
        if event == "exception":
            step["exception"] = result[0].__name__
        _steps.append(step)
    return _watch
`);
        failure = py.runPython(`
import os, sys, traceback, tokenize, types
def _studio_main():
    try:
        with tokenize.open(_studio_entry) as source:
            program = compile(source.read(), _studio_entry, "exec")
        if _studio_workspace:
            sys.path.insert(0, os.getcwd())
            sys.argv = [_studio_entry]
            module = types.ModuleType("__main__")
            module.__file__ = _studio_entry
            sys.modules["__main__"] = module
            env = module.__dict__
        else:
            env = {"__name__": "__main__", "__file__": _studio_entry}
        if _studio_stream:
            sys.stdout.reconfigure(line_buffering=True)
            sys.stderr.reconfigure(line_buffering=True)
        if _want_trace:
            sys.settrace(_watch)
        exec(program, env)
    except SystemExit as exc:
        if exc.code not in (None, 0):
            return "SystemExit: " + str(exc.code)
    except BaseException as exc:
        return "".join(traceback.format_exception(type(exc), exc, exc.__traceback__.tb_next))
    finally:
        if _want_trace:
            sys.settrace(None)
        sys.__stdout__.flush()
        sys.__stderr__.flush()
    return ""
_studio_main()
        `);
        if (data.trace) trace = JSON.parse(py.runPython("json.dumps(dict(steps=_steps, limited=_cutoff))"));
      } catch (error) {
        failure = String(error);
      }
      if (decoders) {
        for (const [channel, decoder] of Object.entries(decoders)) queueOutput(channel, decoder.decode());
        flushOutput();
      }
      const diagnostics = decode(stderr);
      const changed = data.captureFileChanges && data.files ? collectChanges(py.FS, data.files) : {};
      self.postMessage({
        type: "done",
        result: {...changed, trace, output: decode(stdout), stderr: diagnostics, exception: failure.slice(0, limit),
          error: (diagnostics + failure).trim().slice(0, limit)}
      });
    };
  }

  const workerSource = new Blob(["(", startInterpreter.toString(), ")();"], { type: "text/javascript" });

  function createRunner() {
    let active = null;

    function stop() {
      if (active) active.abort();
    }

    async function run(code, inputs, onStatus = () => {}, {
      trace = false, files, entry = "main.py", onOutput, captureFileChanges = false, timeoutMs = caseTimeout
    } = {}) {
      stop();
      const workspace = snapshotWorkspace(files, entry, code);
      const duration = Number.isFinite(timeoutMs) && timeoutMs > 0 ? timeoutMs : caseTimeout;
      const session = new AbortController();
      active = session;
      const url = URL.createObjectURL(workerSource);
      const results = [];
      try {
        for (const [index, input] of inputs.entries()) {
          const result = await new Promise((resolve, reject) => {
            const worker = new Worker(url);
            let timer;
            const abort = () => finish(null, new DOMException("Run stopped.", "AbortError"));
            function finish(result, error) {
              clearTimeout(timer);
              session.signal.removeEventListener("abort", abort);
              worker.terminate();
              if (error) reject(error);
              else resolve(result);
            }
            session.signal.addEventListener("abort", abort, { once: true });
            worker.onerror = event => {
              event.preventDefault();
              finish(null, new Error(event.message || "The Python worker failed to start."));
            };
            worker.onmessage = ({ data }) => {
              if (data.type === "running") {
                clearTimeout(timer);
                timer = setTimeout(() => finish(null, Object.assign(new Error(
                  "Time limit exceeded (" + (duration / 1000) + " seconds). Check your loops and recursive calls."
                ), {name: "ExecutionLimit"})), duration);
                onStatus("running", index);
              } else if (data.type === "output") {
                if (typeof onOutput === "function") {
                  for (const {text, channel} of data.segments) onOutput(text, channel);
                }
              } else if (data.type === "limit") {
                finish(null, Object.assign(new Error("Output limit exceeded (64 KiB). Check your print statements."), {name: "ExecutionLimit"}));
              } else if (data.type === "unavailable") {
                finish(null, new Error(data.message));
              } else if (data.type === "done") {
                finish(data.result);
              }
            };
            timer = setTimeout(() => finish(null, new Error("Python took too long to load. Check your connection and retry.")), loadTimeout);
            onStatus("loading", index);
            if (session.signal.aborted) return abort();
            worker.postMessage({code, input, trace, files: workspace, entry, captureFileChanges, stream: typeof onOutput === "function"});
          });
          results.push(result);
        }
        return results;
      } finally {
        URL.revokeObjectURL(url);
        if (active === session) active = null;
      }
    }

    return {run, stop};
  }

  window.PythonRunner = Object.freeze({...createRunner(), create: createRunner});
})();
