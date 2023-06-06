import { FC } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { socialNavigationItems } from '@/shared/constants';

interface NavbarSocialIconsProps {}

export const NavbarSocialIcons: FC<NavbarSocialIconsProps> = ({}) => {
  return (
    <div className='hidden md:flex items-center gap-6 flex-1'>
      {socialNavigationItems.map(({ id, link, icon }) => (
        <a key={id} href={link}>
          {icon}
        </a>
      ))}
    </div>
  );
};
