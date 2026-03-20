import React from 'react';
import { 
  SiReact, SiJavascript, SiHtml5, SiCss3,
  SiTailwindcss, SiNodedotjs, SiExpress, SiPhp,
  SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiGithub, SiDocker
} from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'FRONTEND',
      skills: [
        { name: 'React', icon: SiReact, color: '#61dafb' },
        { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
        { name: 'HTML', icon: SiHtml5, color: '#e34c26' },
        { name: 'CSS', icon: SiCss3, color: '#264de4' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06b6d4' },
      ]
    },
    {
      title: 'BACKEND',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#68a063' },
        { name: 'Express', icon: SiExpress, color: '#90c53f' },
        { name: 'PHP', icon: SiPhp, color: '#777bb4' },
      ]
    },
    {
      title: 'DATABASE',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: '#13aa52' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'MySQL', icon: SiMysql, color: '#00758f' },
      ]
    },
    {
      title: 'TOOLS & DEVOPS',
      skills: [
        { name: 'Git', icon: SiGit, color: '#f1502f' },
        { name: 'GitHub', icon: SiGithub, color: '#333333' },
        { name: 'Docker', icon: SiDocker, color: '#2496ed' },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-title">My Skillsets</h2>
        
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => {
                const Icon = skill.icon;
                return (
                  <div key={skillIndex} className="skill-card">
                    <div className="skill-icon">
                      <Icon style={{ fontSize: '3rem', color: skill.color }} />
                    </div>
                    <p className="skill-name">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Permanent geometric element */}
        <div className="skills-decoration"></div>
      </div>
    </section>
  );
};

export default Skills;
