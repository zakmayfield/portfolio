import { FC } from 'react';
import { NavItem, NavItemProps } from './NavItem';

interface NavbarItemsProps {}

type NavigationItems = NavItemProps[];
const navigationItems: NavigationItems = [
  {
    slug: '',
    title: 'Home',
  },
  {
    slug: 'about',
    title: 'About',
  },
  {
    slug: 'projects',
    title: 'Projects',
  },
];

const NavbarItems: FC<NavbarItemsProps> = ({}) => {
  return (
    <div className='hidden md:flex items-center gap-12'>
      <ul className='flex gap-3'>
        {navigationItems.map((item) => (
          <NavItem key={item.slug} slug={item.slug} title={item.title} />
        ))}
      </ul>

      <div className='text-3xl'>☀️</div>
    </div>
  );
};

export default NavbarItems;
