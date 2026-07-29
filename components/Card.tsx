'use client';

import {
  FunctionComponent, useEffect, useRef, useState, CSSProperties, Fragment,
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
  /** The deck has fanned out — titles, details and links are live. */
  showInfo: boolean;
  /** This card is the focused one (hovered on desktop, active slide on touch). */
  expanded: boolean;
  onFocusChange?: (focused: boolean) => void;
  title: string;
  subtitle: string;
  dropDownItems: DropDownItem[];
  className?: string;
  style?: CSSProperties;
}

const Card: FunctionComponent<CardProps> = ({
  id, media, mediaHover, isVideo, mediaAlt, addBG, showInfo, expanded,
  onFocusChange, title, subtitle, dropDownItems, className, style,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  // The target link for the image
  const targetLink = `/${title.toLowerCase()}`;

  // Drive the hover video from state so the poster image never unmounts —
  // swapping the element out mid-hover is what caused the old flash.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (expanded && showInfo) {
      const playback = video.play();
      if (playback) playback.catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
      setVideoPlaying(false);
    }
  }, [expanded, showInfo]);

  const mediaBlock = (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-lifted ring-1 ring-black/[0.06] transition-[transform,box-shadow] duration-500 ease-out-expo dark:ring-white/[0.08] ${
        expanded ? 'scale-[1.04] shadow-dramatic' : 'scale-100'
      }`}
    >
      {/* Base still — always mounted, so there is never an empty frame */}
      <Image
        className={`h-[360px] w-60 object-cover transition-transform duration-700 ease-out-expo ${
          addBG ? 'bg-accent' : ''
        } ${expanded ? 'scale-105' : 'scale-100'}`}
        priority
        src={media}
        width={400}
        height={600}
        alt={mediaAlt}
      />

      {/* Hover layer crossfades over the still */}
      {isVideo ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-[360px] w-60 object-cover transition-opacity duration-500 ease-out-quint ${
            expanded && videoPlaying ? 'opacity-100' : 'opacity-0'
          }`}
          width={400}
          height={600}
          loop
          muted
          preload="metadata"
          playsInline
          poster={media}
          aria-hidden
          onPlaying={() => setVideoPlaying(true)}
        >
          <source src={mediaHover} type="video/mp4" />
        </video>
      ) : (
        <Image
          className={`absolute inset-0 h-[360px] w-60 object-cover transition-opacity duration-500 ease-out-quint ${
            addBG ? 'bg-accent' : ''
          } ${expanded ? 'opacity-100' : 'opacity-0'}`}
          src={mediaHover}
          width={400}
          height={600}
          alt=""
          aria-hidden
        />
      )}

      {/* Scrim so the label stays legible over any artwork */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 ease-out-quint ${
          expanded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Call to action rises out of the bottom edge */}
      <div
        className={`absolute inset-x-0 bottom-4 flex justify-center transition-all duration-500 ease-out-expo ${
          expanded ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        <span className="rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md">
          Click for More Info
        </span>
      </div>
    </div>
  );

  return (
    <div
      // Callers can override the timing wholesale via `style.transition`
      className={`absolute w-60 transition-transform duration-700 ease-out-expo ${className ?? ''}`}
      style={style}
      id={id}
      onMouseEnter={() => onFocusChange?.(true)}
      onMouseLeave={() => onFocusChange?.(false)}
    >
      {showInfo ? (
        <Link
          href={targetLink}
          aria-label={`${title} — ${subtitle}`}
          onFocus={() => onFocusChange?.(true)}
          onBlur={() => onFocusChange?.(false)}
          className="block rounded-2xl"
        >
          {mediaBlock}
        </Link>
      ) : (
        mediaBlock
      )}

      {/* Title and Subtitle */}
      <div
        className={`m-3 transition-all duration-500 ease-out-expo ${
          showInfo ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        } ${expanded ? 'mt-5' : ''}`}
        // Hold the labels back until the cards have separated, so they do not
        // pile on top of each other mid-fan
        style={{ transitionDelay: showInfo ? '420ms' : '0ms' }}
      >
        <h2 className="h2 tracking-wide">{title}</h2>
        <h5 className="h5">{subtitle}</h5>
      </div>

      {/* Dropdown Items.
          Collapsed to zero height when not expanded so only the card being
          read ever adds scrollable length to the stage. */}
      {showInfo && (
        <div className={expanded ? '' : 'h-0 overflow-hidden'}>
          <ul
            className={`m-3 mt-4 space-y-4 pb-24 ${
              expanded ? '' : 'pointer-events-none'
            }`}
          >
          {dropDownItems.map((item, index) => (
            <li
              key={item.heading}
              style={{
                transition:
                  'opacity 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)',
                opacity: expanded ? 1 : 0,
                transform: expanded ? 'translateY(0)' : 'translateY(-10px)',
                transitionDelay: expanded ? `${index * 70}ms` : '0ms',
              }}
            >
              <Link href={`${targetLink}#${item.heading.toLowerCase()}`}>
                <h3 className="h3 heading-hover font-medium tracking-wide">
                  {item.heading}
                </h3>
              </Link>
              <ul className="mt-2 space-y-1.5">
                {item.body.map((text, bodyIndex) => (
                  <li key={bodyIndex} className="flex items-start gap-1.5">
                    <span
                      aria-hidden
                      className="mt-[0.55rem] h-px w-2 shrink-0 bg-fg-subtle"
                    />
                    <p className="p text-[0.8125rem] leading-snug">
                      {text.split('\n').map((line, i) => (
                        <Fragment key={i}>
                          {line}
                          {i < text.split('\n').length - 1 && <br />}
                        </Fragment>
                      ))}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Card;
