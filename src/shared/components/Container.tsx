import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`${className} border max-w-7xl mx-auto`}>{children}</div>
  );
};
