import { chatbot, bookez, roamReady } from '../../../assets/Images.js';
import { GitHubSVGIcon, MoreInformationSVGIcon } from '../../../assets/SVGs.js';
import '../css/projects.css'

/*
  OpenInWindow SVG is not used, this icon is used to open live demos of websites.
*/

function Projects () {

    return (
        <div id = "projects">
          <div className = "paddingSection-M">
              <div className = "paddingGlobal">
                <div className= "largeContainer"> 

                    <div className = "bottomMarginL">
                      <h2 className = "textSizeM textAlign-Left">Projects</h2>
                    </div>

                    <div className = "projectsSection">

                      {/* AI Chatbot and RoamReady */}
                      <div className = "projectRow">

                        <div className = "project">
                          <div className = "projectImageWrapper">
                            <img src = {chatbot} loading = "lazy" className = "projectImage" alt = "AI Chatbot"/>
                          </div>
                          <div className = "projectInfo">
                            <div className = "textSizeS textAlign-Left">AI Customer Support Chatbot</div>
                            <div className = "projectIconsContainer">
                            <MoreInformationSVGIcon href = "/Chatbot"/>                          
                            </div>
                          </div>
                        </div>

                        <div className = "project">
                          <div className = "projectImageWrapper">
                            <img src = {roamReady} loading = "lazy" className = "projectImage" alt = "Roam Ready"/>
                          </div>
                          <div className = "projectInfo">
                            <div className = "textSizeS textAlign-Left">Travel Location Generator</div>
                            <div className = "projectIconsContainer">
                            <GitHubSVGIcon  href = "https://github.com/LupeCruz16/RoamReady" /> 
                            <MoreInformationSVGIcon href = "/RoamReady"/>                           
                            </div>
                          </div>
                        </div>

                      </div> 
                      {/* End of row 1 */}

                      {/* BookEz */}
                      <div className = "projectRow">

                        <div className = "project">
                          <div className = "projectImageWrapper">
                            <img src = {bookez} loading = "lazy" className = "projectImage" alt = "BookEz"/>
                          </div>

                          <div className = "projectInfo">
                            <div className = "textSizeS textAlign-Left">Bookkeeping Mgmt Tool</div>
                            <div className = "projectIconsContainer">
                            <GitHubSVGIcon  href = "https://github.com/LupeCruz16/BookEz" /> 
                            <MoreInformationSVGIcon href = "/BookEz"/>                           
                            </div>
                          </div>
                        </div>

                      </div>
                      {/* End of row 2 */}

                    </div>
                </div>
              </div>   
          </div>
        </div>
    )
}

export default Projects