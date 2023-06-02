import { FC } from 'react';
import { NavbarItem, NavItemProps } from './NavbarItem';
import { BsFillSunFill } from 'react-icons/bs';

interface NavbarItemsProps {}

type NavigationItems = NavItemProps[];
const navigationItems: NavigationItems = [
  {
    slug: '',
    title: 'Home',
  },
  {
    slug: 'projects',
    title: 'Projects',
  },
  {
    slug: 'contact',
    title: 'Contact',
  },
];

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
