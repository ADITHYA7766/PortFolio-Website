import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const { name, role, linkedin, github, email } = portfolioData.personalInfo;

  return (
    <section id="home" className="hero-section section">
      <div className="hero-content">
        <h2 className="greeting">Hi, I'm</h2>
        <h1 className="name gradient-text">{name}</h1>
        <h3 className="role">{role}</h3>
        
        <p className="bio text-muted">
          A passionate Computer Science Engineering student focused on building scalable, 
          AI-driven solutions and full-stack web applications.
        </p>

        <div className="social-links">
          <a href={github} target="_blank" rel="noopener noreferrer" className="social-icon">
            <Github size={24} />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin size={24} />
          </a>
          <a href={`mailto:${email}`} className="social-icon">
            <Mail size={24} />
          </a>
        </div>

        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#about" className="btn btn-outline">
            <FileText size={18} />
            More About Me
          </a>
        </div>
      </div>
      
      {/* Abstract Design Element instead of profile picture */}
      <div className="hero-visual">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="glass-panel abstract-shape">
          <div className="code-snippet">
            <span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{'}
            <br/>&nbsp;&nbsp;name: <span className="code-string">'{name}'</span>,
            <br/>&nbsp;&nbsp;skills: [<span className="code-string">'React'</span>, <span className="code-string">'Python'</span>, <span className="code-string">'Java'</span>],
            <br/>&nbsp;&nbsp;passion: <span className="code-string">'Building AI Apps'</span>
            <br/>{'}'};
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
