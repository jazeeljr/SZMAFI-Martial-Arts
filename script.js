// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Hamburger menu
const ham = document.getElementById('hamburger');
const mMenu = document.getElementById('mobile-menu');
ham.addEventListener('click', () => mMenu.classList.toggle('open'));
document.querySelectorAll('.mobile-menu a').forEach(a => {
  a.addEventListener('click', () => mMenu.classList.remove('open'));
});

// Smooth active nav
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if(window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#'+current ? '#c0392b' : '';
  });
});
