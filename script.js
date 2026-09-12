document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.feature-card, .split-section, .collector-panel, .privacy-callout').forEach((el) => observer.observe(el));
