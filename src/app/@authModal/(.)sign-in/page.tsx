import { SignIn } from '@/features/auth';
import { AuthModal } from '@/features/authModal';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return <AuthModal />;
};

export default page;
