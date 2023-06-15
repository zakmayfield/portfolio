import { ContentContainer } from '@/shared/components';
import { FC } from 'react';

interface HeroProps {}

export const Hero: FC<HeroProps> = ({}) => {
  return (
    // TODO: make 100vh header
    <div className='px-6 h-[50vh] flex items-center bg-slate-100'>
      <ContentContainer className='md:max-w-6xl'>
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
