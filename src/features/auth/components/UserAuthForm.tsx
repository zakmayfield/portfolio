'use client';
import { FC, HTMLAttributes, useState } from 'react';
import { signIn } from 'next-auth/react';
import { cn } from '@/lib/utils';
import { Button } from '@/shared/components';

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
    <div className={cn('flex justify-center', className)}>
      <Button onClick={loginWithGoogle}>Sign In with Google</Button>
    </div>
  );
};
