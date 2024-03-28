import useFadeIn from '../../../effects/FadeIn/useFadeIn.js';
import Navigation from "../../../components/navigation/Navigation.js";
import Projects from "./Projects.js";

function Home() {
  const fadeIn = useFadeIn();

  return (
    <div className= {`Home-Page ${fadeIn ? 'fade-in' : ''}`}>
      <Navigation />
      <Projects />
    </div>
  );
}

export default Home;