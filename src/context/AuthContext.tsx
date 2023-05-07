import React, { createContext, useState } from "react";

interface IAuthContext {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  login: (username: string, password: string) => {},
  logout: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username: string, password: string) => {
    // Perform login logic, e.g. call an authentication API
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Perform logout logic, e.g. clear authentication token
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
