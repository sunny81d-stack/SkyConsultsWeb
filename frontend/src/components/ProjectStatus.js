import React, { useState } from 'react';
import '../styles/ProjectStatus.css';

function ProjectStatus() {
  const [projects] = useState([
    { id: 1, name: 'Godrej Bannerghatta', progress: 100, status: 'Ready' },
    { id: 2, name: 'Sobha Neopolis', progress: 75, status: 'Under Construction' },
    { id: 3, name: 'Prestige Raintree', progress: 40, status: 'In Progress' },
  ]);

  return (
    <section className="project-status">
      <div className="container">
        <h2>📊 Current Project Status</h2>
        {projects.map(p => (
          <div key={p.id} className="status-card">
            <h3>{p.name}</h3>
            <p>{p.status}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${p.progress}%`}}></div>
            </div>
            <p className="percentage">{p.progress}% Complete</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectStatus;
