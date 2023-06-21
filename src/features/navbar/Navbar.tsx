'use client';

import { FC, useState } from 'react';
import { MobileNavbarButton } from './components/MobileNavbarButton';
import { Drawer, NavbarLinks } from './components';
import { ContentContainer, Logo, SocialLinks } from '@/shared/components';

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
    console.log('toggleMenu', isMenuOpen);
  };

  return (
    // example of using dark: selector
    // <nav className=' bg-white text-slate-800 dark:bg-slate-800 dark:text-gray-100'>

    <nav className=' bg-white text-slate-800 '>
      <ContentContainer className='max-w-9xl py-6 px-6'>
        <div className='flex justify-between'>
          {/* renders social links @ desktop */}
          <SocialLinks className='hidden md:flex flex-1 gap-3' hasBg />
          {/* renders logo on all media queries */}
          <Logo className='text-6xl flex-1 text-center ml-8 md:ml-0' />
          {/* render navbar links & theme switch @ desktop */}
          <NavbarLinks />
          {/* render menu button @ mobile and tablet */}
          <MobileNavbarButton toggleMenu={toggleMenu} />
        </div>
      </ContentContainer>

      {/* render drawer when menu is active */}
      <Drawer isMenuOpen={isMenuOpen} />
    </nav>
  );
};
