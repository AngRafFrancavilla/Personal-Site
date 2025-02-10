import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1>Ciao, sono Angelo Raffaele Francavilla</h1>
        <p>Software Engineer · Sviluppatore Web</p>
        <a href="#contact" className="cta-button">Contattami</a>
      </div>
    </section>
  );
};

export default Hero;