import useMobileView from '../../../functions/useMobileView.js';
import { pacificTech } from '../../../assets/Images.js';
import '../css/testimonials.css'

function Testimonials () {

  // Testimonial text with more words
  const testimonialText = "Working with Guadalupe on the redesign of my appliance repair company's website was a game-changing experience. From the initial consultation to the final launch, his approach was professional, creative, and focused on my unique business needs. The new design has not only modernized my online presence but also streamlined the customer experience, making it easier for clients to navigate my services and book repairs";

  // Maximum number of words to display
  const maxWords = useMobileView ? 20 : Infinity; 
    
  return (
    <div id = "testimonials" className = "tesimonialsSection">
      <div className = "paddingGlobal">
        <div className = "largeContainer">
          <div className = "paddingSection-M">

            <div className = "bottomMarginL">
              <div className = "textSizeM textAlign-Left">Testimonials</div>
            </div>

            <div className = "testimonialsComponent marginLeft-S">

              <div className = "testimonial backgroundColor-Secondary">
                <p className = "textSizeS textAlign-Left textColor-Secondary">
                  {testimonialText.split(' ').slice(0, maxWords).join(' ')}{testimonialText.split(' ').length > maxWords ? '...' : ''}
                </p>
                <div className = "testimonialClient">
                  <div className = "testimonialImageWrapper">
                    <img src = {pacificTech} loading = "lazy" class = "testimonialImage" alt = "Client Testimonial 1"/>
                  </div>
                  <div className = "testimonialClientDetails textAlign-Left textColor-Secondary">
                    <div className = "textSizeS">Pedro Cruz</div>
                    <div className = "textSizeXS textStyleMuted clientCompanyText">Pacific Tech Appliance Repair</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    )
}

export default Testimonials;