import { headshot } from './images.js';
import '../css/constants.css'
import '../css/common.css'
import '../css/footer.css'

function Footer () {
    return (
        <footer id = "contact" className = "backgroundColor-Secondary">
        <div className = "paddingGlobal textColor-Secondary">
          <div className = "largeContainer">

            <div className = "paddingSection-M">
              <div className = "footerTop">

                <div className = "footerLeft textAlign-Left">
                  <h2 className = "textSizeM">Have a project? Let's talk</h2>
                  <div className = "paddingSection-M-Bottom"></div>
                  <div className = "textSizeS textStyleMuted">Say Hi!</div>
                  <a href="mailto:guacruz.16@gmail.com?subject=Let's%20create%20something%20awesome!"
                  className = "footerEmailLink inlineBlockElem">
                    <div class = "textSizeS textColor-Secondary">guacruz.16@gmail.com</div>
                  </a>
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
                  <div className = "marginBottom bottomMargin-M"></div>
                  <div className = "footerSocialWrapper">
                    <a aria-label= "Github" 
                    href = "https://github.com/LupeCruz16" 
                    target = "_blank" 
                    rel = "noopener noreferrer"
                    className = "footerSocialLink inlineBlockElem">
                      <div className = "svgIcon">
                        <svg aria-hidden="true" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <title>GitHub</title>
                          <path 
                          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.746.084-.729.084-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                          fill= "#FFFFFF"/>
                        </svg>
                      </div>
                    </a>
                    <a aria-label= "LinkedIn" 
                    href = "https://www.linkedin.com/in/guadalupe-cruz-a65a31254/" 
                    target = "_blank" 
                    rel = "noopener noreferrer"
                    className = "footerSocialLink inlineBlockElem">
                      <div className = "svgIcon">
                        <svg aria-hidden="true" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>LinkedIn</title>
                        <path 
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.138 1.445-2.138 2.942v5.664H9.351V9h3.414v1.561h.049c.477-0.902 1.635-1.851 3.367-1.851 3.605 0 4.267 2.37 4.267 5.455v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.566V9h3.553v11.452zM22.225 0H1.775C0.792 0 0 .792 0 1.775v20.451C0 23.208.792 24 1.775 24h20.45C23.208 24 24 23.208 24 22.225V1.775C24 .792 23.208 0 22.225 0z"                   
                        fill= "#FFFFFF"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <div className = "paddingSection-M-Bottom">
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