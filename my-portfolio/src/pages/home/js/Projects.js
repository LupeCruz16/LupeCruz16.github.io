import { chatbot, bookez, roamReady } from '../../../assets/Images.js';
import { GitHubSVGIcon } from '../../../assets/SVGs.js';
import useHoverScale from '../../../effects/useHoverScale.js';
import { useState } from 'react';
import '../css/projects.css'

/*
  OpenInWindow SVG is not used, this icon is used to open live demos of websites.
*/
const projects = [
  {id: 1, projectImgFile: chatbot, imgAlt: "Chatbot", title: "AI Customer Support Chatbot", company: "SigParser", 
   duration: "Ongoing since 2023", feature1: "Github Actions for CI/CD", feature2: "AWS Tool Implementation", 
   feature3: "Webscraping with BeautifulSoup4", feature4: "Comprehensive Testing with TDD"},

  {id: 2, projectImgFile: roamReady, imgAlt: "RoamReady", title: "Travel Location Generator", duration: "Completed in 2023", 
   gitSVG: <GitHubSVGIcon  href = "https://github.com/LupeCruz16/RoamReady" />},
   
  {id: 3, projectImgFile: bookez, imgAlt: "BookEz", title: "Java Bookkeeping Application", duration: "Spanning 2022-2023",
   gitSVG: <GitHubSVGIcon  href = "https://github.com/LupeCruz16/BookEz" />}     
];

function Projects () {
  // Hover effect
  const { handleMouseEnter, handleMouseLeave, getScaleStyle } = useHoverScale();
  
  // Starting at beginning of projects array
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // showDetails effect set to true to begin 
  const [showDetails, setShowDetails] = useState(true);

  const updateProject = (newIndex) => {
    setShowDetails(false);
    setTimeout(() => {
      setCurrentProjectIndex(newIndex);
      setShowDetails(true);
    }, 500); // Delay to allow opacity transition
  };

  const handlePrevClick = () => {
    updateProject(currentProjectIndex > 0 ? currentProjectIndex - 1 : projects.length - 1);
  };

  const handleNextClick = () => {
    updateProject(currentProjectIndex < projects.length - 1 ? currentProjectIndex + 1 : 0);
  };

  const currentProject = projects[currentProjectIndex];

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
                        <div className = "projectArrowSVGIcons" onClick={handlePrevClick} style={getScaleStyle("leftArrow")} onMouseEnter={() => handleMouseEnter("leftArrow")} onMouseLeave={handleMouseLeave}>
                          <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#D2DDCD">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> 
                            <g class="st0" id="grid_system"></g> 
                            <g id="_icons"> <g> 
                            <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8 S16.4,20,12,20z"></path> <path d="M13.7,8.3c-0.4-0.4-1-0.4-1.4,0l-3,3c-0.4,0.4-0.4,1,0,1.4l3,3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L11.4,12l2.3-2.3C14.1,9.3,14.1,8.7,13.7,8.3z"></path> </g> </g> </g>
                          </svg>
                        </div>

                        {/* Project Details, using fade in/out effect*/}
                        <div className={`currentProject textAlign-Left textColor-Secondary ${showDetails ? 'show' : ''}`}>
                          <div className = "projectImageWrapper">
                            <img src = {currentProject.projectImgFile} loading = "lazy" className = "projectImage" alt = {currentProject.imgAlt}/>
                          </div>

                          {/* Project title and SVG Icons */}
                          <div className = "projectSpecificsRow textSizeM">
                            <div>{currentProject.title}</div>
                            <div className = "projectIconsContainer">
                              {currentProject.gitSVG}                            
                            </div>
                          </div>

                          {/* Project Detail Text */}
                          <div className = "projectSpecificsRow textSizeS textStyleMuted">
                            {/* Company is only displayed if applicable */}
                            {currentProject.company && 
                              <div>Company: {currentProject.company}   |   </div>
                            }
                            <div>{currentProject.duration}</div>
                          </div>
                          <div className = "textSizeS">
                            {currentProject.feature1 && 
                              <div>Features:</div>
                            }
                            <ul className = "projectFeatures">
                              {currentProject.feature1 && 
                                <li>{currentProject.feature1}</li>
                              }
                              {currentProject.feature2 && 
                                <li>{currentProject.feature2}</li>
                              }
                              {currentProject.feature3 && 
                                <li>{currentProject.feature3}</li>
                              }
                              {currentProject.feature3 && 
                                <li>{currentProject.feature3}</li>
                              }
                            </ul>
                          </div>
                        </div>

                        {/* Right Arrow */}
                        <div className = "projectArrowSVGIcons" onClick={handleNextClick} style={getScaleStyle("rightArrow")} onMouseEnter={() => handleMouseEnter("rightArrow")} onMouseLeave={handleMouseLeave}>
                          <svg fill="#D2DDCD" className = "rightArrow" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> 
                            <g class="st0" id="grid_system"></g> 
                            <g id="_icons"> <g> 
                            <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8 S16.4,20,12,20z"></path> <path d="M13.7,8.3c-0.4-0.4-1-0.4-1.4,0l-3,3c-0.4,0.4-0.4,1,0,1.4l3,3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L11.4,12l2.3-2.3C14.1,9.3,14.1,8.7,13.7,8.3z"></path> </g> </g> </g>
                          </svg>
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