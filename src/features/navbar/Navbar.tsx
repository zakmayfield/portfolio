import { FC } from 'react';
import Link from 'next/link';

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className='px-6 flex flex-row'>
      <div className='border'>
        <Link href='/'>ZM</Link>
      </div>

      <ul className='flex'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/projects'>Projects</Link>
        </li>
      </ul>
    </nav>
  );
};
