import useMobileView from '../../functions/useMobileView.js';
import useHoverScale from '../../effects/useHoverScale.js';
import resume from '../../assets/resume/Resume.pdf';
import { useState } from 'react';
import './navigation.css';
import {
  PersonalLogoSVG,
  HamburgerMenuSVGIcon,
  CloseSVGIcon,
} from '../../assets/SVGs.js';

function Navigation() {
  const { handleMouseEnter, handleMouseLeave, getScaleStyle } = useHoverScale();
  const isMobileView = useMobileView();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after scrolling
    }
  };

  return (
    <header className="primary-header content-grid">
      <div className="primary-header_layout breakout">
        {!isMobileView && (
          <div className="nav-left">
            <div
              className="personal-logo-wapper"
              onClick={() => scrollToSection('hero')}
            >
              <PersonalLogoSVG />
            </div>
          </div>
        )}

        <div>
          {isMobileView ? (
            <div className="hamburgerSVGWrapper" onClick={toggleMobileMenu}>
              <HamburgerMenuSVGIcon
                className={`line ${isMobileMenuOpen ? 'active' : ''}`}
              />
            </div>
          ) : (
            <div className="nav-links-right">
              <div className="nav-link" onClick={() => scrollToSection('hero')}>
                Home
              </div>
              <div
                className="nav-link"
                onClick={() => scrollToSection('experience')}
              >
                Experience
              </div>
              <div
                className="nav-link"
                onClick={() => scrollToSection('about')}
              >
                About Me
              </div>
              <div
                onClick={() => scrollToSection('contact')}
                className="nav-link"
              >
                Get in Touch
              </div>
              <div
                className="global-bttn"
                style={{
                  ...getScaleStyle('resume'),
                  padding: '0.3rem 1rem',
                }}
                onMouseEnter={() => handleMouseEnter('resume')}
                onMouseLeave={handleMouseLeave}
              >
                <a href={resume} download="Guadalupes_Resume.pdf" className="">
                  <p>Download Resume</p>
                </a>
              </div>
            </div>
          )}

          {isMobileMenuOpen && (
            <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
              <div className="mobile-menu-links">
                <div className="close-nav-svg-wrapper">
                  <CloseSVGIcon onClick={closeMobileMenu} />
                </div>
                <div
                  className="nav-link"
                  onClick={() => scrollToSection('hero')}
                >
                  Home
                </div>
                <div
                  className="nav-link"
                  onClick={() => scrollToSection('experience')}
                >
                  Experience
                </div>
                <div
                  className="nav-link"
                  onClick={() => scrollToSection('about')}
                >
                  About Me
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navigation;
