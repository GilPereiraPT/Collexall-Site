/* Preserve the open guide when readers choose one of the visible flags.
   Ordinary links still work without JavaScript. */
(function () {
  'use strict';
  const links = document.querySelectorAll('.kb-flags a[href]');
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (event.defaultPrevented || event.button !== 0 ||
          event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const hash = window.location.hash;
      if (!/^#[a-z0-9-]+$/i.test(hash)) return;
      const destination = new URL(link.getAttribute('href'), window.location.href);
      destination.hash = hash;
      event.preventDefault();
      window.location.assign(destination.href);
    });
  });
})();
