import { FC } from 'react';
import { Hero, Intro } from './components';
import { ContentContainer } from '@/shared/components';

interface HomeProps {}

export const Home: FC<HomeProps> = ({}) => {
  return (
    <main>
      <Hero />
      <ContentContainer className='px-6 mt-6 md:mt-12 border md:max-w-4xl'>
        <Intro />
      </ContentContainer>
    </main>
  );
};
