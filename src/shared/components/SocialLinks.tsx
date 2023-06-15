'use client';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { socialNavigationItems } from '@/shared/constants';

interface SocialLinksProps {
  className?: string;
  hasBg?: boolean;
}

export const SocialLinks: FC<SocialLinksProps> = ({
  className,
  hasBg = false,
}) => {
  const defaultStyles = `flex items-center gap-6`;
  const merged = twMerge(defaultStyles, className);

  return (
    <div className={merged}>
      {socialNavigationItems.map(({ id, link, icon }) => (
        <a
          key={id}
          href={link}
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
