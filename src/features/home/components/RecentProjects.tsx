import { ContentContainer, FullHeightImage } from '@/shared/components';
import { FC } from 'react';
import { projects } from '@/shared/constants';
import { StaticImageData } from 'next/image';

interface RecentProjectsProps {}

export const RecentProjects: FC<RecentProjectsProps> = ({}) => {
  return (
    <div className='my-6 md:my-12 max-w-6xl mx-auto'>
      <ContentContainer className='px-6'>
        <h3 className='text-2xl md:text-4xl mb-6'>
          Check out my recent projects
        </h3>
        <ProjectsContainer />
      </ContentContainer>
    </div>
  );
};

function ProjectsContainer() {
  return (
    <div className='flex flex-col gap-12 md:gap-6 md:flex-row'>
      {projects.map(({ id, name, image }) => (
        <ProjectSquare key={id} name={name} image={image} />
      ))}
    </div>
  );
}

function ProjectSquare({
  name,
  image,
}: {
  name: string;
  image: StaticImageData;
}) {
  return (
    <div className='flex flex-1 justify-center items-center'>
      <FullHeightImage image={image} altText={name} className='md:max-h-72' />
    </div>
  );
}
