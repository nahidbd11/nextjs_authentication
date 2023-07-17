"use client";

import React, { Children, createContext, useContext } from "react";

export const authContext = createContext(null);

export function useAuth() {
  return useContext(authContext);
}
const Provider = authContext.Provider;
const AuthProvider = ({ children }) => {
  const isSignIn = true;
  return (
    <Provider
      value={{
        isSignIn,
      }}
    >
      {isSignIn ? (
        children
      ) : (
        <div className="min-h-screen">You need to sign in</div>
      )}
    </Provider>
  );
};

export default AuthProvider;
