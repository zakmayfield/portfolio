'use client';
import { Button, ContentContainer, FullHeightImage } from '@/shared/components';
import { ProjectType } from '@/shared/types';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { projects } from '@/shared/constants';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/DropdownMenu';
import { ExternalLink } from 'lucide-react';

interface ProjectProps {
  project: ProjectType;
}

export const Project: FC<ProjectProps> = ({ project }) => {
  const router = useRouter();

  function navigate(item: ProjectType) {
    router.push(`/projects/${item.slug}`);
  }

  return (
    <div className='p-6 pt-12'>
      <ContentContainer className='max-w-4xl flex flex-col gap-6'>
        <div className='flex items-center gap-3 mb-6'>
          <a
            href={project.url}
            target='_blank'
            className='text-slate-700 flex items-center gap-6'
          >
            <h1 className='text-2xl tracking-wide'>{project.name}</h1>
            <ExternalLink />
          </a>
        </div>

        <div className='flex flex-col md:flex-row gap-6 justify-center items-start'>
          <FullHeightImage
            image={project.image}
            altText={`${project.name} landing page`}
            className={`w-full md:w-2/3 h-[50vh] md:h-auto shadow-lg ${
              project.id === 3 ? 'py-24 px-6 flex justify-center' : ''
            }`}
            rounded
          />

          <div className='p-6'>
            <h3 className='text-xl font-semibold'>Stack</h3>
            <ul className='mt-4 flex flex-wrap md:flex-col gap-6 md:gap-2 tracking-wide'>
              {project.stack.map((item) => (
                // TODO: ecommerce experience | add challenges to description
                <li
                  key={item}
                  className='px-2 py-1 border-2 bg-slate-100 text-slate-500 rounded-md'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='p-6 tracking-wide leading-relaxed text-lg max-w-[75ch] mx-auto'>
          {project.description}
        </div>

        <div className='flex justify-end items-center'>
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className='py-8 md:py-2 mt-6 text-lg md:text-md font-normal'
            >
              <Button>Projects</Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='w-80 md:w-56 mr-6 md:mr-0'>
              <DropdownMenuLabel className='text-lg'>
                Select a Project
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {projects.map(
                  (item) =>
                    project.name !== item.name && (
                      <DropdownMenuItem
                        key={item.slug}
                        className='cursor-pointer text-lg'
                        onClick={() => navigate(item)}
                      >
                        <span>{item.name}</span>
                      </DropdownMenuItem>
                    )
                )}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </ContentContainer>
    </div>
  );
};
