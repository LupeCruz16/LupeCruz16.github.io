import { chatbot, bookez, roamReady } from '../../../assets/Images.js';
import '../css/projects.css'

function GitHubSVGIcon ({href}) {
  return (
    <div class="projectSVGIcons">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <svg aria-hidden="true" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className = "projectIconStyling">
          <title>GitHub</title>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.746.084-.729.084-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      </a>
    </div>
  );
};

const MoreInformationSVGIcon = ({href}) =>{
  return (
    <div class="projectSVGIcons">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className = "projectIconStyling">
          <title>More Information</title>
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier"> <g> <g> 
          <path d="M256,0C114.837,0,0,114.843,0,256s114.837,256,256,256s256-114.843,256-256S397.163,0,256,0z M289.391,389.565 c0,18.442-14.949,33.391-33.391,33.391s-33.391-14.949-33.391-33.391V222.609c0-18.442,14.949-33.391,33.391-33.391 s33.391,14.949,33.391,33.391V389.565z M256,155.826c-18.442,0-33.391-14.949-33.391-33.391S237.558,89.044,256,89.044 s33.391,14.949,33.391,33.391S274.442,155.826,256,155.826z"></path> </g> </g> </g>
        </svg>
      </a>
    </div>
  )
}

/*

// To be used in case of a live site
function OpenInWindow ({href}) {
  return (
    <div class="projectSVGIcons">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className = "projectIconStyling">
          <title>Visit Site</title>
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier"> 
            <path fill-rule="evenodd" d="M5,2 L7,2 C7.55228475,2 8,2.44771525 8,3 C8,3.51283584 7.61395981,3.93550716 7.11662113,3.99327227 L7,4 L5,4 C4.48716416,4 4.06449284,4.38604019 4.00672773,4.88337887 L4,5 L4,19 C4,19.5128358 4.38604019,19.9355072 4.88337887,19.9932723 L5,20 L19,20 C19.5128358,20 19.9355072,19.6139598 19.9932723,19.1166211 L20,19 L20,17 C20,16.4477153 20.4477153,16 21,16 C21.5128358,16 21.9355072,16.3860402 21.9932723,16.8833789 L22,17 L22,19 C22,20.5976809 20.75108,21.9036609 19.1762728,21.9949073 L19,22 L5,22 C3.40231912,22 2.09633912,20.75108 2.00509269,19.1762728 L2,19 L2,5 C2,3.40231912 3.24891996,2.09633912 4.82372721,2.00509269 L5,2 L7,2 L5,2 Z M21,2 L21.081,2.003 L21.2007258,2.02024007 L21.2007258,2.02024007 L21.3121425,2.04973809 L21.3121425,2.04973809 L21.4232215,2.09367336 L21.5207088,2.14599545 L21.5207088,2.14599545 L21.6167501,2.21278596 L21.7071068,2.29289322 L21.7071068,2.29289322 L21.8036654,2.40469339 L21.8036654,2.40469339 L21.8753288,2.5159379 L21.9063462,2.57690085 L21.9063462,2.57690085 L21.9401141,2.65834962 L21.9401141,2.65834962 L21.9641549,2.73400703 L21.9641549,2.73400703 L21.9930928,2.8819045 L21.9930928,2.8819045 L22,3 L22,3 L22,9 C22,9.55228475 21.5522847,10 21,10 C20.4477153,10 20,9.55228475 20,9 L20,5.414 L13.7071068,11.7071068 C13.3466228,12.0675907 12.7793918,12.0953203 12.3871006,11.7902954 L12.2928932,11.7071068 C11.9324093,11.3466228 11.9046797,10.7793918 12.2097046,10.3871006 L12.2928932,10.2928932 L18.584,4 L15,4 C14.4477153,4 14,3.55228475 14,3 C14,2.44771525 14.4477153,2 15,2 L21,2 Z">
            </path> 
          </g>
        </svg>
      </a>
    </div>
  )
}

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

                    <div className = " projectsSection">

                      {/* AI Chatbot and RoamReady */}
                      <div className = "projectRow">

                        <div className = "project">
                          <div className = "projectImageWrapper">
                            <img src = {chatbot} loading = "lazy" className = "projectImage" alt = "AI Chatbot"/>
                          </div>
                          <div className = "projectInfo">
                            <div className = "textSizeS textAlign-Left">AI Customer Support Chatbot</div>
                            <div className = "projectIconsContainer">
                            <MoreInformationSVGIcon/>                          
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
                            <MoreInformationSVGIcon />                           
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
                            <MoreInformationSVGIcon />                           
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