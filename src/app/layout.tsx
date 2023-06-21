import { Navbar, Footer } from '@/features';
import { ContentContainer } from '@/shared/components';

import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
        <ContentContainer className='md:max-w-full'>
          {children}
        </ContentContainer>
        <Footer />
      </body>
    </html>
  );
}
