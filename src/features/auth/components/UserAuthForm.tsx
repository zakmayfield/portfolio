'use client';
import { FC, HTMLAttributes, useState } from 'react';
import { signIn } from 'next-auth/react';
import { cn } from '@/lib/utils';
import { Button, Icons } from '@/shared/components';
import { unbounded } from '@/utils/fonts';

// TODO: refactor all components that take a className prop to this syntax + cn util
// extending this type allows me to pass 'className' to the div without any extra typing
interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> {}

export const UserAuthForm: FC<UserAuthFormProps> = ({
  className,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn('google');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={cn(
        `flex flex-col items-center justify-center ${unbounded.variable}`,
        className
      )}
    >
      <p className='text-sm mb-6 border-b-8 border-b-orange-500'>
        Please note this form is currently a work in progress
      </p>

      <h1 className='mb-6 text-2xl font-unbounded'>Welcome back!</h1>

      <p className='mb-3'>Please sign in to continue</p>

      <Button onClick={loginWithGoogle}>
        {<Icons.google className='h-4 w-4 mr-2' />} Sign In with Google
      </Button>
    </div>
  );
};
