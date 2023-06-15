'use client';
import { FC, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { StaticImageData } from 'next/image';
import { ContentContainer, FullHeightImage } from '@/shared/components';
import { projects } from '@/shared/constants';

interface RecentProjectsProps {}

export const RecentProjects: FC<RecentProjectsProps> = ({}) => {
  return (
    <div className='my-6 md:my-28 max-w-6xl mx-auto'>
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
      {projects.map(({ id, name, image, slug }) => (
        <ProjectSquare key={id} name={name} image={image} slug={slug} />
      ))}
    </div>
  );
}

function ProjectSquare({
  name,
  image,
  slug,
}: {
  name: string;
  image: StaticImageData;
  slug: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/projects/${slug}`}
      className='relative flex flex-1 justify-center items-center cursor-pointer overflow-hidden'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FullHeightImage
        image={image}
        altText={name}
        className='md:max-h-72 md:rounded-md'
      />
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='absolute inset-0 md:max-h-72 md:rounded-md flex items-center justify-center bg-black bg-opacity-70'
          >
            <p className='text-white text-2xl tracking-wide font-thin'>
              {name}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}
