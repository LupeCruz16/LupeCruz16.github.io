import { useState, useEffect } from 'react';
import './experience.css';

import ExperienceMobile from './ExperienceMobile.js';
import ExperienceDesktop from './ExperienceDesktop.js';
import { ai, webDevelopment, zettler } from '../../assets/Animations.js';

const projectsData = [
  {
    id: 1,
    link: 'zettler',
    title: 'Software Engineer',
    company: 'The ZETTLER Group',
    duration: '2024-Present',
    skills: ['React', 'Web Development', 'Embedded Systems'],
    animation: zettler,
  },
  {
    id: 2,
    link: 'sigparser',
    title: 'AI Integrations',
    company: 'SigParser',
    duration: '2023-2024',
    skills: ['AWS', 'React', 'Webscraping'],
    animation: ai,
  },
  {
    id: 3,
    link: 's3',
    title: 'Wordpress Redesign',
    company: 'S3 Coffee Bar',
    duration: 'Completed in 2023',
    skills: ['Design', 'Freelance', 'Small Business'],
    animation: webDevelopment,
  },
];

const Expereince = ({ toggleModal }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 426);

  // Handle window resize event to toggle between mobile and desktop
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 426);
  };

  // Set up an event listener for resizing
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <ExperienceMobile
          toggleModal={toggleModal}
          projectsData={projectsData}
        />
      ) : (
        <ExperienceDesktop
          toggleModal={toggleModal}
          projectsData={projectsData}
        />
      )}
    </>
  );
};

export default Expereince;
