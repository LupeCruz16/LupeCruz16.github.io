import { ai, webDevelopment, zettler } from '../../assets/Animations.js';
import useHoverScale from '../../effects/useHoverScale.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import './experience.css';

const projectsData = [
  {
    id: 1,
    link: '/sigparser',
    title: 'Software Engineer',
    company: 'The ZETTLER Group',
    duration: '2024-Present',
    skills: ['React', 'Web Development', 'Embedded Systems'],
    animation: zettler,
  },
  {
    id: 2,
    link: '/sigparser',
    title: 'AI Integrations',
    company: 'SigParser',
    duration: '2023-2024',
    skills: ['AWS', 'React', 'Webscraping'],
    animation: ai,
  },
  {
    id: 3,
    link: '/s3',
    title: 'Wordpress Redesign',
    company: 'S3 Coffee Bar',
    duration: 'Completed in 2023',
    skills: ['Design', 'Freelance', 'Small Business'],
    animation: webDevelopment,
  },
];

const Expereince = () => {
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
    // home-scroll-section class used for scrolling on home page
    <div className="full-width home-scroll-section" id="experience">
      <div className="projects-section">
        <div className="projects-section-title text-m">Experience</div>
        <div className="project-layout">
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
                <p>
                  <span>{currentProjectIndex + 1}</span>/
                  <span className="text-muted">{projectsData.length}</span>
                </p>
                <Link
                  to={currentProject.link}
                  className="project-specifics-row link-styles"
                >
                  <h2>{currentProject.title}</h2>
                </Link>
                <Link
                  to={currentProject.link}
                  className="project-specifics-row text-muted link-styles"
                >
                  <p>
                    {currentProject.company
                      ? `${currentProject.company} | `
                      : ''}
                    {currentProject.duration}
                  </p>
                </Link>
                <ul style={{ listStyleType: 'circle', paddingLeft: '40px' }}>
                  <li>{currentProject.skills[0]}</li>
                  <li>{currentProject.skills[1]}</li>
                  <li>{currentProject.skills[2]}</li>
                </ul>
              </div>
              <Link
                to={currentProject.link}
                className="project-eye-catcher-container link-styles"
              >
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: currentProject.animation,
                    rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
                  }}
                />
              </Link>
            </div>
          </div>

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

export default Expereince;
