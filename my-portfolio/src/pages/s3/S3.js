import Navigation from "../../components/navigation/Navigation.js";
import useFadeIn from '../../effects/FadeIn/useFadeIn.js';
import Footer from "../../components/footer/Footer.js";
import { cats } from "../../assets/Animations.js";
import Lottie from 'react-lottie';
import './s3.css';

const HeroSection = () => {
  return (
    <div className = "in-progress-container text-align-left">
      <div className = "grid-1-3-col-container in-progress-styles">
        <div className = "text-m">Work in progress, check back later!</div>
        <Lottie style = {{ width: "60%"}} options={{ loop: true, autoplay: true, animationData: cats, rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }}} />
      </div>
    </div>
  );
};

function S3 () {
    const fadeIn = useFadeIn();
  
    return (
      <div className= {`${fadeIn ? 'fade-in' : ''}`}>
        <Navigation />
        <div className = "content-grid">
          <HeroSection />  
          <Footer />
        </div> 
      </div>
    );
}
  
export default S3;