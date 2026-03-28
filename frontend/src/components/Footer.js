import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>SkyConsults</h3>
          <p>Professional Interior Design & Real Estate Services</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="https://interiors.skyconsults.in">Interiors</a></li>
            <li><a href="https://realestate.skyconsults.in">Real Estate</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📧 support@skyconsults.in</p>
          <p>📞 +91-XXXXXXXXXX</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {year} SkyConsults. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
