import { FC } from 'react';
import { UserAuthForm } from './components';
import { ContentContainer } from '@/shared/components';

interface SignUpProps {}

export const SignUp: FC<SignUpProps> = ({}) => {
  return (
    <div>
      <ContentContainer className='md:max-w-2xl p-6 bg-slate-200 '>
        <UserAuthForm />
      </ContentContainer>
    </div>
  );
};
