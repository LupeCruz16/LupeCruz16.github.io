import React from 'react';
import './description.css';

function Description({ title, company, duration, description, svg, imageSrc }) {
    return (
        <div className="paddingGlobal">
            <div className="largeContainer paddingSection-M">
                <div className="projectDetailsContainer">

                    <div className='projectDetails'>
                        <div className="textSizeM">{title}</div>
                        <div className="textSizeS textStyleMuted">
                            {/* Display company only if it is provided */}
                            {company && <div>Company: {company}</div>}
                            <div>Duration: {duration}</div>
                        </div>
                        <div className="projectDescription textSizeS">
                            {description}
                        </div>
                    </div>
                    <div className = "proejctSVGContainer">
                        <div className = "projectSVGIcon">
                            {svg}
                        </div>
                    </div>
                </div>
                <div className="projectDetailsImageWrapper">
                    <img src={imageSrc} loading="lazy" className="projectDetailsImage" alt={title}/>
                </div>
            </div>
        </div>
    );
} 

export default Description;
