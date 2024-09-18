import {
  six,
  museum,
  taylort_swift,
  max,
  zoo,
  cat_display,
  headshot,
} from '../../assets/Images.js';
import useHoverScale from '../../effects/useHoverScale.js';
import useFadeIn from '../../effects/FadeIn/useFadeIn.js';
import Footer from '../../components/footer/Footer.js';
import { arrowDown } from '../../assets/Animations.js';
import resume from '../../assets/resume/Resume.pdf';
import Lottie from 'react-lottie';
import React from 'react';
import './aboutMe.css';

function HeroSection() {
  const { handleMouseEnter, handleMouseLeave, getScaleStyle } = useHoverScale();

  return (
    <div className="breakout">
      <div className="hero-section breakout">
        <div className="text-align-left">
          <div className="text-xs text-muted">About Me</div>
          <div className="text-l spacer">
            Hi, I'm Guadalupe Cruz, Software Engineer.
          </div>
          <div
            className="button-styles"
            style={getScaleStyle('resume')}
            onMouseEnter={() => handleMouseEnter('resume')}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href={resume}
              download="Guadalupes_Resume.pdf"
              className="resume-button-link"
            >
              <div className="text-s text-color-sec">Download My Resume</div>
            </a>
          </div>
        </div>
        <div>
          <div className="heroSection-imageWrapper">
            <div className="heroSection-backgroundShape"></div>
            <img src={headshot} alt="Guadalupe Cruz" loading="lazy" />
          </div>
        </div>
        <div className="about-me-lottie-wrapper">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: arrowDown,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

function BentoBox() {
  return (
    <>
      <div className="text-m bento-title">My Recent Adventures</div>
      <div className="bento-container">
        <div className="bento-image-item large-item">
          <img src={taylort_swift} alt="Concert" />
        </div>
        <div className="bento-image-item">
          <img src={max} alt="Museum" />
        </div>
        <div className="bento-image-item tall-item">
          <img src={zoo} alt="Disney" />
        </div>
        <div className="bento-image-item">
          <img src={cat_display} alt="Concert Repeat" />
        </div>
        <div className="bento-image-item">
          <img src={six} alt="Museum Repeat" />
        </div>
        <div className="bento-image-item large-item">
          <img src={museum} alt="Disney Repeat" />
        </div>
      </div>
    </>
  );
}

function AboutMe() {
  const fadeIn = useFadeIn();

  return (
    <div className={`AboutMe-Page content-grid ${fadeIn ? 'fade-in' : ''}`}>
      <HeroSection />
      <BentoBox />
      <Footer />
    </div>
  );
}

export default AboutMe;
