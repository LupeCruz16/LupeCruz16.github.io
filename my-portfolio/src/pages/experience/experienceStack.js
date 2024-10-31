import React, { useState, useEffect } from 'react';

const ExperienceStack = ({ title, techStack }) => {
  const [hoverInfo, setHoverInfo] = useState(''); // To display the hover/tap content
  const [selectedTech, setSelectedTech] = useState(null); // To track the selected tech in mobile view
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen is in mobile view (below 768px)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initialize on mount
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = (info) => {
    if (!isMobile) {
      setHoverInfo(info);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoverInfo('');
    }
  };

  const handleTechClick = (tech) => {
    if (isMobile) {
      if (selectedTech === tech) {
        setSelectedTech(null); // Deselect if the same tech is tapped again
        setHoverInfo('');
      } else {
        setSelectedTech(tech);
        setHoverInfo(tech.description);
      }
    }
  };

  return (
    <div className="full-width text-align-left tech-stack-section">
      <style>
        {`
          .tech-stack-section {
            position: relative;
            isolation: isolate;
            padding: 0 5vw 0 5vw;
          }
          
          .tech-stack-title {
            width: 100%;
            padding-bottom: 20px;
          }

          .tech-stack-graphics {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding-bottom: 10vw;
          }

          .tech-stack-graphics div,
          .tech-stack-graphics img {
            flex: 1;
            max-width: 8vw;
            height: auto;
            transition:
              transform 0.3s ease,
              filter 0.3s ease;
          }

          .tech-stack-graphics img {
            max-width: 10vw;
          }

          .hover-info {
            bottom: 80px;
            left: 50%;
            text-align: center;
            transform: translateX(-50%);
            background: var(--accent-200);
            padding: 10px;
            border-radius: 8px;
            z-index: 1;
          }

          @media (min-width: 768px) {
            .hover-info {
              position: absolute;
            }
          }

          @media (max-width: 768px) {
            .tech-stack-graphics {
              gap: 20px;
              margin-bottom: 60px;
              justify-content: center;
            }

            .tech-stack-graphics div {
              max-width: 60px;
            }

            .hover-info {
              position: relative;
            }
          }
        `}
      </style>
      <h2 className="tech-stack-title text-muted">{title}</h2>
      <div className="tech-stack-graphics">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className={`tech-item ${selectedTech === tech ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(tech.description)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleTechClick(tech)} // Handle tap/click event for mobile
          >
            {tech.iconType === 'svg' ? (
              <tech.IconComponent />
            ) : (
              <img src={tech.imageSrc} alt={tech.altText} />
            )}
          </div>
        ))}
      </div>
      {hoverInfo && <p className="hover-info text-color-bg">{hoverInfo}</p>}
    </div>
  );
};

export default ExperienceStack;
