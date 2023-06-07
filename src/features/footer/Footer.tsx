import { ContentContainer } from '@/shared/components';
import { FC } from 'react';
import { FooterLogo, FooterSocialLinks } from './components';

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className='border'>
      <ContentContainer className='flex justify-between items-center h-[150px] px-6'>
        <FooterLogo />
        <FooterSocialLinks />

        <div className='flex-1 text-right'>
          <p>link</p>
          <p>link</p>
          <p>link</p>
        </div>
      </ContentContainer>
    </footer>
  );
};
