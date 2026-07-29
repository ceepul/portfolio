'use client';

import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${isDark ? 'light' : 'dark'} theme` : 'Toggle theme'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative grid h-9 w-9 place-items-center rounded-full text-fg-strong
        transition-[background-color,transform] duration-300 ease-out-expo
        hover:bg-[var(--accent-soft)] hover:text-accent active:scale-90"
    >
      {/* Both icons are mounted so they can cross-fade instead of popping */}
      <FiSun
        aria-hidden
        className={`absolute h-[18px] w-[18px] transition-all duration-500 ease-out-expo ${
          !mounted || isDark
            ? 'rotate-0 scale-100 opacity-100'
            : '-rotate-90 scale-50 opacity-0'
        }`}
      />
      <FiMoon
        aria-hidden
        className={`absolute h-[18px] w-[18px] transition-all duration-500 ease-out-expo ${
          mounted && !isDark
            ? 'rotate-0 scale-100 opacity-100'
            : 'rotate-90 scale-50 opacity-0'
        }`}
      />
    </button>
  );
}
