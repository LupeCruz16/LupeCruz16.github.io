import { useState, useEffect } from 'react';
import "./fadeIn.css"

const useFadeIn = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return fadeIn;
};

export default useFadeIn;