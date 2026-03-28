import React from 'react';
import '../styles/Features.css';

function Features() {
  const features = [
    { icon: '🏗️', title: 'Interior Design', description: 'Creative interior design solutions' },
    { icon: '🏠', title: 'Real Estate', description: 'Premium property services' },
    { icon: '⭐', title: 'Quality', description: 'Excellence guaranteed' },
    { icon: '🤝', title: '24/7 Support', description: 'Always available' }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <h2>Our Services</h2>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
