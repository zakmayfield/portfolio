import { FC } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  slug: string;
  title: string;
  className?: string;
}

export const NavLink: FC<NavLinkProps> = ({ slug, title, className }) => {
  return (
    <li className={cn('px-4 py-2', className)}>
      <Link href={`/${slug}`}>{title}</Link>
    </li>
  );
};
