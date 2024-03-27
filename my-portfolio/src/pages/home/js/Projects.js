import { GitHubSVGIcon, AISVGIcon, PaperAirplaneSVGIcon, RobotSVGIcon } from '../../../assets/SVGs.js';
import { chatbot, roamReady, arduinos } from '../../../assets/Images.js';
import useHoverScale from '../../../effects/useHoverScale.js';
import { useState } from 'react';
import '../css/projects.css'

const projects = [
  {id: 1, projectImgFile: chatbot, imgAlt: "Chatbot", title: "Next-Gen LLM Innovations", company: "SigParser", 
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
                <div className= "largeContainer"> 

                    <div className = "projectsSection">
                      <div className = "projectLayout">

                        {/* Previous Project Text */}
                        <div onClick={handlePrevClick} style={getScaleStyle("leftArrow")} onMouseEnter={() => handleMouseEnter("leftArrow")} onMouseLeave={handleMouseLeave}>
                          <div className = "textSizeS transitionText">Previous</div>
                        </div>

                        {/* Project Details, using fade in/out effect*/}
                        <div className={`currentProject textAlign-Left ${showDetails ? 'show' : ''}`}>
                          <div className = "projectImageWrapper">
                            {/* <img src = {currentProject.projectImgFile} loading = "lazy" className = "projectImage" alt = {currentProject.imgAlt}/> */}
                          </div>

                          <div className = "currentProjectGrid">
                            <div className = "currentProjectDetails">
                              {/* Project counter */}
                              <div className="textSizeS">
                                <span>{currentProjectIndex + 1}</span>
                                <span className="textStyleMuted">/</span>
                                <span className="textStyleMuted">{projects.length}</span>
                              </div>

                              {/* Project title */}
                              <div className = "projectSpecificsRow textSizeM">
                                <div>{currentProject.title}</div>
                              </div>

                              {/* Project detail text */}
                              <div className = "projectSpecificsRow textSizeS textStyleMuted">

                              {/* Company is only displayed if listed */}
                                {currentProject.company && 
                                  <div>Company: {currentProject.company}   |   </div>
                                }
                                <div>{currentProject.duration}</div>
                              </div>
                            </div>

                            {/* Project Eye Catcher */}
                            <div className = "funSVGProjectContainer">
                              <div className = "funSVGProjectIcon projectIconStyling">
                                  {currentProject.funSVG}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Next Project Text */}
                        <div onClick={handleNextClick} style={getScaleStyle("rightArrow")} onMouseEnter={() => handleMouseEnter("rightArrow")} onMouseLeave={handleMouseLeave}>
                        <div className = "textSizeS transitionText">Next</div>
                        </div>
                      </div>

                    </div>
                </div>
        </div>
    )
}

export default Projects