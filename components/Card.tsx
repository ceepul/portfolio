'use client';

import { FunctionComponent, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Next.js Link for navigation

interface DropDownItem {
  heading: string;
  body: string[];
}

interface CardProps {
  id: string;
  media: string;
  mediaAlt: string;
  showInfo: boolean;
  title: string;
  subtitle: string;
  dropDownItems: DropDownItem[];
  className?: string;
}

const Card: FunctionComponent<CardProps> = ({
  id, media, mediaAlt, showInfo, title, subtitle, dropDownItems, className,
}) => {
  const [isDropdownVisible, setDropDownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropDownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropDownVisible(false);
  };

  // The target link for the title and image
  const targetLink = `/${title.toLowerCase()}`;

  return (
    <div
      className={`card ${className}`}
      id={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="">
        {/* Conditional wrapper for Image */}
        {showInfo ? (
          <Link href={targetLink}>
            <div className="card-media">
              <Image
                className='rounded-xl bg-red-400'
                priority
                src={isDropdownVisible ? '/headshot-Smiley-1200-800.jpg' : media}
                width={400}
                height={600}
                alt={mediaAlt}
              />
            </div>
          </Link>
        ) : (
          <div className="card-media">
            <Image
              className='rounded-xl bg-red-400'
              priority
              src={isDropdownVisible ? '/headshot-Smiley-1200-800.jpg' : media}
              width={400}
              height={600}
              alt={mediaAlt}
            />
          </div>
        )}

        {/* Title and Subtitle */}
        <div className={`m-3 transition-opacity duration-500 ease-in-out ${showInfo ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-sm font-extralight text-white">{title}</div>
          <div className="text-sm font-extralight text-gray-300">{subtitle}</div>
        </div>

        {/* Dropdown Items */}
        {showInfo && (
          <ul className="m-3 space-y-4">
            {dropDownItems.map((item, index) => (
              <li
                key={index}
                className={
                  isDropdownVisible
                    ? `opacity-100 translate-y-2 transition-all duration-500 ease-in-out delay-[${index * 0.2}s]`
                    : `opacity-0 -translate-y-4 transition-all duration-500 ease-in-out delay-[${index * 0.2}s]`
                }
              >
                {showInfo ? (
                  <Link href={`${targetLink}#${item.heading.toLowerCase()}`}>
                    <h4 className="text-sm font-extralight text-white">{item.heading}</h4>
                  </Link>
                ) : (
                  <h4 className="text-sm font-extralight text-white">{item.heading}</h4>
                )}
                <ul className="mt-1 space-y-1">
                  {item.body.map((text, bodyIndex) => (
                    <p key={bodyIndex} className="text-sm font-extralight text-gray-400">{text}</p>
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
