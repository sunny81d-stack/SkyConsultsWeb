import React, { useState } from 'react';
import '../styles/InteriorCalculator.css';

function InteriorCalculator() {
  const [sqft, setSqft] = useState('');
  const [quality, setQuality] = useState('standard');
  const [result, setResult] = useState(null);

  const rates = {
    standard: 500,
    premium: 1000,
    luxury: 2000,
  };

  const calculate = () => {
    if (!sqft) {
      alert('Enter square footage');
      return;
    }
    const total = parseInt(sqft) * rates[quality];
    setResult(total);
  };

  return (
    <section className="interior-calculator">
      <div className="container">
        <h2>��� Interior Cost Calculator</h2>
        <div className="calc-form">
          <input type="number" placeholder="Enter area (sq.ft)" value={sqft} onChange={(e) => setSqft(e.target.value)} />
          <select value={quality} onChange={(e) => setQuality(e.target.value)}>
            <option value="standard">Standard (₹500/sqft)</option>
            <option value="premium">Premium (₹1000/sqft)</option>
            <option value="luxury">Luxury (₹2000/sqft)</option>
          </select>
          <button onClick={calculate}>Calculate Cost</button>
          {result && <div className="result">Estimated Cost: ₹{result.toLocaleString('en-IN')}</div>}
        </div>
      </div>
    </section>
  );
}

export default InteriorCalculator;
