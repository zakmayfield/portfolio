import { Unbounded } from 'next/font/google';
import { Bungee_Shade } from 'next/font/google';

export const unbounded = Unbounded({
  subsets: ['latin'],
});

export const bungeeShade = Bungee_Shade({
  weight: '400',
  variable: '--font-bungee-shade',
  subsets: ['latin'],
});