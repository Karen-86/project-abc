"use client";

import React, { createContext, useContext } from "react";

import { useAuthContext } from "./AuthContext";

type ApiContextType = {};

export const ApiContext = createContext<ApiContextType | null>(null);

export default function ApiProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ApiContext.Provider value={{}}>{children}</ApiContext.Provider>;
}

export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApiContext must be used within an ApiProvider");
  }
  return context;
};
