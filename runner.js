/* Each case owns its interpreter, modules and in-memory filesystem. */
(() => {
  "use strict";

  const loadTimeout = 90000;
  const caseTimeout = 6000;

  function startInterpreter() {
    const base = "https://cdn.jsdelivr.net/pyodide/v0.27.7/full/";
    const limit = 65536;

    self.onmessage = async ({ data }) => {
      let py;
      try {
        importScripts(base + "pyodide.js");
        py = await loadPyodide({ indexURL: base });
        // Optional, separately distributed stdlib modules use this same pinned release.
        try {
          await py.loadPackagesFromImports(data.code);
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
      function capture(chunks) {
        return { write(buffer) {
          const size = Math.min(buffer.length, limit - used);
          if (size > 0) chunks.push(buffer.slice(0, size));
          used += size;
          if (size < buffer.length) {
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
      py.setStdout(capture(stdout));
      py.setStderr(capture(stderr));
      self.postMessage({ type: "running" });
      let failure = "";
      try {
        py.FS.writeFile("main.py", data.code);
        failure = py.runPython(`
import sys, traceback, tokenize
def _studio_main():
    try:
        with tokenize.open("main.py") as source:
            program = compile(source.read(), "main.py", "exec")
        env = {"__name__": "__main__", "__file__": "main.py"}
        exec(program, env)
    except SystemExit as exc:
        if exc.code not in (None, 0):
            return "SystemExit: " + str(exc.code)
    except BaseException as exc:
        return "".join(traceback.format_exception(type(exc), exc, exc.__traceback__.tb_next))
    finally:
        sys.__stdout__.flush()
        sys.__stderr__.flush()
    return ""
_studio_main()
        `);
      } catch (error) {
        failure = String(error);
      }
      self.postMessage({
        type: "done",
        result: { output: decode(stdout), error: (decode(stderr) + failure).trim().slice(0, limit) }
      });
    };
  }

  const workerSource = new Blob(["(", startInterpreter.toString(), ")();"], { type: "text/javascript" });

  function createRunner() {
    let active = null;

    function stop() {
      if (active) active.abort();
    }

    async function run(code, inputs, onStatus = () => {}) {
      stop();
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
                timer = setTimeout(() => finish(null, Object.assign(new Error("Time limit exceeded (6 seconds). Check your loops and recursive calls."), {name: "ExecutionLimit"})), caseTimeout);
                onStatus("running", index);
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
            worker.postMessage({ code, input });
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
