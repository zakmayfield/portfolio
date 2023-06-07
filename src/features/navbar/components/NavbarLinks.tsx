import { FC } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { navigationItems } from '@/shared/constants';
import { NavLink } from '@/shared/components';

interface NavbarLinksProps {}

export const NavbarLinks: FC<NavbarLinksProps> = ({}) => {
  return (
    <div className='hidden md:flex items-center justify-end gap-12 flex-1'>
      <ul className='flex gap-3'>
        {navigationItems.map((item) => (
          <NavLink key={item.slug} slug={item.slug} title={item.title} />
        ))}
      </ul>

      <div className='text-2xl'>
        <BsFillSunFill />
      </div>
    </div>
  );
};
