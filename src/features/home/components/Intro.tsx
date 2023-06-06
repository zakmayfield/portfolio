import { FC, ReactNode } from 'react';

interface IntroProps {}

export const Intro: FC<IntroProps> = ({}) => {
  return (
    <div className='flex-col'>
      <div className=''>
        <h3 className='text-2xl md:text-4xl'>Thanks for stopping by</h3>
      </div>

      <div className='mb-6 mt-8 leading-relaxed tracking-wide'>
        <p>
          My name is Zachary, I’m a US/Canada based front end{' '}
          <Bolden>TypeScript</Bolden> developer, with a knowledge of{' '}
          <Bolden>Node.js backend architecture</Bolden>. I love building with
          the latest tech and I’m constantly learning.
        </p>
      </div>

      <div className='leading-relaxed tracking-wide'>
        <p>
          I’ve worked on projects with tech such as <Bolden>TypeScript</Bolden>,
          <Bolden>React</Bolden>, (Next.js/Remix), <Bolden>Express</Bolden>, and
          <Bolden>CSS-in-JS</Bolden> libraries. I’m familiar with{' '}
          <Bolden>RESTful & GraphQL</Bolden> server architecture & I prefer
          working with relational databases like <Bolden>Postgres</Bolden>, I
          enjoy working with ORMs like <Bolden>Prisma</Bolden> to help ease the
          pain of SQL.
        </p>
      </div>
    </div>
  );
};

function Bolden({ children }: { children: ReactNode }) {
  return <span className='font-semibold'>{children}</span>;
}
