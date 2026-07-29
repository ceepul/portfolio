'use client';

import { FunctionComponent, useState, useEffect } from 'react';

interface ScrollCTAProps {
  text: string;
  className?: string;
  /** Turns the cue into a button — used to open the deck without scrolling. */
  onActivate?: () => void;
  /** Overrides the default "visible until the page scrolls" behaviour. */
  visible?: boolean;
}

const ScrollCTA: FunctionComponent<ScrollCTAProps> = ({
  text,
  className,
  onActivate,
  visible,
}) => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    if (visible !== undefined) return undefined;

    const handleScroll = () => setAtTop(window.scrollY === 0);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible]);

  const isVisible = visible ?? atTop;

  const content = (
    <div className="flex flex-col items-center justify-center gap-1 p-4">
      <span className="h4 text-fg-subtle tracking-[0.2em] text-[0.8125rem] uppercase transition-colors duration-300 ease-out-quint group-hover:text-accent">
        {text}
      </span>
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-float-y h-7 w-7 text-fg-subtle transition-colors duration-300 ease-out-quint group-hover:text-accent"
      >
        <path d="M12 4v14" />
        <path d="m6 13 6 6 6-6" />
      </svg>
    </div>
  );

  const shared = `group transition-[opacity,transform] duration-600 ease-out-quint ${
    isVisible
      ? 'pointer-events-auto translate-y-0 opacity-100'
      : 'pointer-events-none translate-y-2 opacity-0'
  } ${className ?? ''}`;

  if (onActivate) {
    return (
      <button
        type="button"
        onClick={onActivate}
        className={shared}
        aria-label={text}
      >
        {content}
      </button>
    );
  }

  return <div className={shared}>{content}</div>;
};

export default ScrollCTA;
