import { pacificTech } from './images.js';
import '../css/constants.css'
import '../css/common.css'
import '../css/testimonials.css'

function Testimonials () {
    return (
        <div className = "tesimonialsSection">
          <div className = "paddingGlobal">
            <div className = "largeContainer">
              <div className = "paddingSection-M">

                <div className = "marginBottom bottomMargin-XXL">
                  <div className = "maxWidth-M">
                    <div className = "textStyleCaption textAlign-Left">Testimonials</div>
                  </div>
                </div>

                <div className = "testimonialsComponent">

                  <div className = "testimonial">
                    <p className = "textSizeL textAlign-Left">
                      "Working with Guadalupe on the redesign of my appliance repair company's website was a game-changing experience. 
                      From the initial consultation to the final launch, his approach was professional, creative, and focused on my 
                      unique business needs. The new design has not only modernized my online presence but also streamlined the customer 
                      experience, making it easier for clients to navigate my services and book repairs"
                      </p>
                    <div className = "testimonialClient">
                      <div className = "testimonialImageWrapper">
                        <img src = {pacificTech} 
                        loading = "lazy"
                        class = "testimonialImage"
                        alt = "Client Testimonial 1"
                        />
                      </div>
                      <div className = "testimonialClientDetails textAlign-Left">
                        <div className = "textSizeM">Pedro Cruz</div>
                        <div className = "textStyleMuted">Pacific Tech Appliance Repair Founder</div>
                      </div>
                    </div>
                  </div>

                  {/* <div className = "testimonial">
                    <p className = "textSizeL">Text</p>
                    <div className = "testimonialClient">
                      <div className = "testimonialImageWrapper">
                        <img src = {museum} 
                        loading = "lazy"
                        class = "testimonialImage"
                        alt = "Client Testimonial 2"
                        />
                      </div>
                      <div className = "testimonialClientDetails">
                        <div className = "textSizeM">Text</div>
                        <div className = "textStyleMuted">Text</div>
                      </div>
                    </div>
                  </div>

                  <div className = "testimonial">
                    <p className = "textSizeL">Text</p>
                    <div className = "testimonialClient">
                      <div className = "testimonialImageWrapper">
                        <img src = {concert} 
                        loading = "lazy"
                        class = "testimonialImage"
                        alt = "Client Testimonial 3"
                        />
                      </div>
                      <div className = "testimonialClientDetails">
                        <div className = "textSizeM">Text</div>
                        <div className = "textStyleMuted">Text</div>
                      </div>
                    </div>
                  </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Testimonials;