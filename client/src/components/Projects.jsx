import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const [videoErrors, setVideoErrors] = useState({});

  const projects = [
    {
      id: 1,
      title: 'CertifyChain',
      subtitle: 'Certificate Verification System',
      date: '',
      description: 'A secure platform for issuing and verifying certificates using unique IDs, ensuring authenticity and preventing duplication. Designed with a focus on reliability, real-time validation, and data integrity, making certificate verification seamless and trustworthy.',
      features: [
        'Generated and managed certificates with unique verification IDs',
        'Real-time certificate validation for instant authenticity checks',
        'Maintained verification logs for tracking and auditing',
        'Data integrity and fraud prevention'
      ],
      techStack: ['React', 'PHP', 'MySQL', 'Tailwind CSS'],
      video: 'https://ik.imagekit.io/rashmi05/Project-videos/cerif.mp4',
      github: 'https://github.com/3456789rashmi/certif',
      liveDemo: 'https://certifychain-demo.com',
      layout: 'left'
    },
    {
      id: 2,
      title: 'United Packers',
      subtitle: 'E-Commerce Platform',
      date: '',
      description: 'Built a scalable full-stack logistics platform enabling real-time booking, tracking, and efficient service management for relocation operations. Developed secure REST APIs with JWT authentication and optimized backend performance, reducing manual workload and improving system efficiency.',
      features: [
        'Product catalog with real-time inventory tracking',
        'Secure payment gateway integration',
        'Order management and tracking system',
        'User-friendly wholesale dashboard'
      ],
      techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
      video: 'https://ik.imagekit.io/rashmi05/Project-videos/unitedpackers.mp4',
      github: 'https://github.com/3456789rashmi/CustomerCareService',
      liveDemo: 'https://unitedpackers-one.onrender.com/',
      layout: 'right'
    },
    {
      id: 3,
      title: 'Hospital Management System',
      subtitle: 'MediCare – Hospital Management App',
      date: '',
      description: 'Developed a full-stack hospital management system for patient records, appointment scheduling, and billing operations. Built secure RESTful APIs with role-based access control (RBAC), ensuring efficient data handling and system modularity.',
      features: [
        'Patient record management and tracking',
        'Appointment scheduling system',
        'Billing and payment processing',
        'Role-based access control (RBAC)'
      ],
      techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
      video: 'https://ik.imagekit.io/rashmi05/Project-videos/hospital.mp4',
      github: 'https://github.com/3456789rashmi/Hospital_management_mern',
      liveDemo: 'https://hospital-management-system-ashy.vercel.app/',
      layout: 'left'
    },
    {
      id: 4,
      title: 'Bubble Game',
      subtitle: 'Interactive Bubble Shooter Game',
      date: '',
      description: 'An engaging interactive game featuring bubble-popping mechanics with smooth animations and responsive controls. Built with modern web technologies to deliver a fun, fast-paced gaming experience with intuitive gameplay and challenging levels.',
      features: [
        'Interactive bubble-popping gameplay',
        'Real-time score tracking',
        'Smooth animations and transitions',
        'Responsive design for all devices'
      ],
      techStack: ['React', 'JavaScript', 'HTML5', 'CSS3'],
      video: 'https://ik.imagekit.io/rashmi05/Project-videos/bubblegame.mp4?updatedAt=1774353445413',
      github: 'https://github.com/3456789rashmi/bubble-game',
      liveDemo: 'https://bubble-game-rho-eight.vercel.app/',
      layout: 'right'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-item layout-${project.layout}`}>
              {/* Video Section */}
              <div className="project-video">
                <div className="video-wrapper">
                  {videoErrors[project.id] ? (
                    <div className="video-error-placeholder">
                      <div className="error-content">
                        <p>📹 Video not available</p>
                        <p className="error-url">{project.video}</p>
                      </div>
                    </div>
                  ) : (
                    <video
                      src={project.video}
                      controls
                      autoPlay
                      muted
                      loop
                      className="video-element"
                      onError={() => setVideoErrors(prev => ({ ...prev, [project.id]: true }))}
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </div>

              {/* Description Section */}
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title-name">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-date">{project.date}</p>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="project-tech">
                  <h4 className="tech-title">🛠 Tech Stack</h4>
                  <div className="tech-tags">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="project-links">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                    <FaGithub /> GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Permanent geometric elements */}
      <div className="projects-decoration"></div>
    </section>
  );
};

export default Projects;
