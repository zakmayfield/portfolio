'use client';
import { FC } from 'react';
import { navigationItems } from '@/shared/constants';
import { NavLink } from './NavLink';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

interface NavLinksGroupProps {
  className?: string;
}

export const NavLinksGroup: FC<NavLinksGroupProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <ul className={cn('flex gap-3', className)}>
      {navigationItems.map((item) => (
        <NavLink
          key={item.slug}
          slug={item.slug}
          title={item.title}
          pathname={pathname}
        />
      ))}
    </ul>
  );
};
