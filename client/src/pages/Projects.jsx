import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard.jsx';
import '../styles/Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // TODO: Fetch projects from API
    const mockProjects = [
      {
        id: 1,
        title: 'United Packers - Pro Movers',
        description: '#1 Rated Packers & Movers in India. Professional moving services for local household moves to international relocations with care and precision.',
        image: 'https://via.placeholder.com/400x250',
        tags: ['React', 'Node.js', 'MongoDB', 'Express'],
        github: 'https://github.com',
        demo: 'https://unitedpackers-one.onrender.com/',
      },
      {
        id: 2,
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce application with payment integration and admin dashboard.',
        image: 'https://via.placeholder.com/400x250',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        github: 'https://github.com',
        demo: 'https://example.com',
      },
      {
        id: 3,
        title: 'Task Management App',
        description: 'Collaborative task management tool with real-time updates and team features.',
        image: 'https://via.placeholder.com/400x250',
        tags: ['React', 'Firebase', 'Tailwind CSS'],
        github: 'https://github.com',
        demo: 'https://example.com',
      },
      {
        id: 4,
        title: 'AI Chat Assistant',
        description: 'Intelligent chat application powered by OpenAI API with conversation history.',
        image: 'https://via.placeholder.com/400x250',
        tags: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
        github: 'https://github.com',
        demo: 'https://example.com',
      },
    ];
    setProjects(mockProjects);
  }, []);

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

      <section className="projects-container">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
