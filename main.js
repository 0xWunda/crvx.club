import './style.css'

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }

    // Update active state
    document.querySelectorAll('nav a').forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
  });
});

// Update active state on scroll
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollPosition >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('nav a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href').substring(1) === current) {
      a.classList.add('active');
    }
  });
});
