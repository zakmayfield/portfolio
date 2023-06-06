import { FC } from 'react';
import Link from 'next/link';
import { Bungee_Shade } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

interface LogoProps {
  className?: string;
}

const bungeeShade = Bungee_Shade({
  weight: '400',
  variable: '--font-bungee-shade',
  subsets: ['latin'],
});

export const Logo: FC<LogoProps> = ({ className }) => {
  const defaultStyles = `text-6xl`;
  const merged = twMerge(defaultStyles, className);

  return (
    <Link href='/' className={merged} style={bungeeShade.style}>
      ZM
    </Link>
  );
};
