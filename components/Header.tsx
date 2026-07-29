'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const LINKEDIN_URL = 'https://www.linkedin.com/in/russell-fenton-760a7a299/';
const GITHUB_URL = 'https://github.com/ceepul';

export default function Header() {
  const myName = 'Russell Fenton';
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;

      setScrolled(window.scrollY > 8);
      setProgress(scrollable > 8 ? window.scrollY / scrollable : 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 h-20 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-out-quint ${
        scrolled ? 'header-scrolled' : 'bg-transparent'
      }`}
    >
      {/* Hairline that draws itself in once the page has scrolled */}
      <div
        aria-hidden
        className={`absolute inset-x-0 bottom-0 h-px origin-left bg-line transition-transform duration-700 ease-out-expo ${
          scrolled ? 'scale-x-100' : 'scale-x-0'
        }`}
      />
      {/* Reading progress — only meaningful once the page can actually scroll */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-accent transition-opacity duration-500 ease-out-quint"
        style={{ transform: `scaleX(${progress})`, opacity: progress > 0.002 ? 1 : 0 }}
      />
      <nav className="mx-auto flex h-full w-full items-center justify-between p-4 sm:p-8">
        <Link href="/" className="mr-4 shrink-0">
          <span className="h2 heading-hover link-underline inline-block">{myName}</span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-9">
          <ThemeToggle />

          {/* Compact icon links below sm, full word marks above it */}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="h2 heading-hover sm:hidden"
          >
            <FiLinkedin className="h-[18px] w-[18px]" />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="h2 heading-hover sm:hidden"
          >
            <FiGithub className="h-[18px] w-[18px]" />
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h2 heading-hover link-underline hidden sm:inline-block"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h2 heading-hover link-underline hidden sm:inline-block"
          >
            GitHub
          </a>

          <Link href="/contact">
            <span
              className="h2 heading-hover link-underline inline-block"
              data-active={pathname === '/contact'}
            >
              Contact
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
