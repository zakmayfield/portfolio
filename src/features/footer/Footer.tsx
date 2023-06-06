import { ContentContainer } from '@/shared/components';
import { FC } from 'react';
import { FooterLogo } from './components';

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className='border'>
      <ContentContainer className='flex justify-between items-center h-[150px] px-6'>
        <FooterLogo />

        <div>
          <p>social link</p>
          <p>social link</p>
        </div>

        <div>
          <p>link</p>
          <p>link</p>
          <p>link</p>
        </div>
      </ContentContainer>
    </footer>
  );
};
