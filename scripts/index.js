let nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('navbar-light', window.scrollY > 0);
  nav.classList.toggle('bg-light', window.scrollY > 0);
  nav.classList.toggle('shadow-nav-scrolled', window.scrollY > 0);
});