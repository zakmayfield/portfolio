'use client';
import { Session } from 'next-auth/';
import { createContext, useContext, PropsWithChildren } from 'react';

export type SessionContextValues = {
  session: Session | null;
};

const SessionContext = createContext<SessionContextValues>({
  session: null,
});

type SessionProviderProps = {
  session: Session | null;
  children: React.ReactNode;
};

export const SessionContextProvider = async ({
  session,
  children,
}: SessionProviderProps) => {
  return (
    <SessionContext.Provider value={{ session }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => useContext(SessionContext);
