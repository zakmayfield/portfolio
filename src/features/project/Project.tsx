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
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/shared/components/DropdownMenu';
import { CreditCard, User } from 'lucide-react';
import Link from 'next/link';

interface ProjectProps {
  project: ProjectType;
}

export const Project: FC<ProjectProps> = ({ project }) => {
  const router = useRouter();

  function test(item: any) {
    router.push(`/projects/${item.slug}`);
  }

  return (
    <div className='p-6 pt-12'>
      <ContentContainer className='max-w-4xl flex flex-col gap-6'>
        <h1 className='text-2xl tracking-wide'>{project.name}</h1>

        <div className='flex flex-col md:flex-row gap-6 justify-center items-start'>
          <FullHeightImage
            image={project.image}
            altText={`${project.name} landing page`}
            className='w-full md:w-2/3 h-[50vh] md:h-auto shadow-lg'
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

        <div className='p-6 indent-2 tracking-wide leading-relaxed text-lg max-w-[75ch] mx-auto'>
          {project.description}
        </div>

        <div className='flex justify-between items-center'>
          <Button
            className='w-1/3 py-8 md:py-2 mt-6 text-lg md:text-md font-normal'
            onClick={() => router.back()}
          >
            Back
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className='py-8 md:py-2 mt-6 text-lg md:text-md font-normal'
            >
              <Button variant='outline'>Projects</Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='w-56'>
              <DropdownMenuLabel>Select a Project</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {projects.map(
                  (item) =>
                    project.name !== item.name && (
                      <DropdownMenuItem
                        key={item.slug}
                        className='cursor-pointer'
                        onClick={() => test(item)}
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
