import React from 'react';
import '../styles/Experience.css';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Executive',
      company: 'Club Spark',
      duration: '2023 - Present',
      description: 'Leading initiatives and community engagement, fostering innovation and growth in the tech ecosystem',
      skills: ['Leadership', 'Community Building', 'Event Management', 'Mentoring'],
    },
    {
      id: 2,
      title: 'Full Stack MERN Developer',
      company: 'Freelance/Personal Projects',
      duration: '2020 - Present',
      description: 'Building scalable web applications using MongoDB, Express, React, and Node.js',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript'],
    },
    {
      id: 3,
      title: 'Public Speaker & Tech Advocate',
      company: 'Tech Community',
      duration: '2021 - Present',
      description: 'Sharing knowledge and inspiring developers through speaking engagements and technical presentations',
      skills: ['Communication', 'Technical Expertise', 'Presentation', 'Community Outreach'],
    },
  ];

  return (
    <section className="experience">
      <div className="container">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Experience
        </motion.h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <span className="company">{exp.company}</span>
                <span className="duration">{exp.duration}</span>
              </div>
              <p className="description">{exp.description}</p>
              <div className="skills-list">
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
