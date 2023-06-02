import { FC } from 'react';
import Link from 'next/link';

export interface NavItemProps {
  slug: string;
  title: string;
}

export const NavbarItem: FC<NavItemProps> = ({ slug, title }) => {
  return (
    <li>
      <Link href={`/${slug}`} className='px-4 py-2 text-sm'>
        {title}
      </Link>
    </li>
  );
};
