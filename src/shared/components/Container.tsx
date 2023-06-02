import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  const tailWindClasses = className
    ? `${className} max-w-8xl mx-auto px-6 min-h-screen`
    : `max-w-8xl mx-auto px-6 min-h-screen border`;
  return <div className={tailWindClasses}>{children}</div>;
};
