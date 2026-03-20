import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
