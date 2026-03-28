import React, { useState } from 'react';
import '../styles/RealEstatePage.css';

function RealEstatePage() {
  const [leads, setLeads] = useState([]);
  const [form, setForm] = useState({ name: '', mobile: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLeads([...leads, form]);
    setForm({ name: '', mobile: '', email: '' });
    alert('Lead submitted successfully!');
  };

  return (
    <section className="real-estate">
      <div className="container">
        <h2>🏢 Real Estate Opportunities</h2>
        <form className="lead-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />
          <input type="tel" placeholder="Mobile" value={form.mobile} onChange={(e) => setForm({...form, mobile: e.target.value})} required />
          <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default RealEstatePage;
