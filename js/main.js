// FS Tools — main.js

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

// Sidebar toggle (mobile)
function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('open');
  document.querySelector('.sidebar-overlay').classList.toggle('show');
}

// Close sidebar when a nav link is tapped on mobile
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-item[href]').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        document.querySelector('.sidebar').classList.remove('open');
        document.querySelector('.sidebar-overlay').classList.remove('show');
      }
    });
  });
});

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
