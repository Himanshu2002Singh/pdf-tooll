import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for authentication
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    name: '',
  });

  useEffect(() => {
    // Check for existing login state, e.g., from local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setAuthState({
        isLoggedIn: true,
        name: storedUser,
      });
    }
  }, []);

  const login = (name) => {
    setAuthState({ isLoggedIn: true, name });
    localStorage.setItem('user', name);
  };

  const logout = () => {
    setAuthState({ isLoggedIn: false, name: '' });
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
