import { FC } from 'react';

interface SkeletonProps {}

export const Skeleton: FC<SkeletonProps> = ({}) => {
  return (
    <div className='min-h-[50vh] flex justify-center items-center'>
      <div>Loading...</div>
    </div>
  );
};
