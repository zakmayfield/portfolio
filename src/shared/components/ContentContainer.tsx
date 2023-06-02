import { FC, ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
}

export const ContentContainer: FC<ContentContainerProps> = ({
  children,
  className,
}) => {
  const tailWindClasses = className
    ? ` ${className} max-w-8xl mx-auto px-6`
    : `max-w-8xl mx-auto px-6`;
  return <div className={tailWindClasses}>{children}</div>;
};
