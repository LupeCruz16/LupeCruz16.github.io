import Navigation from '../../components/navigation/Navigation.js';
import useFadeIn from '../../effects/FadeIn/useFadeIn.js';
import Footer from '../../components/footer/Footer.js';
import { s3_home } from '../../assets/Images.js';
import './s3.css';

const HeroSection = () => {
  return (
    <div className="project-details-heading-container text-align-left">
      <div className="grid-1-3-col-container">
        <div className="text-xs" style={{ paddingTop: '12px' }}>
          Wordpress Redesign
        </div>
        <div className="text-m">
          Transforming Digital Presence with WordPress
        </div>
      </div>
    </div>
  );
};

const HomeSection = () => {
  return (
    <div className="full-width">
      <div className="grid-1-1half-col-container">
        <div>Hi</div>
        <img src={s3_home} alt="S3 Coffee Bar Home Page"></img>
      </div>
    </div>
  );
};

function S3() {
  const fadeIn = useFadeIn();

  return (
    <div className={`${fadeIn ? 'fade-in' : ''}`}>
      <Navigation />
      <div className="content-grid">
        <HeroSection />
        <HomeSection />
        <Footer />
      </div>
    </div>
  );
}

export default S3;
