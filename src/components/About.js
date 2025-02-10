import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Chi Sono</h2>
        <p>|| Attualmente frequento un corso ITS presso Apulia Digital Maker per diventare programmatore informatico, un percorso che riflette la mia passione per l'informatica, coltivata sin dall'adolescenza. La mia curiosità personale per i progressi dell'intelligenza artificiale è al centro dei miei interessi e mi porta a testare e informarmi continuamente sulle ultime innovazioni. Parallelamente, approfondisco competenze in linguaggi di programmazione come C#,React.js, React-Native, Java, JavaScript, Python, C++ e tecnologie come Docker e GitHub . Apprezzo particolarmente il lavoro di squadra, dove posso contribuire attivamente a progetti innovativi e affrontare sfide tecnologiche in un ambiente collaborativo. ||</p>
        <a href="/cv.pdf" download className="cv-button">Scarica il mio CV</a>
      </div>
    </section>
  );
};

export default About;