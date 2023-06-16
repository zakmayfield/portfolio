import { FC } from 'react';
import { ContentContainer } from '@/shared/components';

interface SandboxProps {}

export const Sandbox: FC<SandboxProps> = ({}) => {
  return (
    <div>
      <ContentContainer className='md:max-w-2xl mx-auto p-6 bg-slate-200'>
        Sandbox
      </ContentContainer>
    </div>
  );
};
