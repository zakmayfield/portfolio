import { FC } from 'react';
import { ContentContainer, FullHeightImage } from '@/shared/components';

interface HeroProps {}

export const Hero: FC<HeroProps> = ({}) => {
  return (
    // TODO: make 100vh header
    <div className='h-[80vh] bg-gradient-to-b from-orange-50 to-white flex items-center'>
      <ContentContainer className='md:max-w-6xl px-6 md:px-12'>
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
