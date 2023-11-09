// AuthContext.js
import React, { createContext, useContext } from "react";

// Create a context for the auth state
const AuthContext = createContext(null);

// Export the context so it can be used by other components
export default AuthContext;

// Export a custom hook that components can use to access the context
export function useAuth() {
  return useContext(AuthContext);
}
