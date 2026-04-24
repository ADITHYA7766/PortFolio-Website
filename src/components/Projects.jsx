import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="glass-panel project-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="project-links">
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Github size={20} />
                  <span>Code</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
