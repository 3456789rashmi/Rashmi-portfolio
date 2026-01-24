import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';
import profileImg from '../assets/Rashmi.jpeg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Text Content - Left Side */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="hero-title">
            Hi, I'm<br />
            <span className="highlight">Rashmi Sharma</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-subtitle">
            Full Stack Enthusiast (MERN)
          </motion.p>

          <motion.div variants={itemVariants} className="hero-description">
            <p>
              Passionate about building scalable web applications using MongoDB, Express, React, and Node.js. 
              A dedicated public speaker and Senior Executive at Club Spark, committed to fostering innovation in the tech community.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-buttons">
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-secondary">Get In Touch</button>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </motion.div>
        </motion.div>

        {/* Image Content - Right Side */}
        <motion.div
          className="hero-image-wrapper"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-image-container">
            <img src={profileImg} alt="Rashmi Sharma" className="hero-profile-img" />
            <div className="image-blur"></div>
          </div>
        </motion.div>
      </div>

      {/* Animated Background Blobs */}
      <div className="hero-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
      </div>
    </section>
  );
};

export default Hero;
