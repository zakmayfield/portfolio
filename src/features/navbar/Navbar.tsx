'use client';

import { FC, useState, useEffect, useRef } from 'react';
import { MobileNavbarButton } from './components/MobileNavbarButton';
import { Drawer, NavbarLinks, UserAccountNavItem } from './components';
import { ContentContainer, Logo, SocialLinks } from '@/shared/components';
import Link from 'next/link';
import { useSessionContext } from '@/shared/context/SessionContext';

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  const { session } = useSessionContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let button: HTMLButtonElement | null = null;

  if (typeof document !== 'undefined') {
    button = document.querySelector('mobile-nav-trigger');
  }

  const triggerRef = useRef(button);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const mobileButton = triggerRef.current;
    const handleClick = () => {
      setIsMenuOpen((prev) => !prev);
    };

    window.addEventListener('resize', () => setIsMenuOpen(false));
    mobileButton?.addEventListener('click', handleClick);

    return () => {
      mobileButton?.removeEventListener('click', handleClick);
      window.removeEventListener('resize', () => setIsMenuOpen(false));
    };
  }, []);

  return (
    // example of using dark: selector
    // <nav className=' bg-white text-slate-800 dark:bg-slate-800 dark:text-gray-100'>

    <nav className=' bg-white text-slate-800 '>
      <ContentContainer className='max-w-9xl py-6 px-6'>
        <div className='flex justify-between items-center'>
          {/* renders social links @ desktop */}
          <SocialLinks className='hidden md:flex flex-1 gap-3' hasBg />
          {/* renders logo on all media queries */}
          <Logo className='text-6xl flex-1 text-center ml-0 ' />
          {/* render navbar links & theme switch @ desktop */}
          <NavbarLinks />
          {/* login / avatar */}
          {session?.user ? (
            <div className='hidden md:inline-block ml-6 '>
              <UserAccountNavItem user={session.user} />
            </div>
          ) : (
            <Link
              href='/sign-in'
              className='rounded-md px-2 py-1 border-2 ml-6 hidden md:inline-block'
            >
              Sign In
            </Link>
          )}
          {/* render menu button @ mobile and tablet */}
          <MobileNavbarButton toggleMenu={toggleMenu} />
        </div>
      </ContentContainer>

      {/* render drawer when menu is active */}
      <Drawer isMenuOpen={isMenuOpen} session={session} />
    </nav>
  );
};
