import React, { useState, useEffect } from 'react';
import { headshot } from './images.js';
import { Link } from 'react-scroll';
import '../css/constants.css'
import '../css/common.css'
import '../css/heroSection.css'

function HeroSection () {
  // Create state to manage hover style for individual links
  const [hoveredLink, setHoveredLink] = React.useState(null);

  // Event handlers for mouse enter and leave
  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  // Function to determine style based on hovered link
  const linkStyle = (link) => ({
    transform: hoveredLink === link ? 'scale(1.1)' : 'none',
    transition: 'transform 0.3s ease',
  });

  //Adding Navigation bar effect
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setSticky(offset > 400);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Create state for Software Engineer effect
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Trigger the fade-in effect on component mount
  }, []);

  return (
    <>
      <nav className={`Navigation paddingGlobal ${isSticky ? 'sticky' : ''}`}>
        <div className="navLinks">
          <div className = "navLinks-Left">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
              className="navLinkElem textSizeS"
              style={linkStyle('gc')}
              onMouseEnter={() => handleMouseEnter('gc')}
              onMouseLeave={handleMouseLeave}
            >
              gc
            </Link>
          </div>

          <div className = "navLinks-right">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
              className="navLinkElem textSizeS"
              style={linkStyle('home')}
              onMouseEnter={() => handleMouseEnter('home')}
              onMouseLeave={handleMouseLeave}
            >
              Home
            </Link>
            <Link
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
              className="navLinkElem textSizeS"
              style={linkStyle('aboutMe')}
              onMouseEnter={() => handleMouseEnter('aboutMe')}
              onMouseLeave={handleMouseLeave}
            >
              About Me
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
              className="navLinkElem textSizeS"
              style={linkStyle('projects')}
              onMouseEnter={() => handleMouseEnter('projects')}
              onMouseLeave={handleMouseLeave}
            >
              Projects
            </Link>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
              className="navLinkElem textSizeS"
              style={linkStyle('testimonials')}
              onMouseEnter={() => handleMouseEnter('testimonials')}
              onMouseLeave={handleMouseLeave}
            >
              Testimonials
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
              className="navLinkElem textSizeS"
              style={linkStyle('contact')}
              onMouseEnter={() => handleMouseEnter('contact')}
              onMouseLeave={handleMouseLeave}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="heroSection paddingGlobal">
          <div className={`heroSection-Left textAlign-Left ${fadeIn ? 'fade-in' : ''}`}>
            <h2 className = "textSizeM">Hello, I'm</h2>
            <h1 className = "textSizeL">Guadalupe Cruz</h1>
            <h2 className = "textSizeM">A Software Engineer</h2>
            <button
              href="https://drive.google.com/uc?export=download&id=1mz-kv3cklhquFyz3WkPtWWkQ2pnzbj7t"
              download
              className="resumeButton"
              style={linkStyle('resume')}
              onMouseEnter={() => handleMouseEnter('resume')}
              onMouseLeave={handleMouseLeave}
              >
              <div className="resumeText textSizeS">View My Resume</div>
            </button>
          </div>
          <div className = "heroSection-Right">
            <div class="imageWrapper">
              <div className = "backgroundShape"></div>
              <img src={headshot} 
              alt="Guadalupe Cruz"
              loading = "lazy"
              />
            </div>
          </div>
      </div>
    </>
    
  )
}

export default HeroSection;