import { FC } from 'react';
import { SocialLinks } from '@/shared/components';

interface NavbarSocialLinksProps {}

export const NavbarSocialLinks: FC<NavbarSocialLinksProps> = ({}) => {
  return <SocialLinks className='hidden md:flex flex-1' />;
};
