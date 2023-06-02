import { FC } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

interface NavbarSocialIconsProps {}

export const NavbarSocialIcons: FC<NavbarSocialIconsProps> = ({}) => {
  return (
    <div className='hidden md:flex items-center gap-6 flex-1'>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsLinkedin />
      </div>
    </div>
  );
};
