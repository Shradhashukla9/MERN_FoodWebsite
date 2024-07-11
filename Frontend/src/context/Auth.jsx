import React, { useState, createContext, useContext, useEffect } from "react";

export const AuthContext = createContext();

export default function Auth({ children }) {
  const initialAuth = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialAuth ? JSON.parse(initialAuth) : null
  );
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("Users", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("Users");
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={[ authUser, setAuthUser ]}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth=()=> useContext(AuthContext);
