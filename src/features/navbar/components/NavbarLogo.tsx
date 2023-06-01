import { FC } from 'react';
import Link from 'next/link';

interface NavbarLogoProps {}

export const NavbarLogo: FC<NavbarLogoProps> = ({}) => {
  return (
    <Link href='/' className='font-extralight text-3xl'>
      ZM
    </Link>
  );
};
