import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import React from 'react';

export const Icon = () => {
  return (
    <div>
      <Avatar className={cn('w-20 h-20')}>
        <AvatarImage src='/images/se4weed-icon.jpeg' />
        <AvatarFallback>海苔</AvatarFallback>
      </Avatar>
    </div>
  );
};
