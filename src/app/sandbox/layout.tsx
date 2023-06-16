import { ContentContainer } from '@/shared/components';
import { getAuthSession } from '@/lib/auth';
import { unbounded } from '../utils/fonts';
import { SandboxNav } from '@/features/sandbox/components';

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
      <SandboxNav session={session} />
      <h1 className='text-center font-unbounded text-2xl my-6'>SANDBOX</h1>

      <div className='p-6 mx-6 mb-6 h-[50vh] border-4 rounded-md border-slate-400 bg-slate-300'>
        {children}
      </div>
    </ContentContainer>
  );
}
