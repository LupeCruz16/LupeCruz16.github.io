import Navigation from "./components/navigation/Navigation.js";
import HeroSection from "./pages/home/js/HeroSection.js"
import Testimonials from "./pages/home/js/Testimonials.js";
import Projects from "./pages/home/js/Projects.js";
import SkillGallery from "./pages/home/js/SkillGallery.js";
import AboutMe from "./pages/home/js/AboutMe.js";
import Footer from "./components/footer/Footer.js";
import './globalCSS/constants.css';
import './globalCSS/common.css';
import './globalCSS/App.css';

function App() {

  return (
    <div className="App">
      <main className = "App-main">
        <Navigation />
        <HeroSection />
        <AboutMe />
        <Projects />
        <SkillGallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
