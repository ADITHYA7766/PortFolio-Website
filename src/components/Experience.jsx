import React from 'react';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Virtual Experience</h2>
      
      <div className="timeline-container">
        {experience.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-icon"><Briefcase size={16} /></div>
            </div>
            <div className="glass-panel timeline-content">
              <div className="exp-header">
                <div>
                  <h3 className="exp-title">{exp.title}</h3>
                  <h4 className="exp-company gradient-text">{exp.company}</h4>
                </div>
                <span className="exp-duration">{exp.duration}</span>
              </div>
              <ul className="exp-details">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
