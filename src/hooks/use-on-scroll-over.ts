import { useEffect, useState } from 'react';

export function useOnScrollOver(thresholdPixels: number) {
  const [scrollOver, setScrollOver] = useState(false);

  useEffect(() => {
    const updateScrollOver = () => {
      const scrollY = window.pageYOffset;

      setScrollOver(scrollY > thresholdPixels ? true : false);
    };

    window.addEventListener('scroll', updateScrollOver);

    return () => window.removeEventListener('scroll', updateScrollOver);
  }, [thresholdPixels]);

  return scrollOver;
}
