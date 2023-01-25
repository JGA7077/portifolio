import {useState, useEffect} from 'react';

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResizeScreen = () => {
    setIsMobile(window.screen.width <= 1024);
  };

  useEffect(() => {
    handleResizeScreen();

    window.addEventListener('resize', handleResizeScreen);
  }, []);

  return isMobile;
};
