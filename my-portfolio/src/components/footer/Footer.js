import { GitHubSVGIcon, LinkedInSVGIcon } from '../../assets/SVGs.js';
import { headshot } from '../../assets/Images.js';
import './footer.css'

function Footer () {
    const svgStyle = {
      fill: 'white',
    };

    return (
        <footer id = "contact" className = "backgroundColor-Secondary">
        <div className = "paddingGlobal textColor-Secondary">
          <div className = "largeContainer">

            <div className = "paddingSection-M">
              <div className = "footerTop">

                <div className = "footerLeft textAlign-Left">
                  <div className = "textSizeM">Have a project? Let's talk</div>
                  <div className = "paddingSection-S-Bottom"></div>
                  <div className = "marginLeft-S">
                    <div className = "textSizeS textStyleMuted">Say Hi!</div>
                    <a href="mailto:guacruz.16@gmail.com?subject=Let's%20create%20something%20awesome!"
                    className = "footerEmailLink inlineBlockElem">
                      <div class = "textSizeS textColor-Secondary">guacruz.16@gmail.com</div>
                    </a>
                  </div>
                </div>

                <div className = "footerRight">
                  <div className = "personWrapper">
                    <div className = "footerImageWrapper">
                      <img src = {headshot} 
                      loading = "lazy"
                      className = "footerImage"
                      alt = "Guadalupe"
                      />
                    </div>
                    <div className = "marginLeft-S">
                      <div className = "textSizeM textWeightM textAlign-Left">Guadalupe Cruz</div>
                      <div className = "bottomMarginXS"></div>
                    </div>
                  </div>
                  <div className = "bottomMargin-M"></div>
                  <div className = "footerSocialWrapper">
                    <GitHubSVGIcon href = "https://github.com/LupeCruz16" classAttributes = "footerSocialLink inlineBlockElem footerSVGIcon" style = {svgStyle}/>
                    <LinkedInSVGIcon href = "https://www.linkedin.com/in/guadalupe-cruz-a65a31254/" classAttributes = "footerSocialLink inlineBlockElem footerSVGIcon" style = {svgStyle}/>
                  </div>
                </div>

              </div>
            </div>

            <div className = "paddingSection-S-Bottom">
              <div className = "footerBottom">
                <div className = " textSizeXS textStyleMuted">© 2023 by Guadalupe Cruz. All rights reserved.</div>
              </div>
            </div>

          </div>
        </div>
      </footer>
    )
}

export default Footer;