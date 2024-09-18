import useMobileView from '../../functions/useMobileView.js';
import useHoverScale from '../../effects/useHoverScale.js';
import resume from '../../assets/resume/Resume.pdf';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navigation.css';
import {
  PersonalLogoSVG,
  HamburgerMenuSVGIcon,
  CloseSVGIcon,
} from '../../assets/SVGs.js';

function Navigation({ toggleModal }) {
  // Accept toggleModal as a prop
  const { handleMouseEnter, handleMouseLeave, getScaleStyle } = useHoverScale();
  const isMobileView = useMobileView();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="primary-header content-grid">
      <div className="primary-header_layout breakout">
        {!isMobileView && (
          <div className="nav-left">
            <Link to="/">
              <div className="personal-logo-wapper">
                <PersonalLogoSVG />
              </div>
            </Link>
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
              <Link to="/about" className="text-s nav-link">
                About Me
              </Link>
              <div onClick={toggleModal} className="text-s nav-link">
                Contact
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
                  <div className="text-s text-color-sec">Resume</div>
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
                <Link to="/" className="text-s nav-link">
                  gc
                </Link>
                <Link to="/about" className="text-s nav-link">
                  About Me
                </Link>
                <Link to="/contact" className="text-s nav-link">
                  Contact
                </Link>
                <Link to="/resume" className="text-s nav-link">
                  Resume
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navigation;
