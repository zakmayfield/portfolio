import { Navbar, Footer } from '@/features';
import { ContentContainer } from '@/shared/components';

import './globals.css';
import { Inter } from 'next/font/google';
import { getAuthSession } from '@/lib/auth';
import { NavbarContextProvider } from '@/features/navbar/context/NavbarContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio | Zachary Mayfield',
};

export default async function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  const session = await getAuthSession();
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        {/* @ts-expect-error server component */}
        <NavbarContextProvider session={session}>
          <Navbar />
        </NavbarContextProvider>

        {authModal}

        <ContentContainer className='min-h-screen md:max-w-full'>
          {children}
        </ContentContainer>
        <Footer />
      </body>
    </html>
  );
}
