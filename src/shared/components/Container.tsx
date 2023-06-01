import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  const tailWindClasses = className
    ? `${className} border max-w-8xl mx-auto px-6`
    : `border max-w-8xl mx-auto px-6`;
  return <div className={tailWindClasses}>{children}</div>;
};
