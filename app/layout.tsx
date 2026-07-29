import type { Metadata, Viewport } from 'next';
import { Josefin_Sans } from 'next/font/google';
import React from 'react';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Russell Fenton  |  Portfolio',
  description: 'Personal website showcasing my projects, hobbies, and academic journey.',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#121214' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${josefinSans.variable} font-sans`}>
        <ThemeProvider
          attribute="data-theme"
          enableSystem={false}
          defaultTheme="dark"
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
