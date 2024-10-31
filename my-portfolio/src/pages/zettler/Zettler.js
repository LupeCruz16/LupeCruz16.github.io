import ExpereinceOverview from '../experience/experienceOverview.js';
import { zettler_showcase, zettler_building } from '../../assets/Images.js';
import InfoSection from '../experience/infoSection.js';
import useFadeIn from '../../effects/FadeIn/useFadeIn.js';
import './zettler.css';

import ExperienceStack from '../experience/experienceStack.js';

import {
  PythonSVGIcon,
  ReactSVGIcon,
  WordpressSVGIcon,
  PhpSVGIcon,
} from '../../assets/SVGs.js';

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
                  text: 'Since joining The ZETTLER Group as an intern, I have transitioned into a part-time Software Engineer role. My work focuses on website management, updates, and enhancements, including the migration from third-party video hosting services to in-house solutions. I’ve worked their WordPress site, identified and fixed bugs in SQL-driven information, and contributed to the development of a new React-based site. One of my most challenging projects has been the Showcase, where I integrated hardware and software to deliver an interactive product display.',
                  underline: ['WordPress', 'SQL', 'React', 'Showcase project'],
                },
              ]}
            />

            <InfoSection
              title="Product Showcase"
              description="At ZETTLER, I was responsible for developing a graphical user interface (GUI) using Python and PyQt to showcase various company products. This display mimicked an EV charging station, featuring a handle and a hall effect sensor to trigger the 'charging' sequence on the home screen. Additionally, an LED ring around the station provided a dynamic visual representation of the charging process. I also wrote comprehensive documentation covering the auto-start functionality, GitHub SSH key setup, and the complete Raspberry Pi configuration process."
              underlineWords={['GUI', 'Python', 'PyQt', 'Raspberry Pi']}
              mediaType="img"
              mediaSrc={zettler_showcase}
              mediaAlt="ZETTLER Showcase Display"
              mediaFirst={true}
            />

            <InfoSection
              title="Website Management"
              description="At ZETTLER, one of my key responsibilities involves managing and enhancing the company's website. Using WordPress, I've updated site pages and created custom templates with PHP and MySQL to optimize functionality. I'm currently working on a React-driven update, which integrates WordPress's REST API, allowing employees to maintain the familiar content management system."
              underlineWords={[
                'WordPress',
                'PHP',
                'MySQL',
                'React',
                'REST API',
              ]}
              mediaType="img"
              mediaSrc={zettler_building}
              mediaAlt="ZETTLER Vista Location"
              mediaFirst={false}
            />

            <ExperienceStack
              title="Technical Tools"
              techStack={[
                {
                  iconType: 'svg',
                  IconComponent: PythonSVGIcon,
                  description:
                    'Python - Leveraged alongside the PyQt5 library to develop an intuitive graphical user interface (GUI) for product showcases and interactive applications.',
                },
                {
                  iconType: 'svg',
                  IconComponent: ReactSVGIcon,
                  description:
                    'React - Currently being used to build a modernized, dynamic website, seamlessly integrating the WordPress REST API for content management and enhanced performance.',
                },
                {
                  iconType: 'svg',
                  IconComponent: WordpressSVGIcon,
                  description:
                    'WordPress - Extensive experience updating site pages and creating custom page templates, ensuring content is organized and presented effectively.',
                },
                {
                  iconType: 'svg',
                  IconComponent: PhpSVGIcon,
                  description:
                    'PHP - Collaborated with MySQL to manage and deliver product-driven content, enabling efficient database interactions and streamlined product displays.',
                },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Zettler;
