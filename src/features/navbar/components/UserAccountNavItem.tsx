'use client';

import { FC } from 'react';
import { User } from 'next-auth/';
import { UserAvatar } from './UserAvatar';
import { DropdownMenu } from './DropdownMenu';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

interface UserAccountNavItemProps {
  user: Pick<User, 'name' | 'image' | 'email'>;
}

export const UserAccountNavItem: FC<UserAccountNavItemProps> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar user={user} />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className='bg-white mt-3 rounded-md z-10'
        align='end'
      >
        <div className='flex flex-col items-start justify-start gap-1 p-2 space-y-1 leading-none'>
          {user.name && <p className='font-medium px-1'>{user.name}</p>}
          {user.email && <p className='text-sm px-1 font-thin'>{user.email}</p>}

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link href='/dashboard'>Dashboard</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className='text-center border w-full p-1 rounded-md cursor-pointer'
            onSelect={(event) => {
              event.preventDefault();
              signOut({
                callbackUrl: `${window.location.origin}/sign-in`,
              });
            }}
          >
            Sign Out
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
