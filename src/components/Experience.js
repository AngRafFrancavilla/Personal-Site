import React from 'react';
import '../styles/Experience.css';
import { experiences } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Esperienze Lavorative</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <h3>{exp.nomeAzienda}</h3>
              <p className="ruolo"><strong>{exp.ruolo}</strong></p>
              <p className="data"><strong>{exp.data}</strong></p>
              <p className="descrizione">{exp.descrizione}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;