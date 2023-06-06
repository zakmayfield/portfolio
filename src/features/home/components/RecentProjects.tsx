import { FC } from 'react';

interface RecentProjectsProps {}

export const RecentProjects: FC<RecentProjectsProps> = ({}) => {
  return (
    <div>
      <div>
        <h3 className='text-2xl md:text-4xl'>Check out my recent projects</h3>
      </div>

      <ProjectsContainer />
    </div>
  );
};

function ProjectsContainer() {
  return (
    <div className='p-6'>
      <div>one</div>
      <div>two</div>
      <div>three</div>
    </div>
  );
}
