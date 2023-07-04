import { SignIn } from '@/features/auth';
import { getAuthSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function SignInPage() {
  const session = await getAuthSession();

  if (session) {
    redirect('/');
  }

  return <SignIn />;
}
