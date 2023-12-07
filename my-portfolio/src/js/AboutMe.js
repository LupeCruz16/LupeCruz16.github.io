import { disney, museum, concert } from './images.js';
import '../css/constants.css'
import '../css/common.css'
import '../css/aboutMe.css'

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
                      <p className = "textSizeS textColor-Secondary marginLeft-S">
                        I enjoy forgetting semi colons in Python. 
                        I have discovered a passion and interest in web development which drove me here.
                        <br></br>
                        <br></br>
                        Outside of my room I enjoy the opportunity to travel and visit new places! 
                      </p>
                    </div>

                    <div className = "aboutMeContent-Right">
                      <div className = "imageWrapper">
                        <img src = {disney} 
                          className = "aboutMeTopImage"
                          loading = "lazy"
                          alt = "Disney"/>
                      </div>
                      <div className = "paddingS"></div>
                      <div className = "imageWrapper">
                        <img src = {museum} 
                          className = "aboutMeBottomImage negativeMarginS"
                          loading = "lazy"
                          alt = "Museum"/>
                      </div>
                      <div className = "paddingS"></div>
                      <div className = "imageWrapper">
                        <img src = {concert} 
                          className = "aboutMeTopImage negativeMarginS"
                          loading = "lazy"
                          alt = "Concert"/> 
                      </div>  
                    </div>

                  </div>  
              </div>
            </div>
          </div>
        </div>
    )
}

export default AbuoutMe;