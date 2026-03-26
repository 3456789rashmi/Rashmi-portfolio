import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  // All technologies
  const skills = [
    { name: 'React', icon: SiReact, color: '#61dafb' },
    { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
    { name: 'HTML', icon: SiHtml5, color: '#e34c26' },
    { name: 'CSS', icon: SiCss3, color: '#264de4' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06b6d4' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#68a063' },
    { name: 'Express', icon: SiExpress, color: '#90c53f' },
    { name: 'PHP', icon: SiPhp, color: '#777bb4' },
    { name: 'MongoDB', icon: SiMongodb, color: '#13aa52' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'MySQL', icon: SiMysql, color: '#00758f' },
    { name: 'Git', icon: SiGit, color: '#f1502f' },
    { name: 'GitHub', icon: SiGithub, color: '#333333' },
    { name: 'Docker', icon: SiDocker, color: '#2496ed' },
  ];

  // Calculate circular positions for orbiting skills
  const getOrbitPosition = (index) => {
    const angle = (index / skills.length) * Math.PI * 2;
    const radius = 280;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y, angle };
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
          viewport={{ once: false }}
        >
          <h2 className="skills-title">
            <span className="title-text">My Tech Galaxy</span>
          </h2>
          <p className="skills-subtitle">Hover to slow orbits • Click to explore</p>
        </motion.div>

        {/* Skill Galaxy Container */}
        <div className="skillset-container">
          <svg className="orbital-paths" viewBox="-350 -350 700 700">
            <circle cx="0" cy="0" r="280" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" />
          </svg>

          <AnimatePresence mode="wait">
            {!selectedSkill ? (
              <motion.div
                key="galaxy"
                className="skill-galaxy"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Center Avatar */}
                <motion.div
                  className="galaxy-center"
                  whileHover={{ scale: 1.08 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 20,
                  }}
                >
                  <img src={pic3} alt="You" className="center-image" />
                  <div className="center-glow"></div>
                </motion.div>

                {/* Orbiting Skills */}
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  const position = getOrbitPosition(index);
                  
                  return (
                    <motion.div
                      key={skill.name}
                      className="orbital-skill-wrapper"
                      animate={{
                        x: isHovering ? position.x * 0.7 : position.x,
                        y: isHovering ? position.y * 0.7 : position.y,
                      }}
                      transition={{
                        duration: isHovering ? 0.8 : 40,
                        ease: isHovering ? 'easeOut' : 'linear',
                        repeat: isHovering ? 0 : Infinity,
                      }}
                      style={{
                        '--orbit-angle': `${position.angle}rad`,
                      }}
                    >
                      <motion.button
                        className="skill-planet"
                        style={{ '--skill-color': skill.color }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedSkill(skill)}
                        onTouchStart={() => setSelectedSkill(skill)}
                      >
                        <div className="planet-glow"></div>
                        <Icon className="planet-icon" />
                      </motion.button>
                      <motion.div
                        className="skill-label"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovering ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill.name}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              // Skill Detail View
              <motion.div
                key="detail"
                className="skill-detail-view"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  className="detail-close-btn"
                  onClick={() => setSelectedSkill(null)}
                >
                  ✕
                </button>
                <motion.div
                  className="detail-content"
                  layoutId={`skill-${selectedSkill.name}`}
                >
                  <div
                    className="detail-icon"
                    style={{ '--skill-color': selectedSkill.color }}
                  >
                    <selectedSkill.icon className="detail-large-icon" />
                  </div>
                  <h3 className="detail-title">{selectedSkill.name}</h3>
                  <p className="detail-text">Expert in {selectedSkill.name} development</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
