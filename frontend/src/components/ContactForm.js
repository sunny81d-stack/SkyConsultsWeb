import React, { useState } from 'react';
import '../styles/ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setStatus('');

    try {
      const response = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('✓ Message sent successfully!');
        setFormData({ name: '', mobile: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setError('Failed to send message');
      }
    } catch (err) {
      setError('Error sending message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Mobile *</label>
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label>Message *</label>
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          {status && <div className="status-message success">{status}</div>}
          {error && <div className="status-message error">{error}</div>}
          <button type="submit" className="submit-btn" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
