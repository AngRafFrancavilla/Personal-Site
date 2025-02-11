import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
      <h1><strong>Ciao, sono Angelo Raffaele Francavilla</strong></h1>
        <p><strong>Software Engineer · Sviluppatore Web</strong></p>
        <a href="#contact" className="cta-button">Contattami</a>
      </div>
    </section>
  );
};

export default Hero;