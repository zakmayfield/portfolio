'use client';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { socialNavigationItems } from '@/shared/constants';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  hasBg?: boolean;
}

export const SocialLinks: FC<SocialLinksProps> = ({
  className,
  hasBg = false,
}) => {
  return (
    <div className={cn('flex items-center gap-6', className)}>
      {socialNavigationItems.map(({ id, link, icon }) => (
        <a
          key={id}
          href={link}
          aria-label='View my social sites'
          className={
            hasBg
              ? `p-3 rounded-md bg-slate-100 hover:bg-slate-200 transition-colors`
              : ``
          }
        >
          {icon}
        </a>
      ))}
    </div>
  );
};
