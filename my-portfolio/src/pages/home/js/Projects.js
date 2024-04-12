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
    <div id="projects" className="large-container">
      <div className="projects-section">
        <div className="project-layout">
          {/* Previous Project Text */}
          <div 
            onClick={handlePrevClick} 
            style={getScaleStyle("prev-text")} 
            onMouseEnter={() => handleMouseEnter("prev-text")} 
            onMouseLeave={handleMouseLeave}
            className="text-s transition-text"
          >
            Previous
          </div>

          {/* Project Details, using fade in/out effect */}
          <div className={`current-project text-align-left ${showDetails ? 'show' : ''}`}>
            <div className="current-project-grid">
              <div className="current-project-details">
                {/* Project counter */}
                <div className="text-s">
                  <span>{currentProjectIndex + 1}</span>
                  <span className="text-muted">/</span>
                  <span className="text-muted">{projects.length}</span>
                </div>

                {/* Project title */}
                <div className="project-specifics-row text-m cursor-pointer">
                  {currentProject.title}
                </div>

                {/* Project detail text */}
                <div className="project-specifics-row text-s text-muted cursor-pointer">
                  {/* Company is only displayed if listed */}
                  {currentProject.company && (
                    <>{currentProject.company} | </>
                  )}
                  {currentProject.duration}
                </div>
              </div>

              {/* Project Eye Catcher */}
              <div className="project-eye-catcher-container cursor-pointer">
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: currentProject.animation,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }} 
                />
              </div>
            </div>
          </div>

          {/* Next Project Text */}
          <div 
            onClick={handleNextClick} 
            style={getScaleStyle("next-text")} 
            onMouseEnter={() => handleMouseEnter("next-text")} 
            onMouseLeave={handleMouseLeave}
            className="text-s transition-text"
          >
            Next
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects