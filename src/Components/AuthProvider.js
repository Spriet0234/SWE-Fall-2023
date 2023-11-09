import React, { useState, createContext, useContext } from "react";

// Create a context for the auth state
const AuthContext = createContext(); // No default value needed

// Export a custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Function to log the user in
  const logint = () => setLoggedIn(true);

  // Function to log the user out
  const logout = () => setLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, logint, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
