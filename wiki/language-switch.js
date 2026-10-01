/* Only the Knowledge Base has its own language selector. Do not affect the main website. */
(function () {
  'use strict';
  const select = document.getElementById('kb-language');
  if (!select) return;
  select.addEventListener('change', function () {
    const target = new URL(select.value, window.location.href);
    // Keep readers in the same guide when switching language.
    const hash = window.location.hash;
    if (hash && /^[#][a-z0-9-]+$/i.test(hash)) target.hash = hash;
    window.location.assign(target.href);
  });
})();
