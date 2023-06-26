import { FC } from 'react';
import { navigationItems } from '@/shared/constants';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface DrawerProps {
  isMenuOpen: boolean;
}

export const Drawer: FC<DrawerProps> = ({ isMenuOpen }) => {
  const variants = {
    open: {
      height: 'auto',
      overflow: 'visible',
    },
    closed: { height: 0, overflow: 'hidden' },
  };
  return (
    <div className='text-center'>
      <motion.ul
        variants={variants}
        animate={isMenuOpen ? 'open' : 'closed'}
        className='flex flex-col gap-3 relative'
      >
        {navigationItems.map((item, i) => (
          <li key={item.title} className='last-of-type:pb-6'>
            <Link href={item.slug}>{item.title}</Link>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};
