
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  to?: string;
  target?: string;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  to,
  target,
  ...props
}: ButtonProps) => {
  const buttonClasses = cn(
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
  );

  // If 'to' prop is provided, render as Link, otherwise render as button
  if (to) {
    return (
      <Link to={to} target={target} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
