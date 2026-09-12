import { useState } from 'react';

const ENDPOINT = 'https://script.google.com/macros/s/AKfycbykOA4fDvwCKpRnqBxh05oqd2KuY_W9rhJ37ukxwztLkgCOlrQVbTwwj8mwlJoh3c36Ug/exec';

const LetsConnect: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((previous) => ({ ...previous, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await fetch(ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: new URLSearchParams(formData).toString(),
      });
      setStatus('success');
      setFormData({ name: '', email: '', phone: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="connect scene" aria-labelledby="connect-heading">
      <div className="section-frame connect-frame">
        <div className="section-kicker">05 / START A CONVERSATION</div>
        <h2 id="connect-heading" className="section-title">Let's Connect</h2>
        <div className="connect-copy">
          <p>Great documentation starts with understanding, and that's where every good conversation begins.</p>
        </div>

        <div className="connect-layout">
          <div className="contact-links" aria-label="Contact details">
            <a href="mailto:mathigajalakshmi@gmail.com">
              <small>Email</small>
              <span>mathigajalakshmi@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/gajalakshmimathi" target="_blank" rel="noopener noreferrer">
              <small>LinkedIn</small>
              <span>www.linkedin.com/in/gajalakshmimathi</span>
            </a>
            <a href="https://github.com/Gajamathi" target="_blank" rel="noopener noreferrer">
              <small>GitHub</small>
              <span>github.com/Gajamathi</span>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              Name
              <input name="name" placeholder="Your full name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" placeholder="Your phone number" value={formData.phone} onChange={handleChange} />
            </label>
            <button className="button button-primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            <div className="form-status" aria-live="polite">
              {status === 'success' && 'Thank you. Your message has been sent.'}
              {status === 'error' && 'Something went wrong. Please try again or email me directly.'}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;
