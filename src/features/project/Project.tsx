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
        <div className='flex flex-col md:flex-row gap-6 justify-center'>
          <FullHeightImage
            image={project.image}
            altText={`${project.name} landing page`}
            className='w-full md:w-2/3'
            rounded
          />
          <div className='p-6'>
            <h3 className='text-xl font-semibold'>Stack</h3>
            <ul className='mt-4 flex flex-wrap md:flex-col gap-6 md:gap-2'>
              <li className='p-2 border-2 rounded-md'>TypeScript</li>
              <li className='p-2 border-2 rounded-md'>Next.js v13+</li>
              <li className='p-2 border-2 rounded-md'>Chakra UI</li>
              <li className='p-2 border-2 rounded-md'>Framer Motion</li>
              <li className='p-2 border-2 rounded-md'>Node.js</li>
            </ul>
          </div>
        </div>

        <div className='p-6 indent-2 tracking-wide leading-relaxed text-lg max-w-[75ch] mx-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nobis
          et necessitatibus odio delectus fugiat, qui reprehenderit eius est
          mollitia minima! Animi accusantium suscipit at quod iste consequatur
          odit! Unde. Similique vel eum numquam mollitia. Repudiandae aut vel
          voluptate expedita repellat cum aperiam maxime explicabo nam! Natus
          nobis, molestias nulla est quis explicabo aspernatur eaque odit
          deleniti doloremque? Ab, debitis.
        </div>
        <Button className='w-48 mt-6' onClick={() => router.back()}>
          Back
        </Button>
      </ContentContainer>
    </div>
  );
};
