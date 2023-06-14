import { Unbounded } from 'next/font/google';
import { Bungee_Shade } from 'next/font/google';

export const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
});

export const bungeeShade = Bungee_Shade({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bungee-shade',
});
