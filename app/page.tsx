'use client';

import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import Card from '@/components/Card';
import Header from '@/components/Header';

const useScreenSize = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleResize = () => setIsLargeScreen(mediaQuery.matches);

    // Set initial value
    handleResize();

    // Add listener
    mediaQuery.addEventListener('change', handleResize);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return isLargeScreen;
};

export default function Home() {
  const isLargeScreen = useScreenSize();

  const headingLineOne = "HELLO, I'M";
  const headingLineTwo = 'RUSSELL';
  const headingLineThree = 'FENTON';

  const [fanUp, setFanUp] = useState<boolean>(false);
  const [fanOut, setFanOut] = useState<boolean>(false);
  const [animationInProgress, setAnimationInProgress] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Debounce function
  const debounce = (func: (...args: unknown[]) => void, delay: number) => {
    let timeout: number;
    return (...args: unknown[]) => {
      clearTimeout(timeout);
      timeout = window.setTimeout(() => func(...args), delay);
    };
  };

  // Handle scroll with debounce and animation control
  useEffect(() => {
    const debouncedHandleScroll = debounce(() => {
      if (animationInProgress) return;

      const { scrollY } = window;
      const { scrollHeight, clientHeight } = document.documentElement;

      const atTop = scrollY === 0;
      const atBottom = scrollY + clientHeight === scrollHeight;

      if (isLargeScreen && atTop && fanUp) {
        setAnimationInProgress(true);
        setFanOut(false);
        setTimeout(() => {
          setFanUp(false);
          setAnimationInProgress(false);
        }, 500);
      } else if (atBottom && !fanUp) {
        setAnimationInProgress(true);
        setFanUp(true);
        setTimeout(() => {
          setFanOut(true);
          setAnimationInProgress(false);
        }, 500);
      }
    }, 100);

    const handleScroll = () => debouncedHandleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fanUp, fanOut, animationInProgress, isLargeScreen]);

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedUp: () => {
      if (window.scrollY === 0 && !animationInProgress) {
        if (fanUp) {
          setAnimationInProgress(true);
          setFanOut(false);
          setTimeout(() => {
            setFanUp(false);
            setAnimationInProgress(false);
          }, 500);
        }
      }
    },
    onSwipedDown: () => {
      if (isLargeScreen && fanUp && !animationInProgress) {
        setAnimationInProgress(true);
        setFanOut(false);
        setTimeout(() => {
          setFanUp(false);
          setAnimationInProgress(false);
        }, 500);
      }
    },
    onSwipedLeft: () => {
      if (fanOut) setCurrentIndex((prev) => Math.min(prev + 1, 3));
    },
    onSwipedRight: () => {
      if (fanOut) setCurrentIndex((prev) => Math.max(prev - 1, 0));
    },
    preventScrollOnSwipe: false,
    trackMouse: true,
  });

  const CARD_DATA = [
    {
      id: 'about',
      media: '/headshot.png',
      mediaHover: '/headshot-smiley.png',
      mediaAlt: 'Card 1',
      title: 'ABOUT',
      subtitle: 'ME',
      dropDownItems: [
        {
          heading: 'EDUCATION',
          body: [
            'BE, Mechanical Engineering, Sep 19 - Apr 24',
            'Study Abroad, Australian National University, Feb 23 - Jun 23',
          ],
        },
        {
          heading: 'EXPERIENCE',
          body: [
            'Captain, TDot Water Taxi, Jul 20 - Oct 24',
            'Fenton Lawn Care, May 17 - Sep 20',
          ],
        },
      ],
    },
    {
      id: 'engineering',
      media: '/gears-photo.jpg',
      mediaHover: '/gears-photo.jpg',
      mediaAlt: 'Card 2',
      title: 'ENGINEERING',
      subtitle: 'MECHANICAL',
      dropDownItems: [
        {
          heading: 'ELECTROMECHANICAL HARVESTER',
          body: [
            'harness energy from animal movement',
            'perpetually power GPS tracker',
            'design team of 4',
          ],
        },
        {
          heading: 'COMPOUND PLANETARY GEARBOX',
          body: [
            '3D printed gearbox for use in a machine prototype',
            'designed in SolidWorks with 3D printing tolerances in mind',
          ],
        },
        {
          heading: 'NOTABLE COURSES',
          body: [
            'Adv Mechatronic System Design',
            'Robotic Systems',
            'Applied Fluids & Thermodynamics',
          ],
        },
      ],
    },
    {
      id: 'dev',
      media: '/three-concept-photo.png',
      mediaHover: '/three-concept-video-md.mp4',
      isVideo: true,
      mediaAlt: 'Card 3',
      title: 'DEV',
      subtitle: 'FULL-STACK',
      dropDownItems: [
        {
          heading: 'SHOPMATE AI',
          body: [
            'shopify app - virtual sales assistant',
            'JS, React, AWS, PineconeDB, OpenAI',
          ],
        },
        {
          heading: '3D VIRTUAL TRY-ON',
          body: [
            'virtual try-on for ecommerce using avatars',
            'hobby project to evaluate idea',
            'ThreeJS',
          ],
        },
        {
          heading: 'SOLANA PAY',
          body: [
            'developed an online store using blockchain transactions on Solana',
            'Buildspace project',
          ],
        },
      ],
    },
    {
      id: 'hobbies',
      media: '/led-panels.jpg',
      mediaHover: '/led-panels-video.mp4',
      isVideo: true,
      mediaAlt: 'Card 4',
      title: 'HOBBIES',
      subtitle: 'MISC PROJECTS',
      dropDownItems: [
        {
          heading: 'FAUX-NANOLEAF',
          body: [
            'designed, built, and coded nanoleaf-like LED panels',
            'arduino hardware / software',
          ],
        },
        {
          heading: '3D PRINTING',
          body: ['5+ years designing 3D prints'],
        },
        {
          heading: 'DIY FPV DRONE',
          body: [
            'spec & soldered components for a racing drone',
            'configured software',
          ],
        },
        {
          heading: 'BOAT UPHOLSTERY',
          body: ['fast learner', 'complex patterning'],
        },
      ],
    },
  ];

  return (
    <div>
      <Header/>
      <div
        {...swipeHandlers}
        className="relative h-screen flex flex-col items-center justify-center overflow-x-hidden">
        {/* Header Text */}
        <div className={`z-40 pointer-events-none mt-16 absolute text-[4.5em] sm:text-[6.5em] md:text-[8em] lg:text-[148px] font-light leading-[0.8] tracking-tighter 
        transition-opacity duration-500 ease-in-out 
          ${fanUp ? 'opacity-0' : 'opacity-100'}`}>
          <h1 className=''>{headingLineOne}</h1>
          <h1 className='ml-[12vw] lg:ml-48'>{headingLineTwo}</h1>
          <h1 className='ml-[24vw] lg:ml-96'>{headingLineThree}</h1>
        </div>
        <div
          className={'w-full h-[600px]'}
        >
          {/* Cards */}
          {CARD_DATA.map((card, index) => {
            const mobileTransformValue = `${(110 * index) - (110 * currentIndex)}`;
            const mobileStyle = (fanOut && !isLargeScreen)
              ? { transform: `translateX(${mobileTransformValue}%) translateY(-7rem)` }
              : {};
            return (
              <div
                key={card.id}
                className='flex justify-center items-start transition-transform duration-500 ease-in-out'
              >
                <Card
                  id={card.id}
                  media={card.media}
                  mediaHover={card.mediaHover}
                  isVideo={card.isVideo}
                  mediaAlt={card.mediaAlt}
                  showInfo={fanOut}
                  activeCardMobile={!isLargeScreen && index === currentIndex}
                  title={card.title}
                  subtitle={card.subtitle}
                  dropDownItems={card.dropDownItems}
                  style={{
                    zIndex: 30 - index * 10,
                    transform: `${fanUp
                      ? `translateY(-8rem) ${!fanOut ? `rotate(${index * 1}deg) translateX(${index * 4}px)` : ''}`
                      : ''} ${fanOut && isLargeScreen ? `translateX(${-30 + index * 20}vw)` : ''}`,
                    ...mobileStyle,
                  }}
              />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
