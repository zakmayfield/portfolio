import { FC } from 'react';
import { Hero, Intro } from './components';
import { ContentContainer } from '@/shared/components';

interface HomeProps {}

export const Home: FC<HomeProps> = ({}) => {
  return (
    <main>
      <Hero />
      <ContentContainer className='px-6 py-6'>
        <Intro />
      </ContentContainer>
    </main>
  );
};
