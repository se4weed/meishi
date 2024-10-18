import React from 'react';

import { Github, Twitter } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

export const SocialMedia = () => {
  return (
    <div className={cn('flex flex-col items-start space-y-3 ')}>
      <Link
        href='https://github.com/ynori123'
        target='_blank'
        className={cn('flex justify-center items-center space-x-1 hover:border-b border-black')}
        id='github'>
        <Github className={cn('w-6 h-6')} />
        <span>ynori123</span>
      </Link>

      <Link
        href='https://x.com/se4weed_jp'
        target='_blank'
        className={cn('flex justify-center items-center space-x-1 hover:border-b border-black')}
        id='x'>
        <Twitter className={cn('w-6 h-6')} />
        <span>se4weed_jp</span>
      </Link>
    </div>
  );
};
