import { FC } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { navigationItems } from '@/shared/constants';
import { NavLinksGroup } from '@/shared/components';

interface NavbarLinksProps {}

export const NavbarLinks: FC<NavbarLinksProps> = ({}) => {
  return (
    <div className='hidden md:flex items-center justify-end gap-12 flex-1'>
      <NavLinksGroup />

      <div className='text-2xl'>
        <BsFillSunFill />
      </div>
    </div>
  );
};
