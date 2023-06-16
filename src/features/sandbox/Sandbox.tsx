import { getAuthSession } from '@/lib/auth';
import { ContentContainer } from '@/shared/components';
import Link from 'next/link';

export const Sandbox = async ({}) => {
  const session = await getAuthSession();
  return (
    <div>
      <ContentContainer className='md:max-w-2xl mx-auto p-6 bg-slate-200'>
        Sandbox
        <div className='text-center'>
          {session ? 'logged in' : <Link href='/sign-up'>Sign Up</Link>}
        </div>
      </ContentContainer>
    </div>
  );
};
