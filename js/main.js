// FS Tools — main.js
// Shared utilities across all pages

// Highlight the current nav item based on page path
(function highlightNav() {
  const path = window.location.pathname.replace(/\\/g, '/');
  document.querySelectorAll('.nav-item[href]').forEach(link => {
    const href = link.getAttribute('href').replace(/\\/g, '/');
    if (path.endsWith(href) || (href === 'index.html' && (path.endsWith('/') || path.endsWith('index.html')))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
})();

// Format large numbers with commas
function formatNumber(n) {
  if (isNaN(n)) return '—';
  return Number(n).toLocaleString('en-IN', { maximumFractionDigits: 6 });
}

// Show/hide result box
function showResult(boxId, value, formula) {
  const box = document.getElementById(boxId);
  if (!box) return;
  box.classList.add('show');
  const valEl = box.querySelector('.result-value');
  const fmEl  = box.querySelector('.result-formula');
  if (valEl) valEl.textContent = value;
  if (fmEl && formula) fmEl.textContent = formula;
}

function hideResult(boxId) {
  const box = document.getElementById(boxId);
  if (box) box.classList.remove('show');
}
