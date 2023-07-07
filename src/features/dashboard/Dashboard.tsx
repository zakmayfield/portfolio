'use client';

import { ContentContainer } from '@/shared/components';
import { useSessionContext } from '@/shared/context/SessionContext';
import { FC } from 'react';
import { unbounded } from '@/utils/fonts';
import { Edit } from 'lucide-react';
import Image from 'next/image';

interface DashboardProps {}

export const Dashboard: FC<DashboardProps> = ({}) => {
  const { session } = useSessionContext();
  return (
    <ContentContainer className={`max-w-2xl pt-6 ${unbounded.variable}`}>
      <h1 className='text-2xl font-unbounded mb-6'>
        Welcome, {session?.user.name}
      </h1>

      <div className='flex items-center gap-12 w-full justify-between px-6'>
        {/* https://robohash.org/52 */}
        <div className='p-12'>
          {session?.user.image ? (
            <Image
              src={session.user.image}
              alt='profile picture'
              width={100}
              height={100}
              className='rounded-full'
            />
          ) : (
            <Image
              src={`https://robohash.org/52?set=set2&size=300x300`}
              alt='image of robot'
              width={300}
              height={300}
              className='rounded-full mx-auto'
            />
          )}
        </div>

        <div className='flex-1 flex flex-col gap-6 bg-zinc-50 px-6 py-12 rounded-md'>
          <div className='border-b pb-6'>
            <h3 className='font-thin mb-2'>Name</h3>
            <p className='text-lg'>{session?.user.name}</p>
          </div>

          <div className='border-b pb-6'>
            <h3 className='font-thin mb-2'>Email</h3>
            <p className='text-lg'>{session?.user.email}</p>
          </div>

          <div>
            <h3 className='font-thin mb-2'>Username</h3>
            <div className='flex items-center gap-6'>
              <p className='text-lg'>{session?.user.username}</p>
              <Edit size={20} className='cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};
