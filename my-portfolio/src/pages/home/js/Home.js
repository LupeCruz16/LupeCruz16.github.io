import useFadeIn from '../../../effects/FadeIn/useFadeIn.js';
import Navigation from "../../../components/navigation/Navigation.js";
import HeroSection from "./HeroSection.js"
import Testimonials from "./Testimonials.js";
import Projects from "./Projects.js";
import SkillGallery from "./SkillGallery.js";
import AboutMe from "./AboutMe.js";
import Footer from "../../../components/footer/Footer.js";

function Home() {
  const fadeIn = useFadeIn();

  return (
    <div className= {`App ${fadeIn ? 'fade-in' : ''}`}>
      <main className = "App-main">
        <div className = "Home-Page">
          <Navigation />
        </div>
      </main>
    </div>
  );
}

export default Home;