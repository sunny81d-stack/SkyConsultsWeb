import React, { useState } from 'react';
import '../styles/ContactSidebar.css';

function ContactSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const whatsappLink = "https://wa.me/919876543210?text=Hello%20SkyConsults%20Interiors";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We will contact you soon.`);
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <div className={`contact-sidebar ${isOpen ? 'open' : ''}`}>
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)} title="Quick Contact">
        ☎️
      </button>

      {isOpen && (
        <div className="sidebar-content">
          <h3>📞 Quick Contact</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
              💬 WhatsApp Chat
            </a>
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ContactSidebar;
