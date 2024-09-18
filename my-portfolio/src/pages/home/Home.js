import useFadeIn from '../../effects/FadeIn/useFadeIn.js';
import Expereince from '../experience/experience.js';

function Home() {
  const fadeIn = useFadeIn();

  return (
    <div className={`Home-Page ${fadeIn ? 'fade-in' : ''}`}>
      <Expereince />
    </div>
  );
}

export default Home;
