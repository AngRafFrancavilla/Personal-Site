import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contatti</h2>
        <div className="contact-info">
          <p><strong>Email:</strong> francavillaangeloraffaele@gmail.com</p>
          <p>
            <strong>LinkedIn: </strong> 
            <a 
              href="https://linkedin.com/in/angelo-raffaele-francavilla" 
              target="_blank" 
              rel="noopener noreferrer"
            >
               linkedin.com/in/angelo-raffaele-francavilla
            </a>
          </p>
          <p>
            <strong>GitHub: </strong> 
            <a 
              href="https://github.com/AngRafFrancavilla" 
              target="_blank" 
              rel="noopener noreferrer"
            >
               github.com/AngRafFrancavilla
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
