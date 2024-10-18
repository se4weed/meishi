import React from 'react';

import type { Metadata } from 'next';
import './globals.css';
import Image from 'next/image';

import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Meishi - Se4weed',
  description: 'のり の即席名刺',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='jp'>
      <body>
        {children}
        <div className={cn('fixed h-screen w-full top-0 left-0 mx-auto opacity-10 z-[-1]')}>
          <Image
            src='/images/dancing-seaweed.png'
            alt='se4weed'
            style={{ objectFit: 'cover' }}
            fill
          />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
