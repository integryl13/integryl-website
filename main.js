// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Contact form: basic success/error feedback
const form = document.getElementById('contactForm');
form?.addEventListener('submit', async (e) => {
  const action = form.getAttribute('action');
  // If the form action is still the placeholder, do nothing special
  if (!action || action.includes('YOUR_FORM_ID')) return;

  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  try {
    const res = await fetch(action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });
    if (res.ok) {
      form.innerHTML = '<p style="text-align:center;color:#60a5fa;font-size:1.05rem;padding:40px 0">Thank you — we\'ll be in touch within one business day.</p>';
    } else {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      alert('Something went wrong. Please try again or email us directly.');
    }
  } catch {
    btn.textContent = 'Send Message';
    btn.disabled = false;
    alert('Something went wrong. Please try again or email us directly.');
  }
});

// Subtle nav shadow on scroll
const navWrap = document.querySelector('.nav-wrap');
window.addEventListener('scroll', () => {
  navWrap?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });
