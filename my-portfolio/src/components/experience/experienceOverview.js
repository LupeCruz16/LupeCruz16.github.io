import { underlineText } from '../../functions/utils';
import React from 'react';

const ExpereinceOverview = ({ company, role, duration, details }) => {
  return (
    <div id="overview" className="sigparser-overview-container full-width">
      <div className="content-grid text-color-bg text-align-left">
        <h2 className="overview-title">Overview:</h2>
        <div className="grid-1-3-col-container" style={{ alignItems: 'start' }}>
          <div className="sigparser-overview-details">
            <div>
              <p>Company</p>
              <h3>{company}</h3>
            </div>
            <div>
              <p>Role</p>
              <h3>{role}</h3>
            </div>
            <div>
              <p>Duration</p>
              <h3>{duration}</h3>
            </div>
          </div>
          <div className="sigparser-overview-details">
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
