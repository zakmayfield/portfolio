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

        {/* TODO: add hover that shows overlay with 'View' as text */}
        <Link href={`/projects/${project.slug}`} className='w-48'>
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
