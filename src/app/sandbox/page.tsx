import { Sandbox } from '@/features/sandbox';
import { getAuthSession } from '@/lib/auth';

export default async function SandboxPage() {
  const session = await getAuthSession();

  return <Sandbox session={session} />;
}
