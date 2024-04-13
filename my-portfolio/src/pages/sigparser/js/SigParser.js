import Footer from "../../../components/footer/Footer.js";
import useFadeIn from '../../../effects/FadeIn/useFadeIn.js';
import Navigation from "../../../components/navigation/Navigation.js";

function SigParser () {

  const fadeIn = useFadeIn();

  return (
    <div className= {`${fadeIn ? 'fade-in' : ''}`}>
      <Navigation />
      <div className = "content-grid">
        <Footer />
      </div> 
    </div>
  );
}

export default SigParser;