
/* DURAR storefront helpers */
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('durar-theme');

  // subtle sticky header state
  const header = document.querySelector('header, .main-header');
  if (header) {
    const onScroll = () => header.classList.toggle('durar-scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // smooth reveal for DURAR sections
  const sections = document.querySelectorAll('.durar-promo, .durar-collection-card, .durar-category');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    sections.forEach(el => io.observe(el));
  }
});
