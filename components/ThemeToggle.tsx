'use client';

import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <FiSun />;
  }

  if (theme === 'dark') {
    return <FiSun onClick={() => setTheme('light')} />;
  }

  if (theme === 'light') {
    return <FiMoon onClick={() => setTheme('dark')} />;
  }
}
