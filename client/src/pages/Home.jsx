import React from 'react';
import Hero from '../components/Hero.jsx';
import Skills from '../components/Skills.jsx';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Skills />
      <section className="about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I'm Rashmi Sharma, a passionate full-stack MERN enthusiast dedicated to building beautiful and functional
            web applications. As a public speaker and Senior Executive at Club Spark, I combine technical expertise with leadership skills
            to drive innovation and inspire others in the tech community.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h4>50+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h4>30+</h4>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h4>5+</h4>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
