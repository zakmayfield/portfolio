import { Project } from '@/features/project';
import { projects } from '@/shared/constants';
import { notFound } from 'next/navigation';

export default function ProjectPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return <Project project={project} />;
}
