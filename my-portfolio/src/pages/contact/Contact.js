import { LinkedInSVGIcon, GitHubSVGIcon } from '../../assets/SVGs';
import React, { useState, useEffect } from 'react';
import './contact.css';
import SystemFeedback from '../../components/SysFeedback';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Honeypot field
  });

  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const [startTime, setStartTime] = useState(Date.now()); // Track start time

  useEffect(() => {
    setStartTime(Date.now()); // Set start time when component mounts
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Time-based check: reject if submitted too fast (less than 2 seconds)
    const timeTaken = Date.now() - startTime;
    if (timeTaken < 2000) {
      setFeedback({
        message: 'Form submission was too fast, please try again.',
        type: 'negative',
      });
      return;
    }

    // Honeypot check: if honeypot field is filled, reject submission
    if (formData.honeypot) {
      setFeedback({
        message: 'Bot detected. Submission rejected.',
        type: 'negative',
      });
      return;
    }

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
      setFormData({ name: '', email: '', message: '', honeypot: '' }); // Clear form including honeypot
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
        <h2>Get in Touch</h2>
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
                autoComplete="name"
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
                autoComplete="email"
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
              autoComplete="off"
            ></textarea>
          </div>

          {/* Honeypot Field (Hidden from Users) */}
          <div style={{ display: 'none' }}>
            <label htmlFor="honeypot">Leave this field blank</label>
            <input
              type="text"
              id="honeypot"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
            />
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
            <p>Created using AWS: Lambda, SES and API Gateway</p>
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
