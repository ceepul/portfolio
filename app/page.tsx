'use client';

import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import Card from '@/components/Card';
import Header from '@/components/Header';
import ScrollCTA from '@/components/ScrollCTA';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    isLargeScreen: false,
    isExtraLargeScreen: false,
    hasHoverCapability: false,
  });

  useEffect(() => {
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)');
    const xlMediaQuery = window.matchMedia('(min-width: 1280px)');
    const hoverMediaQuery = window.matchMedia('(hover: hover)');

    const handleResize = () => {
      setScreenSize({
        isLargeScreen: lgMediaQuery.matches,
        isExtraLargeScreen: xlMediaQuery.matches,
        hasHoverCapability: hoverMediaQuery.matches,
      });
    };

    // Set initial value
    handleResize();

    // Add listeners
    lgMediaQuery.addEventListener('change', handleResize);
    xlMediaQuery.addEventListener('change', handleResize);
    hoverMediaQuery.addEventListener('change', handleResize);

    // Cleanup listeners on unmount
    return () => {
      lgMediaQuery.removeEventListener('change', handleResize);
      xlMediaQuery.removeEventListener('change', handleResize);
      hoverMediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return screenSize;
};

export default function Home() {
  const { isLargeScreen, isExtraLargeScreen, hasHoverCapability } = useScreenSize();

  // Condition considers both screen size AND hover capability
  const useDesktopLayout = isLargeScreen && hasHoverCapability;

  const headingLineOne = 'RUSSELL';
  const headingLineTwo = 'FENTON';

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
      if (animationInProgress || !useDesktopLayout) return;

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

    // Call handleScroll immediately on component mount to ensure animation reflects scroll state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fanUp, fanOut, animationInProgress, useDesktopLayout, hasOpened]);

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedUp: () => {
      if (!hasOpened && !animationInProgress && !useDesktopLayout) {
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
      mediaAlt:
        'Image of Russell Fenton, transitions to smiling when hovering cursor',
      addBg: true,
      title: 'ABOUT',
      subtitle: 'ME',
      dropDownItems: [
        {
          heading: 'EDUCATION',
          body: [
            'BE, Mechanical Engineering, University of Guelph\nSep 19 - Apr 24',
            'Exchange, Australian National University\nFeb 23 - Jun 23',
          ],
        },
        {
          heading: 'EXPERIENCE',
          body: [
            'AI Trainer, DataAnnotation\nDec 24 - Present',
            'Captain, TDot Water Taxi\nJul 20 - Oct 24',
            'Self-Employed, Fenton Lawn Care\nMay 17 - Sep 20',
          ],
        },
      ],
    },
    {
      id: 'engineering',
      media: '/engineering/gearbox-thumbnail.jpg',
      mediaHover: '/engineering/gearbox-animation.mp4',
      isVideo: true,
      mediaAlt:
        'Image showing CAD model of compound planetary gearbox, animated when hovering cursor',
      title: 'ENGINEERING',
      subtitle: 'MECHANICAL',
      dropDownItems: [
        {
          heading: 'ELECTROMECHANICAL HARVESTER',
          body: [
            'Harness energy from animal movement to perpetually power GPS tracker.',
            'Design team of 4. Built prototype. Presented to industry professionals.',
          ],
        },
        {
          heading: 'COMPOUND PLANETARY GEARBOX',
          body: [
            '3D printed gearbox for use in a bucket elevator prototype.',
            'Designed in SolidWorks with regard for 3D printing tolerances.',
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
      media: '/dev/three-concept-photo.png',
      mediaHover: '/dev/three-concept-video-md.mp4',
      isVideo: true,
      mediaAlt:
        '3D avatar wearing a t-shirt on an e-commerce page, with a video showcasing a 360-degree spin when hovered over with the cursor.',
      title: 'DEV',
      subtitle: 'FULL-STACK',
      dropDownItems: [
        {
          heading: 'SHOPMATE AI',
          body: [
            'Virtual sales assistant for Shopify stores.',
            'JS, React, AWS, PineconeDB, OpenAI',
          ],
        },
        {
          heading: 'SOLANA PAY STOREFRONT',
          body: [
            'Developed an online store using blockchain transactions on Solana.',
            'Buildspace project.',
          ],
        },
        {
          heading: '3D VIRTUAL TRY-ON',
          body: [
            'Virtual try-on system for ecommerce, using avatars.',
            'Hobby project incorporating Three.js for 3D web graphics.',
          ],
        },
      ],
    },
    {
      id: 'hobbies',
      media: '/hobbies/led-panels.jpg',
      mediaHover: '/hobbies/led-panels-video.mp4',
      isVideo: true,
      mediaAlt:
        'Image of triangular LED panels on wall, changes color when hovering cursor.',
      title: 'HOBBIES',
      subtitle: 'MISC PROJECTS',
      dropDownItems: [
        {
          heading: 'FAUX NANOLEAF',
          body: [
            'Designed, built, and coded interactive LED wall panels.',
            'Arduino hardware / software',
          ],
        },
        {
          heading: '3D PRINTING',
          body: [
            '5+ years designing and printing parts on Ender 3 Pro.',
            'PLA, PETG, ABS',
          ],
        },
        {
          heading: 'DIY FPV DRONE',
          body: [
            'Spec\'d, built, and tuned a 210mm quadcopter.',
            'Configured Betaflight and tuned PID settings.',
          ],
        },
        {
          heading: 'MARINE UPHOLSTERY',
          body: [
            'Fast learner, able to design and sew custom boat cushions.',
            'Complex patterns with piping and fabric pulls.',
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <Header />
      <div
        {...swipeHandlers}
        className="scrollbar-hide relative h-screen flex flex-col items-center overflow-x-hidden"
      >
        {/* Header Text */}
        <div
          className={`z-40 mt-[calc(25svh+100px)] pointer-events-none absolute text-[4.5em] sm:text-[6.5em] md:text-[8em] lg:text-[148px] font-light leading-[0.8] tracking-tighter 
        transition-opacity duration-500 ease-in-out 
          ${fanUp ? 'opacity-0' : 'opacity-100'}`}
        >
          <h1 className="mt-20">{headingLineOne}</h1>
          <h1 className="ml-[12vw] lg:ml-48">{headingLineTwo}</h1>
        </div>
        <div className={'w-full mt-[calc(25svh-100px)]'}>
          {/* Cards */}
          {CARD_DATA.map((card, index) => {
            const mobileTransformValue = `${110 * index - 110 * currentIndex}`;
            const mobileStyle = fanOut && !useDesktopLayout
              ? {
                transform: `translateX(${mobileTransformValue}%) translateY(calc(-25svh + 128px))`,
              }
              : {};
            return (
              <div
                key={card.id}
                className="flex justify-center items-start transition-transform duration-500 ease-in-out"
              >
                <Card
                  id={card.id}
                  media={card.media}
                  mediaHover={card.mediaHover}
                  isVideo={card.isVideo}
                  mediaAlt={card.mediaAlt}
                  addBG={card.addBg}
                  showInfo={fanOut}
                  activeCardMobile={!useDesktopLayout && index === currentIndex}
                  title={card.title}
                  subtitle={card.subtitle}
                  dropDownItems={card.dropDownItems}
                  style={{
                    zIndex: 30 - index * 10,
                    transform: `${
                      fanUp
                        ? `${
                          isLargeScreen
                            ? 'translateY(calc(-25svh + 160px))'
                            : 'translateY(calc(-25svh + 140px))'
                        } ${
                          !fanOut
                            ? `rotate(${index * 1}deg) translateX(${
                              index * 4
                            }px)`
                            : ''
                        }`
                        : ''
                    } ${
                      fanOut
                        ? `${
                          isExtraLargeScreen
                            ? `translateX(${-450 + index * 300}px)`
                            : `translateX(${-382 + index * 252}px)`
                        }`
                        : ''
                    }`,
                    ...mobileStyle,
                  }}
                />
              </div>
            );
          })}
        </div>
        {/* Conditionally render scroll bar */}
        {!hasOpened && (
          <ScrollCTA
            text={`${useDesktopLayout ? 'Scroll Down' : 'Swipe'}`}
            className={'mt-[420px] sm:mt-[460px] md:mt-[520px]'}
          />
        )}
      </div>
    </div>
  );
}
