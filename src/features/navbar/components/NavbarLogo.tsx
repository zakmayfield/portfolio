import { FC } from 'react';
import { Logo } from '@/shared/components';

interface NavbarLogoProps {}

export const NavbarLogo: FC<NavbarLogoProps> = ({}) => {
  return <Logo className='text-6xl flex-1 text-center ml-8 md:ml-0' />;
};
