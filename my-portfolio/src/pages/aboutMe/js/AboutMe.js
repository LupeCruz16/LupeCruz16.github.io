import '../css/aboutMe.css'
// import Details from './Details.js'
import HeroSection from "./HeroSection.js"
// import SkillGallery from "./SkillGallery.js";
// import Footer from "../../../components/footer/Footer.js";
import useFadeIn from '../../../effects/FadeIn/useFadeIn.js';
import Navigation from "../../../components/navigation/Navigation.js";

function AbuoutMe () {

  const fadeIn = useFadeIn();

  return (
    <div className= {`${fadeIn ? 'fade-in' : ''}`}>
      <Navigation />
      <div className = "content-grid">
        <HeroSection />
      </div>
      {/* <Details />
      <SkillGallery />
      <Footer /> */}
    </div>
  );
}

export default AbuoutMe;