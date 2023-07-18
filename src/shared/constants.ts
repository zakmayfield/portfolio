import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

import type {
  NavigationItemsType,
  SocialNavigationItemsType,
  ProjectsType,
} from './types';

import ChasersHome from '@/shared/assets/projects/chasers_home.png';
import DominosHome from '@/shared/assets/projects/dominos_home.png';
import OdinLogo from '@/shared/assets/projects/odin_logo.png';

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
      "During my time at Dominos, I played a crucial role as a front end React developer, actively contributing to the continuous development and enhancement of the Dominos web app. My primary focus was on ensuring the smooth operation and improvement of user interfaces. Leveraging my skills in React and JavaScript, I actively participated in maintaining and elevating the app's functionality. I collaborated with Dominos UX/UI designers to ensure consistensy across the front end and delivered high quality, trusted code. The stack I utilized here was React, JavaScript, and Storybook",
    url: 'https://www.dominos.com',
  },
  {
    id: 3,
    name: 'Park Bench Solutions',
    image: OdinLogo,
    slug: 'pbs',
    stack: ['JavaScript', 'React', 'React Query'],
    description:
      'During my 1.5 years at Park Bench Solutions, I served as a front-end developer, specializing in the development of a robust React portal that integrated seamlessly with the powerful Odin API. This experience allowed me to hone my skills in JavaScript and React within a dynamic and high-impact production environment. I was trusted to implement a state management system that could scale and grow along with the front end. The stack for this project is React, React Query, PHP',
    url: 'https://rev.io/solutions/odin/',
  },
];
