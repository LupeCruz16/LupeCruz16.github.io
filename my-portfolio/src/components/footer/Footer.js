import { GitHubSVGIcon, LinkedInSVGIcon } from '../../assets/SVGs.js';
import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="text-s">
        Get in touch:{' '}
        <a href="mailto:guacruz.16@gmail.com" className="email-link">
          guacruz.16@gmail.com
        </a>
      </div>
      <div className="footer-socials">
        <GitHubSVGIcon
          href="https://github.com/LupeCruz16"
          classAttributes="footer-social-icon"
        />
        <LinkedInSVGIcon
          href="https://www.linkedin.com/in/guadalupe-cruz-a65a31254/"
          classAttributes="footer-social-icon"
        />
      </div>
    </footer>
  );
}

export default Footer;
