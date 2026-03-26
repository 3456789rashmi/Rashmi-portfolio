import React, { useState, useEffect } from 'react';
import '../styles/About.css';

const About = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  const journeyItems = [
    {
      tag: "12th Grade · The Beginning",
      title: "Curiosity clicked something",
      description: "Started poking at HTML and CSS out of pure curiosity — no roadmap, no bootcamp. Just a browser and a burning need to know how things worked. That idle habit never really went away.",
      isNow: false
    },
    {
      tag: "First Real Project",
      title: "Breaking things to understand them",
      description: "The first time I pressed 'run' and everything went wrong was the moment I actually started learning. Error messages stopped being scary and started being clues. Still my favourite way to learn.",
      isNow: false
    },
    {
      tag: "React Era",
      title: "Building things that feel alive",
      description: "React changed how I think about UIs — components, state, the flow of data. Spent a lot of late nights rebuilding the same thing five different ways just to really understand it.",
      isNow: false
    },
    {
      tag: "Now",
      title: "Open source, freelancing, and more",
      description: "Contributing to projects I actually use, taking on freelance work, and leaning into graphic design. Anything that lets me create something from scratch — that's the space I want to keep growing in.",
      isNow: true
    }
  ];

  const quote = "For me, development is less about writing code and more about the process of building, learning, and improving a little every day.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.journey-item').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <div className="intro-text">
          <p>
            Hi, I'm Rashmi Sharma, a developer from India who enjoys building things on the internet. This is my journey so far.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="journey-timeline">
          <div className="timeline-line"></div>

          {journeyItems.map((item, index) => (
            <div
              key={index}
              className={`journey-item ${index % 2 === 0 ? 'left' : 'right'} ${visibleItems.includes(index) ? 'visible' : ''}`}
              data-index={index}
            >
              <div className="timeline-dot"></div>
              <div className={`journey-card ${item.isNow ? 'now' : ''}`}>
                <div className="journey-tag">{item.tag}</div>
                <h3 className="journey-title">{item.title}</h3>
                <p className="journey-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Card */}
        <div className="quote-card">
          <div className="quote-mark">"</div>
          <p className="quote-text">{quote}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
