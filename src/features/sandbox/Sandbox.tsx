import { Session } from 'next-auth/';
import Link from 'next/link';
import { FC } from 'react';

interface SandboxProps {
  session?: Session | null;
}

export const Sandbox: FC<SandboxProps> = ({ session }) => {
  return (
    <div className='flex items-end h-full gap-6'>
      <div className='border-4 self-start border-slate-200 p-6 bg-slate-100 w-2/3 h-full rounded-md'>
        Welcome to the sandbox dashboard.
      </div>
      <div className='border-4 border-slate-200 bg-slate-100 p-6 flex-grow h-full rounded-md'>
        {session?.user ? <Authn /> : <Unauthn />}
      </div>
    </div>
  );
};

function Unauthn() {
  return (
    <div>
      <p className='mb-12'> Please sign in to view the sandbox dashboard.</p>
      <Link href='/sign-up'>Sign In</Link>
    </div>
  );
}

function Authn() {
  return <div>Signed In</div>;
}
