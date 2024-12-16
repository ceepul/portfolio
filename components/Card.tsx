'use client';

import {
  FunctionComponent, useState, useEffect, CSSProperties,
} from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface DropDownItem {
  heading: string;
  body: string[];
}

interface CardProps {
  id: string;
  media: string;
  mediaHover: string;
  isVideo?: boolean;
  mediaAlt: string;
  addBG?: boolean;
  showInfo: boolean;
  activeCardMobile: boolean;
  title: string;
  subtitle: string;
  dropDownItems: DropDownItem[];
  className?: string;
  style?: CSSProperties;
}

const Card: FunctionComponent<CardProps> = ({
  id, media, mediaHover, isVideo, mediaAlt, addBG,
  showInfo, activeCardMobile, title, subtitle, dropDownItems, className, style,
}) => {
  const [isDropdownVisible, setDropDownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropDownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropDownVisible(false);
  };

  useEffect(() => {
    if (activeCardMobile) {
      setDropDownVisible(true);
    } else {
      setDropDownVisible(false);
    }
  }, [activeCardMobile]);

  // The target link for the image
  const targetLink = `/${title.toLowerCase()}`;

  return (
    <div
      className={`absolute transition-transform duration-700 ease-in-out w-60 ${className}`}
      style={style}
      id={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* {showInfo && isDropdownVisible
      && <Link href={targetLink} className='w-full flex justify-center'>
          <h3 className='h3 -mt-7 mb-2'>- Click for more Info -</h3>
        </Link>
      } */}
      <div>
        {/* Conditional wrapper for Image */}
        {showInfo ? (
          <Link href={targetLink}>
            <div className={`${isDropdownVisible && 'scale-105'}`}>
              {isVideo && isDropdownVisible ? (
                <video
                  className="w-60 h-[360px] rounded-xl shadow-md"
                  width={400}
                  height={600}
                  autoPlay
                  loop
                  muted
                  preload='auto'
                  playsInline
                  poster={media}
                >
                  <source src={mediaHover} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  className={`w-60 h-[360px] rounded-xl shadow-md ${addBG && 'bg-red-400'}`}
                  priority
                  src={isDropdownVisible ? mediaHover : media}
                  width={400}
                  height={600}
                  alt={mediaAlt}
                />
              )}
            </div>
          </Link>
        ) : (
          <div>
              <Image
                className={`w-60 h-[360px] rounded-xl shadow-md ${addBG && 'bg-red-400'}`}
                priority
                src={media}
                width={360}
                height={540}
                alt={mediaAlt}
              />
          </div>
        )}

        {/* Title and Subtitle */}
        <div className={`m-3 transition-opacity duration-500 ease-in-out ${showInfo ? 'opacity-100' : 'opacity-0'} ${isDropdownVisible && 'mt-5'}`}>
          <h2 className='h2'>{title}</h2>
          <h5 className='h5'>{subtitle}</h5>
        </div>

        {/* Dropdown Items */}
        {showInfo && (
          <ul className="m-3 mt-4 mb-10 space-y-5">
            {dropDownItems.map((item, index) => (
              <li
                key={index}
                style={{
                  transition: 'all 0.5s ease-in-out',
                  opacity: isDropdownVisible ? 1 : 0,
                  transform: isDropdownVisible
                    ? 'translateY(0)'
                    : 'translateY(-16px)',
                  transitionDelay: `${index * 0.15}s`,
                }}
              >
                <Link href={`${targetLink}#${item.heading.toLowerCase()}`}>
                  <h3 className="h3 text-white">{item.heading}</h3>
                </Link>
                <ul className="mt-2 space-y-2">
                  {item.body.map((text, bodyIndex) => (
                    <div key={bodyIndex} className='flex items-start gap-1'>
                      <p className='p'>{'-'}</p>
                      <p className="p">{`${text}`}</p>
                    </div>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Card;
