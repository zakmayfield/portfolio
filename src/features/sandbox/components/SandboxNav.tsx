import { Session } from 'next-auth/';
import Link from 'next/link';
import { FC } from 'react';
import { UserAccountNav } from './UserAccountNav';

interface SandboxNavProps {
  session?: Session | null;
}

export const SandboxNav: FC<SandboxNavProps> = ({ session }) => {
  return (
    <div className='flex gap-12 justify-end p-6 bg-gradient-to-r from-blue-50 to-blue-300 '>
      {/* links */}
      <ul className='flex gap-6'>
        <li>
          <Link href='/sandbox'>sandbox</Link>
        </li>
        <li>
          <Link href='/sandbox/foo'>foo</Link>
        </li>
      </ul>

      {/* sign in / avatar */}
      <div>
        {session?.user ? (
          <UserAccountNav />
        ) : (
          <Link href='/sign-up' className='border-2 rounded-md p-2'>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};
