document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navlinks');
  if (toggle && nav) toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  const form = document.querySelector('#contact-form');
  if (!form) return;
  const status = document.querySelector('#form-status');
  const button = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (form.elements._honey && form.elements._honey.value.trim()) return;
    const original = button.textContent;
    button.disabled = true;
    button.textContent = 'Sending enquiry…';
    status.className = 'form-feedback';
    status.textContent = 'Submitting your enquiry securely…';
    try {
      const response = await fetch('https://formsubmit.co/ajax/elaine.kgosana@makondeinvest.co.za', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      const result = await response.json();
      if (!response.ok || result.success !== 'true' && result.success !== true) {
        throw new Error('FormSubmit did not confirm delivery.');
      }
      form.reset();
      status.className = 'form-feedback form-feedback-success';
      status.textContent = 'Your enquiry has been submitted. Thank you — Makonde will respond using the contact details provided.';
    } catch (error) {
      status.className = 'form-feedback form-feedback-error';
      status.textContent = 'We could not confirm your submission. Please email elaine.kgosana@makondeinvest.co.za or call 083 556 1288. Avoid resubmitting until you know whether the first message arrived.';
    } finally {
      button.disabled = false;
      button.textContent = original;
    }
  });
});
