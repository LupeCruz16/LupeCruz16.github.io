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

          .exp-media-container {
            width: 100%;
            height: 100%;
            position: relative;
          }

          .exp-media-container .rounded-left {
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
          }

          .exp-media-container .rounded-right {
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
          }

          .exp-media-container video,
          .exp-media-container img {
            width: 100%;
            height: 100%; 
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
          }

          .underline {
            text-decoration: underline;
          }
          
          @media (max-width: 1024px) {
          .exp-info .grid-1half-1-col-container,
          .exp-info .grid-1-1half-col-container {
            grid-template-columns: 1fr;
          }

          .exp-media-container {
            width: 100%;
            height: auto;
            min-height: 350px;
            margin-bottom: 20px;
          }

          .exp-media-container img,
          .exp-media-container video {
            width: 100%;
            height: auto;
            object-fit: cover;
          }

          .exp-media-container .rounded-left {
            border-top-left-radius: 0 !important;
            border-bottom-left-radius: 0 !important;
          }

          .exp-media-container .rounded-right {
            border-top-right-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
          }
        }

        @media (max-width: 425px) {
          .exp-media-container img,
          .exp-media-container video {
            object-fit: contain !important;
          }
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
