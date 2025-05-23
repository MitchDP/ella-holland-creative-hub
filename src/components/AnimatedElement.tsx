
import React, { forwardRef, ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'scale-in';
  delay?: number;
  threshold?: number;
  once?: boolean;
  as?: React.ElementType;
}

const AnimatedElement = forwardRef<HTMLDivElement, AnimatedElementProps>(
  ({ children, className, animation = 'fade-in', delay = 0, threshold = 0.1, once = true, as: Component = 'div' }, ref) => {
    const { ref: animationRef, isVisible } = useScrollAnimation({ threshold, once: true }); // Force once: true

    const style = {
      opacity: 0,
      transform: animation === 'slide-up' ? 'translateY(20px)' : 
                animation === 'scale-in' ? 'scale(0.95)' : 'none',
      transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
      transitionDelay: `${delay}ms`,
      willChange: 'transform, opacity',
      backfaceVisibility: 'hidden' as const,
      WebkitBackfaceVisibility: 'hidden' as const,
      WebkitTransform: isVisible ? 'translate3d(0,0,0)' : 
                      animation === 'slide-up' ? 'translate3d(0,20px,0)' : 
                      animation === 'scale-in' ? 'scale3d(0.95,0.95,1)' : 'translate3d(0,0,0)',
      ...(isVisible && {
        opacity: 1,
        transform: 'none'
      })
    };

    return (
      <Component 
        ref={(node: HTMLDivElement) => {
          animationRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn(className, isVisible ? 'animate-visible' : '')}
        style={style}
      >
        {children}
      </Component>
    );
  }
);

AnimatedElement.displayName = 'AnimatedElement';

export default AnimatedElement;
