'use client';

import { ContentContainer } from '@/shared/components';
import { useSessionContext } from '@/shared/context/SessionContext';
import { FC } from 'react';
import { unbounded } from '@/utils/fonts';

interface DashboardProps {}

export const Dashboard: FC<DashboardProps> = ({}) => {
  const { session } = useSessionContext();
  return (
    <ContentContainer className={`max-w-2xl pt-6 ${unbounded.variable}`}>
      <h1 className='text-2xl font-unbounded mb-6'>
        Welcome, {session?.user.name}
      </h1>

      <div className='flex items-center gap-12 w-full justify-between px-6'>
        <div className='p-12'>img</div>

        <div className='flex-1 flex flex-col gap-6'>
          <div>
            <h3 className='font-thin'>Name</h3>
            <p>{session?.user.name}</p>
          </div>

          <div>
            <h3 className='font-thin'>Email</h3>
            <p>{session?.user.email}</p>
          </div>

          <div>
            <h3 className='font-thin'>Username</h3>
            <p>{session?.user.username}</p>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};
