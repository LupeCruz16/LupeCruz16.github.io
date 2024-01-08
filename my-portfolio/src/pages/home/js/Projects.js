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
                      <div className = "projectCard paddingSection-M">

                        {/* Left Arrow */}
                        <div className = "projectArrowSVGIcons">
                          <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#D2DDCD">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> 
                            <g class="st0" id="grid_system"></g> 
                            <g id="_icons"> <g> 
                            <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8 S16.4,20,12,20z"></path> <path d="M13.7,8.3c-0.4-0.4-1-0.4-1.4,0l-3,3c-0.4,0.4-0.4,1,0,1.4l3,3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L11.4,12l2.3-2.3C14.1,9.3,14.1,8.7,13.7,8.3z"></path> </g> </g> </g>
                          </svg>
                        </div>

                        {/* Project Details */}
                        <div className = "currentProject textAlign-Left textColor-Secondary">
                          <div className = "projectImageWrapper">
                            <img src = {chatbot} loading = "lazy" className = "projectImage" alt = "AI Chatbot"/>
                          </div>
                          <div className = "textSizeM">AI Customer Support Chatbot</div>
                          <div className = "textSizeS textStyleMuted">Company: SigParser</div>
                          <div className = "textSizeS textStyleMuted">Ongoing since 2023</div>
                          <div className = "projectIconsContainer">
                            <MoreInformationSVGIcon href = "/Chatbot"/>                          
                          </div>
                        </div>

                        {/* Right Arrow */}
                        <div className = "projectArrowSVGIcons">
                          <svg fill="#D2DDCD" className = "rightArrow" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> 
                            <g class="st0" id="grid_system"></g> 
                            <g id="_icons"> <g> 
                            <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8 S16.4,20,12,20z"></path> <path d="M13.7,8.3c-0.4-0.4-1-0.4-1.4,0l-3,3c-0.4,0.4-0.4,1,0,1.4l3,3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L11.4,12l2.3-2.3C14.1,9.3,14.1,8.7,13.7,8.3z"></path> </g> </g> </g>
                          </svg>
                        </div>
                      </div>


                      {/* AI Chatbot and RoamReady */}
                      {/* <div className = "projectRow">

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

                      {/* BookEz 
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
                      End of row 2 */}

                    </div>
                </div>
              </div>   
          </div>
        </div>
    )
}

export default Projects