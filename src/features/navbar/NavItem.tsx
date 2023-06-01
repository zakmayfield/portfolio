import { FC } from 'react';
import Link from 'next/link';

export interface NavItemProps {
  slug: string;
  title: string;
}

export const NavItem: FC<NavItemProps> = ({ slug, title }) => {
  return (
    <li>
      <Link href={`/${slug}`} className='px-6 py-2'>
        {title}
      </Link>
    </li>
  );
};
