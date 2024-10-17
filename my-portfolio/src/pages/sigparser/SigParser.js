import {
  FlaskSVGIcon,
  ReactSVGIcon,
  AmazonSVGIcon,
  StraightArrowSVGIcon,
  CurvedArrowSVGIcon,
} from '../../assets/SVGs.js';
import { sigparser_home, vice_demo, query_demo } from '../../assets/Videos.js';
import { langchain, sigparser_proof } from '../../assets/Images.js';
import React, { useRef, useEffect, useState } from 'react';
import useFadeIn from '../../effects/FadeIn/useFadeIn.js';
import { PythonSVGIcon } from '../../assets/SVGs.js';
import './sigparser.css';

const OverviewSection = () => {
  return (
    <section id="overview" className="sigparser-overview-container full-width">
      <div className="content-grid text-color-bg text-align-left">
        <h2 className="text-m overview-title">Overview:</h2>
        <div className="grid-1-3-col-container" style={{ alignItems: 'start' }}>
          <div
            className="sigparser-overview-details"
            style={{ paddingTop: '12px' }}
          >
            <div>
              <h3 className="text-xs">Company</h3>
              <p className="text-s">SigParser</p>
            </div>
            <div>
              <h3 className="text-xs">Role</h3>
              <p className="text-s">Developer</p>
            </div>
            <div>
              <h3 className="text-xs">Duration</h3>
              <p className="text-s">2023-2024</p>
            </div>
          </div>
          <div className="sigparser-overview-details text-s">
            <p>
              For my senior capstone project, I had the distinct opportunity to
              collaborate with SigParser, a local company based in San Marcos.
              Over the course of this year-long endeavor, my team and I
              developed a suite of internal LLM tools designed to enhance
              operational efficiency and streamline workflows.
            </p>
            <p>
              We adopted a robust{' '}
              <span className="underline">CI/CD pipeline</span>, leveraging{' '}
              <span className="underline">Amazon Bedrock</span> services to
              ensure security while optimizing cost-effectiveness. This
              foundation enabled us to deploy a centralized platform, built with
              React, that provided SigParser's staff with seamless access to
              manage and adapt their tools effectively. This project not only
              honed my technical skills but also reinforced the importance of{' '}
              <span className="underline">agile methodologies</span> in
              real-world software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomeSection = () => {
  return (
    <section id="home" className="sigparser-phase-container full-width">
      <div className="grid-1-1half-col-container">
        <article className="text-align-left">
          <div className="phases-details-container">
            <div className="phase-1-and-3-description">
              <h3 className="text-muted text-m">The Home Page</h3>
              <p className="text-s">
                The UI, built with <span className="underline">React</span>,
                utilizes <span className="underline">Flask</span> for frontend
                and backend communication. The home page contained both our
                tools: Query Generator and VICE. These tools boasted{' '}
                <span className="underline">customization</span> options in each
                tools settings options, while displaying pricing changes for
                different LLM selections.
              </p>
            </div>
          </div>
        </article>

        <div className="video-container">
          <video autoPlay loop muted playsInline className="rounded-left">
            <source src={sigparser_home} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

const ViceSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  return (
    <section id="vice" className="sigparser-phase-container breakout">
      <div className="phase-2-details-container">
        <div
          className="grid-1-1-col-container text-align-left"
          style={{ alignItems: 'center' }}
        >
          <article>
            <h3 className="text-muted text-m">The Chatbot</h3>
            <p className="text-s">
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
            <div className="phase-2-proven-concept-container text-s">
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
    </section>
  );
};

const QueryGenSection = () => {
  return (
    <section id="querygen" className="sigparser-phase-container full-width">
      <div className="grid-1half-1-col-container">
        <div className="video-container">
          <video autoPlay loop muted playsInline className="rounded-right">
            <source src={query_demo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <article className="text-align-left">
          <div className="phases-details-container">
            <div className="phase-1-and-3-description">
              <h3 className="text-muted text-m">The Query Generator</h3>
              <p className="text-s">
                SigParser sought an LLM-based solution to filtering on their
                client portals. To address this, my team and I implemented a
                tool capable of querying an LLM using a{' '}
                <span className="underline">preformatted</span> prompt, which
                would return a JSON payload. This payload would seamlessly
                integrate into their{' '}
                <span className="underline">existing system</span>, filtering
                based on a clients prompt.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

const TechStackSection = () => {
  const [hoverInfo, setHoverInfo] = useState('');

  const handleMouseEnter = (info) => {
    setHoverInfo(info);
  };

  const handleMouseLeave = () => {
    setHoverInfo('');
  };

  return (
    <section className="full-width text-align-left tech-stack-section">
      <h2 className="tech-stack-title text-m text-muted">The Tech Stack</h2>
      <div className="tech-stack-graphics">
        <div
          className="tech-item"
          onMouseEnter={() =>
            handleMouseEnter(
              'Python - A powerful programming language used for backend development.'
            )
          }
          onMouseLeave={handleMouseLeave}
        >
          <PythonSVGIcon />
        </div>
        <div
          className="tech-item"
          onMouseEnter={() =>
            handleMouseEnter(
              'Amazon Web Services - Cloud services for hosting and more.'
            )
          }
          onMouseLeave={handleMouseLeave}
        >
          <AmazonSVGIcon />
        </div>
        <div
          className="tech-item"
          onMouseEnter={() =>
            handleMouseEnter(
              'Langchain - A library for processing language data.'
            )
          }
          onMouseLeave={handleMouseLeave}
        >
          <img src={langchain} alt="Langchain" />
        </div>
        <div
          className="tech-item"
          onMouseEnter={() =>
            handleMouseEnter(
              'React - A JavaScript library for building user interfaces.'
            )
          }
          onMouseLeave={handleMouseLeave}
        >
          <ReactSVGIcon />
        </div>
        <div
          className="tech-item"
          onMouseEnter={() =>
            handleMouseEnter(
              'Flask - A lightweight WSGI web application framework.'
            )
          }
          onMouseLeave={handleMouseLeave}
        >
          <FlaskSVGIcon />
        </div>
      </div>
      {hoverInfo && (
        <div className="hover-info text-s text-color-bg">{hoverInfo}</div>
      )}
    </section>
  );
};

function SigParser() {
  const fadeIn = useFadeIn();

  return (
    <div className={`${fadeIn ? 'fade-in' : ''}`}>
      <div className="content-grid">
        <OverviewSection />
        <HomeSection />
        <ViceSection />
        <QueryGenSection />
        <TechStackSection />
      </div>
    </div>
  );
}

export default SigParser;
