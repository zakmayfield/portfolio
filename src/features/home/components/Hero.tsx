import { FC } from 'react';
import { ContentContainer, FullHeightImage } from '@/shared/components';

interface HeroProps {}

export const Hero: FC<HeroProps> = ({}) => {
  return (
    // TODO: make 100vh header
    <div className='h-[80vh] bg-gradient-to-b from-blue-100 to-white flex items-center relative overflow-hidden'>
      <div className='w-[500px] rounded-[3rem] h-[500px] absolute -top-20 bg-white -right-20 rotate-45 z-0' />
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
