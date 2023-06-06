import { FC } from 'react';
import { NavbarItem } from './NavbarItem';
import { BsFillSunFill } from 'react-icons/bs';
import { navigationItems } from '@/shared/constants';

interface NavbarItemsProps {}

export const NavbarItems: FC<NavbarItemsProps> = ({}) => {
  return (
    <div className='hidden md:flex items-center justify-end gap-12 flex-1'>
      <ul className='flex gap-3'>
        {navigationItems.map((item) => (
          <NavbarItem key={item.slug} slug={item.slug} title={item.title} />
        ))}
      </ul>

      <div className='text-2xl'>
        <BsFillSunFill />
      </div>
    </div>
  );
};
