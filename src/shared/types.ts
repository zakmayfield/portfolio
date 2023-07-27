import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';
import { IconType } from 'react-icons';

export type NavItemType = {
  slug: string;
  title: string;
};

export type SocialNavigationItemType = {
  id: number;
  link: string;
  icon: JSX.Element;
};

export type ProjectType = {
  id: number;
  name: string;
  title: string;
  image: StaticImageData;
  slug: string;
  stack: string[];
  url: string;
  description: string;
  challenges?: string | undefined;
};

export type SocialNavigationItemsType = SocialNavigationItemType[];
export type NavigationItemsType = NavItemType[];
export type ProjectsType = ProjectType[];
