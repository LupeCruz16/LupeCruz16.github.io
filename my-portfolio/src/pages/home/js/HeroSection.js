import useHoverScale from '../../../effects/useHoverScale.js';
import useFadeIn from '../../../effects/FadeIn/useFadeIn.js';
import { headshot } from '../../../assets/Images.js';
import '../css/heroSection.css'

function HeroSection () {
  const { handleMouseEnter, handleMouseLeave, getScaleStyle } = useHoverScale();
  const fadeIn = useFadeIn();

  return (
    <div className = "paddingGlobal">
      <div id = "home" className = "largeContainer">
        <div className = "paddingSectionM-Top"></div>
        <div className = "heroSection">
          <div className= {`heroSection-Left textAlign-Left ${fadeIn ? 'fade-in' : ''}`}>
            <h2 className = "textSizeM">Hello, I'm</h2>
            <h1 className = "textSizeL">Guadalupe Cruz</h1>
            <h2 className = "textSizeM">A Software Engineer</h2>
            <div className = "paddingXS"></div>
            <div className="resumeButton" style={getScaleStyle('resume')} onMouseEnter={() => handleMouseEnter('resume')} onMouseLeave={handleMouseLeave}>
              <a
                href="https://drive.google.com/uc?export=download&id=1mz-kv3cklhquFyz3WkPtWWkQ2pnzbj7t"
                rel="noopener noreferrer"
                download
                className="resumeButtonLink"
                >
                <div className="textSizeS textColor-Secondary">View My Resume</div>
              </a>
            </div>
          </div>
          <div className = "heroSection-Right">
            <div class="heroSection-imageWrapper">
              <div className = "heroSection-backgroundShape"></div>
              <img src={headshot} alt="Guadalupe Cruz" loading = "lazy"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default HeroSection;