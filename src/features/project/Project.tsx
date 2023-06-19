'use client';
import { Button, ContentContainer, FullHeightImage } from '@/shared/components';
import { ProjectType } from '@/shared/types';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ProjectProps {
  project: ProjectType;
}

export const Project: FC<ProjectProps> = ({ project }) => {
  const router = useRouter();
  return (
    <div className='p-6'>
      <ContentContainer className='max-w-4xl flex flex-col gap-6'>
        <h1 className='text-2xl tracking-wide'>{project.name}</h1>

        <div className='flex flex-col md:flex-row gap-6 justify-center items-start'>
          <FullHeightImage
            image={project.image}
            altText={`${project.name} landing page`}
            className='w-full md:w-2/3 h-[50vh] md:h-auto'
            rounded
          />

          <div className='p-6'>
            <h3 className='text-xl font-semibold'>Stack</h3>
            <ul className='mt-4 flex flex-wrap md:flex-col gap-6 md:gap-2 tracking-wide'>
              {project.stack.map((item) => (
                // TODO: ecommerce experience | add challenges to description | add box shadow to project image
                <li
                  key={project.id}
                  className='px-2 py-1 border-2 bg-slate-100 text-slate-500 rounded-md'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='p-6 indent-2 tracking-wide leading-relaxed text-lg max-w-[75ch] mx-auto'>
          {project.description}
        </div>
        <Button
          className='md:w-48 py-8 md:py-2 mt-6 text-lg md:text-md font-normal'
          onClick={() => router.back()}
        >
          Back
        </Button>
      </ContentContainer>
    </div>
  );
};
