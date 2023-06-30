import { FC } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  slug: string;
  title: string;
  className?: string;
  pathname: string;
}

export const NavLink: FC<NavLinkProps> = ({
  slug,
  title,
  className,
  pathname,
}) => {
  const isActive = pathname.split('/')[1] === slug;

  return (
    <li className={cn('px-4 py-2', className)}>
      <Link href={`/${slug}`} className={`${isActive ? 'text-gray-500' : ''}`}>
        {title}
      </Link>
    </li>
  );
};
