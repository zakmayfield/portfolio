import { FC } from 'react';
import Link from 'next/link';
import { Bungee_Shade } from 'next/font/google';

interface LogoProps {
  className?: string;
}

const bungeeShade = Bungee_Shade({
  weight: '400',
  variable: '--font-bungee-shade',
  subsets: ['latin'],
});

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link href='/' className='text-6xl' style={bungeeShade.style}>
      ZM
    </Link>
  );
};
