import { FC } from 'react';

interface DrawerProps {
  isMenuOpen: boolean;
}

export const Drawer: FC<DrawerProps> = ({ isMenuOpen }) => {
  return (
    <div className={`text-center ${isMenuOpen ? 'block' : 'hidden'}`}>
      <ul>
        <li>link 1</li>
        <li>link 2</li>
        <li>link 3</li>
      </ul>
    </div>
  );
};
