import React from 'react';
import '../styles/VastuCompliance.css';

function VastuCompliance() {
  const requirements = [
    { title: 'Entrance Direction', desc: 'Main entrance should face North or East' },
    { title: 'Kitchen', desc: 'Kitchen in Southeast corner' },
    { title: 'Master Bedroom', desc: 'Master Bedroom in Southwest' },
    { title: 'Bathrooms', desc: 'Avoid center or Northeast placement' },
    { title: 'Natural Light', desc: 'Windows on East and North sides' },
    { title: 'Color Palette', desc: 'Harmonious and balanced colors' },
  ];

  return (
    <section className="vastu-compliance">
      <div className="container">
        <h2>🕉️ Vastu Compliance</h2>
        <div className="grid">
          {requirements.map((req, idx) => (
            <div key={idx} className="card">
              <h3>{req.title}</h3>
              <p>{req.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VastuCompliance;
