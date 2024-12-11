'use client';

import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import Card from '@/components/Card';
import Header from '@/components/Header';
import ScrollCTA from '@/components/ScrollCTA';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({ isLargeScreen: false, isExtraLargeScreen: false });

  useEffect(() => {
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)');
    const xlMediaQuery = window.matchMedia('(min-width: 1280px)');

    const handleResize = () => {
      setScreenSize({
        isLargeScreen: lgMediaQuery.matches,
        isExtraLargeScreen: xlMediaQuery.matches,
      });
    };

    // Set initial value
    handleResize();

    // Add listeners
    lgMediaQuery.addEventListener('change', handleResize);
    xlMediaQuery.addEventListener('change', handleResize);

    // Cleanup listeners on unmount
    return () => {
      lgMediaQuery.removeEventListener('change', handleResize);
      xlMediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return screenSize;
};

export default function Home() {
  const { isLargeScreen, isExtraLargeScreen } = useScreenSize();

  const headingLineOne = 'RUSSELL';
  const headingLineTwo = 'FENTON';
  // const headingLineThree = 'FENTON';

  const [fanUp, setFanUp] = useState<boolean>(false);
  const [fanOut, setFanOut] = useState<boolean>(false);
  const [animationInProgress, setAnimationInProgress] = useState<boolean>(false);
  const [hasOpened, setHasOpened] = useState<boolean>(false);
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
    const handleScroll = debounce(() => {
      if (animationInProgress || !isLargeScreen) return;

      const { scrollY } = window;
      const { scrollHeight, clientHeight } = document.documentElement;

      const atTop = scrollY === 0;
      const atBottom = scrollY + clientHeight >= scrollHeight;

      if (atTop && fanUp) {
        setAnimationInProgress(true);
        setFanOut(false);
        setTimeout(() => {
          setFanUp(false);
          setAnimationInProgress(false);
        }, 500);
      } else if (atBottom && !fanUp) {
        setAnimationInProgress(true);
        setFanUp(true);
        setHasOpened(true);
        setTimeout(() => {
          setFanOut(true);
          setAnimationInProgress(false);
        }, 500);
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fanUp, fanOut, animationInProgress, isLargeScreen, hasOpened]);

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedUp: () => {
      if (!hasOpened && !animationInProgress && !isLargeScreen) {
        // Only allow the first swipe up to open the fan on mobile
        setAnimationInProgress(true);
        setFanUp(true);
        setHasOpened(true); // Lock the state to prevent further closing
        setTimeout(() => {
          setFanOut(true);
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
    preventScrollOnSwipe: !hasOpened,
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
            'BE, Mechanical Engineering, University of Guelph, Sep 19 - Apr 24',
            'Exchange, Australian National University, Feb 23 - Jun 23',
          ],
        },
        {
          heading: 'EXPERIENCE',
          body: [
            'Captain, TDot Water Taxi, Jul 20 - Oct 24',
            'Self-Employed, Fenton Lawn Care, May 17 - Sep 20',
          ],
        },
      ],
    },
    {
      id: 'engineering',
      media: '/gearbox-thumbnail.jpg',
      mediaHover: '/gearbox-animation.mp4',
      isVideo: true,
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
            'Mechanical Vibration',
            'Machine Design',
            'Material Science',
            'Thermodynamics',
            'Heat and Mass Transfer',
            'Electromechanical Devices',
            'Fluid Mechanics',
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
          heading: 'MARINE UPHOLSTERY',
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
        className="scrollbar-hide relative h-screen flex flex-col items-center overflow-x-hidden">
        {/* Header Text */}
        <div className={`z-40 mt-[calc(25svh+100px)] pointer-events-none absolute text-[4.5em] sm:text-[6.5em] md:text-[8em] lg:text-[148px] font-light leading-[0.8] tracking-tighter 
        transition-opacity duration-500 ease-in-out 
          ${fanUp ? 'opacity-0' : 'opacity-100'}`}>
          <h1 className='mt-20'>{headingLineOne}</h1>
          <h1 className='ml-[12vw] lg:ml-48'>{headingLineTwo}</h1>
          {/* <h1 className='ml-[24vw] lg:ml-96'>{headingLineThree}</h1> */}
        </div>
        <div
          className={'w-full mt-[calc(25svh-100px)]'}
        >
          {/* Cards */}
          {CARD_DATA.map((card, index) => {
            const mobileTransformValue = `${(110 * index) - (110 * currentIndex)}`;
            const mobileStyle = (fanOut && !isLargeScreen)
              ? { transform: `translateX(${mobileTransformValue}%) translateY(calc(-25svh + 128px))` }
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
                      ? `${isLargeScreen ? 'translateY(calc(-25svh + 160px))' : 'translateY(calc(-25svh + 140px))'} ${!fanOut ? `rotate(${index * 1}deg) translateX(${index * 4}px)` : ''}`
                      : ''} ${fanOut ? `${isExtraLargeScreen ? `translateX(${-450 + index * 300}px)` : `translateX(${-382 + index * 252}px)`}` : ''}`,
                    ...mobileStyle,
                  }}
              />
              </div>
            );
          })}
        </div>
        {/* Conditionally render scroll bar */}
        {!hasOpened
          && <ScrollCTA
            text={`${isLargeScreen ? 'Scroll Down' : 'Swipe'}`}
            className='mt-[540px]'
          />
        }
      </div>
    </div>
  );
}
