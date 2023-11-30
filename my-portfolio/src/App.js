import React from 'react';
import './App.css';
import './css/constants.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Navigation bar or menu could go here */}
        <h1>Welcome to My Portfolio</h1>
      </header>
      <main>
        {/* About Me Section */}
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hello! I'm a software engineering student at CSUSM, graduating in Fall 2023. 
            I'm passionate about building software that makes a difference.
          </p>
          {/* Add more personal details and a photo if you like */}
        </section>
        
        {/* Projects Section */}
        <section id="projects">
          <h2>Projects</h2>
          {/* List a few projects here */}
          <div className="project-item">
            <h3>Project Name</h3>
            <p>Short description of the project. What did you build, why, and what tools did you use?</p>
            {/* Add a link to the project or a code repository */}
          </div>
          {/* Repeat for other projects */}
        </section>
        
        {/* Contact Section */}
        <section id="contact">
          <h2>Contact Me</h2>
          <p>You can reach me at my-email@example.com or follow me on GitHub.</p>
          {/* Add a contact form or additional contact details */}
        </section>
      </main>
      <footer>
        {/* Footer content like social media links could go here */}
        <p>© 2023 by Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
