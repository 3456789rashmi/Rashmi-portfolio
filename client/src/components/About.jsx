import React from 'react';
import '../styles/About.css';

const About = () => {
  const testimonials = [
    {
      quote: "I don't chase perfection. I build, break, learn, and build again.",
    },
    {
      quote: "I know I'm not successful enough, but I'm passionate enough not to worry about success.",
    },
    {
      quote: "Most of my learning happened after pressing the 'run' button.",
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* About Content */}
        <div className="about-content">
          {/* Photo Section */}
          <div className="about-photo">
            <img src={require('../assets/Rashmi.jpeg')} alt="Rashmi" />
          </div>

          {/* Text Section */}
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hi, I'm Rashmi Sharma, a developer from India who enjoys building things on the internet.
            </p>
            <p>
              I started exploring web development when I was in 12th grade, mostly out of curiosity. Since then, it has turned into something I genuinely enjoy spending time on. I like turning ideas into simple, functional web experiences and experimenting with different ways to design and build them.
            </p>
            <p>
              Most of my time goes into working with React and modern web tools, building side projects, and learning by actually making things. Outside of coding, I enjoy Open-Source contributions, Freelancing, and Graphic Design – anything that lets me create something from scratch.
            </p>
            <p>
              For me, development is less about writing code and more about the process of building, learning, and improving a little every day.
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials">
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-quote">{testimonial.quote}</p>
                {/* <p className="testimonial-author">{testimonial.author}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
