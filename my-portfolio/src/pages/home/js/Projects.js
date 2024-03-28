import '../css/projects.css'
import { useState } from 'react';
import Lottie from 'react-lottie';
import useHoverScale from '../../../effects/useHoverScale.js';
import { ai, educator, travel } from '../../../assets/Animations.js'

const projects = [
  {id: 1, title: "Next-Gen LLM Innovations", company: "SigParser", duration: "Ongoing since 2023", animation: ai},

  {id: 2, title: "Arduino Lead Educator", company: "Treobytes", duration: "Ongoing since 2023", animation: educator},

  {id: 3, title: "Travel Location Generator", company: "Personal Project", duration: "Completed in 2023", animation: travel}
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
                                  <div>{currentProject.company}   |   </div>
                                }
                                <div>{currentProject.duration}</div>
                              </div>
                            </div>

                            {/* Project Eye Catcher */}
                            <div className = "projectEyeCatcherContainer">
                              <Lottie 
                                options={{
                                  loop: true,
                                  autoplay: true,
                                  animationData: currentProject.animation,
                                  rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice'
                                  }
                                }} />
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