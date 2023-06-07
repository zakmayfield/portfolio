import { ContentContainer } from '@/shared/components';
import { FC } from 'react';
import { FooterLogo, FooterNavigation, FooterSocialLinks } from './components';

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className='border'>
      <ContentContainer className='flex justify-between items-center h-[150px] px-6'>
        <FooterLogo />
        <FooterSocialLinks />
        <FooterNavigation />
      </ContentContainer>
    </footer>
  );
};
