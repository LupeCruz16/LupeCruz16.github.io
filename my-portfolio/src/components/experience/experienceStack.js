import React, { useState } from 'react';

const ExperienceStack = ({ title, techStack }) => {
  const [hoverInfo, setHoverInfo] = useState('');

  const handleMouseEnter = (info) => {
    setHoverInfo(info);
  };

  const handleMouseLeave = () => {
    setHoverInfo('');
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
            position: absolute;
            bottom: 6vw;
            left: 50%;
            transform: translateX(-50%);
            background: var(--accent-200);
            padding: 10px;
            border-radius: 8px;
            z-index: 1;
            white-space: nowrap;
          }
        `}
      </style>
      <h2 className="tech-stack-title text-muted">{title}</h2>
      <div className="tech-stack-graphics">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="tech-item"
            onMouseEnter={() => handleMouseEnter(tech.description)}
            onMouseLeave={handleMouseLeave}
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
