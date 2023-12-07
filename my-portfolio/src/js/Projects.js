import { chatbot, bookez, roamReady } from './images.js';
import '../css/constants.css'
import '../css/common.css'
import '../css/projects.css'

function Projects () {

    return (
        <div id = "projects" className = "projectsSection">
          <div className = "paddingSection-M">
              <div className = "paddingGlobal">
                <div className= "largeContainer">
                  <div className = "projectsComponent">

                    <div className = "projectsContent-Top bottomMarginL">
                      <h2 className = "textSizeM textAlign-Left">Projects</h2>
                    </div>

                    <div className = "projectsContent-Bottom marginLeft-S">
                      <div className = "projectColumn">
                        <div className = "projectImageWrapper">
                          <img src = {chatbot} 
                          loading = "lazy"
                          className = "projectImage"
                          alt = "AI Chatbot"
                          />
                        </div>
                        <p className = "projectText textSizeS textAlign-Left">
                          AI Tools
                          <br></br>
                            Developing internal system tools for Sigparser.
                        </p>
                        <div className = "projectsSkillsSection">
                          <button 
                          className = "skillButton"
                          >
                          <div className = "textColor-Secondary textAlign-Left textSizeXS">Python</div>
                          </button>
                          <button 
                          className = "skillButton"
                          >
                          <div className = "textColor-Secondary textAlign-Left textSizeXS">AWS</div>
                          </button>
                        </div>
                      </div>
                      
                      <div className = "projectColumn">
                        <div className = "projectImageWrapper">
                          <img src = {roamReady} 
                          loading = "lazy"
                          className = "projectImage"
                          alt = "Roam Ready"
                          />
                        </div>
                        <p className = "projectText textSizeS textAlign-Left">
                          Roam Ready
                          <br></br>
                          Designed to make choosing a new travel location easier.
                        </p>
                        <div className = "projectsSkillsSection">
                          <button 
                          className = "skillButton"
                          >
                          <div className = "textColor-Secondary textAlign-Left textSizeXS">PHP</div>
                          </button>
                          <button 
                          className = "skillButton"
                          >
                          <div className = "textColor-Secondary textAlign-Left textSizeXS">SQL</div>
                          </button>
                          <div class="svgIcon">
                            <a href="https://github.com/LupeCruz16/RoamReady" target="_blank" rel="noopener noreferrer">
                              <svg 
                              aria-hidden="true" 
                              role="img" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                              className = "projectIconStyling"
                              >
                                <title>GitHub</title>
                                <path 
                                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.746.084-.729.084-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className = "projectColumn">
                        <div className = "projectImageWrapper">
                          <img src = {bookez} 
                          loading = "lazy"
                          className = "projectImage"
                          alt = "BookEz"
                          />
                        </div>
                        <p className = "projectText textSizeS textAlign-Left">
                          BookEz
                          <br></br>
                          Bookkeeping management tool for eBay sellers.
                        </p>
                        <div className = "projectsSkillsSection">
                          <button 
                          className = "skillButton"
                          >
                          <div className = "textColor-Secondary textAlign-Left textSizeXS">Java</div>
                          </button>
                          <button 
                          className = "skillButton"
                          >
                          <div className = "textColor-Secondary textAlign-Left textSizeXS">Apache PDF Box</div>
                          </button>
                          <div class="svgIcon">
                            <a href="https://github.com/LupeCruz16/BookEz" target="_blank" rel="noopener noreferrer">
                              <svg 
                              aria-hidden="true" 
                              role="img" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                              className = "projectIconStyling"
                              >
                                <title>GitHub</title>
                                <path 
                                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.746.084-.729.084-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                  
                    </div>
                    <div className = "paddingS"></div>
                  </div>
                </div>
              </div>   
          </div>
        </div>
    )
}

export default Projects