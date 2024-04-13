import useHoverScale from '../../../effects/useHoverScale.js';
import { headshot } from '../../../assets/Images.js';
import resume from "../../../assets/resume/Resume.pdf"
import { arrowDown } from "../../../assets/Animations.js"
import Lottie from 'react-lottie';
import '../css/heroSection.css'

function HeroSection () {
  const { handleMouseEnter, handleMouseLeave, getScaleStyle } = useHoverScale();

  return (
    <div className = "hero-section breakout">
      {/* Left side of hero section */}
      <div className= "text-align-left">
        <div className = "text-xs text-muted">About Me</div>
        <div className = "text-l spacer">Hi, I'm Guadalupe Cruz, Software Engineer.</div>
        <div className="button-styles" style={getScaleStyle('resume')} onMouseEnter={() => handleMouseEnter('resume')} onMouseLeave={handleMouseLeave}>
          <a href= {resume} download="Guadalupes_Resume.pdf" className="resume-button-link">
            <div className="text-s text-color-sec">View My Resume</div>
          </a>
        </div>
      </div>

      {/* Right side of hero section */}
      <div>
        <div class="heroSection-imageWrapper">
          <div className = "heroSection-backgroundShape"></div>
          <img src={headshot} alt="Guadalupe Cruz" loading = "lazy"/>
        </div>
      </div>

      <div className = "about-me-lottie-wrapper">
        <Lottie
          options={{
          loop: true,
          autoplay: true,
          animationData: arrowDown,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
          }} 
        />
      </div>
    </div>
    
  )
};

export default HeroSection;