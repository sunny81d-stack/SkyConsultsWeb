import React, { useState } from 'react';
import '../styles/InflationCalculator.css';

function InflationCalculator() {
  const [cost, setCost] = useState('');
  const [inflation, setInflation] = useState(5);
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!cost) {
      alert('Please enter a cost');
      return;
    }
    const futureValue = parseFloat(cost) * Math.pow((1 + inflation / 100), 4);
    setResult(futureValue.toFixed(0));
  };

  return (
    <section className="inflation-calculator">
      <div className="container">
        <h2>📊 4-Year Property Inflation Calculator</h2>
        <div className="calc-wrapper">
          <div className="calc-form">
            <label>Current Property Value (₹)</label>
            <input type="number" placeholder="Enter amount" value={cost} onChange={(e) => setCost(e.target.value)} />
            
            <label>Annual Inflation Rate: {inflation}%</label>
            <input type="range" min="0" max="20" value={inflation} onChange={(e) => setInflation(e.target.value)} />
            
            <button onClick={calculate}>Calculate Future Value</button>
            
            {result && (
              <div className="result">
                <p>Estimated Value in 4 Years:</p>
                <p className="amount">₹{parseFloat(result).toLocaleString('en-IN')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InflationCalculator;
