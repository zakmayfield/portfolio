import { FC } from 'react';

interface IntroProps {}

export const Intro: FC<IntroProps> = ({}) => {
  return (
    <div className='flex-col border'>
      <div className=''>
        <h3 className='text-2xl'>Thanks for stopping by</h3>
      </div>

      <div className='mb-6 mt-8'>
        <p>
          My name is Zachary, I’m a US/Canada based front end{' '}
          <span>TypeScript</span> developer, with a knowledge of{' '}
          <span>Node.js backend architecture</span>. I love building with the
          latest tech and I’m constantly learning.
        </p>
      </div>

      <div>
        <p>
          I’ve worked on projects with tech such as <span>TypeScript</span>,
          <span>React</span>, (Next.js/Remix), <span>Express</span>, and
          <span>CSS-in-JS</span> libraries. I’m familiar with{' '}
          <span>RESTful & GraphQL</span> server architecture & I prefer working
          with relational databases like <span>Postgres</span>, I enjoy working
          with ORMs like <span>Prisma</span> to help ease the pain of SQL.
        </p>
      </div>
    </div>
  );
};
