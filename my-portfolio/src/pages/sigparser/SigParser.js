import { FlaskSVGIcon, ReactSVGIcon, AmazonSVGIcon, StraightArrowSVGIcon, CurvedArrowSVGIcon } from "../../assets/SVGs.js";
import { sigparser_home, vice_demo, query_demo } from "../../assets/Videos.js";
import Navigation from "../../components/navigation/Navigation.js";
import useFadeIn from '../../effects/FadeIn/useFadeIn.js';
import Footer from "../../components/footer/Footer.js";
import { PythonSVGIcon } from "../../assets/SVGs.js";
import { langchain, sigparser_proof } from "../../assets/Images.js";
import React, { useRef, useEffect } from 'react';
import './sigparser.css';

const HeroSection = () => {
  return (
    <header className="project-details-heading-container text-align-left">
      <div className="grid-1-3-col-container">
        <h1 className="text-xs" style={{ paddingTop: '12px' }}>AI Integrations</h1>
        <h2 className="text-m">Enhancing Customer Experiences Through AI</h2>
      </div>
    </header>
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
                The UI, built with React, utilizes Flask for frontend and backend communication while 
                prioritizing the user experience. Each tool has customizable settings 
                for modifying LLMs and, uniquely, our Chatbot (VICE) allows database updates. Transparent 
                pricing is provided for developer convenience. This hub empowers developers to refine LLM 
                tools for Sigparser's systems, with the Chatbot serving as a proof of concept.
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
        <div className="grid-1-1-col-container text-align-left" style={{ alignItems: 'center' }}>
          <article>
            <h3 className="text-muted text-m">The Chatbot</h3>
            <p className="text-s">
              VICE (Virtual Interface for Customer Enhancement) was a playful acronym for our Chatbot. 
              As the lead for its backend development, I orchestrated the integration with AWS, managed 
              web scraping, and crafted conversation logic through Langchain. This tool served as a 
              proof of concept, demonstrating that we could achieve similar functionality to AWS's 
              integrated chatbot model, which cost <span className="underline">$30,000</span> per
              month, while our solution was implemented 
              for a fraction of the cost.
            </p>
          </article>

          <div className="phase-2-img-container">
            <div className="phase-2-proven-concept-container text-s">
              <div>
                <CurvedArrowSVGIcon className="curved-arrow-top-left" useGradient={true} />
                <p>SigParsers' Integrated <br /> Chatbot</p>
              </div>

              <div>
                <p>My Teams <br /> Implementation</p>
                <StraightArrowSVGIcon className="straight-arrow-down" useGradient={true} />
              </div>
            </div>
            <img src={sigparser_proof} alt="Proof of concept" className="phase-2-proof-img" />
          </div>
        </div>
      </div>
      <video ref={videoRef} autoPlay loop muted playsInline className="sigparser-phase-2-video">
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
                SigParser sought an LLM-based solution to filtering on their client portals. 
                To address this, we implemented a tool capable of querying an
                LLM using a preformatted prompt, which would return a JSON payload seamlessly integrating 
                into their existing system. I was responsible for securely managing login credentials and 
                completing the UI. Throughout this project, the entire backend was built with Python.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

const OverviewSection = () => {
  return (
    <section id="overview" className="sigparser-overview-container full-width">
      <div className="content-grid text-color-bg text-align-left">
        <h2 className="text-m overview-title">Overview:</h2>
        <div className="grid-1-3-col-container" style={{ alignItems: 'start' }}>
          <div className="sigparser-overview-details" style={{ paddingTop: '12px' }}>
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
              For my senior capstone project, I had the distinct opportunity to collaborate with SigParser. 
              Over the course of this year-long endeavor, my team and I developed a suite of internal LLM tools 
              designed to enhance operational efficiency and streamline workflows.
            </p>
            <p>
              We adopted a robust <span className="underline">CI/CD pipeline</span>,  
              leveraging <span className="underline">Amazon Bedrock</span> services to ensure security 
              while optimizing cost-effectiveness. This foundation enabled us to deploy a centralized 
              platform, built with React, that provided SigParser's staff with seamless access to manage and adapt 
              their tools effectively. This project not only honed my technical skills but also reinforced the 
              importance of <span className="underline">agile methodologies</span> in real-world software development.
            </p>        
          </div>
        </div>
      </div>
    </section>
  );
};

const TechStackSection = () => {
  return (
    <section className="full-width text-align-left">
      <h2 className="tech-stack-tite text-m text-muted">The Tech Stack</h2>
      <div className="tech-stack-graphics">
        <PythonSVGIcon />
        <AmazonSVGIcon/>
        <img src={langchain} alt="Langchain" />
        <ReactSVGIcon />
        <FlaskSVGIcon />
      </div>
    </section>
  );
};

function SigParser() {
  const fadeIn = useFadeIn();

  return (
    <div className={`${fadeIn ? 'fade-in' : ''}`}>
      <Navigation />
      <div className="content-grid">
        <HeroSection />
        <HomeSection />
        <ViceSection />
        <TechStackSection />
        <QueryGenSection />
        <OverviewSection />
        <Footer />
      </div>
    </div>
  );
}

export default SigParser;