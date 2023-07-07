'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { FC, ReactNode } from 'react';
import { SessionContextProvider } from '@/shared/context/SessionContext';
import { Session } from 'next-auth/';

interface ProvidersProps {
  children: ReactNode;
  session: Session | null;
}

const queryClient = new QueryClient();

const Providers: FC<ProvidersProps> = ({ children, session }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* @ts-expect-error server component */}
      <SessionContextProvider session={session}>
        {children}
      </SessionContextProvider>
    </QueryClientProvider>
  );
};

export default Providers;
