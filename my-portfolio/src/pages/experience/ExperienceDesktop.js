import useHoverScale from '../../effects/useHoverScale.js';
import React, { useState } from 'react';
import Lottie from 'react-lottie';
import './experience.css';

// Define the breakpoint for non-desktop devices
const isDesktop = window.innerWidth >= 1024;

const ExpereinceDesktop = ({ toggleModal, projectsData }) => {
  const { handleMouseEnter, handleMouseLeave, getScaleStyle } = useHoverScale();
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(true);

  const updateProject = (newIndex) => {
    setShowDetails(false);
    setTimeout(() => {
      setCurrentProjectIndex(newIndex);
      setShowDetails(true);
    }, 500); // Delay to allow opacity transition
  };

  const currentProject = projectsData[currentProjectIndex];

  return (
    <div className="full-width home-scroll-section" id="experience">
      <div className="projects-section">
        <div className="project-layout">
          {/* Previous Button */}
          <div
            onClick={() =>
              updateProject(
                currentProjectIndex > 0
                  ? currentProjectIndex - 1
                  : projectsData.length - 1
              )
            }
            style={getScaleStyle('prev-text')}
            onMouseEnter={() => handleMouseEnter('prev-text')}
            onMouseLeave={handleMouseLeave}
            className="transition-text"
          >
            Previous
          </div>

          {/* Current Project Details */}
          <div
            className={`current-project text-align-left ${showDetails ? 'show' : ''}`}
          >
            <div className="current-project-grid">
              <div className="current-project-details">
                <h2 className="projects-section-title">Experience</h2>
                <p>
                  <span>{currentProjectIndex + 1}</span>/
                  <span className="text-muted">{projectsData.length}</span>
                </p>

                {/* Project Title and Company */}
                {isDesktop ? (
                  <>
                    {/* Content is clickable for desktop */}
                    <div
                      onClick={() =>
                        toggleModal(currentProject.link, currentProject.title)
                      }
                      className="project-specifics-row link-styles"
                    >
                      <h3>{currentProject.title}</h3>
                    </div>
                    <div
                      onClick={() =>
                        toggleModal(currentProject.link, currentProject.title)
                      }
                      className="project-specifics-row text-muted link-styles"
                    >
                      <p>
                        {currentProject.company
                          ? `${currentProject.company} | `
                          : ''}
                        {currentProject.duration}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Content is not clickable for non-desktop */}
                    <div className="project-specifics-row">
                      <h2>{currentProject.title}</h2>
                    </div>
                    <div className="project-specifics-row text-muted">
                      <p>
                        {currentProject.company
                          ? `${currentProject.company} | `
                          : ''}
                        <span style={{ whiteSpace: 'nowrap' }}>
                          {currentProject.duration}
                        </span>
                      </p>
                    </div>
                  </>
                )}

                {/* Skills List */}
                <ul className="exp-skill-list">
                  <li>{currentProject.skills[0]}</li>
                  <li>{currentProject.skills[1]}</li>
                  <li>{currentProject.skills[2]}</li>
                </ul>

                {/* Open Modal Button for non-desktop */}
                {!isDesktop && (
                  <button
                    className="global-bttn"
                    style={{ marginTop: '5px', marginLeft: '40px' }}
                    onClick={() =>
                      toggleModal(currentProject.link, currentProject.title)
                    }
                  >
                    <p>View Details</p>
                  </button>
                )}
              </div>

              {/* Eye-catching Animation */}
              {isDesktop ? (
                <div
                  onClick={() =>
                    toggleModal(currentProject.link, currentProject.title)
                  }
                  className="project-eye-catcher-container link-styles"
                >
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: currentProject.animation,
                      rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice',
                      },
                    }}
                  />
                </div>
              ) : (
                <div className="project-eye-catcher-container">
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: currentProject.animation,
                      rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice',
                      },
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Next Button */}
          <div
            onClick={() =>
              updateProject(
                currentProjectIndex < projectsData.length - 1
                  ? currentProjectIndex + 1
                  : 0
              )
            }
            style={getScaleStyle('next-text')}
            onMouseEnter={() => handleMouseEnter('next-text')}
            onMouseLeave={handleMouseLeave}
            className="transition-text"
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpereinceDesktop;
