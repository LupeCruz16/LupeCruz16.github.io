import BentoBox from './BentoBox.js'
import HeroSection from "./HeroSection.js"
import Footer from "../../../components/footer/Footer.js";
import useFadeIn from '../../../effects/FadeIn/useFadeIn.js';
import Navigation from "../../../components/navigation/Navigation.js";

function AbuoutMe () {

  const fadeIn = useFadeIn();

  return (
    <div className= {`${fadeIn ? 'fade-in' : ''}`}>
      <Navigation />
      <div className = "content-grid">
        <HeroSection />
        <BentoBox />
        <Footer />
      </div> 
    </div>
  );
}

export default AbuoutMe;