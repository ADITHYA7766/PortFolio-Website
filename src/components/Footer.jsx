import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const { name, linkedin, github, email } = portfolioData.personalInfo;

  return (
    <footer className="footer section">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="gradient-text">{name}</h2>
          <p className="text-muted">Building the future, one line of code at a time.</p>
        </div>
        
        <div className="footer-links">
          <a href={github} target="_blank" rel="noopener noreferrer" className="footer-icon">
            <Github size={20} />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="footer-icon">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${email}`} className="footer-icon">
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
