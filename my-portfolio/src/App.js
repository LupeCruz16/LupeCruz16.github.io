import React from 'react';
import './App.css';
import './css/constants.css'

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
  return (
    <div className="App">

      <header className="App-header">
        <nav className="Navigation">
          <a 
            href="#home" 
            className="Name-link" 
            style={linkStyle('name')} 
            onMouseEnter={() => handleMouseEnter('name')} 
            onMouseLeave={handleMouseLeave}
            >Guadalupe
          </a>
          <div className="Nav-links">
            <a 
              href="#home"
              style={linkStyle('home')} 
              onMouseEnter={() => handleMouseEnter('home')} 
              onMouseLeave={handleMouseLeave} 
              >Home
            </a>
            <a 
              href="#projects" 
              style={linkStyle('projects')} 
              onMouseEnter={() => handleMouseEnter('projects')} 
              onMouseLeave={handleMouseLeave}
              >Projects
            </a>
            <a 
              href="#experience" 
              style={linkStyle('experience')} 
              onMouseEnter={() => handleMouseEnter('experience')} 
              onMouseLeave={handleMouseLeave}
              >Experience
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
          <h2>Software Engineer</h2>
        </div>
      </header>

      <main className = "App-main">
        
      </main>
      <footer>
        <p>© 2023 by Guadalupe Cruz. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
