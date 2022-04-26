import React, { useContext } from "react";

const authContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const user = "BB";

  const value = { user };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
export const useAuth = () => useContext(authContext);
