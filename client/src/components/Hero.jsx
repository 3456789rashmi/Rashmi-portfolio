import React, { useState, useEffect, useRef, useMemo } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import gsap from 'gsap';
import '../styles/Hero.css';
import Mycv from '../assets/Mycv.pdf';
import HelixBackground from './HelixBackground';
import RashmiImage from '../assets/Rashmi.jpeg';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollTilt, setScrollTilt] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const cardRef = useRef(null);
  const nameRef = useRef(null);
  
  const roles = useMemo(() => [
    "Creative Full Stack Web Developer",
    "Enthusiastic Developer",
    "Senior Executive of Spark"
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles]);

  // 3D Name Reveal Animation
  useEffect(() => {
    if (nameRef.current) {
      // Reset initial state
      gsap.set(nameRef.current, {
        opacity: 0.3,
        z: -150,
        filter: "blur(8px)"
      });

      // Animate to final state
      gsap.to(nameRef.current, {
        opacity: 1,
        z: 0,
        filter: "blur(0px)",
        duration: 1.4,
        ease: "power3.out",
        delay: 0.2
      });
    }
  }, []);

  // 3D Card Load Animation with full rotation
  useEffect(() => {
    if (cardRef.current) {
      // Add rotating class for the initial animation
      cardRef.current.classList.add('rotating');
      
      // After rotation completes, add loaded class for smooth mouse tracking
      const timeout = setTimeout(() => {
        if (cardRef.current) {
          cardRef.current.classList.remove('rotating');
          cardRef.current.classList.add('loaded');
        }
      }, 1500); // Match animation duration
      
      return () => clearTimeout(timeout);
    }
  }, []);

  // Mouse tracking for 3D effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current || isExpanded) return;

      const card = cardRef.current;
      const x = (window.innerWidth / 2 - e.clientX) / 25;
      const y = (window.innerHeight / 2 - e.clientY) / 25;

      card.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
    };

    const handleMouseLeave = () => {
      if (cardRef.current && !isExpanded) {
        cardRef.current.style.transform = `perspective(1000px) rotateY(${scrollTilt.x}deg) rotateX(${scrollTilt.y}deg)`;
        cardRef.current.classList.add('loaded');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isExpanded, scrollTilt]);

  // Scroll-based tilting effect
  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current || isExpanded) return;

      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;
      
      // Calculate tilt based on scroll
      const tiltX = (scrollY / maxScroll) * 15;
      const tiltY = (scrollY / maxScroll) * -10;
      
      setScrollTilt({ x: tiltX, y: tiltY });
      cardRef.current.style.transform = `perspective(1000px) rotateY(${tiltY}deg) rotateX(${tiltX}deg)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isExpanded]);

  // Particle generation on expansion
  useEffect(() => {
    if (isExpanded) {
      const particleCount = 12;
      const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
        id: i,
        angle: (i / particleCount) * Math.PI * 2,
        distance: 80 + Math.random() * 40,
        delay: Math.random() * 0.2,
      }));
      setParticles(newParticles);

      // Clear particles after animation completes
      const timer = setTimeout(() => setParticles([]), 1500);
      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

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
      <HelixBackground />
      <div className="hero-container">
        {/* Left Side - Text Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Hello, I'm <br />
            <span className="highlight" ref={nameRef}>Rashmi Sharma</span>
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
          <div 
            className={`code-snippet ${isExpanded ? 'expanded' : ''}`}
            ref={cardRef}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            {!isExpanded ? (
              <>
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
              </>
            ) : (
              <div className="card-details">
                {/* Particle dots */}
                {particles.map((particle) => (
                  <div
                    key={particle.id}
                    className="particle-dot"
                    style={{
                      '--tx': `${Math.cos(particle.angle) * particle.distance}px`,
                      '--ty': `${Math.sin(particle.angle) * particle.distance}px`,
                      animationDelay: `${particle.delay}s`,
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                ))}
                <div className="profile-image-wrapper" onClick={() => setIsExpanded(false)}>
                  <img src={RashmiImage} alt="Rashmi Sharma" className="profile-image-card" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
