import { FC } from 'react';

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav>
      <a href='/'>Home</a>
      <a href='/about'>About</a>
    </nav>
  );
};
