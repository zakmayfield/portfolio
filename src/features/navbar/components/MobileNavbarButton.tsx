import { FC } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

interface MobileNavbarButtonProps {
  toggleMenu: () => void;
}

export const MobileNavbarButton: FC<MobileNavbarButtonProps> = ({
  toggleMenu,
}) => {
  return (
    <button className='md:hidden flex items-center' id='mobile-nav-trigger' onClick={toggleMenu}>
      <HiOutlineMenuAlt3 className='text-3xl' />
    </button>
  );
};
