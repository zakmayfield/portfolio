import { FC } from 'react';
import Link from 'next/link';
import { Inter, Bungee_Shade } from 'next/font/google';

interface NavbarLogoProps {}

const bungeeShade = Bungee_Shade({
  weight: '400',
  variable: '--font-bungee-shade',
  subsets: ['latin'],
});

export const NavbarLogo: FC<NavbarLogoProps> = ({}) => {
  return (
    <Link
      href='/'
      className='text-6xl flex-1 text-center ml-8 md:ml-0'
      style={bungeeShade.style}
    >
      ZM
    </Link>
  );
};
