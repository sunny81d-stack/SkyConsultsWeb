import React, { useState } from 'react';
import '../styles/AccessCodeModal.css';

function AccessCodeModal({ isOpen, onClose }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const accessCodes = {
    '1001': 'Godrej Bannerghatta',
    '1010': 'Project 1010',
    '1011': 'Project 1011',
    '1012': 'Project 1012',
    '1013': 'Project 1013',
    '1014': 'Project 1014',
    '1015': 'Project 1015',
    '1016': 'Project 1016',
    '1017': 'Project 1017',
    '1018': 'Project 1018',
    '1019': 'Project 1019',
    '1020': 'Project 1020',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (accessCodes[code]) {
      alert(`Access granted to: ${accessCodes[code]}`);
      setCode('');
      onClose();
    } else {
      setError('Invalid access code. Try: 1001 or 1010-1020');
      setTimeout(() => setError(''), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="access-modal-overlay" onClick={onClose}>
      <div className="access-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2>🔐 Exclusive Access</h2>
        <p>Enter your 4-digit access code</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="0000"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            maxLength="4"
            autoFocus
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Access</button>
        </form>
      </div>
    </div>
  );
}

export default AccessCodeModal;
