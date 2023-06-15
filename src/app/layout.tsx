import { Navbar, Footer } from '@/features';
import { ContentContainer } from '@/shared/components';

import './globals.css';
import { Inter, Bungee_Shade } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const bungeeShade = Bungee_Shade({
  weight: '400',
  variable: '--font-bungee-shade',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Portfolio | Zachary Mayfield',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <Navbar />
        <ContentContainer className='min-h-screen md:max-w-full'>
          {children}
        </ContentContainer>
        <Footer />
      </body>
    </html>
  );
}
