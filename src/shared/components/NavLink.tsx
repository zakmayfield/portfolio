'use client';

import { FC } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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
    <motion.li className={cn(className)} whileHover={{ scale: 1.05 }}>
      <Link
        href={`/${slug}`}
        className={`px-4 py-2 ${isActive ? 'text-gray-500' : ''}`}
      >
        {title}
      </Link>
    </motion.li>
  );
};
