'use client';
import { Session } from 'next-auth/';
import { createContext, useContext, PropsWithChildren } from 'react';

export type NavbarContextValues = {
  session: Session | null;
};

const NavbarContext = createContext<NavbarContextValues>({
  session: null,
});

type NavbarProviderProps = {
  session: Session | null;
  children: React.ReactNode;
};

export const NavbarContextProvider = async ({
  session,
  children,
}: NavbarProviderProps) => {
  return (
    <NavbarContext.Provider value={{ session }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => useContext(NavbarContext);
