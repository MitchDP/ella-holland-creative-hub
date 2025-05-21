import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', once = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    // If element has already been animated and once is true, keep it visible
    if (hasAnimatedRef.current && once) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            hasAnimatedRef.current = true;
            
            // If once is true, disconnect the observer after animation triggers
            if (once) {
              observer.disconnect();
            }
          } else if (!once) {
            // Only hide the element if once is false
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, once]);

  return { ref: elementRef, isVisible };
};
