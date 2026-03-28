import React, { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-top">
        <div className="contact-info">
          <span>📞 +91-XXXXXXXXXX</span>
          <span>✉️ support@skyconsults.in</span>
          <span>📍 SkyConsults, India</span>
        </div>
      </div>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-img">SC</div>
            <h1>SkyConsults</h1>
          </div>
          <button className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span><span></span><span></span>
          </button>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="https://interiors.skyconsults.in" target="_blank" rel="noopener noreferrer">Interior Design</a></li>
            <li><a href="https://realestate.skyconsults.in" target="_blank" rel="noopener noreferrer">Real Estate</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
