'use client'

import { useEffect, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Card from '@/components/Card';

export default function Home() {
  /* const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      console.log('scrolled');
    };

    const scrollContainer = scrollContainerRef.current;

    scrollContainer?.addEventListener('scroll', handleScroll)

    return () => {
      scrollContainer?.removeEventListener('scroll', handleScroll)
    }
  }, []); */

  const [fanUp, setfanUp] = useState<boolean>(false)
  const [fanOut, setfanOut] = useState<boolean>(false);

  const handleClick = () => {
    const timer = setTimeout(() => {
      fanUp ? setfanUp(false) : setfanOut(true)
    }, 500);

    fanUp ? setfanOut(false) : setfanUp(true)
    
    return () => clearTimeout(timer)
  }

  // Use swipeable to handle swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: () => console.log('Swiped left'),
    onSwipedRight: () => console.log('Swiped right'),
    trackMouse: true, // Enable swipe on desktop as well
  });

  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      <div 
        className={`w-full h-[600px] flex justify-center items-center`}
        {...handlers}
      >
        <Card
          id="card-1"
          media="/Headshot-1200-800.jpg"
          mediaAlt="Card 1"
          className={`z-40
            ${fanUp ? `transform translate-y-[-15vh]` : "transform translate-y-0 translate-x-[0%]"}
            ${fanOut ? 'translate-x-[-30vw]' : ''}
          `}
        />
        <Card
          id="card-2"
          media="/Headshot-1200-800.jpg"
          mediaAlt="Card 2"
          className={`z-30
            ${fanUp ? `transform translate-y-[-15vh] ${!fanOut && 'rotate-1 translate-x-1'}` : ''} 
            ${fanOut ? 'translate-x-[-10vw] rotate-0' : ''}
          `}
        />
        <Card
          id="card-3"
          media="/Headshot-1200-800.jpg"
          mediaAlt="Card 3"
          className={`z-20 
            ${fanUp ? `transform translate-y-[-15vh] ${!fanOut && 'rotate-2 translate-x-2'}`: ""}
            ${fanOut ? 'translate-x-[10vw] rotate-0' : ''}
          `}
        />
        <Card
          id="card-4"
          media="/Headshot-1200-800.jpg"
          mediaAlt="Card 4"
          className={`z-10 
            ${fanUp ? `transform translate-y-[-15vh] ${!fanOut && 'rotate-3 translate-x-3'}`: ""}
            ${fanOut ? 'translate-x-[30vw] rotate-0' : ''}
          `}
        />
      </div>
      <button
        onClick={handleClick}
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        {fanUp ? "Reset Cards" : "Fan Out Cards"}
      </button>
    </div>
  );
}
