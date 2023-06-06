import { Logo } from '@/shared/components';
import { FC } from 'react';

interface FooterLogoProps {}

export const FooterLogo: FC<FooterLogoProps> = ({}) => {
  return (
    <div className='flex-1'>
      <Logo className='text-4xl md:text-6xl' />
    </div>
  );
};
