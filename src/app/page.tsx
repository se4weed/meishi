'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Icon } from './Icon';
import { Name } from './Name';
import { SocialMedia } from './SocialMedia';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [isMeishi, setIsMeishi] = useState(false);

  return (
    <div className={cn('flex items-center justify-center w-screen h-screen bg-none ')}>
      <div
        className={cn('flex flex-col items-center z-10 p-4 rounded-lg', isMeishi && 'border border-gray-500 bg-white')}>
        <Icon />
        <Name />
        <Separator className={cn('my-2 w-44')} />
        <SocialMedia />
      </div>
      <div className={cn('fixed bottom-10 right-10')}>
        <Button
          onClick={() => setIsMeishi(!isMeishi)}
          className={cn('w-28')}>
          {isMeishi ? 'Make Page' : 'Make Meishi'}
        </Button>
      </div>
    </div>
  );
}
