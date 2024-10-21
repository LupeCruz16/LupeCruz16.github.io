import ExpereinceOverview from '../../components/experience/experienceOverview.js';
import useFadeIn from '../../effects/FadeIn/useFadeIn.js';
import { s3_home } from '../../assets/Images.js';
import './s3.css';

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
          <ExpereinceOverview
            company="S3 Coffee Car"
            role="Developer"
            duration="2023"
            details={[
              {
                text: 'I had the distinct opportunity to work with a local coffee shop. I used my Software Engineering practices to best understand the owners goals and business needs. The top priority was modernizing her business site to attract more customers and improve the user experience.',
                underline: ['goals', 'modernizing'],
              },
              {
                text: 'Throughout the project, I focused on improving site performance and ensuring that the design was mobile-friendly. We also made sure the website reflected the shops unique atmosphere while remaining easy to navigate for customers.',
                underline: ['mobile-friendly'],
              },
            ]}
          />

          <div className="grid-1-1-col-container">
            <div className="s3-content-container content-grid">
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
