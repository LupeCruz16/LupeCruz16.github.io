import { GitHubSVGIcon, AISVGIcon, PaperAirplaneSVGIcon, RobotSVGIcon, ProjectArrowSVGIcon } from '../../../assets/SVGs.js';
import { chatbot, roamReady, arduinos } from '../../../assets/Images.js';
import useHoverScale from '../../../effects/useHoverScale.js';
import { useState } from 'react';
import '../css/projects.css'

/*
  OpenInWindow SVG is not used, this icon is used to open live demos of websites.
*/
const projects = [
  {id: 1, projectImgFile: chatbot, imgAlt: "Chatbot", title: "AI Customer Support Chatbot", company: "SigParser", 
   duration: "Ongoing since 2023", feature1: "Github Actions for CI/CD", feature2: "AWS Tool Implementation", 
   feature3: "Webscraping with BeautifulSoup4", feature4: "Comprehensive Testing with TDD", funSVG: <AISVGIcon />},

  {id: 2, projectImgFile: arduinos, imgAlt: "Arduinos", title: "Arduino Lead Educator", 
   company: "Treobytes", duration: "Ongoing since 2023", gitSVG: <GitHubSVGIcon  href = "https://github.com/LupeCruz16/TreobytesSTEMDay2024" classAttributes = "projectIconStyling"/>,
   feature1: "Teaching Programming Fundamentals", feature2: "Problem-Solving Skills Development", 
   feature3: "Algorithmic Thinking and Logic Building", feature4: "Lead a Group of Facilitators", 
   funSVG: <RobotSVGIcon />},

  {id: 3, projectImgFile: roamReady, imgAlt: "RoamReady", title: "Travel Location Generator", duration: "Completed in 2023", 
   gitSVG: <GitHubSVGIcon  href = "https://github.com/LupeCruz16/RoamReady" classAttributes = "projectIconStyling"/>, 
   feature1: "Utilization of HTML, CSS, JS, PHP and SQL", funSVG: <PaperAirplaneSVGIcon />}
];

/*
Project Archive:

Project: BookEz
Deleted ExpensesSVGIcon
{id: 3, projectImgFile: bookez, imgAlt: "BookEz", title: "Java Bookkeeping Application", duration: "Spanning 2022-2023",
  gitSVG: <GitHubSVGIcon  href = "https://github.com/LupeCruz16/BookEz" />, 
  feature1: "Java Build Application", feature2: "Apache PDF Box Implmentation", 
  feature3: "Collaborative Development Across Diverse Teams", funSVG: <ExpensesSVGIcon />}, 

*/

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
                      <div className = "currentProjectBackground paddingSection-M">

                        {/* Left Arrow */}
                        <div className = "projectArrowSVGIcons" onClick={handlePrevClick} style={getScaleStyle("leftArrow")} onMouseEnter={() => handleMouseEnter("leftArrow")} onMouseLeave={handleMouseLeave}>
                          <ProjectArrowSVGIcon />
                        </div>

                        {/* Project Details, using fade in/out effect*/}
                        <div className={`currentProject textAlign-Left textColor-Secondary ${showDetails ? 'show' : ''}`}>
                          <div className = "projectImageWrapper">
                            <img src = {currentProject.projectImgFile} loading = "lazy" className = "projectImage" alt = {currentProject.imgAlt}/>
                          </div>

                          <div className = "currentProjectGrid">
                            <div className = "currentProjectDetails">
                              {/* Project title and SVG Icons */}
                              <div className = "projectSpecificsRow textSizeM">
                                <div>{currentProject.title}</div>

                                {/* Only display icons if listed */}
                                <div className = "projectIconsContainer projectIconStyling">
                                  {currentProject.gitSVG && 
                                    <div className = "projectSVGIcons projectIconStyling">
                                      {currentProject.gitSVG}
                                    </div>
                                  }  
                                  {currentProject.openInWindowSVG && 
                                    <div className = "projectSVGIcons projectIconStyling">
                                      {currentProject.openInWindowSVG}
                                    </div>
                                  }                           
                                </div>
                              </div>

                              {/* Project Detail Text */}
                              <div className = "projectSpecificsRow textSizeS textStyleMuted">

                                {/* Company is only displayed if listed */}
                                {currentProject.company && 
                                  <div>Company: {currentProject.company}   |   </div>
                                }
                                <div>{currentProject.duration}</div>
                              </div>

                              {/* Displaying features in range 1-4 if listed */}
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
                                  {currentProject.feature4 && 
                                    <li>{currentProject.feature4}</li>
                                  }
                                </ul>
                              </div>
                            </div>
                            <div className = "funSVGProjectContainer">
                              <div className = "funSVGProjectIcon projectIconStyling">
                                  {currentProject.funSVG}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Arrow */}
                        <div className = "projectArrowSVGIcons" onClick={handleNextClick} style={getScaleStyle("rightArrow")} onMouseEnter={() => handleMouseEnter("rightArrow")} onMouseLeave={handleMouseLeave}>
                          <ProjectArrowSVGIcon classAttributes = "rightArrow" />
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