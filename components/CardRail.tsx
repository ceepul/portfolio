'use client';

import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FiChevronLeft, FiChevronRight,
} from 'react-icons/fi';
import CARD_DATA, { CardDatum } from '@/data/cards';

/** Matches the desktop fan so the deck opens the same way on every device. */
const DEAL_MS = 760;
const STACK_MS = 620;
const DEAL_STAGGER_MS = 70;
const EASE_DEAL = 'cubic-bezier(0.45, 0, 0.25, 1)';

interface SlideProps {
  card: CardDatum;
  index: number;
  active: boolean;
  /** False while the deck is still stacked, before it fans open. */
  dealt: boolean;
  /** Horizontal distance back to the top of the stack, in pixels. */
  stackOffset: number;
  /** How many places this card sits from the top of the stack. */
  depth: number;
  /** Signed distance from the stack's top card, for the splay direction. */
  offsetFromAnchor: number;
  registerRef: (index: number, node: HTMLElement | null) => void;
}

function RailSlide({
  card, index, active, dealt, stackOffset, depth, offsetFromAnchor, registerRef,
}: SlideProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const targetLink = `/${card.title.toLowerCase()}`;

  // Only the centred slide plays, so a rail of videos stays cheap on mobile
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (active) {
      const playback = video.play();
      if (playback) playback.catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
      setVideoPlaying(false);
    }
  }, [active]);

  return (
    <article
      ref={(node) => registerRef(index, node)}
      data-slide={index}
      aria-current={active}
      className="w-[min(76vw,300px)] md:w-[340px]"
      style={{
        // Stacked: every card gathers onto the one you were reading, splayed a
        // little like a held deck. Dealt: each slides out to its rail position.
        transform: dealt
          ? `translateX(0) rotate(0deg) scale(${active ? 1 : 0.94})`
          : `translateX(${stackOffset}px) rotate(${offsetFromAnchor * 2}deg) scale(${
            1 - depth * 0.02
          })`,
        opacity: dealt && !active ? 0.55 : 1,
        // Held for the whole animation, not just the stacked state: dropping
        // to `auto` mid-deal lets DOM order win and flips the last card on top
        zIndex: CARD_DATA.length - depth,
        // Movement radiates out from the top of the stack in both directions
        transition: `transform ${dealt ? DEAL_MS : STACK_MS}ms ${EASE_DEAL} ${
          depth * (dealt ? DEAL_STAGGER_MS : DEAL_STAGGER_MS * 0.6)
        }ms, opacity 600ms ease-out ${dealt ? depth * DEAL_STAGGER_MS : 0}ms`,
      }}
    >
      <Link
        href={targetLink}
        aria-label={`${card.title} — ${card.subtitle}`}
        className="group block"
      >
        <div className="relative aspect-[2/3] overflow-hidden rounded-2xl shadow-lifted ring-1 ring-black/[0.06] dark:ring-white/[0.08]">
          <Image
            src={card.media}
            alt={card.mediaAlt}
            fill
            priority={index < 2}
            sizes="(max-width: 768px) 76vw, 340px"
            className={`object-cover transition-transform duration-700 ease-out-expo ${
              card.addBg ? 'bg-accent' : ''
            } ${active ? 'scale-105' : 'scale-100'}`}
          />

          {card.isVideo ? (
            <video
              ref={videoRef}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out-quint ${
                active && videoPlaying ? 'opacity-100' : 'opacity-0'
              }`}
              loop
              muted
              preload="metadata"
              playsInline
              poster={card.media}
              aria-hidden
              onPlaying={() => setVideoPlaying(true)}
            >
              <source src={card.mediaHover} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={card.mediaHover}
              alt=""
              aria-hidden
              fill
              sizes="(max-width: 768px) 76vw, 340px"
              className={`object-cover transition-opacity duration-500 ease-out-quint ${
                card.addBg ? 'bg-accent' : ''
              } ${active ? 'opacity-100' : 'opacity-0'}`}
            />
          )}

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/65 to-transparent"
          />

          <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/25 px-2.5 py-1 text-xs tracking-[0.18em] text-white backdrop-blur-md">
            {String(index + 1).padStart(2, '0')}
          </span>

          <div
            className={`absolute inset-x-0 bottom-4 flex justify-center transition-all duration-500 ease-out-expo ${
              active ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
          >
            <span className="rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md">
              Click for More Info
            </span>
          </div>
        </div>
      </Link>

      {/* Labels hold back until the deck has fanned, otherwise all four sets
          pile up on top of each other while the cards are still stacked */}
      <div
        className="mt-5 transition-[opacity,transform] duration-600 ease-out-expo"
        style={{
          opacity: dealt ? 1 : 0,
          transform: dealt ? 'translateY(0)' : 'translateY(8px)',
          transitionDelay: dealt ? `${430 + depth * DEAL_STAGGER_MS}ms` : '0ms',
        }}
      >
        <h2 className="h2 tracking-wide">{card.title}</h2>
        <h5 className="h5">{card.subtitle}</h5>
      </div>

      <ul className="mt-5 space-y-4">
        {card.dropDownItems.map((item, itemIndex) => (
          <li
            key={item.heading}
            className="transition-[opacity,transform] duration-600 ease-out-expo"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? 'translateY(0)' : 'translateY(-8px)',
              transitionDelay: active ? `${540 + itemIndex * 60}ms` : '0ms',
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
                  <p className="p whitespace-pre-line text-[0.8125rem] leading-snug">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </article>
  );
}

/**
 * Touch and mid-size layout for the deck.
 *
 * Uses native horizontal scroll snapping rather than a gesture library: the
 * browser handles axis locking itself, so a horizontal swipe never fights with
 * a vertical page scroll on iPad.
 */
export default function CardRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [dealt, setDealt] = useState(false);
  /** The card the deck collapses onto — always whichever one you were reading. */
  const [anchor, setAnchor] = useState(0);
  const [slideLefts, setSlideLefts] = useState<number[]>([]);

  /** Snapping stays disarmed until the deal finishes — see the effect below. */
  const [snapReady, setSnapReady] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  // Read inside scroll handlers, which must not re-subscribe on every change
  const activeRef = useRef(0);
  activeRef.current = active;

  const registerRef = useCallback((index: number, node: HTMLElement | null) => {
    slideRefs.current[index] = node;
  }, []);

  // Layout positions of each slide. Transforms do not affect offsetLeft, so
  // these stay valid whether the deck is stacked or dealt.
  useEffect(() => {
    const measure = () => {
      setSlideLefts(slideRefs.current.map((node) => node?.offsetLeft ?? 0));
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Scroll snapping measures each slide's *transformed* box, so re-arming it
  // while the cards are still travelling lets the moving snap areas drag the
  // rail back to the first card. Park the rail on the anchor and only re-arm
  // once everything has settled.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return undefined;

    if (!dealt) {
      setSnapReady(false);
      return undefined;
    }

    const slide = slideRefs.current[anchor];
    if (slide) {
      rail.scrollLeft = slide.offsetLeft - (rail.clientWidth - slide.clientWidth) / 2;
    }

    const id = window.setTimeout(
      () => setSnapReady(true),
      DEAL_MS + CARD_DATA.length * DEAL_STAGGER_MS,
    );
    return () => clearTimeout(id);
  }, [dealt, anchor]);

  // Hold the deck stacked until the swipe up brings it properly into view,
  // then fan it open — and re-stack it once the page is back at the very top
  // so the animation can play again.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    let frame = 0;

    const check = () => {
      frame = 0;
      const { top } = section.getBoundingClientRect();

      if (top < window.innerHeight * 0.62) {
        setDealt(true);
      } else if (window.scrollY <= 8) {
        // Collapse onto the card currently in view, not back to the first one.
        // The rail keeps its scroll position, so nothing jumps sideways.
        setAnchor(activeRef.current);
        setDealt(false);
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(check);
    };

    check();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Whichever slide sits closest to the middle of the rail is the active one.
  // An IntersectionObserver is ambiguous here: on a wide tablet two slides can
  // both clear any threshold, and the later entry would win regardless of which
  // one is actually centred.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return undefined;

    let frame = 0;

    const measure = () => {
      frame = 0;
      const railCentre = rail.scrollLeft + rail.clientWidth / 2;

      let closest = 0;
      let smallestGap = Infinity;

      slideRefs.current.forEach((node, index) => {
        if (!node) return;
        const gap = Math.abs(node.offsetLeft + node.offsetWidth / 2 - railCentre);
        if (gap < smallestGap) {
          smallestGap = gap;
          closest = index;
        }
      });

      setActive(closest);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    measure();
    rail.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      rail.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const goTo = (index: number) => {
    const rail = railRef.current;
    const slide = slideRefs.current[index];
    if (!rail || !slide) return;

    rail.scrollTo({
      left: slide.offsetLeft - (rail.clientWidth - slide.clientWidth) / 2,
      behavior: 'smooth',
    });
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Portfolio sections"
      className="relative w-full pb-16 pt-4"
    >
      <div
        ref={railRef}
        className="snap-rail items-start gap-6 px-[max(1rem,calc(50vw-min(38vw,150px)))] py-6 md:px-[calc(50vw-170px)]"
        // A stack has nothing to scroll through, but toggling `overflow-x`
        // would clamp scrollLeft to 0 and yank the rail sideways. `touch-action`
        // blocks the horizontal swipe while leaving the scroll position — and
        // vertical page scrolling — completely alone.
        style={{
          touchAction: dealt ? 'pan-x pan-y' : 'pan-y',
          scrollSnapType: dealt && snapReady ? undefined : 'none',
        }}
      >
        {CARD_DATA.map((card, index) => (
          <RailSlide
            key={card.id}
            card={card}
            index={index}
            active={dealt && index === active}
            dealt={dealt}
            stackOffset={(slideLefts[anchor] ?? 0) - (slideLefts[index] ?? 0)}
            depth={Math.abs(index - anchor)}
            offsetFromAnchor={index - anchor}
            registerRef={registerRef}
          />
        ))}
      </div>

      {/* Controls */}
      <div
        className={`mt-2 flex items-center justify-center gap-5 transition-opacity duration-600 ease-out-quint ${
          dealt ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <button
          type="button"
          aria-label="Previous"
          onClick={() => goTo(Math.max(active - 1, 0))}
          disabled={active === 0}
          className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg-strong transition-all duration-300 ease-out-expo hover:border-accent hover:text-accent active:scale-90 disabled:pointer-events-none disabled:opacity-30"
        >
          <FiChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          {CARD_DATA.map((card, index) => (
            <button
              key={card.id}
              type="button"
              aria-label={`Go to ${card.title}`}
              aria-current={index === active}
              onClick={() => goTo(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ease-out-expo ${
                index === active
                  ? 'w-7 bg-accent'
                  : 'w-1.5 bg-[var(--line-strong)] hover:bg-fg-subtle'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next"
          onClick={() => goTo(Math.min(active + 1, CARD_DATA.length - 1))}
          disabled={active === CARD_DATA.length - 1}
          className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg-strong transition-all duration-300 ease-out-expo hover:border-accent hover:text-accent active:scale-90 disabled:pointer-events-none disabled:opacity-30"
        >
          <FiChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
