'use client';

import { FunctionComponent } from 'react';

interface MaskedLineProps {
  text: string;
  delay: number;
  className?: string;
}

/**
 * A single line of the name mark. The wrapper clips the bottom edge so letters
 * appear to rise out of the baseline, while extra top padding keeps tall glyphs
 * from being sheared off by the same clip.
 */
const MaskedLine: FunctionComponent<MaskedLineProps> = ({
  text,
  delay,
  className,
}) => (
  <span
    className={`-mt-[0.18em] block overflow-hidden pt-[0.18em] ${className ?? ''}`}
  >
    {text.split('').map((char, index) => (
      <span
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        className="animate-rise-in inline-block"
        style={{ animationDelay: `${delay + index * 55}ms` }}
      >
        {char}
      </span>
    ))}
  </span>
);

interface HeroNameProps {
  /** Recedes the mark once the deck takes over the stage. */
  dimmed?: boolean;
  className?: string;
}

const HeroName: FunctionComponent<HeroNameProps> = ({
  dimmed = false,
  className,
}) => (
  <h1
    aria-label="Russell Fenton"
    // The first line's mask offset would otherwise pull the whole block up;
    // this cancels it so the mark sits exactly where it always has.
    className={`select-none text-[clamp(3.25rem,17vw,9.25rem)] font-light leading-[0.8] tracking-tighter
      transition-[opacity,transform,filter] duration-700 ease-out-expo ${
        dimmed
          ? 'scale-[0.97] opacity-0 blur-[6px]'
          : 'scale-100 opacity-100 blur-0'
      } ${className ?? ''}`}
  >
    <MaskedLine text="RUSSELL" delay={120} />
    <MaskedLine text="FENTON" delay={300} className="ml-[12vw] lg:ml-48" />
  </h1>
);

export default HeroName;
