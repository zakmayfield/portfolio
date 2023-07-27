import { ContentContainer, FullHeightImage } from '@/shared/components';
import { FC } from 'react';
import { projects } from '@/shared/constants';
import { ProjectType } from '@/shared/types';
import Link from 'next/link';
import { ProjectCard } from './components';

interface ProjectProps {}

export const Projects: FC<ProjectProps> = () => {
  function navigateTo(slug: string) {}

  return (
    <div className='p-6 pt-12'>
      <ContentContainer className='max-w-4xl'>
        <h1 className='text-2xl tracking-wide mb-6'>Experience</h1>

        <div className='flex flex-col gap-6'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </ContentContainer>
    </div>
  );
};
