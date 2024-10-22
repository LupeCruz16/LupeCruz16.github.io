import { museum, taylor_swift, cat_display } from '../../assets/Images.js';
import React from 'react';
import './aboutMe.css';

function AboutMe() {
  return (
    <section className="home-scroll-section content-grid" id="about">
      <div className="grid-1-1-col-container about-me-container">
        <div className="fun-image-layout">
          <div className="global-circular-image image-stack image-1">
            <img
              src={museum}
              alt="Museum"
              loading="lazy"
              className="about-me-image"
            />
          </div>
          <div className="global-circular-image image-stack image-2">
            <img
              src={taylor_swift}
              alt="Taylor Swift"
              loading="lazy"
              className="about-me-image"
            />
          </div>
          <div className="global-circular-image image-stack image-3">
            <img
              src={cat_display}
              alt="Cat Display"
              loading="lazy"
              className="about-me-image"
            />
          </div>
        </div>
        <div>
          <h2>About Me</h2>
          <p>
            When I'm not enjoying anime or embracing my homebody lifestyle, I
            love going to concerts. Recently, my girlfriend and I had an
            incredible time seeing Imagine Dragons live—it was such an
            unforgettable experience! We also enjoy our Fridays at a collectible
            expo in Carlsbad, we hunt for Pokémon cards.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
