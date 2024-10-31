import React, { useEffect, useState } from 'react';

const SystemFeedback = ({ message, type, duration = 10000, clearFeedback }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the feedback message after a specified duration
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (clearFeedback) clearFeedback(); // Call clearFeedback if provided to reset state on parent component
    }, duration);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [duration, clearFeedback]);

  // Define inline styles for positive and negative feedback
  const feedbackStyles = {
    container: {
      padding: '0.5rem',
      borderRadius: '10px',
      textAlign: 'center',
      margin: '20px 0',
      marginTop: '2.2rem',
      fontWeight: 'bold',
      transition: 'opacity 0.5s ease',
      opacity: isVisible ? 1 : 0,
    },
    positive: {
      backgroundColor: '#d4edda',
      color: 'black',
    },
    negative: {
      backgroundColor: '#f8d7da',
      color: 'black',
    },
  };

  const appliedStyles =
    type === 'positive'
      ? { ...feedbackStyles.container, ...feedbackStyles.positive }
      : { ...feedbackStyles.container, ...feedbackStyles.negative };

  // Don't render anything if feedback is not visible
  if (!isVisible) return null;

  return (
    <div style={appliedStyles}>
      <p>{message}</p>
    </div>
  );
};

export default SystemFeedback;
