import { FC } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

interface NavbarSocialIconsProps {}

export const NavbarSocialIcons: FC<NavbarSocialIconsProps> = ({}) => {
  return (
    <div className='hidden md:flex items-center gap-6 flex-1'>
      <a href='https://github.com/zakmayfield' target='_blank'>
        <BsGithub />
      </a>
      <a href='https://www.linkedin.com/in/zacharymayfield/' target='_blank'>
        <BsLinkedin />
      </a>
    </div>
  );
};
