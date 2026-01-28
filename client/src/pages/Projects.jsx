import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard.jsx';
import '../styles/Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const triggerRefs = useRef([]);

  useEffect(() => {
    const mockProjects = [
      {
        id: 1,
        title: 'United Packers - Pro Movers',
        description: 'Professional moving services portal. Streamline booking, tracking, and support for household and international relocations.',
        image: require('../assets/unitedpackers.png'),
        tags: ['React', 'Node.js', 'MongoDB', 'Express'],
        github: 'https://github.com/3456789rashmi/CustomerCareService',
        demo: 'https://unitedpackers-one.onrender.com/',
      },
      {
        id: 2,
        title: 'Hospital Management System',
        description: 'Intelligent hospital queue management system with real-time monitoring and patient coordination dashboard.',
        image: require('../assets/hospital.png'),
        tags: ['React', 'Node.js', 'MongoDB', 'Express'],
        github: 'https://github.com/3456789rashmi/Hospital_management_mern',
        demo: 'https://hospital-management-system-ashy.vercel.app/',
      },
      {
        id: 3,
        title: 'CertifyChain',
        description: 'Blockchain-based certificate validation system for secure issuance and verification of digital credentials.',
        image: require('../assets/certifychain.png'),
        tags: ['JavaScript', 'PHP', 'HTML', 'CSS', 'Blockchain'],
        github: 'https://github.com/3456789rashmi/certif',
        demo: 'https://certifychain.rf.gd',
      },
      {
        id: 4,
        title: 'AI Chat Assistant',
        description: 'Intelligent conversational AI powered by OpenAI with context awareness and conversation history management.',
        image: 'https://via.placeholder.com/400x250',
        tags: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
        github: 'https://github.com',
        demo: 'https://example.com',
      },
    ];
    setProjects(mockProjects);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      const container = scrollContainerRef.current;
      const containerTop = container.offsetTop + 100; // Account for sticky header
      const scrollPos = window.scrollY;

      // Calculate which project section the user is viewing
      const relativeScroll = scrollPos - containerTop;
      const projectsPerViewport = Math.floor(relativeScroll / window.innerHeight);
      const newIndex = Math.min(projectsPerViewport, projects.length - 1);

      if (newIndex >= 0 && newIndex < projects.length) {
        setActiveProjectIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

  const activeProject = projects[activeProjectIndex];

  return (
    <div className="projects-page">
      <section className="projects-header">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>My Projects</h1>
          <p>A showcase of my latest work and creative solutions</p>
        </motion.div>
      </section>

      <section className="projects-section" ref={scrollContainerRef}>
        {/* Sticky project display */}
        <div className="projects-sticky-wrapper">
          <div className="projects-showcase">
            {activeProject && (
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.6, ease: 'easeOut', type: 'spring', stiffness: 100, damping: 20 }}
                className="active-project"
              >
                <ProjectCard project={activeProject} isActive={true} />
              </motion.div>
            )}
          </div>

          {/* Project counter */}
          <div className="project-counter">
            <span className="current">{activeProjectIndex + 1}</span>
            <span className="divider">/</span>
            <span className="total">{projects.length}</span>
          </div>
        </div>

        {/* Scroll triggers - invisible but trigger project changes */}
        <div className="projects-triggers">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="trigger"
              ref={(el) => (triggerRefs.current[index] = el)}
              data-index={index}
            >
              <div className="trigger-content">
                <span className="trigger-number">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
