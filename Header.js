import React from 'react';
import './theme.css';

const Header = () => {
  return (
    <header style={{ background: 'url(architectural_background.jpg)', position: 'relative' }}>
      <h1 style={{ width: '33%' }}>Logo</h1>
      <div style={{ position: 'absolute', top: '0', left: '0' }}>
        <form>
          <input type='text' placeholder='Name' required />
          <input type='email' placeholder='Email' required />
          <input type='tel' placeholder='Phone' required />
          <a href='https://wa.me/' target='_blank'>WhatsApp</a>
        </form>
      </div>
    </header>
  );
};

export default Header;