'use client';
import { ContentContainer, FadeIn, FullHeightImage } from '@/shared/components';
import { ProjectType } from '@/shared/types';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { FC, useState } from 'react';

interface ProjectCardProps {
  project: ProjectType;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FadeIn>
      <ContentContainer className='max-w-md md:max-w-3xl flex flex-col-reverse md:flex-row justify-between md:items-start border rounded-md p-3 shadow-md'>
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
          className={`w-full md:w-48 md:ml-6 relative overflow-hidden rounded-md ${
            project.id === 3 ? 'p-6' : ''
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FullHeightImage
            image={project.image}
            altText={`${project.name} website`}
            rounded
          />

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-70'
              >
                <p className='text-white text-2xl tracking-wide font-thin'>
                  view
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
      </ContentContainer>
    </FadeIn>
  );
};
