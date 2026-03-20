import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import '../styles/Hero.css';
import Mycv from '../assets/Mycv.pdf';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Creative Full Stack Web Developer",
    "Enthusiastic Developer",
    "Senior Executive of Spark"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyCode = () => {
    const code = `class RashmiSharma {
  constructor() {
    this.name = "Rashmi Sharma";
    this.role = "Full Stack Developer";
    this.skills = ["React", "Node.js"];
  }
}`;
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        {/* Left Side - Text Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Hello, I'm <br />
            <span className="highlight">Rashmi Sharma</span>
          </h1>
          
          <div className="hero-role-box">
            <p className="hero-role animate-role">
              {roles[currentRole]}
            </p>
          </div>

          {/* Resume Download */}
          <div className="hero-cta">
            <a href={Mycv} download="Rashmi_Sharma_CV.pdf" className="btn btn-primary">
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a 
              href="https://github.com/3456789rashmi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/rashmi-sharma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://leetcode.com/rashmi_sharma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              title="LeetCode"
            >
              <SiLeetcode />
            </a>
            <a 
              href="mailto:sharmarashmi28605@gmail.com"
              className="social-icon"
              title="Gmail"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right Side - Code Snippet */}
        <div className="hero-code-wrapper">
          <div className="code-snippet">
            <div className="code-header">
              <span className="code-title">RashmiSharma.jsx</span>
              <button 
                className="copy-btn" 
                onClick={handleCopyCode}
                title="Copy code"
              >
                📋
              </button>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="keyword">class</span> 
                <span className="class-name">RashmiSharma</span> 
                <span className="punctuation">{' {'}</span>
              </div>
              <div className="code-line indent-1">
                <span className="keyword">constructor</span>
                <span className="punctuation">() {'{'}</span>
              </div>
              <div className="code-line indent-2">
                <span className="property">this.name</span>
                <span className="operator">=</span>
                <span className="string">"Rashmi Sharma"</span>
                <span className="punctuation">;</span>
              </div>
              <div className="code-line indent-2">
                <span className="property">this.role</span>
                <span className="operator">=</span>
                <span className="string">"Full Stack Developer"</span>
                <span className="punctuation">;</span>
              </div>
              <div className="code-line indent-2">
                <span className="property">this.skills</span>
                <span className="operator">=</span>
                <span className="punctuation">[</span>
                <span className="string">"React"</span>
                <span className="punctuation">,</span>
                <span className="string">"Node.js"</span>
                <span className="punctuation">];</span>
              </div>
              <div className="code-line indent-1">
                <span className="punctuation">{'}'}</span>
              </div>
              <div className="code-line">
                <span className="punctuation">{'}'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
