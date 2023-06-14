import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

import type {
  NavigationItemsType,
  SocialNavigationItemsType,
  ProjectsType,
} from './types';

import ChasersHome from '@/shared/assets/projects/chasers_home.png';
import DominosHome from '@/shared/assets/projects/dominos_home.png';

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

export const projects: ProjectsType = [
  {
    id: 1,
    name: 'Chasers Fresh Juice',
    image: ChasersHome,
    slug: 'chasers-juice',
  },
  {
    id: 2,
    name: 'Dominos',
    image: DominosHome,
    slug: 'dominos',
  },
];
