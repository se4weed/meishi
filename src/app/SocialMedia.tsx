import React from 'react';

import { Github, Twitter } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';


export const SocialMedia = () => {
  return (
    <div className={cn('flex flex-col items-start space-y-3 ')}>
      <Link
        href='https://github.com/ynori123'
        className={cn('flex justify-center items-center space-x-1 hover:border-b border-black')}
        id='github'>
        <Github className={cn('w-6 h-6')} />
        <span>ynori123</span>
      </Link>

      <Link
        href='https://twitter.com/se4weed_jp'
        className={cn('flex justify-center items-center space-x-1 hover:border-b border-black')}
        id='github'>
        <Twitter className={cn('w-6 h-6')} />
        <span>se4weed_jp</span>
      </Link>
    </div>
  );
};
