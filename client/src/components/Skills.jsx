import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiJavascript, SiHtml5, SiCss3,
  SiTailwindcss, SiNodedotjs, SiExpress, SiPhp,
  SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiGithub, SiDocker
} from 'react-icons/si';
import pic3 from '../assets/pic3.png';
import '../styles/Skills.css';
import ScrollProgressIndicator from './ScrollProgressIndicator';

const Skills = () => {
  const containerRef = useRef(null);

  // All technologies
  const skills = [
    { name: 'React', icon: SiReact, color: '#61dafb', category: 'Frontend' },
    { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', category: 'Language' },
    { name: 'HTML', icon: SiHtml5, color: '#e34c26', category: 'Frontend' },
    { name: 'CSS', icon: SiCss3, color: '#264de4', category: 'Frontend' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06b6d4', category: 'Frontend' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#68a063', category: 'Backend' },
    { name: 'Express', icon: SiExpress, color: '#90c53f', category: 'Backend' },
    { name: 'PHP', icon: SiPhp, color: '#777bb4', category: 'Backend' },
    { name: 'MongoDB', icon: SiMongodb, color: '#13aa52', category: 'Database' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', category: 'Database' },
    { name: 'MySQL', icon: SiMysql, color: '#00758f', category: 'Database' },
    { name: 'Git', icon: SiGit, color: '#f1502f', category: 'Tools' },
    { name: 'GitHub', icon: SiGithub, color: '#333333', category: 'Tools' },
    { name: 'Docker', icon: SiDocker, color: '#2496ed', category: 'Tools' },
  ];

  // Calculate circular positions for orbiting skills
  const getOrbitalPosition = (index) => {
    const angle = (index / skills.length) * Math.PI * 2 - Math.PI / 2;
    const radius = 300;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  return (
    <section ref={containerRef} id="skills" className="skills-section">
      <ScrollProgressIndicator />
      
      <div className="skills-container">
        {/* Animated Title */}
        <motion.div 
          className="title-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="skills-title">
            <span className="title-text">My Skillset</span>
          </h2>
          <p className="skills-subtitle">Hover cards to flip · Click for full details</p>
        </motion.div>

        {/* Orbital Cards Container */}
        <div className="orbital-cards-container">
          {/* Parent Card - Center */}
          <motion.div 
            className="parent-skill-card"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: 'spring',
              stiffness: 80,
              damping: 20,
              delay: 0.1
            }}
            viewport={{ once: true }}
            whileHover={{ y: -15 }}
          >
            <div className="parent-card-inner">
              <img src={pic3} alt="Developer" className="parent-avatar" />
              <h3 className="parent-card-title">Full Stack</h3>
              <p className="parent-card-subtitle">Developer</p>
            </div>
          </motion.div>

          {/* Orbital Tech Cards */}
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const position = getOrbitalPosition(index);

            return (
              <motion.div
                key={skill.name}
                className="orbital-tech-card"
                initial={{ 
                  opacity: 0, 
                  x: 0, 
                  y: 0,
                  scale: 0
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: position.x, 
                  y: position.y,
                  scale: 1
                }}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 25,
                  delay: 0.2 + index * 0.06,
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 15px 40px var(--skill-color, rgba(59, 130, 246, 0.4))'
                }}
              >
                <div className="tech-card-inner" style={{ '--skill-color': skill.color }}>
                  <div className="tech-card-icon-wrapper">
                    <Icon className="tech-card-icon" />
                  </div>
                  <h4 className="tech-card-name">{skill.name}</h4>
                  <p className="tech-card-category">{skill.category}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
