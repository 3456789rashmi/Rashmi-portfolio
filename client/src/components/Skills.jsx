import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiReact, SiJavascript, SiHtml5, SiCss3,
  SiTailwindcss, SiNodedotjs, SiExpress, SiPhp,
  SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiGithub, SiDocker
} from 'react-icons/si';
import skillsetImage from '../assets/image.png';
import '../styles/Skills.css';
import ScrollProgressIndicator from './ScrollProgressIndicator';

const Skills = () => {
  const containerRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollTimeoutRef = useRef(null);

  // Auto-expand when section comes into view
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsExpanded(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Collapse with delay when scrolling
  React.useEffect(() => {
    const handleScroll = () => {
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set new timeout to collapse after 2 seconds of scroll
      scrollTimeoutRef.current = setTimeout(() => {
        setIsExpanded(false);
      }, 2000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // All technologies without categories
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

  // Calculate circular positions for child cards
  const getChildPosition = (index) => {
    const angle = (index / skills.length) * Math.PI * 2;
    const radius = 250; // Distance from center
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
          viewport={{ once: false }}
        >
          <h2 className="skills-title">
            <span className="title-text">My Skillset</span>
          </h2>
          <p className="skills-subtitle">Scroll to see all technologies</p>
        </motion.div>

        {/* Main Skillset Card Container */}
        <div className="skillset-container">
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              // PARENT CARD - Main Skillset
              <motion.div
                key="parent"
                layoutId="skillset-card"
                className="skillset-card main"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 15,
                }}
              >
                <motion.img 
                  src={skillsetImage} 
                  alt="Skillset" 
                  className="skillset-image"
                />
                <motion.h3 className="skillset-title">Skillset</motion.h3>
                <motion.p className="skillset-subtitle-card">
                  {skills.length} Technologies
                </motion.p>
              </motion.div>
            ) : (
              // EXPANDED STATE - Parent + Children
              <motion.div
                key="expanded"
                className="skillset-expanded-container"
              >
                {/* Center Parent Card */}
                <motion.div
                  layoutId="skillset-card"
                  className="skillset-card main center"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.img 
                    src={skillsetImage} 
                    alt="Skillset" 
                    className="skillset-image"
                  />
                  <motion.h3 className="skillset-title">Skillset</motion.h3>
                </motion.div>

                {/* Child Tech Cards - Oozing Out */}
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  const position = getChildPosition(index);
                  
                  return (
                    <motion.div
                      key={skill.name}
                      layoutId={`skill-${index}`}
                      className="skill-card-item"
                      initial={{ 
                        opacity: 0, 
                        scale: 0,
                        x: 0,
                        y: 0,
                      }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        x: position.x,
                        y: position.y,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0,
                        x: 0,
                        y: 0,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 80,
                        damping: 15,
                        delay: index * 0.08,
                      }}
                      whileHover={{
                        scale: 1.1,
                        y: -10,
                      }}
                    >
                      <div 
                        className="skill-card"
                        style={{ '--skill-color': skill.color }}
                      >
                        <div className="skill-icon-wrapper">
                          <Icon className="skill-icon" />
                        </div>
                        <p className="skill-name">{skill.name}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Animated Background Elements */}
        <div className="skills-bg-elements">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>

        {/* Gradient Orbs */}
        <div className="gradient-orbs">
          <div className="orb orb-blue"></div>
          <div className="orb orb-purple"></div>
          <div className="orb orb-green"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
