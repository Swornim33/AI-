// Interactive Tooltips
document.querySelectorAll('.tooltip-btn').forEach(btn => {
    btn.addEventListener('mouseover', function() {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = this.dataset.tooltip;
      this.appendChild(tooltip);
    });
  
    btn.addEventListener('mouseout', function() {
      const tooltip = this.querySelector('.tooltip');
      if (tooltip) tooltip.remove();
    });
  });
  
  // Newsletter Form Handling
  document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    // Add your email collection logic here
    alert(`Thanks for subscribing, ${email}! Check your inbox for confirmation.`);
  });
  
  // Intersection Observer for Animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });
  
  document.querySelectorAll('.card, .tool-card').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
  });
  
  // Dark Mode Toggle (Optional)
  const darkModeToggle = document.createElement('button');
  darkModeToggle.textContent = '🌓 Toggle Dark Mode';
  darkModeToggle.style.position = 'fixed';
  darkModeToggle.style.bottom = '20px';
  darkModeToggle.style.right = '20px';
  document.body.appendChild(darkModeToggle);
  
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  // Footer Newsletter Form
document.getElementById('footer-newsletter').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert(`Thank you for subscribing, ${email}! You'll receive weekly AI insights.`);
  });

  