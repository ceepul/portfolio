'use client';

import { FunctionComponent, useState, useEffect } from 'react';
import Image from 'next/image';

interface ScrollCTAProps {
  text: string;
  className?: string;
}

const ScrollCTA: FunctionComponent<ScrollCTAProps> = ({ text, className }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY === 0);
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      <div className="p-4 flex flex-col justify-center items-center">
        <h3 className="h3 text-neutral-400">{text}</h3>
        <div className="w-8 h-8">
          <Image src="/down-chevron.svg" alt="Down Chevron" width={64} height={64} />
        </div>
      </div>
    </div>
  );
};

export default ScrollCTA;
