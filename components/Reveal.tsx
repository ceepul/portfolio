'use client';

import { CSSProperties, ElementType, ReactNode } from 'react';
import useInView from '@/hooks/useInView';

interface RevealProps {
  children: ReactNode;
  /** Element to render. Defaults to a div. */
  as?: ElementType;
  /** Stagger offset in milliseconds. */
  delay?: number;
  /** Vertical travel distance in pixels. */
  y?: number;
  /** Starting scale, for a subtle zoom-in. */
  scale?: number;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

/**
 * Fades and lifts its children into place the first time they scroll into view.
 * The actual transition lives in globals.css under `[data-reveal]` so it stays
 * consistent everywhere and respects `prefers-reduced-motion`.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  y = 22,
  scale = 1,
  className,
  id,
  style,
}: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      id={id}
      className={className}
      data-reveal={inView ? 'in' : 'out'}
      style={
        {
          '--reveal-delay': `${delay}ms`,
          '--reveal-y': `${y}px`,
          '--reveal-s': scale,
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
