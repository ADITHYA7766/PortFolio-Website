import React from 'react';
import { BookOpen, Code, Database, Layout, PenTool, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './About.css';

const About = () => {
  const { education, skills } = portfolioData;

  const skillCategories = [
    { title: "Languages", icon: <Code size={20} />, items: skills.languages },
    { title: "Web Tech", icon: <Layout size={20} />, items: skills.webTech },
    { title: "Frameworks & Tools", icon: <PenTool size={20} />, items: [...skills.frameworks, ...skills.tools] },
    { title: "Libraries", icon: <Database size={20} />, items: skills.libraries },
    { title: "Core Concepts", icon: <Cpu size={20} />, items: skills.coreConcepts },
  ];

  return (
    <section id="about" className="section">
      <h2 className="section-title">Education & Skills</h2>
      
      <div className="about-grid">
        <div className="education-column">
          <div className="glass-panel edu-card">
            <div className="edu-icon">
              <BookOpen size={30} className="gradient-text" />
            </div>
            <h3 className="edu-degree">{education.degree}</h3>
            <h4 className="edu-institution">{education.institution}</h4>
            <div className="edu-meta">
              <span>{education.location}</span>
              <span>{education.duration}</span>
            </div>
            <div className="edu-score">CGPA: <strong>{education.cgpa}</strong></div>
          </div>
        </div>

        <div className="skills-column">
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass-panel skill-card">
                <div className="skill-header">
                  {category.icon}
                  <h3>{category.title}</h3>
                </div>
                <div className="skill-tags">
                  {category.items.map((item, i) => (
                    <span key={i} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
