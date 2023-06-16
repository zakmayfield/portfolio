import { ContentContainer } from '@/shared/components';
import { getAuthSession } from '@/lib/auth';
import Link from 'next/link';
import { SandboxNav } from '../../features/sandbox/components';
import { unbounded } from '../utils/fonts';

export const metadata = {
  title: 'Sandbox | Zachary Mayfield',
};

export default async function SandboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();

  return (
    <ContentContainer
      className={`md:max-w-5xl mx-auto rounded-2xl shadow-lg bg-slate-100 overflow-hidden ${unbounded.variable}`}
    >
      <div className='flex justify-end p-6 bg-gradient-to-r from-blue-50 to-blue-300 '>
        <div>
          {session?.user ? (
            <SandboxNav />
          ) : (
            <Link href='/sign-up' className='border-2 rounded-md p-2'>
              Sign In
            </Link>
          )}
        </div>
      </div>

      <h1 className='text-center font-unbounded text-2xl my-6'>SANDBOX</h1>

      <div className='px-6 mx-6 mb-6 h-[50vh] border-4 rounded-md border-blue-300 bg-slate-50'>
        {children}
      </div>
    </ContentContainer>
  );
}
