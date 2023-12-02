import React, { useState, useEffect } from 'react';
import './App.css';
import './css/constants.css'
import disney from './images/disney.png'
import museum from './images/museum.png'
import concert from './images/taylor_swift_concert.png'
import chatbot from './images/chatbot.png'
import bookez from './images/bookEz.png'

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
    <div className="App">

      <header className="App-header">
        <nav className={`Navigation ${isSticky ? 'sticky' : ''}`}>
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
            <button 
              href="#resume" 
              className = "Resume-button"
              style={linkStyle('resume')} 
              onMouseEnter={() => handleMouseEnter('resume')} 
              onMouseLeave={handleMouseLeave}
              >Resume
            </button>
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

        <div className = "aboutMeSection">
          <div className = "paddingGlobal">
            <div className = "largeContainer">
              <div className = "paddingSection-M">
                <div className = "aboutMeComponent">

                  <div className = "aboutMeContent">
                    <div className = "aboutMeContent-Left">
                      <h2>About Me</h2>
                    </div>

                    <div className = "aboutMeContent-Right">
                      <p className = "textSizeL">Hi there, I am Lupe! When I am not at my computer I am at my computer watching anime.
                        <br></br>
                        <br></br>
                        Or I am on another adventure with my girlfriend.
                      </p>
                      <div className = "padding-S"></div>
                      <div className = "marginBottom bottomMargin-XXL"></div>
                    </div>
                  </div>

                  <div class="lifestyleGallery">
                      <div class="imageWrapper">
                        <img src={disney} alt="Disney"/>
                      </div>
                      <div class="imageWrapper">
                        <img src={museum} alt = "Museum"/>
                      </div>
                      <div class="imageWrapper">
                        <img src={concert} alt = "Taylor Swift Concert"/>
                      </div>
                    </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className = "projectsSection">
          <div className = "paddingSection-M">
            <div className = "backgroundColor-Secondary">
              <div className = "paddingGlobal">
                <div className= "largeContainer">
                  <div className= "current-ProjectsComponent">

                    <div className= "current-projectsContent-Left">
                      <h2>Projects</h2>
                      <p className = "textSizeL">
                        My current focus is on developing internal tools for SigParser by utilizing Large Language Models.
                      </p>
                      <div className= "padding-XS"></div>
                      <button className = "skillButton">Python</button>
                      <button className = "skillButton">AWS Bedrock</button>
                    </div>

                    <div className= "current-projectsContent-Right">
                    <div class="imageWrapper">
                        <img src={chatbot} alt="Chatbot"/>
                      </div>
                    </div>

                  </div>
                  <div className = "paddingSection-M-Bottom">
                    <div className = "featured-ProjectsComponent">

                      <div className = "marginBottom bottomMargin-XXL">
                        <div className = "featuredProjectsContent-top">
                          <div className = "textStyleCaption">Featured Projects</div>
                          <div className = "padding-S"></div>
                          <h2>I love exploring programming niches.</h2>
                        </div>
                      </div>

                      <div className = "featuredProjectsContent-bottom">
                        <div className = "featuredProjectsContent-column">
                          <div className = "divBlock4">
                            <img src = {bookez} 
                            loading = "lazy"
                            // sizes = "(max-width: 479px) 100vw, (max-width: 767px) 46vw, (max-width: 991px) 44vw, 46vw" 
                            // srcset is used to display multople image sizes ex. img-500png, img-1080.png
                            className = "projectImages"
                            alt = "Project 1"/>
                          </div>
                          <div className = "divBlock3">
                            <div className = "textStyleCaption">RoamReady</div>
                            <p className = "textSizeL">
                              A website designed to make ease of use when choosing a new travel location.
                            </p>
                            <button className = "skillButton">SQL</button>
                          </div>
                        </div>
                        <div className = "featuredProjectsContent-column">
                          <div className = "divBlock">
                            <div className = "textStyleCaption">BookEz</div>
                            <p className = "textSizeL">
                              Bookkeeping management tool for eBay sellers.
                            </p>
                            <button className = "skillButton">Java</button>
                          </div>
                          <div className = "divBlock2">
                            <img src = {bookez} 
                              loading = "lazy"
                              // sizes = "(max-width: 479px) 100vw, (max-width: 767px) 46vw, (max-width: 991px) 44vw, 46vw" 
                              // srcset is used to display multople image sizes ex. img-500png, img-1080.png
                              className = "projectImages"
                              alt = "Project 1"/>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className = "tesimonialsSection">
          <div className = "paddingGlobal">
            <div className = "largeContainer">
              <div className = "paddingSection-M">

                <div className = "marginBottom bottomMargin-XXL">
                  <div className = "maxWidth-M">
                    <div className = "textStyleCaption testimonialsCaption">Testimonials</div>
                  </div>
                </div>

                <div className = "testimonialsComponent">

                  <div className = "testimonial">
                    <p className = "textSizeL">Text</p>
                    <div className = "testimonialClient">
                      <div className = "testimonialImageWrapper">
                        <img src = {disney} 
                        loading = "lazy"
                        class = "testimonialImage"
                        alt = "testimonialClient1"
                        />
                      </div>
                      <div className = "testimonialClientDetails">
                        <div className = "textSizeM">Text</div>
                        <div className = "textStyleMuted">Text</div>
                      </div>
                    </div>
                  </div>

                  <div className = "testimonial">
                    <p className = "textSizeL">Text</p>
                    <div className = "testimonialClient">
                      <div className = "testimonialImageWrapper">
                        <img src = {museum} 
                        loading = "lazy"
                        class = "testimonialImage"
                        alt = "testimonialClient1"
                        />
                      </div>
                      <div className = "testimonialClientDetails">
                        <div className = "textSizeM">Text</div>
                        <div className = "textStyleMuted">Text</div>
                      </div>
                    </div>
                  </div>

                  <div className = "testimonial">
                    <p className = "textSizeL">Text</p>
                    <div className = "testimonialClient">
                      <div className = "testimonialImageWrapper">
                        <img src = {concert} 
                        loading = "lazy"
                        class = "testimonialImage"
                        alt = "testimonialClient1"
                        />
                      </div>
                      <div className = "testimonialClientDetails">
                        <div className = "textSizeM">Text</div>
                        <div className = "textStyleMuted">Text</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <p>© 2023 by Guadalupe Cruz. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
