import React from 'react';
import Lottie from 'react-lottie';

const ExperienceMobile = ({ toggleModal, projectsData }) => {
  return (
    <div
      className="experience-mobile-container text-align-left"
      id="experience"
    >
      <h2 className="experience-mobile-title">Experience</h2>
      {projectsData.map((project) => (
        <div key={project.id} className="experience-mobile-project">
          <h2>{project.title}</h2>
          <p>
            {project.company ? `${project.company} | ` : ''}
            <span style={{ whiteSpace: 'nowrap' }}>{project.duration}</span>
          </p>
          <ul className="exp-skill-list">
            <li>{project.skills[0]}</li>
            <li>{project.skills[1]}</li>
            <li>{project.skills[2]}</li>
          </ul>
          <button
            className="global-bttn"
            onClick={() => toggleModal(project.link, project.title)}
          >
            <p>View Details</p>
          </button>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: project.animation,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ExperienceMobile;
