import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Angelo Raffaele Francavilla. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer;