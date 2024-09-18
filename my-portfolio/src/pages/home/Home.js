import ScrollIndicator from '../../components/ScrollIndicator.js';
import useFadeIn from '../../effects/FadeIn/useFadeIn.js';
import Experience from '../experience/Experience.js';
import AboutMe from '../aboutMe/AboutMe.js';
import HeroSection from '../hero/Hero.js';
import './home.css';

function Home({ toggleModal }) {
  const fadeIn = useFadeIn();

  return (
    <div className={`${fadeIn ? 'fade-in' : ''}`}>
      <div className="scroll-container">
        <ScrollIndicator />
        <HeroSection toggleModal={toggleModal} />
        <Experience />
        <AboutMe />
      </div>
    </div>
  );
}

export default Home;
