import { useEffect, useState } from "react";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (windowDimensions.width <= 480) return 'mobile'
  if (windowDimensions.width <= 768) return 'tab'
  if (windowDimensions.width <= 992) return 'desktop'
  if (windowDimensions.width <= 1200) return 'desktop'
  return 'desktop'
}
export default useWindowDimensions;