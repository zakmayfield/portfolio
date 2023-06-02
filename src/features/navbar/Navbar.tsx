'use client';

import { FC, useState } from 'react';
import { MobileNavbarButton } from './components/MobileNavbarButton';
import {
  NavbarItems,
  NavbarLogo,
  Drawer,
  NavbarSocialIcons,
} from './components';
import { ContentContainer } from '@/shared/components';

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
    console.log('toggleMenu', isMenuOpen);
  };

  return (
    <nav className=' bg-white text-slate-800 dark:bg-slate-800 dark:text-gray-100'>
      
      <ContentContainer className='max-w-9xl py-6'>
        <div className='flex justify-between'>
          {/* renders icons @ desktop */}
          <NavbarSocialIcons />

          {/* renders on all media queries */}
          <NavbarLogo />

          {/* render <ul> && theme switch @ desktop */}
          <NavbarItems />

          {/* render menu button @ mobile and tablet */}
          <MobileNavbarButton toggleMenu={toggleMenu} />
        </div>
      </ContentContainer>

      {/* render drawer when menu is active */}
      <Drawer isMenuOpen={isMenuOpen} />
    </nav>
  );
};
