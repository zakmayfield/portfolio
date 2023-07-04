import { FC } from 'react';
import { UserAuthForm } from './components';
import { ContentContainer } from '@/shared/components';

interface SignInProps {}

export const SignIn: FC<SignInProps> = ({}) => {
  return (
    <div>
      <ContentContainer className='md:max-w-2xl p-6 '>
        <UserAuthForm />
      </ContentContainer>
    </div>
  );
};
