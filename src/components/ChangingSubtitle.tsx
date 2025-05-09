
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import './ChangingSubtitle.css';

interface ChangingSubtitleProps {
  subtitles: string[];
  className?: string;
  interval?: number; // in milliseconds
}

const ChangingSubtitle = ({
  subtitles,
  className,
  interval = 10000, // default to 10 seconds
}: ChangingSubtitleProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Skip animation on initial render
    if (currentIndex === 0 && !isAnimating) return;

    const timer = setTimeout(() => {
      setIsAnimating(true);
      
      // After animation completes, change the text and reset animation
      const textChangeTimer = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
        setIsAnimating(false);
      }, 1000); // Animation duration
      
      return () => clearTimeout(textChangeTimer);
    }, interval - 1000); // Start animation 1 second before changing text
    
    return () => clearTimeout(timer);
  }, [currentIndex, interval, subtitles.length, isAnimating]);

  return (
    <div className={cn("changing-subtitle-container", className)}>
      <div className={cn(
        "changing-subtitle", 
        isAnimating ? "animate-out" : "animate-in"
      )}>
        {subtitles[currentIndex]}
      </div>
    </div>
  );
};

export default ChangingSubtitle;
