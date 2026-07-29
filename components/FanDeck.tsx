'use client';

import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import Card from '@/components/Card';
import HeroName from '@/components/HeroName';
import ScrollCTA from '@/components/ScrollCTA';
import CARD_DATA from '@/data/cards';

/** closed → the deck sits low behind the name; stacked → it has risen; fanned → spread out. */
type Stage = 'closed' | 'stacked' | 'fanned';

/** How long the deck takes to rise up out of the name mark. */
const RISE_MS = 560;
/**
 * The fan starts slightly before the rise finishes so the two read as one
 * continuous movement instead of "lift, pause, snap".
 */
const FAN_START_MS = 400;
const FAN_MS = 760;
const FAN_STAGGER_MS = 34;

/** Gentle acceleration into a long settle — no expo "shoot out". */
const EASE_FAN = 'cubic-bezier(0.45, 0, 0.25, 1)';
const EASE_RISE = 'cubic-bezier(0.33, 1, 0.68, 1)';
/** Wheel travel required before the deck reacts, so trackpad jitter is ignored. */
const WHEEL_THRESHOLD = 90;

interface FanDeckProps {
  /** Notifies the page so the name mark can fade as the deck rises. */
  onStageChange?: (stage: Stage) => void;
}

export default function FanDeck({ onStageChange }: FanDeckProps) {
  const [stage, setStage] = useState<Stage>('closed');
  const [isWide, setIsWide] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [dealtIn, setDealtIn] = useState(false);

  const busy = useRef(false);
  const wheelAccum = useRef(0);
  const timers = useRef<number[]>([]);
  const stageRef = useRef<HTMLDivElement>(null);

  const schedule = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  };

  useEffect(() => {
    const timeouts = timers.current;
    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    onStageChange?.(stage);
  }, [stage, onStageChange]);

  // Entrance: let the deck settle before it becomes interactive
  useEffect(() => {
    const id = window.setTimeout(() => setDealtIn(true), 80);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1280px)');
    const update = () => setIsWide(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const open = useCallback(() => {
    if (busy.current || stage !== 'closed') return;
    busy.current = true;
    setHovered(null);
    setStage('stacked');
    schedule(() => setStage('fanned'), FAN_START_MS);
    schedule(
      () => {
        busy.current = false;
      },
      FAN_START_MS + FAN_MS * 0.5,
    );
  }, [stage]);

  const close = useCallback(() => {
    if (busy.current || stage !== 'fanned') return;
    busy.current = true;
    setHovered(null);
    if (stageRef.current) stageRef.current.scrollTop = 0;
    setStage('stacked');
    schedule(() => {
      setStage('closed');
      busy.current = false;
    }, RISE_MS * 0.55);
  }, [stage]);

  // Wheel drives the deck directly instead of relying on an incidental
  // scrollbar — that is what made the old trigger feel unreliable.
  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      if (busy.current) return;
      const { deltaY } = event;
      if (deltaY === 0) return;

      // Reset the running total whenever the gesture changes direction
      if (Math.sign(deltaY) !== Math.sign(wheelAccum.current)) {
        wheelAccum.current = 0;
      }
      wheelAccum.current += deltaY;

      if (wheelAccum.current > WHEEL_THRESHOLD && stage === 'closed') {
        wheelAccum.current = 0;
        open();
      } else if (
        wheelAccum.current < -WHEEL_THRESHOLD &&
        stage === 'fanned' &&
        // Scrolling back up while reading a card should scroll the card, not
        // collapse the deck — only fold once nothing is open and we're at the top
        hovered === null &&
        (stageRef.current?.scrollTop ?? 0) === 0
      ) {
        wheelAccum.current = 0;
        close();
      }
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' || event.key === 'PageDown') open();
      if (
        event.key === 'ArrowUp' ||
        event.key === 'PageUp' ||
        event.key === 'Escape'
      ) {
        close();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
    };
  }, [stage, hovered, open, close]);

  const risen = stage !== 'closed';
  const fanned = stage === 'fanned';
  // Cards can slide out from under a stationary cursor without firing
  // mouseleave, so hover is only ever honoured while the deck is fanned out.
  const focused = fanned ? hovered : null;

  const cardStyle = (index: number): CSSProperties => {
    const parts: string[] = [];

    if (!dealtIn) {
      // Entrance state — the deck deals itself in from below
      parts.push('translateY(120px)');
    } else if (risen) {
      parts.push('translateY(calc(-25svh + 160px))');
      if (!fanned) {
        parts.push(`rotate(${index * 1.2}deg) translateX(${index * 5}px)`);
      }
    }

    if (fanned) {
      const x = isWide ? -450 + index * 300 : -382 + index * 252;
      parts.push(`translateX(${x}px)`);
    }

    // Spread the fan like a hand of cards rather than all at once, but keep the
    // stagger small so the group still moves as one gesture.
    const motion = fanned
      ? `transform ${FAN_MS}ms ${EASE_FAN} ${index * FAN_STAGGER_MS}ms`
      : `transform ${RISE_MS}ms ${EASE_RISE}`;

    return {
      zIndex: focused === index ? 40 : 30 - index * 10,
      transform: parts.join(' '),
      opacity: dealtIn ? 1 : 0,
      transition: `${motion}, opacity 500ms ${EASE_RISE}`,
    };
  };

  return (
    <div
      ref={stageRef}
      className="scrollbar-hide relative flex h-[calc(100svh-5rem)] flex-col items-center"
      // Vertical scrolling is how a long detail column is read, exactly as it
      // worked originally. Horizontal is clipped so the fan never adds a
      // sideways scrollbar.
      style={{ overflowX: 'clip', overflowY: 'auto' }}
    >
      {/* Absolutely positioned inside the centring flex column, so the mark's
          shrink-to-fit box stays centred over the deck. The extra 80px matches
          the `mt-20` the first line originally carried — absolutely positioned
          boxes do not collapse margins with their children, so it counted. */}
      <div className="pointer-events-none absolute z-40 mt-[calc(25svh+180px)]">
        <HeroName dimmed={risen} />
      </div>

      <div className="mt-[calc(25svh-100px)] w-full">
        {CARD_DATA.map((card, index) => (
          <div key={card.id} className="flex items-start justify-center">
            <Card
              id={card.id}
              media={card.media}
              mediaHover={card.mediaHover}
              isVideo={card.isVideo}
              mediaAlt={card.mediaAlt}
              addBG={card.addBg}
              showInfo={fanned}
              expanded={focused === index}
              onFocusChange={(isFocused) =>
                setHovered(isFocused ? index : null)
              }
              title={card.title}
              subtitle={card.subtitle}
              dropDownItems={card.dropDownItems}
              style={cardStyle(index)}
            />
          </div>
        ))}
      </div>

      {/* Absolute so a short viewport can never make the closed stage
          scrollable — that would swallow the wheel gesture that opens it */}
      <ScrollCTA
        text="Scroll Down"
        onActivate={open}
        visible={stage === 'closed' && dealtIn}
        className="absolute bottom-[2%]"
      />
    </div>
  );
}
