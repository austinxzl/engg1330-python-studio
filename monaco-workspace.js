(() => {
  'use strict';

  const release = new URL('assets/vendor/monaco/0.58.0/', document.currentScript.src);
  let loading;

  function loadStyle() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = new URL('editor.css', release).href;
    return new Promise((resolve, reject) => {
      link.onload = resolve;
      link.onerror = () => {
        link.remove();
        reject(new Error('The editor stylesheet could not be loaded.'));
      };
      document.head.append(link);
    });
  }

  window.PgMonaco = {
    load() {
      if (!loading) {
        window.MonacoEnvironment = {
          getWorker(_, label) {
            return new Worker(new URL('editor.worker.js', release), {type: 'module', name: label});
          }
        };
        loading = Promise.all([import(new URL('editor.js', release).href), loadStyle()])
          .then(([api]) => api)
          .catch(error => {
            loading = undefined;
            throw error;
          });
      }
      return loading;
    }
  };
})();
