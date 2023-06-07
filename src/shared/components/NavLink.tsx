import { FC } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface NavLinkProps {
  slug: string;
  title: string;
  className?: string;
}

export const NavLink: FC<NavLinkProps> = ({ slug, title, className }) => {
  const defaultStyles = ``;
  const merged = twMerge(defaultStyles, className);
  return (
    <li>
      <Link href={`/${slug}`} className='px-4 py-2 text-sm'>
        {title}
      </Link>
    </li>
  );
};
