import { chatbot, bookez, roamReady } from './images.js';
import '../css/constants.css'
import '../css/common.css'
import '../css/projects.css'

function Projects () {

    return (
        <div id = "projects" className = "projectsSection">
          <div className = "paddingSection-M">
            <div className = "backgroundColor-Secondary">
              <div className = "paddingGlobal">
                <div className= "largeContainer">
                  <div className= "current-ProjectsComponent">

                    <div className= "current-projectsContent-Left textAlign-Left">
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
                        <div className = "featuredProjectsContent-top textAlign-Left">
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
                            className = "projectImages"
                            alt = "Project 1"/>
                          </div>
                          <div className = "divBlock3 textAlign-Right">
                            <div className = "textStyleCaption">RoamReady</div>
                            <p className = "textSizeL">
                              A website designed to make ease of use when choosing a new travel location.
                            </p>
                            <button className = "skillButton">SQL</button>
                          </div>
                        </div>
                        <div className = "featuredProjectsContent-column">
                          <div className = "divBlock textAlign-Left">
                            <div className = "textStyleCaption">BookEz</div>
                            <p className = "textSizeL">
                              Bookkeeping management tool for eBay sellers.
                            </p>
                            <button className = "skillButton">Java</button>
                          </div>
                          <div className = "divBlock2">
                            <img src = {roamReady} 
                              loading = "lazy"
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
    )
}

export default Projects