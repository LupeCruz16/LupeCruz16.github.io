// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="text-m">Contact Me</h2>
      <p>
        You can reach me via email at{' '}
        <a href="mailto:guacruz.16@gmail.com">guacruz.16@gmail.com</a>
      </p>
      <div className="social-icons">
        <a
          href="https://github.com/LupeCruz16"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/guadalupe-cruz-a65a31254/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;
