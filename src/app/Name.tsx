import { cn } from '@/lib/utils';
import React from 'react';
import { Nokora } from 'next/font/google';

const nokora = Nokora({
  subsets: ['latin'],
  weight: '700',
});

export const Name = () => {
  return (
    <div className={cn('flex flex-col justify-center items-center')}>
      <b className={cn('text-2xl mb-4', nokora.className)}>Se4weed</b>
      <b>Yuto Norinaga</b>
      <p>則永 悠仁</p>
      <p className={cn('text-sm')}>のりなが ゆうと</p>
    </div>
  );
};
