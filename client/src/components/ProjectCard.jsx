import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project, isActive = false }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="project-image">
        <div className="image-effect"></div>
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-link">
            GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-link">
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
