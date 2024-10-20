import ExpereinceOverview from '../../components/experience/experienceOverview.js';
import useFadeIn from '../../effects/FadeIn/useFadeIn.js';
import './zettler.css';

const ChallengesSection = () => {
  return (
    <div>
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

function Zettler() {
  const fadeIn = useFadeIn();

  return (
    <div className={`${fadeIn ? 'fade-in' : ''}`}>
      <section className="content-grid">
        <div className="full-width">
          <div className="content-grid">
            <ExpereinceOverview
              company="The ZETTLER Group"
              role="Software Engineer"
              duration="2024-Present"
              details={[
                {
                  text: 'Words',
                  underline: ['CI/CD', 'Amazon Bedrock'],
                },
                {
                  text: 'Words',
                  underline: ['agile methodologies'],
                },
              ]}
            />
            <ChallengesSection />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Zettler;
