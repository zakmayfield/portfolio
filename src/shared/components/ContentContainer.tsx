import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
}

export const ContentContainer: FC<ContentContainerProps> = ({
  children,
  className,
}) => {
  const defaultStyles = `max-w-8xl mx-auto px-6`;
  const merged = twMerge(defaultStyles, className);

  return <div className={merged}>{children}</div>;
};
