import { Navbar, Footer } from '@/features';
import { ContentContainer } from '@/shared/components';

import './globals.css';
import { Inter } from 'next/font/google';
import { getAuthSession } from '@/lib/auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio | Zachary Mayfield',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();

  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <Navbar session={session} />
        <ContentContainer className='min-h-screen md:max-w-full'>
          {children}
        </ContentContainer>
        <Footer />
      </body>
    </html>
  );
}
