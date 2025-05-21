import { useEffect, useRef, useState, useCallback } from 'react';

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
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Create callback outside of useEffect to maintain reference stability
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      // For iOS Safari, we need to be more aggressive with considering things "visible"
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        setIsVisible(true);
        hasAnimatedRef.current = true;
        
        // If once is true and we've seen the element, disconnect the observer
        if (once && observerRef.current) {
          observerRef.current.disconnect();
          observerRef.current = null;
        }
      } else if (!once && !hasAnimatedRef.current) {
        // Only hide the element if once is false AND it hasn't been animated before
        setIsVisible(false);
      }
    });
  }, [once]);

  useEffect(() => {
    // If element has already been animated and once is true, keep it visible
    if (hasAnimatedRef.current && once) {
      setIsVisible(true);
      return;
    }

    const currentElement = elementRef.current;
    if (!currentElement) return;

    // Clean up any existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create a new observer
    observerRef.current = new IntersectionObserver(
      handleIntersection,
      { 
        threshold, 
        rootMargin,
        // Add a small delay for iOS to ensure proper detection
        delay: 100
      } as IntersectionObserverInit
    );

    observerRef.current.observe(currentElement);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [threshold, rootMargin, once, handleIntersection]);

  // For iOS, we need to ensure state is preserved across route changes
  useEffect(() => {
    if (hasAnimatedRef.current && once) {
      setIsVisible(true);
    }
  }, [once]);

  return { ref: elementRef, isVisible };
};
