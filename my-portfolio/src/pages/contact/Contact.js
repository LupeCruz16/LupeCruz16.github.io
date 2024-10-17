import { LinkedInSVGIcon, GitHubSVGIcon } from '../../assets/SVGs';
import React, { useState } from 'react';
import './contact.css';
import SystemFeedback from '../../components/SysFeedback';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [feedback, setFeedback] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the body payload
    const requestBody = JSON.stringify({
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    // Using .env file to store API URL
    const apiUrl = process.env.REACT_APP_FORM_API_URL;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });

    if (response.ok) {
      setFeedback({
        message: 'Thank you for reaching out! I will get back to you asap.',
        type: 'positive',
      });
      setFormData({ name: '', email: '', message: '' });
    } else {
      setFeedback({
        message: 'Something went wrong, please try again.',
        type: 'negative',
      });
    }
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

        {feedback.message && (
          <SystemFeedback
            message={feedback.message}
            type={feedback.type}
            clearFeedback={() => setFeedback({ message: '', type: '' })}
          />
        )}

        <div className="contact-footer-container">
          <div>
            <p>Powered by AWS: Lambda, SES and API Gateway</p>
          </div>
          <div>
            <a href="mailto:guacruz.16@gmail.com" className="global-link-2">
              <p>guacruz.16@gmail.com</p>
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
      </div>
    </section>
  );
};

export default Contact;
