import { getAuthSession } from '@/lib/auth';
import { ContentContainer } from '@/shared/components';
import Link from 'next/link';
import { SandboxNav } from './components';

export const Sandbox = async ({}) => {
  const session = await getAuthSession();
  return <div>sandbox.tsx</div>;
};
