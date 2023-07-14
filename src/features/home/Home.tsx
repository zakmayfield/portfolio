import { FC } from 'react';
import { Hero, Intro, RecentProjects } from './components';

interface HomeProps {}

export const Home: FC<HomeProps> = ({}) => {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <Intro />
      <RecentProjects />
    </main>
  );
};
