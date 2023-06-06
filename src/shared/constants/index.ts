import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import type { NavigationItemsType, SocialNavigationItemsType } from '../types';

export const navigationItems: NavigationItemsType = [
  {
    slug: '',
    title: 'Home',
  },
  {
    slug: 'projects',
    title: 'Projects',
  },
  {
    slug: 'contact',
    title: 'Contact',
  },
];

export const socialNavigationItems: SocialNavigationItemsType = [
  {
    id: 1,
    link: 'https://github.com/zakmayfield',
    icon: React.createElement(BsGithub),
  },
  {
    id: 2,
    link: 'https://www.linkedin.com/in/zacharymayfield/',
    icon: React.createElement(BsLinkedin),
  },
];
