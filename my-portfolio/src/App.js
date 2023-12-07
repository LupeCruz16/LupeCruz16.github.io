import HeroSection from "./js/HeroSection.js"
import Testimonials from "./js/Testimonials.js";
import Projects from "./js/Projects.js"
import SkillGallery from "./js/SkillGallery.js"
import AboutMe from "./js/AboutMe.js"
// import Footer from "./js/Footer.js"
import './App.css';
import './css/constants.css'

function App() {

  return (
    <div className="App">
      <main className = "App-main">
        <HeroSection />
        <AboutMe />
        <Projects />
        <SkillGallery />
        <Testimonials />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
