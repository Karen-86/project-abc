"use client";

import React, { useState, createContext, useContext } from "react";


type StateType = {
  [key: string]: any;
};

type AuthContextType = {
  state: StateType;
  setState: (newState: StateType) => void;

};

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [state, setState] = useState<StateType>({});

  return (
    <AuthContext.Provider
      value={{
        state,
        setState,

      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
