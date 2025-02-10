import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(`Menu ${isMenuOpen ? 'chiuso' : 'aperto'}`);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#home" className="logo">Angelo Raffaele Francavilla</a>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={toggleMenu}>Chi Sono</a>
          <a href="#projects" onClick={toggleMenu}>Progetti</a>
          <a href="#experience" onClick={toggleMenu}>Esperienze</a>
          <a href="#contact" onClick={toggleMenu}>Contatti</a>
        </div>
      <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;