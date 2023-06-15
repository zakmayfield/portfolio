import { ProjectType } from '@/shared/types';
import { FC } from 'react';

interface ProjectProps {
  project: ProjectType;
}

export const Project: FC<ProjectProps> = ({ project }) => {
  return <div>Project {project.name}</div>;
};
