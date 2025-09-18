import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade' | 'slide-left' | 'slide-right' | 'scale';
  delay?: number;
  className?: string;
}

export const AnimatedSection = ({ 
  children, 
  animation = 'fade', 
  delay = 0, 
  className = '' 
}: AnimatedSectionProps) => {
  const animationClass = {
    'fade': 'animate-on-scroll',
    'slide-left': 'animate-slide-left', 
    'slide-right': 'animate-slide-right',
    'scale': 'animate-scale-in'
  }[animation];

  return (
    <div 
      className={`${animationClass} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};