import { FC } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { bungeeShade } from '@/app/utils/fonts';

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
  const defaultStyles = `text-6xl`;
  const merged = twMerge(defaultStyles, className);

  return (
    <Link href='/' className={merged} style={bungeeShade.style}>
      ZM
    </Link>
  );
};
