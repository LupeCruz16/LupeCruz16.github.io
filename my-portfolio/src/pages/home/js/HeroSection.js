import React, { useState, useEffect } from 'react';
import { headshot } from '../../../assets/Images.js';
import '../css/heroSection.css'

function HeroSection () {
  // Create state to manage hover style for view resume button
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
  
  // Create state for Software Engineer effect
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Trigger the fade-in effect on component mount
  }, []);

  return (
    <div className = "paddingGlobal">
      <div className = "largeContainer">

        <div className = "paddingSectionM-Top"></div>

        <div id = "home">
          <div className = "largeContainer">
            <div className = "heroSection">
              <div className={`heroSection-Left textAlign-Left ${fadeIn ? 'fade-in' : ''}`}>
                <h2 className = "textSizeM">Hello, I'm</h2>
                <h1 className = "textSizeL">Guadalupe Cruz</h1>
                <h2 className = "textSizeM">A Software Engineer</h2>
                <div className = "paddingXS"></div>
                <div className="resumeButton"
                style={linkStyle('resume')}
                onMouseEnter={() => handleMouseEnter('resume')}
                onMouseLeave={handleMouseLeave}>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1mz-kv3cklhquFyz3WkPtWWkQ2pnzbj7t"
                    rel="noopener noreferrer"
                    download
                    className="resumeButtonLink"
                    >
                    <div className="textSizeS textColor-Secondary">View My Resume</div>
                  </a>
                </div>
              </div>
              <div className = "heroSection-Right">
                <div class="heroSection-imageWrapper">
                  <div className = "heroSection-backgroundShape"></div>
                  <img src={headshot} 
                  alt="Guadalupe Cruz"
                  loading = "lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default HeroSection;