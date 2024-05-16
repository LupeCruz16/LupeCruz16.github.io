import { FlaskSVGIcon, ReactSVGIcon, AmazonSVGIcon } from "../../../assets/SVGs.js";
import { sigparser_home, vice_demo, query_demo } from "../../../assets/Videos.js";
import Navigation from "../../../components/navigation/Navigation.js";
import useFadeIn from '../../../effects/FadeIn/useFadeIn.js';
import Footer from "../../../components/footer/Footer.js";
import { PythonSVGIcon } from "../../../assets/SVGs.js";
import { langchain } from "../../../assets/Images.js";
import React, { useRef, useEffect } from 'react';
import '../css/sigparser.css';

const HeroSection = () => {
  return (
    <div className = "sigparser-hero-container text-align-left">
      <div className = "grid-1-3-col-container">
        <div className = "text-xs" style={{ paddingTop: '12px' }}>LLM Tool Development</div>
        <div className = "text-m">Enhancing Customer Experiences Through AI</div>
      </div>
    </div>
  );
};

const HomeSection = () => {
  return (
    <div className="sigparser-phase-container full-width">
      <div className="grid-1-1half-col-container">
        <div className="text-align-left">
          <div className = "phases-details-container">
            <div className = "phase-1-and-3-description">
              <div className="text-muted text-m">Phase 1: The Home Page</div>
              <div className="text-s">
                The UI, built with React, utilizes Flask for frontend and backend communication while 
                prioritizing the user experience. Each tool has customizable settings 
                for modifying LLMs and, uniquely, our Chatbot (VICE) allows database updates. Transparent 
                pricing is provided for developer convenience. This hub empowers developers to refine LLM 
                tools for Sigparser's systems, with the Chatbot serving as a proof of concept.
              </div>
            </div>
            <div className = "sigparser-tech-graphics">
              <ReactSVGIcon />
              <FlaskSVGIcon />
            </div>
          </div>
          <div></div>
        </div>

        <div className="video-container">
          <video autoPlay loop muted playsInline className = "rounded-left">
            <source src={sigparser_home} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
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
    <div className = "sigparser-phase-container">
      <div className = "phase-2-details-container">
        <div className = "text-muted text-m">Phase 2: VICE</div>
        <div className = "text-s">
          VICE (Virtual Interface for Customer Enhancement) was a playful acronym for our Chatbot. 
          As the lead for its backend development, I orchestrated the integration with AWS, managed 
          web scraping, and crafted conversation logic through Langchain. This tool served as a 
          proof of concept, demonstrating that we could achieve similar functionality to AWS's 
          integrated chatbot model, which cost $30,000 per month, while our solution was implemented 
          for a fraction of the cost.
        </div>
        <div className = "sigparser-tech-graphics">
          <AmazonSVGIcon/>
          <img src = { langchain } alt = "Langchain"></img>
        </div>
      </div>
      <video ref={videoRef} autoPlay loop muted playsInline className = "sigparser-phase-2-video">
        <source src= { vice_demo } type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const QueryGenSection = () => {
  return (
    <div className="sigparser-phase-container full-width">
      <div className="grid-1half-1-col-container">
        <div className="video-container">
          <video autoPlay loop muted playsInline className = "rounded-right">
            <source src={query_demo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="text-align-left">
          <div className = "phases-details-container">
            <div className = "phase-1-and-3-description">
              <div className="text-muted text-m">Phase 3: The Query Generator</div>
              <div className="text-s">
                SigParser sought an LLM-based solution to filtering on their client portals. 
                To address this, we implemented a tool capable of querying an
                LLM using a preformatted prompt, which would return a JSON payload seamlessly integrating 
                into their existing system. I was responsible for securely managing login credentials and 
                completing the UI. Throughout this project, the entire backend was built with Python.
              </div>
            </div>
            <div className = "sigparser-tech-graphics">
              <PythonSVGIcon />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div className = "sigparser-overview-container text-align-left">
      <div className= "text-muted text-m overview-title">Project Overview</div>
      <div className = "grid-1-3-col-container">
        <div className = "sigparser-overview-details" style={{ paddingTop: '12px' }}>
          <div>
            <div className = "text-xs">Company</div>
            <div className = "text-muted text-s">SigParser</div>
          </div>
          <div>
            <div className = "text-xs">Role</div>
            <div className = "text-muted text-s">Developer</div>
          </div>
          <div>
            <div className = "text-xs">Duration</div>
            <div className = "text-muted text-s">2023-2024</div>
          </div>
        </div>
        <div className = "sigparser-overview-details text-s">
          <div>
            For my senior capstone project, I had the distinct opportunity to collaborate with SigParser. 
            Over the course of this year-long endeavor, my team and I developed a suite of internal LLM tools 
            designed to enhance operational efficiency and streamline workflows.
          </div>
          <div>
            We adopted a robust <span className = "underline text-muted">CI/CD pipeline</span>,  
            leveraging <span className = "underline text-muted">Amazon Bedrock</span> services to ensure security 
            while optimizing cost-effectiveness. This foundation enabled us to deploy a centralized 
            platform, built with React, that provided SigParser's staff with seamless access to manage and adapt 
            their tools effectively. This project not only honed my technical skills but also reinforced the 
            importance of <span className = "underline text-muted">agile methodologies</span> in real-world software development.
          </div>        
        </div>
      </div>
    </div>
  );
};

function SigParser () {
  const fadeIn = useFadeIn();

  return (
    <div className= {`${fadeIn ? 'fade-in' : ''}`}>
      <Navigation />
      <div className = "content-grid">
        <HeroSection />
        <HomeSection />
        <ViceSection />
        <QueryGenSection />
        <OverviewSection />
        <Footer />
      </div> 
    </div>
  );
}

export default SigParser;