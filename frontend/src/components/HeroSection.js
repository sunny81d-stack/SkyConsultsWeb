import React from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Welcome to SkyConsults</h1>
        <p>Excellence in Interior Design & Real Estate Services</p>
        <button className="cta-button" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
