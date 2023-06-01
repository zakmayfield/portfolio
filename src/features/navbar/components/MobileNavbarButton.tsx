import { FC } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

interface MobileNavbarButtonProps {}

export const MobileNavbarButton: FC<MobileNavbarButtonProps> = ({}) => {
  return (
    <div className='md:hidden flex items-center'>
      <HiOutlineMenuAlt3 className='text-3xl' />
    </div>
  );
};
