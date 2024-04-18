import { useState, useEffect } from 'react';
import "./fadeIn.css"

const useFadeIn = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    setFadeIn(true);
    const timer = setTimeout(() => {
      setShowProjects(true);
    }, 1000); // Delay Projects component to load after 1 second

    return () => clearTimeout(timer);
  }, []);

  return { fadeIn, showProjects };
};

export default useFadeIn;