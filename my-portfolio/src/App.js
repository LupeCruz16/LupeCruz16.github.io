import React, { useState, useEffect } from 'react';
import './App.css';
import './css/constants.css'
import disney from './images/disney.png'
import museum from './images/museum.png'
import concert from './images/taylor_swift_concert.png'
import chatbot from './images/chatbot.png'
import bookez from './images/bookEz.png'
import headshot from './images/headshot.jpg'

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
                  <div className = "paddingSection-L-Bottom">
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

      <footer className = "footerComponent">
        <div className = "paddingGlobal">
          <div className = "largeContainer">

            <div className = "paddingSection-M">
              <div className = "footerTop">

                <div className = "footerLeft">
                  <div className = "textStyleCaption">Available to opportunities</div>
                  <h2>Have a project? Let's talk</h2>
                  <div className = "paddingSection-M-Bottom"></div>
                  <div className = "textsizeM">Say Hello!</div>
                  <a href="mailto:guacruz.16@gmail.com?subject=Let's%20create%20something%20awesome!"
                  className = "footerEmailLink inlineBlockElem">
                    <div class = "textSizeL">guacruz.16@gmail.com</div>
                  </a>
                </div>

                <div className = "footerRight">
                  <div className = "personWrapper">
                    <div className = "footerImageWrapper">
                      <img src = {headshot} 
                      loading = "lazy"
                      className = "footerImage"
                      alt = "Guadalupe"
                      />
                    </div>
                    <div className = "marginLeft margin-M">
                      <div className = "textSizeXL textWeightM textAlign-Left">Guadalupe Cruz</div>
                      <div className = "marginBottom bottomMargin-XS"></div>
                      <div className = "textSizeM textAlign-Left">Software Engineer</div>
                    </div>
                  </div>
                  <div className = "marginBottom bottomMargin-M"></div>
                  <div className = "footerSocialWrapper">
                    <a aria-label= "Github" 
                    href = "https://github.com/LupeCruz16" 
                    target = "_blank" 
                    rel = "noopener noreferrer"
                    className = "footerSocialLink inlineBlockElem">
                      <div className = "footerSocialIcon">
                        <svg aria-hidden="true" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <title>GitHub</title>
                          <path 
                          fill-rule = "evenodd"
                          clip-rule = "evenodd"
                          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.746.084-.729.084-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                          />
                        </svg>
                      </div>
                    </a>
                    <a aria-label= "LinkedIn" 
                    href = "https://www.linkedin.com/in/guadalupe-cruz-a65a31254/" 
                    target = "_blank" 
                    rel = "noopener noreferrer"
                    className = "footerSocialLink inlineBlockElem">
                      <div className = "footerSocialIcon">
                        <svg aria-hidden="true" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>LinkedIn</title>
                        <path 
                        fill-rule = "evenodd"
                        clip-rule = "evenodd"
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.138 1.445-2.138 2.942v5.664H9.351V9h3.414v1.561h.049c.477-0.902 1.635-1.851 3.367-1.851 3.605 0 4.267 2.37 4.267 5.455v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.566V9h3.553v11.452zM22.225 0H1.775C0.792 0 0 .792 0 1.775v20.451C0 23.208.792 24 1.775 24h20.45C23.208 24 24 23.208 24 22.225V1.775C24 .792 23.208 0 22.225 0z"                   
                        />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <div className = "paddingSection-M-Bottom">
              <div className = "footerBottom">
                <div className = "textStyleMuted">© 2023 by Guadalupe Cruz. All rights reserved.</div>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
