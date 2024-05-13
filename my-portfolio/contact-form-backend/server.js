const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001;
const MY_EMAIL = 'guacruz.16@gmail.com';
const MY_EMAIL_PASS = '';

// Middleware to parse JSON request bodies
app.use(express.json());

// Endpoint to handle form submissions
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
  
    // Send form submission details to email address
    sendSubmissionDetails(name, email, message);
  
    // Send confirmation response to the client
    res.status(200).json({ message: 'Message sent successfully!' });
  });
  
  // Function to send form submission details to email address
  const sendSubmissionDetails = (name, email, message) => {
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Configure email service here
      service: 'gmail',
      auth: {
        user: MY_EMAIL, 
        pass: MY_EMAIL_PASS
      }
    });
  
    // Define email options
    const mailOptions = {
      from: MY_EMAIL, 
      to: MY_EMAIL, 
      subject: 'New Message from Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  };
  
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
