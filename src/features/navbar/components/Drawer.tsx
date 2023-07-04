import { FC } from 'react';
import { navigationItems } from '@/shared/constants';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { DrawerLinks } from './DrawerLinks';

interface DrawerProps {
  isMenuOpen: boolean;
}

export const Drawer: FC<DrawerProps> = ({ isMenuOpen }) => {
  const pathname = usePathname();

  const variants = {
    open: {
      height: 'auto',
      overflow: 'visible',
    },
    closed: {
      height: 0,
      overflow: 'hidden',
    },
  };
  return (
    <motion.div
      className='text-center'
      initial={{ overflow: 'hidden', height: 0 }}
      variants={variants}
      animate={isMenuOpen ? 'open' : 'closed'}
    >
      <DrawerLinks />
    </motion.div>
  );
};
