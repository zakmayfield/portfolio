import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { navigationItems } from '@/shared/constants';
import { NavLink } from './NavLink';
import { cn } from '@/lib/utils';

interface NavLinksGroupProps {
  className?: string;
}

export const NavLinksGroup: FC<NavLinksGroupProps> = ({ className }) => {
  return (
    <ul className={cn('flex gap-3', className)}>
      {navigationItems.map((item) => (
        <NavLink key={item.slug} slug={item.slug} title={item.title} />
      ))}
    </ul>
  );
};
