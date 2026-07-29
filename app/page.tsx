'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import CardRail from '@/components/CardRail';
import FanDeck from '@/components/FanDeck';
import Header from '@/components/Header';
import HeroName from '@/components/HeroName';
import ScrollCTA from '@/components/ScrollCTA';

type LayoutMode = 'fan' | 'stack';

/** Resolves the mode before the browser paints, so the swap is never visible. */
const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

/**
 * The fan interaction depends on a real cursor, so it is gated on hover *and*
 * pointer precision as well as width. Everything else — phones, and iPads in
 * either orientation — gets the scroll-snap rail, which never has to guess
 * whether a gesture was meant as a swipe or a scroll.
 */
const useLayoutMode = () => {
  const [mode, setMode] = useState<LayoutMode | null>(null);

  useIsomorphicLayoutEffect(() => {
    const mq = window.matchMedia(
      '(min-width: 1024px) and (hover: hover) and (pointer: fine)',
    );
    const update = () => setMode(mq.matches ? 'fan' : 'stack');

    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return mode;
};

function AmbientGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="ambient-glow -left-24 top-10 h-72 w-72 bg-accent"
        style={{ animationDelay: '-4s' }}
      />
      <div
        className="ambient-glow -right-16 bottom-0 h-80 w-80 bg-[#7c6cf0]"
        style={{ animationDelay: '-11s' }}
      />
    </div>
  );
}

export default function Home() {
  const mode = useLayoutMode();

  return (
    <div>
      <Header />

      {/* Desktop: the deck fans out in place, name mark layered over it */}
      {mode === 'fan' && (
        <main className="relative">
          <AmbientGlow />
          {/* FanDeck owns the name mark so it can stay centred over the deck */}
          <FanDeck />
        </main>
      )}

      {/* Touch and mid-size: a scrolling page with a native snap carousel */}
      {mode === 'stack' && (
        <main className="relative overflow-x-hidden">
          {/* Sized so the first card always peeks above the fold — the rail is
              the invitation to keep going, not a hidden second screen */}
          {/* `items-center` shrinks the mark to its content width and centres
              the block, keeping FENTON's indent intact — same as the deck */}
          <section className="relative flex min-h-[calc(100svh-16rem)] flex-col items-center justify-center px-6 sm:px-10 md:min-h-[58svh]">
            <AmbientGlow />
            <HeroName className="relative z-10" />
          </section>

          <div className="flex justify-center">
            <ScrollCTA text="Scroll Down" />
          </div>

          <CardRail />
        </main>
      )}

      {/* Pre-hydration: hold the name so there is no layout jump on load */}
      {mode === null && (
        <main className="relative flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center px-6 sm:px-10">
          <HeroName />
        </main>
      )}
    </div>
  );
}
