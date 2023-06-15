import { ContentContainer } from '@/shared/components';
import { FC, ReactNode } from 'react';

interface IntroProps {}

export const Intro: FC<IntroProps> = ({}) => {
  return (
    <ContentContainer className='px-6 my-20 md:mt-28 md:max-w-4xl'>
      <div className='flex-col max-w-[65ch] mx-auto'>
        <div className='md:border-b mb-6 md:pb-6'>
          <h3 className='text-3xl md:text-4xl'>Thanks for stopping by</h3>
        </div>

        <div className='mb-6 mt-0 leading-relaxed tracking-wide md:px-6'>
          <p>
            My name is Zachary, I am a US/Canada based front end{' '}
            <Bolden>TypeScript</Bolden> developer, with a knowledge of{' '}
            <Bolden>Node.js backend architecture</Bolden>. I love building with
            the latest tech and Im constantly learning.
          </p>
        </div>

        <div className='leading-relaxed tracking-wide md:px-6'>
          <p>
            I have worked on projects with tech such as{' '}
            <Bolden>TypeScript</Bolden>, <Bolden>React</Bolden> (Next.js/Remix),{' '}
            <Bolden>Express</Bolden>, and <Bolden>CSS-in-JS</Bolden> libraries.
            Im familiar with <Bolden>RESTful & GraphQL</Bolden> server
            architecture & I prefer working with relational databases like{' '}
            <Bolden>Postgres</Bolden>, I enjoy working with ORMs like{' '}
            <Bolden>Prisma</Bolden> to help ease the pain of SQL.
          </p>
        </div>
      </div>
    </ContentContainer>
  );
};

function Bolden({ children }: { children: ReactNode }) {
  return <span className='font-semibold'>{children}</span>;
}
