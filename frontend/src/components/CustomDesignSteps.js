import React, { useState } from 'react';
import '../styles/CustomDesignSteps.css';

function CustomDesignSteps() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', date: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${formData.name} on ${formData.date}`);
    setFormData({ name: '', date: '' });
    setShowForm(false);
  };

  return (
    <section className="custom-design">
      <div className="container">
        <h2>✨ Custom Design Process</h2>
        <button className="book-btn" onClick={() => setShowForm(!showForm)}>📅 Book Appointment</button>
        
        {showForm && (
          <form className="booking-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            <input type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} required />
            <button type="submit">Confirm</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default CustomDesignSteps;
