import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { socialNavigationItems } from '@/shared/constants';

interface SocialLinksProps {
  className?: string;
}

export const SocialLinks: FC<SocialLinksProps> = ({ className }) => {
  const defaultStyles = `flex items-center gap-6`;
  const merged = twMerge(defaultStyles, className);

  return (
    <div className={merged}>
      {socialNavigationItems.map(({ id, link, icon }) => (
        <a key={id} href={link}>
          {icon}
        </a>
      ))}
    </div>
  );
};
