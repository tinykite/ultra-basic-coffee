import { useEffect, useState } from 'react';

export function useOnScreen(ref, thresholdOptions) {
  const [isIntersecting, setIntersecting] = useState(false);
  const [getThreshold, setThreshold] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
        setThreshold(entry.intersectionRatio);
      },
      {
        threshold: thresholdOptions,
      }
    );

    const currentRef = ref.current;
    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [ref, thresholdOptions]);

  return { isIntersecting, getThreshold };
}