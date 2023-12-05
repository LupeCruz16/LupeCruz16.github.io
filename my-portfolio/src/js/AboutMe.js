import { disney, museum, concert } from './images.js';
import '../App.css';
import '../css/constants.css'
import '../css/common.css'
import '../css/aboutMe.css'

function AbuoutMe () {

    return (
        <div id = "aboutMe" className = "aboutMeSection">
          <div className = "paddingGlobal">
            <div className = "largeContainer">
              <div className = "paddingSection-M">
                <div className = "aboutMeComponent textAlign-Left">

                  <div className = "aboutMeContent">
                    <div className = "aboutMeContent-Left">
                      <h2>About Me</h2>
                    </div>

                    <div className = "aboutMeContent-Right">
                      <p className = "textSizeL">Hi there, I am Lupe! When I am not at my computer I am at my computer watching anime.
                        <br></br>
                        <br></br>
                        Or I am on another adventure with my girlfriend.
                      </p>
                      <div className = "padding-S"></div>
                      <div className = "marginBottom bottomMargin-XXL"></div>
                    </div>
                  </div>

                  <div class="lifestyleGallery">
                      <div class="imageWrapper">
                        <img src={disney} alt="Disney"/>
                      </div>
                      <div class="imageWrapper">
                        <img src={museum} alt = "Museum"/>
                      </div>
                      <div class="imageWrapper">
                        <img src={concert} alt = "Taylor Swift Concert"/>
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