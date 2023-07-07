'use client';

import { FC, useState } from 'react';
import { Edit, Save } from 'lucide-react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import axios, { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { Button, ContentContainer } from '@/shared/components';
import { useSessionContext } from '@/shared/context/SessionContext';
import { unbounded } from '@/utils/fonts';
import {
  EditUsernamePayload,
  UsernameValidator,
} from '@/lib/validators/username';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

interface DashboardProps {}

type FormData = z.infer<typeof UsernameValidator>;

export const Dashboard: FC<DashboardProps> = ({}) => {
  const router = useRouter();
  const { session } = useSessionContext();
  const [isEditing, setIsEditing] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(UsernameValidator),
    defaultValues: {
      username: session?.user.username || '',
    },
  });

  const { mutate: updateUsername, isLoading } = useMutation({
    mutationFn: async ({ username }: FormData) => {
      const payload: FormData = { username };

      const { data } = await axios.post('/api/username/', payload);
      return data;
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 409) {
          return;
        }
      }

      console.log('----- error -----', err);

      return;
    },
    onSuccess: () => {
      router.refresh();
    },
  });

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
                <form
                  action=''
                  onSubmit={handleSubmit((e) => updateUsername(e))}
                  className='flex-1 flex justify-between'
                >
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
                    aria-label={isEditing ? 'save edit' : 'edit username'}
                    variant='default'
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
                    setIsEditing(true);
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
