import { underlineText } from '../../functions/utils';
import React from 'react';

const InfoSection = ({
  title,
  description,
  underlineWords,
  mediaType,
  mediaSrc,
  mediaAlt,
  mediaFirst = true, // Control media placement
}) => {
  return (
    <div className="exp-info full-width">
      <style>
        {`
          .exp-info {
            display: flex;
            flex-direction: column;
            padding-bottom: 10vw;
          }

          .exp-info-container {
            height: 100%;
            padding: 1vw 6vw 1vw 3vw;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .exp-descp-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .exp-media-container .rounded-left {
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
          }

          .exp-media-container .rounded-right {
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
          }

          .exp-media-container video {
            width: 100%;
            height: auto;
            object-fit: cover;
          }

          .exp-media-container img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }

          .underline {
            text-decoration: underline;
          }
        `}
      </style>
      <div
        className={
          mediaFirst
            ? 'grid-1half-1-col-container'
            : 'grid-1-1half-col-container'
        }
      >
        {/* Conditionally render media (video/image) based on mediaType */}
        {mediaFirst && (
          <div className="exp-media-container">
            {mediaType === 'video' ? (
              <video autoPlay loop muted playsInline className="rounded-right">
                <source src={mediaSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={mediaSrc} alt={mediaAlt} className="rounded-right" />
            )}
          </div>
        )}

        {/* Text Content */}
        <article className="text-align-left">
          <div className="exp-info-container">
            <div className="exp-descp-container">
              <h2 className="text-muted">{title}</h2>
              <p>{underlineText(description, underlineWords)}</p>
            </div>
          </div>
        </article>

        {/* Conditionally render media if mediaFirst is false */}
        {!mediaFirst && (
          <div className="exp-media-container">
            {mediaType === 'video' ? (
              <video autoPlay loop muted playsInline className="rounded-left">
                <source src={mediaSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={mediaSrc} alt={mediaAlt} className="rounded-left" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoSection;
