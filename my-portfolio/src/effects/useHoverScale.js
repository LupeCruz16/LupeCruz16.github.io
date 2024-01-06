import { useState } from 'react';

const useHoverScale = () => {
  const [hoveredElement, setHoveredElement] = useState(null);

  const handleMouseEnter = (element) => setHoveredElement(element);
  const handleMouseLeave = () => setHoveredElement(null);
  const getScaleStyle = (element) => ({
    transform: hoveredElement === element ? 'scale(1.1)' : 'none',
    transition: 'transform 0.3s ease',
  });

  return { handleMouseEnter, handleMouseLeave, getScaleStyle };
};

export default useHoverScale;