import useHoverScale from '../../effects/useHoverScale.js';
import resume from '../../assets/resume/Resume.pdf';
import { headshot } from '../../assets/Images.js';
import './hero.css';

function HeroSection({ toggleModal }) {
  const { handleMouseEnter, handleMouseLeave, getScaleStyle } = useHoverScale();

  return (
    <section className="home-scroll-section content-grid" id="hero">
      <div className="hero-section breakout">
        <div className="text-align-left">
          <div className="text-xs text-muted">Hello!</div>
          <div className="text-m spacer">
            I'm Guadalupe Cruz, Software Engineer extraordinaire.
          </div>
          <div className="button-row">
            <button
              className="button-styles"
              style={getScaleStyle('resume')}
              onMouseEnter={() => handleMouseEnter('resume')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={resume}
                download="Guadalupes_Resume.pdf"
                className="resume-button-link"
              >
                <div className="text-s text-color-sec">Download My Resume</div>
              </a>
            </button>
            <button
              className="button-styles"
              style={getScaleStyle('contact')}
              onMouseEnter={() => handleMouseEnter('contact')}
              onMouseLeave={handleMouseLeave}
              onClick={() => toggleModal('contact')} // Trigger modal from App.js
            >
              <div className="text-s text-color-sec">Get in Touch</div>
            </button>
          </div>
        </div>
        <div>
          <div className="circular-image">
            <img
              src={headshot}
              alt="Guadalupe Cruz"
              loading="lazy"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
