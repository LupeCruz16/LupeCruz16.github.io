import { useState, useEffect } from 'react';
import './scroll.css';

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const sections = ['hero', 'experience', 'about'];
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          // Check if the section is in view
          if (
            rect.top <= viewportHeight / 2 &&
            rect.bottom >= viewportHeight / 2
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-indicator">
      <div className="line">
        <div
          className={`dot dot-1 ${activeSection === 'hero' ? 'active' : ''}`}
          onClick={() =>
            document
              .getElementById('hero')
              .scrollIntoView({ behavior: 'smooth' })
          }
        ></div>
        <div
          className={`dot dot-2 ${activeSection === 'experience' ? 'active' : ''}`}
          onClick={() =>
            document
              .getElementById('experience')
              .scrollIntoView({ behavior: 'smooth' })
          }
        ></div>
        <div
          className={`dot dot-3 ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() =>
            document
              .getElementById('about')
              .scrollIntoView({ behavior: 'smooth' })
          }
        ></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
