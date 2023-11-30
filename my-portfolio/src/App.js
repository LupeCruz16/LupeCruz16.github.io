import React from 'react';
import './App.css';
import './css/constants.css'

// Run using:
//cd my-portfolio
//npm start
function App() {
  return (
    <div className="App">
      <header className="App-header">

      <nav className="Navigation">
        <a href="#home" className="Name-link">Lupe</a>
        <div className="Nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
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
