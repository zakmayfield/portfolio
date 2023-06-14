import { FC } from 'react';
import { NavLinksGroup } from '@/shared/components';

interface FooterLinksProps {}

export const FooterLinks: FC<FooterLinksProps> = ({}) => {
  return (
    <div className='flex-1'>
      <NavLinksGroup className='flex-col text-sm md:flex-row items-end justify-end' />
    </div>
  );
};
