import { underlineText } from '../../functions/utils';
import React from 'react';

const ExpereinceOverview = ({ company, role, duration, details }) => {
  const styles = `
    .overview-container {
      display: flex;
      margin-bottom: 8vw;
      position: relative;
      isolation: isolate;
      align-items: center;
      padding: 5vw 0 5vw 0;
      justify-content: center;
    }

    .overview-container::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(
        circle,
        rgba(222, 220, 255, 1) 0%,
        rgba(67, 59, 255, 1) 100%
      );
      z-index: -1;
    }

    .overview-details {
      gap: 30px;
      width: 100%;
      display: flex;
      padding: 20px;
      flex-direction: column;
      align-items: flex-start;
    }

    @media (max-width: 765px) {
      .overview-container .content-grid .grid-1-3-col-container {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 375px) {
      .overview-title {
        padding-left: 20px;
      }
    }
  `;

  return (
    <div className="overview-container full-width">
      {/* Inject CSS styles */}
      <style>{styles}</style>
      <div className="content-grid text-color-bg text-align-left">
        <h2 className="overview-title">Overview:</h2>
        <div className="grid-1-3-col-container" style={{ alignItems: 'start' }}>
          <div className="overview-details">
            <div>
              <p>Company</p>
              <h4>{company}</h4>
            </div>
            <div>
              <p>Role</p>
              <h4>{role}</h4>
            </div>
            <div>
              <p>Duration</p>
              <h4>{duration}</h4>
            </div>
          </div>
          <div className="overview-details">
            {details.map((detail, index) => (
              <p key={index}>{underlineText(detail.text, detail.underline)}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpereinceOverview;
