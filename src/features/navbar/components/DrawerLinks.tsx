import { FC } from 'react';
import { NavLink } from '@/shared/components';
import Link from 'next/link';
import { navigationItems } from '@/shared/constants';
import { usePathname } from 'next/navigation';
import { useSessionContext } from '@/shared/context/SessionContext';
import { signOut } from 'next-auth/react';

interface DrawerLinksProps {}

export const DrawerLinks: FC<DrawerLinksProps> = ({}) => {
  const pathname = usePathname();
  const { session } = useSessionContext();

  return (
    <ul className='flex flex-col gap-5 relative'>
      {navigationItems.map((item, i) => (
        <NavLink
          key={item.title}
          slug={item.slug}
          title={item.title}
          pathname={pathname}
          className='text-lg'
        />
      ))}

      {!session?.user ? (
        <li className='mb-6 px-6'>
          <Link
            href='/sign-in'
            className='border-2 rounded-md w-full px-6 py-2 text-lg block'
          >
            Sign In
          </Link>
        </li>
      ) : (
        <li className='mb-6 px-6'>
          <Link
            href='/sign-in'
            className='border-2 rounded-md w-full px-6 py-2 text-lg block'
            onClick={() => signOut()}
          >
            Sign Out
          </Link>
        </li>
      )}
    </ul>
  );
};
