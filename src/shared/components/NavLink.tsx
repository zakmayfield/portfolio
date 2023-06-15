import { FC } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface NavLinkProps {
  slug: string;
  title: string;
  className?: string;
}

export const NavLink: FC<NavLinkProps> = ({ slug, title, className }) => {
  const defaultStyles = `px-4 py-2`;
  const merged = twMerge(defaultStyles, className);
  return (
    <li className={merged}>
      <Link href={`/${slug}`}>{title}</Link>
    </li>
  );
};
