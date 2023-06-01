'use client';

import { FC, useState } from 'react';
import { MobileNavbarButton } from './MobileNavbarButton';
import { NavbarLogo } from './NavbarLogo';
import NavbarItems from './NavbarItems';

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='px-6 py-4 flex justify-between bg-white text-slate-800 dark:bg-slate-800 dark:text-gray-100'>
      <NavbarLogo />

      {/* mobile & tablet navbar button */}
      <MobileNavbarButton />
      {/* desktop navbar <ul> */}
      <NavbarItems />
    </nav>
  );
};
