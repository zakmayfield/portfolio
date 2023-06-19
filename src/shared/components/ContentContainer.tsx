import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { cn } from '@/lib/utils';

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
}

export const ContentContainer: FC<ContentContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('w-full max-w-8xl mx-auto', className)}>{children}</div>
  );
};
