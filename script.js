const languageStyles = document.createElement('link');
languageStyles.rel = 'stylesheet';
languageStyles.href = 'languages.css';
document.head.appendChild(languageStyles);

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.feature-card, .split-section, .collector-panel, .privacy-callout, .language-card').forEach((el) => observer.observe(el));
