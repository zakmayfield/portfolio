'use client';
import { FC } from 'react';
import { ContentContainer } from '@/shared/components';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {}

export const Hero: FC<HeroProps> = ({}) => {
  const { scrollYProgress } = useScroll();

  const scaleAnimation = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7],
    [1, 2, 3]
  );

  return (
    <div className='h-[80vh] bg-gradient-to-b from-orange-600 to-white flex items-center relative overflow-hidden'>
      <motion.div
        style={{ scale: scaleAnimation, rotate: '45deg' }}
        className='w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-[3rem]  absolute -top-32 bg-white -right-28 z-0'
      />
      <ContentContainer className='md:max-w-6xl px-6 md:px-12 relative z-10'>
        <HeroContent />
      </ContentContainer>
    </div>
  );
};

function HeroContent() {
  return (
    <div className='w-full'>
      <div className='flex flex-col items-end md:items-start justify-center'>
        <h1 className='text-4xl md:text-6xl tracking-wide'>Zachary Mayfield</h1>
        <h2 className='text-2xl md:text-2xl leading-loose'>
          Front end developer
        </h2>
      </div>
    </div>
  );
}
