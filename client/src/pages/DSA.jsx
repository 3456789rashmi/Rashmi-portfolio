import React from 'react';
import { motion } from 'framer-motion';
import { FaLink } from 'react-icons/fa';
import '../styles/DSA.css';

const DSA = () => {
  const dsaTopics = [
    {
      id: 1,
      title: 'Arrays & Strings',
      icon: '📋',
      description: 'Fundamental data structures for efficient data manipulation',
      problems: '50+',
      color: 'rgba(168, 85, 247, 0.1)',
      borderColor: 'rgba(168, 85, 247, 0.3)',
    },
    {
      id: 2,
      title: 'Hashing & Maps',
      icon: '🔑',
      description: 'Fast lookups and frequency counting techniques',
      problems: '35+',
      color: 'rgba(168, 85, 247, 0.1)',
      borderColor: 'rgba(168, 85, 247, 0.3)',
    },
    {
      id: 3,
      title: 'Stacks & Queues',
      icon: '📚',
      description: 'LIFO and FIFO principles for problem optimization',
      problems: '40+',
      color: 'rgba(6, 182, 212, 0.1)',
      borderColor: 'rgba(6, 182, 212, 0.3)',
    },
    {
      id: 4,
      title: 'Linked Lists',
      icon: '⛓️',
      description: 'Node-based data structure manipulation and algorithms',
      problems: '30+',
      color: 'rgba(6, 182, 212, 0.1)',
      borderColor: 'rgba(6, 182, 212, 0.3)',
    },
    {
      id: 5,
      title: 'Trees & Graphs',
      icon: '🌳',
      description: 'Hierarchical and network structure traversal',
      problems: '60+',
      color: 'rgba(236, 72, 153, 0.1)',
      borderColor: 'rgba(236, 72, 153, 0.3)',
    },
    {
      id: 6,
      title: 'Recursion & Backtracking',
      icon: '🔄',
      description: 'Solving complex problems through divide and conquer',
      problems: '45+',
      color: 'rgba(236, 72, 153, 0.1)',
      borderColor: 'rgba(236, 72, 153, 0.3)',
    },
    {
      id: 7,
      title: 'Greedy Algorithms',
      icon: '⚡',
      description: 'Making locally optimal choices for global solutions',
      problems: '25+',
      color: 'rgba(168, 85, 247, 0.1)',
      borderColor: 'rgba(168, 85, 247, 0.3)',
    },
    {
      id: 8,
      title: 'Dynamic Programming',
      icon: '🎯',
      description: 'Optimal substructure and memoization techniques',
      problems: '55+',
      color: 'rgba(6, 182, 212, 0.1)',
      borderColor: 'rgba(6, 182, 212, 0.3)',
    },
  ];

  const platforms = [
    {
      id: 1,
      name: 'LeetCode',
      url: 'https://leetcode.com/u/2006rash_28605/',
      icon: '💻',
      description: 'Comprehensive problem-solving platform',
      stat: '200+ problems solved',
    },
    {
      id: 2,
      name: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/profile/sharmarasyf7t',
      icon: '📖',
      description: 'DSA articles and practice problems',
      stat: 'Active contributor',
    },
    {
      id: 3,
      name: 'CodeChef',
      url: 'https://www.codechef.com/users/same_breeze_71',
      icon: '🍳',
      description: 'Competitive programming platform',
      stat: 'Contest participant',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="dsa-page">
      {/* Header Section */}
      <section className="dsa-header">
        <motion.div
          className="dsa-header-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Problem Solving & Algorithms</h1>
          <p>Building strong foundations in Data Structures and Algorithms through consistent practice and problem-solving</p>
        </motion.div>
      </section>

      {/* DSA Topics Grid */}
      <section className="dsa-topics-section">
        <div className="dsa-container">
          <motion.div
            className="dsa-topics-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {dsaTopics.map((topic, index) => (
              <motion.div
                key={topic.id}
                className="dsa-card"
                variants={itemVariants}
                style={{
                  background: topic.color,
                  borderColor: topic.borderColor,
                }}
                whileHover={{ translateY: -8, transition: { duration: 0.3 } }}
              >
                <div className="card-icon">{topic.icon}</div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <div className="card-badge">{topic.problems}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Real-world Applications */}
      <section className="dsa-applications">
        <div className="dsa-container">
          <motion.div
            className="applications-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2>Applied in Real-World Projects</h2>
            <div className="applications-list">
              <div className="application-item">
                <span className="checkmark">✓</span>
                <p><strong>Hospital Management System:</strong> Priority-based patient triage algorithm using priority queues for optimal patient care sequencing</p>
              </div>
              <div className="application-item">
                <span className="checkmark">✓</span>
                <p><strong>CertifyChain:</strong> Blockchain certificate verification using hashing algorithms and graph-based certificate networks</p>
              </div>
              <div className="application-item">
                <span className="checkmark">✓</span>
                <p><strong>United Packers:</strong> Route optimization and booking system using greedy algorithms for efficient logistics</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="dsa-platforms">
        <div className="dsa-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Coding Platforms
          </motion.h2>

          <motion.div
            className="platforms-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {platforms.map((platform) => (
              <motion.a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="platform-icon">{platform.icon}</div>
                <h3>{platform.name}</h3>
                <p>{platform.description}</p>
                <div className="platform-stat">{platform.stat}</div>
                <div className="platform-link-icon">
                  <FaLink />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="dsa-stats">
        <div className="dsa-container">
          <motion.div
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div className="stat-card" variants={itemVariants}>
              <div className="stat-number">200+</div>
              <div className="stat-label">Problems Solved</div>
            </motion.div>
            <motion.div className="stat-card" variants={itemVariants}>
              <div className="stat-number">8</div>
              <div className="stat-label">Major Topics</div>
            </motion.div>
            <motion.div className="stat-card" variants={itemVariants}>
              <div className="stat-number">3</div>
              <div className="stat-label">Active Platforms</div>
            </motion.div>
            <motion.div className="stat-card" variants={itemVariants}>
              <div className="stat-number">100%</div>
              <div className="stat-label">Commitment</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Journey Visual */}
      <section className="dsa-journey">
        <div className="dsa-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Your DSA Journey
          </motion.h2>

          <div className="journey-timeline">
            <motion.div
              className="journey-step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
            >
              <div className="step-marker">1</div>
              <div className="step-content">
                <h4>Foundation</h4>
                <p>Arrays, Strings, Hashing</p>
              </div>
            </motion.div>

            <div className="journey-arrow">→</div>

            <motion.div
              className="journey-step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-marker">2</div>
              <div className="step-content">
                <h4>Linear & Non-Linear</h4>
                <p>Lists, Stacks, Queues, Trees</p>
              </div>
            </motion.div>

            <div className="journey-arrow">→</div>

            <motion.div
              className="journey-step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-marker">3</div>
              <div className="step-content">
                <h4>Advanced</h4>
                <p>Graphs, DP, Recursion</p>
              </div>
            </motion.div>

            <div className="journey-arrow">→</div>

            <motion.div
              className="journey-step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="step-marker">4</div>
              <div className="step-content">
                <h4>Expert</h4>
                <p>Optimization & Mastery</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DSA;
