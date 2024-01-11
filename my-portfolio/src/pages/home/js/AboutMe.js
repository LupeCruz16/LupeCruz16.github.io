import { disney, museum, concert } from '../../../assets/Images.js';
import '../css/aboutMe.css'

const AboutMeImageWrapper = ({ src, className, alt }) => {
  return (
    <div className="imageWrapper">
      <img src={src} className={className} loading="lazy" alt={alt} />
    </div>
  );
};

function AbuoutMe () {

    return (
        <div id = "aboutMe" className = "aboutMeSection backgroundColor-Secondary">
          <div className = "paddingGlobal">
            <div className = "largeContainer">
              <div className = "paddingSection-M">
                  <div className = "aboutMeContent">
                    
                    <div className = "aboutMeContent-Left textAlign-Left">
                      <div className = "bottomMarginL">
                        <div className = "textSizeM textColor-Secondary">About Me</div>
                      </div>
                      <p className = "aboutMeText textSizeS textColor-Secondary">
                        I have a passion for discovering the potential of programming, a journey that has recently led me to the 
                        exciting realm of web development. 

                        This newfound interest was the spark behind the creation of this website. 

                        Additionally, my senior capstone course opened the doors to the fascinating world of popular AI models, 
                        further enriching my knowledge and skills.
                        <br></br>
                        <br></br>
                        Away from my workspace, I embrace the thrill of travel and new experiences. 
                        
                        A highlight for me was the unforgettable experience of attending a Taylor Swift concert with my girlfriend, 
                        a memory that encapsulates my love for adventure and creating special moments.
                      </p>
                    </div>

                    <div className = "aboutMeContent-Right">
                      <AboutMeImageWrapper src = {disney} className = "aboutMeTopImage" alt = "Disney"/>
                      <AboutMeImageWrapper src = {museum} className = "aboutMeBottomImage negativeMarginS" alt = "Museum"/>
                      <AboutMeImageWrapper src = {concert} className = "aboutMeTopImage negativeMarginS" alt = "Concert"/>
                    </div>

                  </div>  
              </div>
            </div>
          </div>
        </div>
    )
}

export default AbuoutMe;