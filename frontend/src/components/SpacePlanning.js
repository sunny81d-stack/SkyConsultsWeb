import React from 'react';
import '../styles/SpacePlanning.css';

function SpacePlanning() {
  const steps = [
    { no: 1, title: 'Assessment', desc: 'Analyze your space and requirements' },
    { no: 2, title: 'Design', desc: 'Create optimal layout' },
    { no: 3, title: '3D Visualization', desc: 'View before implementation' },
    { no: 4, title: 'Materials', desc: 'Choose eco-friendly options' },
    { no: 5, title: 'Installation', desc: 'Professional setup' },
    { no: 6, title: 'Final Touches', desc: 'Styling and organization' },
  ];

  return (
    <section className="space-planning">
      <div className="container">
        <h2>📐 Space Planning Process</h2>
        <div className="steps">
          {steps.map(step => (
            <div key={step.no} className="step">
              <div className="number">{step.no}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpacePlanning;
