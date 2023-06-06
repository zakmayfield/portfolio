import { FC } from 'react';

interface HeroProps {}

export const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className='px-6 h-[75vh] md:h-[450px] flex items-center border'>
      <HeroContent />
    </div>
  );
};

function HeroContent() {
  return (
    <div className='w-full'>
      <div className='flex flex-col items-end md:items-start justify-center '>
        <h1 className='text-4xl md:text-7xl tracking-wide'>Zachary Mayfield</h1>
        <h2 className='text-2xl md:text-2xl leading-loose'>
          Front end developer
        </h2>
      </div>
    </div>
  );
}
