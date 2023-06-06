import { FC } from 'react';
import { Hero } from './components';

interface HomeProps {}

export const Home: FC<HomeProps> = ({}) => {
  return (
    <main>
      <Hero />
    </main>
  );
};
