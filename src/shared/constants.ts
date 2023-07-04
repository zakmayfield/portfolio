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
    stack: [
      'TypeScript',
      'Next.js v13+',
      'Chakra UI',
      'Framer Motion',
      'Node.js',
    ],
    description:
      "I was a front end developer apart of a small team team to rebuild Chasers Fresh Juice's website. The Chasers Fresh Juice website was built with the latest version of Next.js, utilizing many amazing features such as image optimization, server side rendering, and client-side routing for seamless navigation. Our main objective was to enhace the user interface and provide users with a clean and modern UI. I was also tasked with building an Express webhook for the websites contact form. The stack for this project is TypeScript, Next.js, Chakra UI, Framer Motion and Node.js.",
    url: 'https://www.chasersjuice.com',
  },
  {
    id: 2,
    name: 'Dominos',
    image: DominosHome,
    slug: 'dominos',
    stack: ['JavaScript', 'React', 'Storybook'],
    description:
      'During my tenure at Dominos, I initially joined as a front end React developer contributing to the ongoing development and maintenance of the Dominos web app. My responsibilities involved maintaining and improving the existing user interfaces. The stack for this project was React and JavaScript',
    url: 'https://www.dominos.com',
  },
];
