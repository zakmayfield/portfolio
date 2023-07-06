import { Dashboard } from '@/features/dashboard';
import { getAuthSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Dashboard | Zachary Mayfield',
};

export default async function DashboardPage() {
  const session = await getAuthSession();

  if (!session) {
    redirect('/sign-in');
  }

  return <Dashboard />;
}
