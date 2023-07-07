'use client';

import { Button, ContentContainer } from '@/shared/components';
import { useSessionContext } from '@/shared/context/SessionContext';
import { FC, useState } from 'react';
import { unbounded } from '@/utils/fonts';
import { Edit, Save } from 'lucide-react';
import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface DashboardProps {}

export const Dashboard: FC<DashboardProps> = ({}) => {
  const { session } = useSessionContext();
  const [isEditing, setIsEditing] = useState(false);

  // const {} = useMutation({
  //   mutationFn: async () => {
  //     const { data } = await axios.post('/api/username');
  //   },
  // });

  return (
    <ContentContainer className={`max-w-2xl pt-6 ${unbounded.variable}`}>
      <h1 className='text-2xl font-unbounded mb-6'>
        Welcome, {session?.user.name}
      </h1>

      <div className='flex items-start gap-12 w-full justify-between px-6'>
        {/* https://robohash.org/52 */}
        <div>
          {session?.user.image ? (
            <Image
              src={session.user.image}
              alt='profile picture'
              width={150}
              height={150}
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
            <div className='flex items-center justify-between gap-6'>
              {isEditing ? (
                <form action='' className='flex-1 flex justify-between'>
                  <label htmlFor='username' className='sr-only'>
                    Username
                  </label>
                  <input
                    type='text'
                    id='username'
                    name='username'
                    className='p-2'
                  />
                  <Button
                    aria-label={isEditing ? 'save username' : 'edit username'}
                    variant='default'
                    onClick={() => {
                      console.log('edit clicked');
                      setIsEditing(!isEditing);
                    }}
                  >
                    <Save size={20} />
                  </Button>
                </form>
              ) : (
                <p className='text-lg'>{session?.user.username}</p>
              )}

              {!isEditing && (
                <Button
                  aria-label={isEditing ? 'save username' : 'edit username'}
                  variant='default'
                  onClick={() => {
                    console.log('edit clicked');
                    setIsEditing(!isEditing);
                  }}
                >
                  <Edit size={20} />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};
