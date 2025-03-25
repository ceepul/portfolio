import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import React from 'react';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin-sans',
});

export const metadata: Metadata = {
  title: 'Russell Fenton  |  Portfolio',
  description: 'Personal website showcasing my projects, hobbies, and academic journey.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${josefinSans.variable} font-sans`}
      >
        <ThemeProvider enableSystem={false} defaultTheme='dark'>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
