import { FC } from 'react';
import { Hero, Intro, RecentProjects } from './components';

interface HomeProps {}

export const Home: FC<HomeProps> = ({}) => {
  return (
    <main>
      <Hero />
      <Intro />
      <RecentProjects />
    </main>
  );
};
