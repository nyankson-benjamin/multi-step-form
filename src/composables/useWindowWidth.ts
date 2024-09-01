import { useState, useEffect } from 'react';

export default function useWindowWidth() {
  // Define a state variable to store the window width
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  // Define a handler to update the window width
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Use useEffect to add and remove the event listener
  useEffect(() => {
    // Add the event listener on mount
    window.addEventListener('resize', handleResize);

    // Cleanup: remove the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount and unmount

  return windowWidth;
}
