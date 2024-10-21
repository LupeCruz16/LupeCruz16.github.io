import ExpereinceOverview from '../../components/experience/experienceOverview.js';
import { sigparser_home, vice_demo, query_demo } from '../../assets/Videos.js';
import ExperienceStack from '../../components/experience/experienceStack.js';
import InfoSection from '../../components/experience/infoSection.js';
import { langchain, sigparser_proof } from '../../assets/Images.js';
import useFadeIn from '../../effects/FadeIn/useFadeIn.js';
import React, { useRef, useEffect } from 'react';
import './sigparser.css';

import {
  FlaskSVGIcon,
  PythonSVGIcon,
  ReactSVGIcon,
  AmazonSVGIcon,
  StraightArrowSVGIcon,
  CurvedArrowSVGIcon,
} from '../../assets/SVGs.js';

const ViceSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  return (
    <div id="vice" className="sigparser-phase-container breakout">
      <div className="phase-2-details-container">
        <div
          className="grid-1-1-col-container text-align-left"
          style={{ alignItems: 'center' }}
        >
          <article>
            <h2 className="text-muted">The Chatbot</h2>
            <p>
              VICE (Virtual Interface for Customer Enhancement) was a playful
              acronym for our Chatbot. As the lead for its backend development,
              I orchestrated the integration with{' '}
              <span className="underline">AWS</span>, managed web scraping, and
              crafted conversation logic through{' '}
              <span className="underline">Langchain</span>. This tool served as
              a proof of concept, demonstrating that we could achieve similar
              functionality to AWS's integrated chatbot model, which cost{' '}
              <span className="underline">$30,000</span> per month, while our
              solution was implemented for a fraction of the cost.
            </p>
          </article>

          <div className="phase-2-img-container">
            <div className="phase-2-proven-concept-container">
              <div>
                <CurvedArrowSVGIcon
                  className="curved-arrow-top-left"
                  useGradient={true}
                />
                <p>
                  SigParsers' Integrated <br /> Chatbot
                </p>
              </div>

              <div>
                <p>
                  My Teams <br /> Implementation
                </p>
                <StraightArrowSVGIcon
                  className="straight-arrow-down"
                  useGradient={true}
                />
              </div>
            </div>
            <img
              src={sigparser_proof}
              alt="Proof of concept"
              className="phase-2-proof-img"
            />
          </div>
        </div>
      </div>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="sigparser-phase-2-video"
      >
        <source src={vice_demo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

function SigParser() {
  const fadeIn = useFadeIn();

  return (
    <section className={`${fadeIn ? 'fade-in' : ''}`}>
      <div className="content-grid">
        <ExpereinceOverview
          company="SigParser"
          role="Developer"
          duration="2023-2024"
          details={[
            {
              text: 'For my senior capstone project, I had the distinct opportunity to collaborate with SigParser, a local company based in San Marcos. We adopted a robust CI/CD pipeline, leveraging Amazon Bedrock services to ensure security while optimizing cost-effectiveness.',
              underline: ['CI/CD', 'Amazon Bedrock'],
            },
            {
              text: 'This project honed my technical skills and reinforced the importance of agile methodologies in real-world software development.',
              underline: ['agile methodologies'],
            },
          ]}
        />

        <InfoSection
          title="The Home Page"
          description="The UI, built with React, utilizes Flask for frontend and backend communication. The home page contained both our tools: Query Generator and VICE. These tools boasted customization options in each tools settings options, while displaying pricing changes for different LLM selections."
          underlineWords={['React', 'Flask', 'customization']}
          mediaType="video"
          mediaSrc={sigparser_home}
          mediaAlt="SigParser Home Page Video"
          mediaFirst={false}
        />

        <ViceSection />

        <InfoSection
          title="The Query Generator"
          description="SigParser sought an LLM-based solution to filtering on their client portals. To address this, my team and I implemented a tool capable of querying an LLM using a preformatted prompt, which would return a JSON payload. This payload would seamlessly integrate into their existing system, filtering based on a clients prompt."
          underlineWords={['preformatted', 'existing system']}
          mediaType="video"
          mediaSrc={query_demo}
          mediaAlt="Query Generator Video"
          mediaFirst={true}
        />

        <ExperienceStack
          title="The Tech Stack"
          techStack={[
            {
              iconType: 'svg',
              IconComponent: PythonSVGIcon,
              description:
                'Python - Used as the primary backend programming language to implement server-side logic and handle data processing.',
            },
            {
              iconType: 'svg',
              IconComponent: AmazonSVGIcon,
              description:
                'Amazon Web Services (AWS) - Integrated Lambda for serverless functions and S3 for data storage, enabling seamless scalability and cost efficiency.',
            },
            {
              iconType: 'image',
              imageSrc: langchain,
              altText: 'Langchain',
              description:
                'Langchain - Essential for building the chatbot’s logic, including managing prompt templates and processing Natural Language Toolkit (NLTK) data.',
            },
            {
              iconType: 'svg',
              IconComponent: ReactSVGIcon,
              description:
                'React - Our frontend development framework used to create an interactive and dynamic user interface for the web application.',
            },
            {
              iconType: 'svg',
              IconComponent: FlaskSVGIcon,
              description:
                'Flask - Acted as the middleware, facilitating communication between the React frontend and Python backend to ensure smooth data exchange.',
            },
          ]}
        />
      </div>
    </section>
  );
}

export default SigParser;
