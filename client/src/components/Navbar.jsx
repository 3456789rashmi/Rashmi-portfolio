import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [theme, setTheme] = useState('dark'); // 'dark' or 'light'

  // Set dark theme as default on component mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const handleClick = () => setClick(!click);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setClick(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <img 
          src={logo} 
          alt="Logo" 
          className="navbar-logo" 
          onClick={() => scrollToSection('hero')}
          style={{ cursor: 'pointer' }}
        />

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Menu */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <button className="nav-links" onClick={() => scrollToSection('hero')}>
              Home
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-links" onClick={() => scrollToSection('about')}>
              About Me
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-links" onClick={() => scrollToSection('projects')}>
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-links" onClick={() => scrollToSection('achievements')}>
              Achievements
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-links" onClick={() => scrollToSection('contact')}>
              Contact
            </button>
          </li>

          {/* Theme Toggle - Mobile */}
          <li className="nav-item theme-toggle-mobile">
            <button 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title="Toggle theme"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>

        {/* Theme Toggle - Desktop */}
        <button 
          className="theme-toggle-btn desktop"
          onClick={toggleTheme}
          title="Toggle theme"
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
