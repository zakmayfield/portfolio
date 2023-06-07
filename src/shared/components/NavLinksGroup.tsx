import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { navigationItems } from '@/shared/constants';
import { NavLink } from './NavLink';

interface NavLinksGroupProps {
  className?: string;
}

export const NavLinksGroup: FC<NavLinksGroupProps> = ({ className }) => {
  const defaultStyles = `flex gap-3`;
  const merged = twMerge(defaultStyles, className);
  return (
    <ul className={merged}>
      {navigationItems.map((item) => (
        <NavLink key={item.slug} slug={item.slug} title={item.title} />
      ))}
    </ul>
  );
};
