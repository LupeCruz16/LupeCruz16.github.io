import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../css/constants.css'
import '../css/common.css'
import '../css/navigation.css'

function NavigationBar () {
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

  // Create state for arrow effect
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    // Set a timeout to show the arrow after a few seconds
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 2000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <nav className={`Navigation ${isSticky ? 'sticky' : ''}`}>
        <div className="Nav-links">
          <Link
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
              className="navLinks"
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
            className="navLinks"
            style={linkStyle('projects')}
            onMouseEnter={() => handleMouseEnter('projects')}
            onMouseLeave={handleMouseLeave}
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={200}
            className="navLinks"
            style={linkStyle('contact')}
            onMouseEnter={() => handleMouseEnter('contact')}
            onMouseLeave={handleMouseLeave}
          >
            Contact
          </Link>
          <a
            href="https://drive.google.com/uc?export=download&id=1mz-kv3cklhquFyz3WkPtWWkQ2pnzbj7t"
            download
            className="resumeButton"
            style={linkStyle('resume')}
            onMouseEnter={() => handleMouseEnter('resume')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="resumeText">Resume</div>
          </a>
        </div>
      </nav>
      <div className="App-title">
          <h1>Guadalupe Cruz</h1>
          <h2 className={fadeIn ? 'fade-in' : ''}>Software Engineer</h2>
      </div>
      {showArrow && (
        <div className="scroll-arrow">
          ↓
        </div>
      )}
    </>
  )
}

export default NavigationBar;