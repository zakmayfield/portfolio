import { ContentContainer } from '@/shared/components';
import { FC } from 'react';

interface RecentProjectsProps {}

export const RecentProjects: FC<RecentProjectsProps> = ({}) => {
  return (
    <div className='my-6 md:my-12 max-w-6xl mx-auto'>
      <ContentContainer className='px-6 mb-6'>
        <h3 className='text-2xl md:text-4xl'>Check out my recent projects</h3>
      </ContentContainer>

      <ProjectsContainer />
    </div>
  );
};

const projects = [
  {
    id: 1,
    name: 'Chasers Juice',
  },
  {
    id: 2,
    name: 'Dominos',
  },
];

function ProjectsContainer() {
  return (
    <div className='flex flex-col md:flex-row h-[100vh] md:h-[350px]'>
      {projects.map((project) => (
        <ProjectSquare key={project.id} name={project.name} />
      ))}
    </div>
  );
}

function ProjectSquare({ name }: { name: string }) {
  return (
    <div className='flex flex-1 justify-center items-center border'>{name}</div>
  );
}
