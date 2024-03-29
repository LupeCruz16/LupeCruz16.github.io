import useHoverScale from '../../../effects/useHoverScale.js';
import { headshot } from '../../../assets/Images.js';
import resume from "../../../assets/resume/Resume.pdf"
import '../css/heroSection.css'

function HeroSection () {
  const { handleMouseEnter, handleMouseLeave, getScaleStyle } = useHoverScale();

  return (
    <div className = "heroSection large-padding-top-bot">
      {/* Left side of hero section */}
      <div className= "textAlign-Left">
        <h2 className = "textSizeM">Hello, I'm</h2>
        <h1 className = "textSizeL">Guadalupe Cruz</h1>
        <h2 className = "textSizeM">Software Engineer</h2>
        <div className = "paddingXS"></div>
        <div className="resumeButton" style={getScaleStyle('resume')} onMouseEnter={() => handleMouseEnter('resume')} onMouseLeave={handleMouseLeave}>
          <a href= {resume} download="Guadalupes_Resume.pdf" className="resumeButtonLink">
            <div className="textSizeS textColor-Secondary">View My Resume</div>
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
    </div>
    
  )
};

export default HeroSection;