import useFadeIn from '../../effects/FadeIn/useFadeIn.js';
import Footer from '../../components/footer/Footer.js';
import React from 'react';
import './aboutMe.css';

function AboutMe() {
  const fadeIn = useFadeIn();

  return (
    <div
      className={`home-scroll-section content-grid ${fadeIn ? 'fade-in' : ''}`}
      id="about"
    >
      Hellloooo
      <Footer />
    </div>
  );
}

export default AboutMe;
