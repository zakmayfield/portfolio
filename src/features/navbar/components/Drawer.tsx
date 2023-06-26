import { FC } from 'react';
import { navigationItems } from '@/shared/constants';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface DrawerProps {
  isMenuOpen: boolean;
}

export const Drawer: FC<DrawerProps> = ({ isMenuOpen }) => {
  const variants = {
    open: { height: 'auto' },
    closed: { height: 0 },
  };
  return (
    <div className='text-right'>
      <AnimatePresence>
        <motion.ul
          variants={variants}
          exit={{ height: 0 }}
          animate={isMenuOpen ? 'open' : 'closed'}
          className='flex flex-col gap-3'
        >
          {navigationItems.map((item) => (
            <li key={item.title}>
              <Link href={item.slug}>{item.title}</Link>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
};
