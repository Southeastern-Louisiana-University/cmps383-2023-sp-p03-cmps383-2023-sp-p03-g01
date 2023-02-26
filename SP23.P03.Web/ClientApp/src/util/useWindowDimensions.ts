import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: browserWidth, innerHeight: browserHeight } = window;
  return {
    browserWidth,
    browserHeight,
  };
}

/**
 * Credit: https://stackoverflow.com/a/36862446
 *
 * Get the browser dimensions
 */
export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
