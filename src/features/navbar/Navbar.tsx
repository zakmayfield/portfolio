'use client';

import { FC, useState } from 'react';
import { MobileNavbarButton } from './components/MobileNavbarButton';
import { NavbarItems, NavbarLogo } from './components';

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='px-6 py-4 flex justify-between bg-white text-slate-800 dark:bg-slate-800 dark:text-gray-100'>
      {/* renders on all media queries */}
      <NavbarLogo />

      {/* render menu button @ mobile and tablet */}
      <MobileNavbarButton />

      {/* render <ul> && theme switch @ desktop */}
      <NavbarItems />
    </nav>
  );
};
