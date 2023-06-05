import { FC } from 'react';

interface HomeProps {}

export const Home: FC<HomeProps> = ({}) => {
  return (
    <main>
      <div className='text-left'>
        <h1 className='font-extralight text-3xl'>Home Page</h1>
      </div>
    </main>
  );
};
