import { ContentContainer, FadeIn, FullHeightImage } from '@/shared/components';
import { ProjectType } from '@/shared/types';
import Link from 'next/link';
import { FC } from 'react';

interface ProjectCardProps {
  project: ProjectType;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <FadeIn>
      <ContentContainer className='max-w-md md:max-w-3xl flex flex-col-reverse md:flex-row justify-between md:items-center border rounded-md p-3 shadow-md'>
        <div className='mt-6 md:mt-0'>
          <h3 className='text-lg mb-3'>{project.name}</h3>
          <ul className='flex flex-wrap  gap-6 gap-y-3 text-sm'>
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className='w-full md:w-[35ch] whitespace-nowrap overflow-hidden text-ellipsis mt-6'>
            {project.description}
          </div>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className='w-full md:w-48 md:ml-6'
        >
          <FullHeightImage
            image={project.image}
            altText={`${project.name} landing page`}
            rounded
          />
        </Link>
      </ContentContainer>
    </FadeIn>
  );
};
