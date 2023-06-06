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

export type SocialNavigationItemsType = SocialNavigationItemType[];
export type NavigationItemsType = NavItemType[];
