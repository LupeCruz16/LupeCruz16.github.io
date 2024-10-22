import useHoverScale from '../../effects/useHoverScale.js';
import resume from '../../assets/resume/Resume.pdf';
import { headshot } from '../../assets/Images.js';
import './hero.css';

function HeroSection() {
  const { handleMouseEnter, handleMouseLeave, getScaleStyle } = useHoverScale();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home-scroll-section content-grid" id="hero">
      <div className="hero-section breakout">
        <div className="text-align-left">
          <p className="text-muted">Hello!</p>
          <h1 className="spacer">
            I'm Guadalupe Cruz, Software Engineer extraordinaire.
          </h1>
          <div className="button-row">
            <button
              className="global-bttn"
              style={getScaleStyle('resume')}
              onMouseEnter={() => handleMouseEnter('resume')}
              onMouseLeave={handleMouseLeave}
            >
              <a href={resume} download="Guadalupes_Resume.pdf">
                <p>Download My Resume</p>
              </a>
            </button>
            <button
              className="global-bttn"
              style={getScaleStyle('contact')}
              onMouseEnter={() => handleMouseEnter('contact')}
              onMouseLeave={handleMouseLeave}
              onClick={() => scrollToSection('contact')}
            >
              <p>Get in Touch</p>
            </button>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="global-circular-image">
            <img src={headshot} alt="Guadalupe Cruz" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
