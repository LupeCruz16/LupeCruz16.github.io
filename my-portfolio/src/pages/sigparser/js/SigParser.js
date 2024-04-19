import { AmazonSVGIcon, FlaskSVGIcon, ReactSVGIcon, PythonSVGIcon } from "../../../assets/SVGs.js";
import Navigation from "../../../components/navigation/Navigation.js";
import { aiBrainMapping } from "../../../assets/Animations.js";
import useFadeIn from '../../../effects/FadeIn/useFadeIn.js';
import React, { useEffect, useRef, useState } from 'react';
import Footer from "../../../components/footer/Footer.js";
import Lottie from 'react-lottie';
import '../css/sigparser.css'

const HeroSection = () => {
  return (
    <div className = "sigparser-hero-container text-align-left">
      <div className = "grid-1-3-col-container">
        <div className = "text-xs" style={{ paddingTop: '12px' }}>LLM Tool Development</div>
        <div className = "text-m">Enhancing Customer experience  through AI</div>
      </div>
    </div>
  );
};

const ViceSection = () => {
  return (
    <div className = "vice-container">
      <img></img>
      <div className = "text-muted text-s text-align-left">Phase 1: VICE</div>
      <div className = "grid-1-3-col-container text-align-left">
        <div></div>
        <div className = "text-s">Chatbot specifics</div>
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div className = "project-num-hero-container text-align-left">
      <div className = "grid-1-3-col-container">
        <div className = "project-num-details" style={{ paddingTop: '12px' }}>
          <div>
            <div className = "text-xs">Company</div>
            <div className = "text-muted text-s">SigParser</div>
          </div>
          <div>
            <div className = "text-xs">Role</div>
            <div className = "text-muted text-s">Developer</div>
          </div>
          <div>
            <div className = "text-xs">Year</div>
            <div className = "text-muted text-s">2023-2024</div>
          </div>
        </div>
        <div className = "project-num-details text-s">
          <div>
            For my senior capstone project, I had the distinct opportunity to collaborate with SigParser. 
            Over the course of this year-long endeavor, my team and I developed a suite of internal LLM tools 
            designed to enhance operational efficiency and streamline workflows.
          </div>
          <div>
            We adopted a robust <span className = "text-color-sec">CI/CD pipeline</span>, leveraging Amazon Bedrock services to ensure security 
            while optimizing cost-effectiveness. This foundation enabled us to deploy a centralized 
            platform, built with <span className = "text-color-sec">React</span>, that provided SigParser's staff with seamless access to manage and adapt 
            their tools effectively. This project not only honed my technical skills but also reinforced the 
            importance of <span className = "text-color-sec">agile methodologies</span> in real-world software development.
          </div>        
        </div>
      </div>
    </div>
  );
};

const GifSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;  
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAnimatingOut(!entry.isIntersecting && isVisible);
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, [sectionRef, isVisible]);

  return (
    <div ref={sectionRef} className={`gif-section ${isVisible ? 'animate' : ''} ${isAnimatingOut ? 'animate-out' : ''}`}>
      <div className="icon-container">
        {[AmazonSVGIcon, FlaskSVGIcon, ReactSVGIcon, PythonSVGIcon].map((IconComponent, index) => (
          <div key={index} style={{ '--i': index + 1 }}><IconComponent /></div>
        ))}
      </div>
      <Lottie className = "project-num-lottie" options={{ loop: true, autoplay: true, animationData: aiBrainMapping, rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }}} />
    </div>
  );
};

function SigParser () {
  const fadeIn = useFadeIn();

  return (
    <div className= {`${fadeIn ? 'fade-in' : ''}`}>
      <Navigation />
      <div className = "content-grid">
        <HeroSection />
        <OverviewSection />
        <ViceSection />
        <Footer />
      </div> 
    </div>
  );
}

export default SigParser;