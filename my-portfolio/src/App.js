import React, { useState, useEffect } from 'react';
import './App.css';
import './css/constants.css'
import headshotImage from './images/headshot.jpg'
import awsLogo from './images/aws_logo.png'

// Run using:
//cd my-portfolio
//npm start
function App() {
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
    <div className="App">

      <header className="App-header">
        <nav className="Navigation">
          <div className="Nav-links">
            <a 
              href="#aboutMe"
              style={linkStyle('aboutMe')} 
              onMouseEnter={() => handleMouseEnter('aboutMe')} 
              onMouseLeave={handleMouseLeave} 
              >About Me
            </a>
            <a 
              href="#projects" 
              style={linkStyle('projects')} 
              onMouseEnter={() => handleMouseEnter('projects')} 
              onMouseLeave={handleMouseLeave}
              >Projects
            </a>
            <a 
              href="#contact" 
              style={linkStyle('contact')} 
              onMouseEnter={() => handleMouseEnter('contact')} 
              onMouseLeave={handleMouseLeave}
              >Contact
            </a>
          </div>
        </nav>

        <div className = "App-title">
          <h1>Guadalupe Cruz</h1>
          <h2 className={fadeIn ? 'fade-in' : ''}>Software Engineer</h2>
        </div>
        {showArrow && (
          <div className="scroll-arrow">
            ↓
          </div>
        )}
      </header>

      <main className = "App-main">
        <div className = "About-me">
          <div className = "About-me-content">
            <h1>About Me</h1>
            <p>I am a Software Engineering student that has found a passion for programming.</p>
            <p>Currently, my focus is on developing internal tools at SigParser, where I harness the capabilities of Large Language Models (LLMs) to enhance productivity and efficiency.</p>
          </div>
          <div>
            <img src = {headshotImage} alt = "Guadalupes Headshot"></img>
          </div>
        </div>

        <div className = "Projects">
          <div className = "Current-project">
            <h1>Projects</h1>
            <h2>Current Focus</h2>
            <p>Developing internal tools at <strong>SigParser</strong> by harnessing the capabilities of Large Language Models.</p>
            <div className = "Current-project-skills">
              <p>S3</p>
              <p>Lambda</p>
              <p>Langchain</p>
            </div>
          </div>
          <div>
            <img src = {awsLogo} alt = "Current Project" className = "spin-effect"></img>
          </div>
        </div>

        <div className = "Contact">
          <div className = "Contact-content">

          </div>
          <h2>Open to freelance opportunities</h2>
          <p>Have an exciting project idea you need help with?</p>
          <p>Send me an email!</p>

          <p></p>
        </div>
      </main>

      <footer>
        <p>© 2023 by Guadalupe Cruz. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
