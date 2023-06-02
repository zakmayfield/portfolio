import { Navbar, Footer } from '@/features';
import { Container } from '@/shared/components';

import './globals.css';
import { Inter, Bungee_Shade } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const bungeeShade = Bungee_Shade({
  weight: '400',
  variable: '--font-bungee-shade',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Zachary Mayfield | Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        {/* global container // TODO - replace <div> with <Container {className} />  */}
        <div className='max-w-9xl mx-auto'>
          <Navbar />
          <Container>{children}</Container>
          <Footer />
        </div>
      </body>
    </html>
  );
}
