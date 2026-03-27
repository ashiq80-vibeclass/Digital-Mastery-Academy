// ═══════════════════════════════════════════════════
//  Digital Mastery Academy — Main Script
// ═══════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function () {

  // ── Task Toggle ──
  document.querySelectorAll('.toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const details = btn.nextElementSibling;
      const isOpen = details.classList.contains('open');

      // Close all
      document.querySelectorAll('.task-details').forEach(d => {
        d.style.maxHeight = null;
        d.classList.remove('open');
      });
      document.querySelectorAll('.toggle').forEach(b => {
        b.textContent = 'View Full Method ↓';
        b.style.color = '';
      });

      if (!isOpen) {
        details.classList.add('open');
        details.style.maxHeight = details.scrollHeight + 'px';
        btn.textContent = 'Hide Method ↑';
      }
    });

    // Set initial text
    btn.textContent = 'View Full Method ↓';
  });

  // ── Mobile Menu ──
  const menuBtn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
      menuBtn.textContent = menu.classList.contains('active') ? '✕' : '☰';
    });
    // Close on outside click
    document.addEventListener('click', e => {
      if (!menuBtn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('active');
        menuBtn.textContent = '☰';
      }
    });
  }

  // ── Year ──
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // ── Active nav link ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage) a.classList.add('active');
  });

  // ── Scroll to top button ──
  const scrollBtn = document.getElementById('scrollTop');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 400);
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Smooth reveal on scroll ──
  const revealEls = document.querySelectorAll('.course-card, .feature-card, .phase-card, .task-card, .timeline-card, .stat');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });

    revealEls.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity .45s ease, transform .45s ease';
      obs.observe(el);
    });
  }

  // ── Contact form ──
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = '✓ Message Sent!';
      btn.style.background = 'linear-gradient(135deg, #49d89a, #2cb87a)';
      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.background = '';
        contactForm.reset();
      }, 3000);
    });
  }

});
