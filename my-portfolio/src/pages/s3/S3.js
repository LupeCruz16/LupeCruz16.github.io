import useFadeIn from '../../effects/FadeIn/useFadeIn.js';
import { s3_home } from '../../assets/Images.js';
import './s3.css';
import '../../globalCSS/constants.css';

const OverviewSection = () => {
  return (
    <div
      id="overview"
      className="sigparser-overview-container full-width"
      style={{ padding: '1vw 0 1vw 0', marginBottom: '5vw' }}
    >
      <div
        className="content-grid text-color-bg text-align-left"
        style={{ padding: '20px' }}
      >
        <h1 className="overview-title" style={{ paddingBottom: '10px' }}>
          Overview:
        </h1>
        <div className="grid-1-3-col-container" style={{ alignItems: 'start' }}>
          <div className="sigparser-overview-details">
            <div>
              <p>Company</p>
              <h3>S3 Coffee Bar</h3>
            </div>
            <div>
              <p>Role</p>
              <h3>Developer</h3>
            </div>
            <div>
              <p>Duration</p>
              <h3>2023</h3>
            </div>
          </div>
          <div className="sigparser-overview-details">
            <p>
              I had the distinct opportunity to work with a local coffee shop. I
              used my Software Engineering practices to best understand the
              owner's goals and business needs. The top priority was modernizing
              her business site to attract more customers and improve the user
              experience.
            </p>
            <p>
              Throughout the project, I focused on improving site performance
              and ensuring that the design was mobile-friendly. We also made
              sure the website reflected the shop's unique atmosphere while
              remaining easy to navigate for customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChallengesSection = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 className="text-muted">Challenges</h2>
      <p>
        One of the key challenges I tackled was ensuring the owner would be able
        to continue to update and manage the site. Hence the use of Wordpress,
        an already familar tool that would provide fast development and ease the
        owners content management.
      </p>
      <p>
        The redesign included optimizing images, creating more intuitive
        navigation, and integrating SEO best practices to ensure the shop's
        online presence was highly visible. Ultimately, this helped drive more
        local traffic and boosted their business.
      </p>
    </div>
  );
};

function S3() {
  const fadeIn = useFadeIn();

  return (
    <div className={`${fadeIn ? 'fade-in' : ''}`}>
      <section className="content-grid">
        <div className="full-width">
          <div className="grid-1-1-col-container">
            <div className="s3-content-container content-grid">
              <OverviewSection />
              <ChallengesSection />
            </div>
            <img src={s3_home} alt="S3 Coffee Bar Home Page"></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default S3;
