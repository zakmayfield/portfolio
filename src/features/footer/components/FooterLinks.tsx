import { FC } from 'react';
import { navigationItems } from '@/shared/constants';
import { NavLink } from '@/shared/components';

interface FooterLinksProps {}

export const FooterLinks: FC<FooterLinksProps> = ({}) => {
  return (
    <div className='flex-1'>
      <ul className='flex gap-3 justify-end'>
        {navigationItems.map((item) => (
          <NavLink key={item.slug} slug={item.slug} title={item.title} />
        ))}
      </ul>
    </div>
  );
};
