import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { twMerge } from 'tailwind-merge';
import { cn } from '@/lib/utils';

interface FullHeightImageProps {
  image: StaticImageData;
  altText: string;
  className?: string;
  rounded?: boolean;
}

export const FullHeightImage: FC<FullHeightImageProps> = ({
  image,
  altText,
  className,
  rounded = false,
}) => {
  return (
    <div className={cn('', className)}>
      <Image
        src={image}
        alt={altText}
        className={`object-cover h-full object-center ${
          rounded ? 'rounded-md' : ''
        }`}
      />
    </div>
  );
};
