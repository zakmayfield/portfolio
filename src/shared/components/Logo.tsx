import { FC } from 'react';
import Link from 'next/link';
import { bungeeShade } from '@/app/utils/fonts';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {

  return (
    <div className={bungeeShade.variable}>
      <Link href='/' className={cn('text-6xl font-bungee', className)}>
        ZM
      </Link>
    </div>
  );
};
