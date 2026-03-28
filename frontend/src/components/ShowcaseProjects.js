import React from 'react';
import '../styles/ShowcaseProjects.css';

function ShowcaseProjects() {
  const projects = [
    { id: 1, title: 'Modern Living Room', desc: 'Contemporary Design', img: 'https://images.unsplash.com/photo-1515846715744-83c1b93baf4e?w=400', rating: 5 },
    { id: 2, title: 'Luxury Bedroom', desc: 'Premium Finishing', img: 'https://images.unsplash.com/photo-1540932015986-180e074dc6f6?w=400', rating: 5 },
    { id: 3, title: 'Modern Kitchen', desc: 'Smart Layout', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400', rating: 4 },
  ];

  return (
    <section className="showcase-projects">
      <div className="container">
        <h2>🏆 Showcase of Our Best Projects</h2>
        <div className="projects-grid">
          {projects.map(p => (
            <div key={p.id} className="project-card">
              <img src={p.img} alt={p.title} />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="rating">{'⭐'.repeat(p.rating)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShowcaseProjects;
