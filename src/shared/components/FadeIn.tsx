'use client';
import { FC, ReactNode, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
}

export const FadeIn: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1 }}
    >
      {children}
    </motion.div>
  );
};
