import ExpereinceOverview from '../../components/experience/experienceOverview.js';
import useFadeIn from '../../effects/FadeIn/useFadeIn.js';
import './s3.css';

import InfoSection from '../../components/experience/infoSection.js';

import { s3_hero, s3_promise } from '../../assets/Images.js';

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
                text: 'I had the distinct opportunity to work with my local coffee shop, S3 Coffee Bar. I used my Software Engineering practices to best understand the owners goals and business needs. The top priority was modernizing her business site to attract more customers and improve the user experience.',
                underline: ['goals', 'modernizing'],
              },
              {
                text: 'Throughout the project, I focused on improving site performance and ensuring that the design was mobile-friendly. We also made sure the website reflected the shops unique atmosphere while remaining easy to navigate for customers.',
                underline: ['mobile-friendly'],
              },
            ]}
          />

          <InfoSection
            title="Goals"
            description="The primary goal of this project was to modernize the website in a way that attracted new customers while improving the overall user experience. This involved not only redesigning the site to be more visually appealing but also optimizing performance across devices, with a specific focus on mobile responsiveness. Additionally, we aimed to reflect the shop's unique atmosphere online, ensuring that the digital experience resonated with the coffee shop's physical vibe."
            underlineWords={[
              'modernize',
              'mobile responsiveness',
              'user experience',
            ]}
            mediaType="img"
            mediaSrc={s3_hero}
            mediaAlt="S3 Hero Section"
            mediaFirst={true}
          />

          <InfoSection
            title="Challenges"
            description="One of the key challenges during the project was ensuring that the website would be easy for the owner to update and manage after completion. To address this, we integrated WordPress as a content management system, allowing the owner to make updates without technical expertise. Another challenge was ensuring a smooth transition from the existing site, retaining essential elements while optimizing new features, such as mobile responsiveness and performance."
            underlineWords={[
              'WordPress',
              'content management',
              'mobile responsiveness',
            ]}
            mediaType="img"
            mediaSrc={s3_promise}
            mediaAlt="S3 Hero Section"
            mediaFirst={false}
          />
        </div>
      </section>
    </div>
  );
}

export default S3;
