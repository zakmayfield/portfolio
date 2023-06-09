import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { twMerge } from 'tailwind-merge';

interface FullHeightImageProps {
  image: StaticImageData;
  altText: string;
  className?: string;
}

export const FullHeightImage: FC<FullHeightImageProps> = ({
  image,
  altText,
  className,
}) => {
  const defaultStyles = `overflow-hidden max-h-[450px] md:rounded-lg`;
  const merged = twMerge(defaultStyles, className);
  return (
    <div className={merged}>
      <Image
        src={image}
        alt={altText}
        className='object-cover w-full h-[350px] md:h-80'
      />
    </div>
  );
};
