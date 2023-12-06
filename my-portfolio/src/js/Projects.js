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

                    <div className = "projectsContent-Top">
                      <h2 className = "textSizeM textAlign-Left">Projects</h2>
                    </div>
                    <div className = "paddingS"></div>

                    <div className = "projectsContent-Bottom">
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
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>   
          </div>
        </div>
    )
}

export default Projects