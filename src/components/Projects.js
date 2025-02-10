import React from 'react';
import '../styles/Projects.css';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Progetti</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a 
                href={project.url} 
                 target="_blank" 
                 rel="noopener noreferrer"
                className="github-link"
              >
                <i className="fab fa-github"></i>
                Vedi su GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;