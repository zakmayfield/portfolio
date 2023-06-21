import { ContentContainer, FullHeightImage } from '@/shared/components';
import { FC } from 'react';
import { projects } from '@/shared/constants';
import { ProjectType } from '@/shared/types';
import Link from 'next/link';

interface ProjectProps {}

export const Projects: FC<ProjectProps> = () => {
  function navigateTo(slug: string) {}

  return (
    <div className='p-6 pt-12'>
      <ContentContainer className='max-w-4xl'>
        <h1 className='text-2xl tracking-wide mb-6'>Projects</h1>

        <div className='px-6 flex flex-col gap-6'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </ContentContainer>
    </div>
  );
};

function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <ContentContainer className='max-w-3xl flex justify-between items-center border rounded-md p-3 shadow-md'>
      <div>
        <h3 className='text-lg mb-3'>{project.name}</h3>
        <ul className='flex gap-6 text-sm'>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className='w-[35ch] whitespace-nowrap overflow-hidden text-ellipsis mt-6'>
          {project.description}
        </div>
      </div>

      <Link href={`/projects/${project.slug}`} className='w-48'>
        <FullHeightImage
          image={project.image}
          altText={`${project.name} landing page`}
          rounded
        />
      </Link>
    </ContentContainer>
  );
}
