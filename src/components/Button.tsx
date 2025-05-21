
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'rounded-md font-medium transition-all btn-hover inline-flex items-center justify-center',
        {
          'bg-pink-light hover:bg-pink text-primary-foreground border border-pink': variant === 'primary',
          'bg-cream hover:bg-cream-dark text-secondary-foreground border border-cream-dark': variant === 'secondary',
          'bg-transparent border border-current hover:bg-accent/10': variant === 'outline',
          'text-sm px-3 py-1.5': size === 'sm',
          'text-sm px-4 py-2': size === 'md',
          'text-base px-6 py-3': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
