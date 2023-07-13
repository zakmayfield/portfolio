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
    <div className='mb-12 md:my-28 max-w-6xl mx-auto'>
      <ContentContainer className='px-6'>
        <h3 className='text-2xl md:text-3xl mb-6'>
          Check out my recent projects
        </h3>
        <ProjectsContainer />
      </ContentContainer>
    </div>
  );
};

function ProjectsContainer() {
  return (
    <div className='flex flex-col gap-6 md:flex-row'>
      {projects.slice(0, 2).map(({ id, name, image, slug }) => (
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
      className='relative flex justify-center items-center cursor-pointer shadow-md rounded-lg overflow-hidden max-h-72'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FullHeightImage image={image} altText={name} />
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
              {name}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}
