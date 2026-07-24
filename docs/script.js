const menuButton = document.getElementById('menuButton');
const siteNav = document.getElementById('siteNav');

menuButton.addEventListener('click', () => {
  const open = siteNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});

siteNav.addEventListener('click', event => {
  if (!event.target.closest('a')) return;
  siteNav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
});
