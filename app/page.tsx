'use client';

import { useState } from 'react';
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

  const headingLineOne = "HELLO, I'M";
  const headingLineTwo = 'RUSSELL';
  const headingLineThree = 'FENTON';

  const [fanUp, setfanUp] = useState<boolean>(false);
  const [fanOut, setfanOut] = useState<boolean>(false);

  const handleClick = () => {
    const timer = setTimeout(() => {
      if (fanUp) {
        setfanUp(false);
      } else {
        setfanOut(true);
      }
    }, 500);

    if (fanUp) {
      setfanOut(false);
    } else {
      setfanUp(true);
    }

    return () => clearTimeout(timer);
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      {/* Header Text */}
      <div className={`z-40 pointer-events-none mt-32 absolute text-[156px] font-light leading-[0.8] tracking-tighter transition-opacity duration-500 ease-in-out ${fanUp ? 'opacity-0' : 'opacity-100'}`}>
          <h1 className=''>{headingLineOne}</h1>
          <h1 className='ml-48'>{headingLineTwo}</h1>
          <h1 className='ml-96'>{headingLineThree}</h1>
        </div>
      <div
        className={'mt-48 w-full h-[600px] flex justify-center items-start'}
      >
        {/* Cards */}
        <Card
          id="about"
          media="/Headshot-no-bg.png"
          mediaAlt="Card 1"
          showInfo={fanOut}
          title = "ABOUT"
          subtitle = "ME"
          dropDownItems={[
            {
              heading: 'EDUCATION',
              body: ['BE, Mechanical Engineering, Sep 19 - Apr 24', 'Study Abroad, Australian National University, Feb 23 - Jun 23'],
            },
            {
              heading: 'EXPERIENCE',
              body: ['Captain, TDot Water Taxi, Jul 20 - Oct 24', 'Fenton Lawn Care, May 17 - Sep 20'],
            },
          ]}
          className={`z-30
            ${fanUp ? 'transform translate-y-[-15vh]' : 'transform translate-y-0 translate-x-[0%]'}
            ${fanOut ? 'translate-x-[-30vw]' : ''}
          `}
        />
        <Card
          id="engineering"
          media="/Headshot-1200-800.jpg"
          mediaAlt="Card 2"
          showInfo={fanOut}
          title = "ENGINEERING"
          subtitle = "MECHANICAL"
          dropDownItems={[]}
          className={`z-20
            ${fanUp ? `transform translate-y-[-15vh] ${!fanOut && 'rotate-1 translate-x-1'}` : ''} 
            ${fanOut ? 'translate-x-[-10vw] rotate-0' : ''}
          `}
        />
        <Card
          id="dev"
          media="/Headshot-1200-800.jpg"
          mediaAlt="Card 3"
          showInfo={fanOut}
          title = "DEV"
          subtitle = "FULL-STACK"
          dropDownItems={[]}
          className={`z-10 
            ${fanUp ? `transform translate-y-[-15vh] ${!fanOut && 'rotate-2 translate-x-2'}` : ''}
            ${fanOut ? 'translate-x-[10vw] rotate-0' : ''}
          `}
        />
        <Card
          id="hobbies"
          media="/Headshot-1200-800.jpg"
          mediaAlt="Card 4"
          showInfo={fanOut}
          title = "HOBBIES"
          subtitle = "MISC PROJECTS"
          dropDownItems={[]}
          className={` 
            ${fanUp ? `transform translate-y-[-15vh] ${!fanOut && 'rotate-3 translate-x-3'}` : ''}
            ${fanOut ? 'translate-x-[30vw] rotate-0' : ''}
          `}
        />
      </div>
      <button
        onClick={handleClick}
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        {fanUp ? 'Reset Cards' : 'Fan Out Cards'}
      </button>
    </div>
  );
}
