import React, { useState } from 'react';
import './contact.css';

import { LinkedInSVGIcon, GitHubSVGIcon } from '../../assets/SVGs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send the form data to an email service or backend)
    console.log(formData);
    alert('Thank you for reaching out!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="home-scroll-section content-grid" id="contact">
      <div>
        <div className="text-m">Get in Touch</div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="name-email-container">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
            ></textarea>
          </div>

          <button type="submit" className="global-bttn">
            <p>Send Message</p>
          </button>
        </form>

        <div className="social-icons">
          <a href="mailto:guacruz.16@gmail.com" className="global-link-2">
            guacruz.16@gmail.com
          </a>
          <GitHubSVGIcon
            href="https://github.com/LupeCruz16"
            classAttributes="social-icon"
          />
          <LinkedInSVGIcon
            href="https://www.linkedin.com/in/guadalupe-cruz-a65a31254/"
            classAttributes="social-icon"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
