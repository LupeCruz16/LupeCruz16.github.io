import Navigation from "../../../components/navigation/Navigation.js";
import HeroSection from "./HeroSection.js"
import Testimonials from "./Testimonials.js";
import Projects from "./Projects.js";
import SkillGallery from "./SkillGallery.js";
import AboutMe from "./AboutMe.js";
import Footer from "../../../components/footer/Footer.js";

function Home() {

  return (
    <div className="App">
      <main className = "App-main">
        <Navigation />
        <HeroSection />
        <AboutMe />
        <Projects />
        <SkillGallery />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}

export default Home;