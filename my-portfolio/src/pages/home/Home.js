import { ai, educator, webDevelopment } from '../../assets/Animations.js';
import Navigation from "../../components/navigation/Navigation.js";
import useHoverScale from '../../effects/useHoverScale.js';
import useFadeIn from '../../effects/FadeIn/useFadeIn.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import './home.css'; 

const projectsData = [
  {id: 1, link: "/sigparser", title: "AI Integrations", company: "SigParser", 
  duration: "2023-2024", animation: ai},
  {id: 2, link: "/s3", title: "Wordpress Redesign", company: "S3 Coffee Bar", 
  duration: "Completed in 2023", animation: webDevelopment},
  {id: 3, link: "/in-progress", title: "Arduino Lead Educator", company: "Treobytes", 
  duration: "Ongoing since 2023", animation: educator}
];

const Projects = () => {
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
    <div className="full-width">
      <div className="projects-section">
        {/* Navigation for projects */}
        <div className="project-layout">
          <div onClick={() => updateProject(currentProjectIndex > 0 ? currentProjectIndex - 1 : projectsData.length - 1)}
               style={getScaleStyle("prev-text")}
               onMouseEnter={() => handleMouseEnter("prev-text")}
               onMouseLeave={handleMouseLeave}
               className="text-s transition-text">Previous</div>

          {/* Current Project Details */}
          <div className={`current-project text-align-left ${showDetails ? 'show' : ''}`}>
            <div className="current-project-grid">
              <div className="current-project-details">
                <div className="text-s">
                  <span>{currentProjectIndex + 1}</span>/<span className="text-muted">{projectsData.length}</span>
                </div>
                <Link to={currentProject.link} className="project-specifics-row text-m link-styles">
                  {currentProject.title}
                </Link>
                <Link to={currentProject.link} className="project-specifics-row text-s text-muted link-styles">
                  {currentProject.company ? `${currentProject.company} | ` : ''}{currentProject.duration}
                </Link>
              </div>
              <Link to={currentProject.link} className="project-eye-catcher-container link-styles">
                <Lottie options={{ loop: true, autoplay: true, animationData: currentProject.animation, rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }}} />
              </Link>
            </div>
          </div>

          <div onClick={() => updateProject(currentProjectIndex < projectsData.length - 1 ? currentProjectIndex + 1 : 0)}
               style={getScaleStyle("next-text")}
               onMouseEnter={() => handleMouseEnter("next-text")}
               onMouseLeave={handleMouseLeave}
               className="text-s transition-text">Next</div>
        </div>
      </div>
    </div>
  );
};

function Home() {
  const fadeIn = useFadeIn();

  return (
    <div className={`Home-Page ${fadeIn ? 'fade-in' : ''}`}>
      <Navigation />
      <Projects />
    </div>
  );
}

export default Home;