import React from 'react';
import './globals.scss';
import { Manrope } from 'next/font/google';
import { cn } from '@/shared/ui/utils';
import { AppProvider } from '@/app/_providers/app-provider';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

const font = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: '500'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body
      className={cn(
        'min-h-screen bg-background font-sans initialised wrapper',
        font.variable
      )}
    >
    <AppProvider>
      {children}
    </AppProvider>
    </body>
    </html>
  );
}