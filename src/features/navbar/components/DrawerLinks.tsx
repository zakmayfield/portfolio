import { FC } from 'react';
import { NavLink } from '@/shared/components';
import Link from 'next/link';
import { navigationItems } from '@/shared/constants';
import { usePathname } from 'next/navigation';

interface DrawerLinksProps {}

export const DrawerLinks: FC<DrawerLinksProps> = ({}) => {
  const pathname = usePathname();

  return (
    <ul className='flex flex-col gap-5 relative'>
      {navigationItems.map((item, i) => (
        <NavLink
          key={item.title}
          slug={item.slug}
          title={item.title}
          pathname={pathname}
          className='last-of-type:pb-6 text-lg'
        />
      ))}

      <li className=''>
        <Link href='/sign-in' className=''>
          Sign In
        </Link>
      </li>
    </ul>
  );
};
