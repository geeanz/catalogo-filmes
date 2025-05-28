// Arquivo: app/context/AuthContext.tsx

"use client";

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface AuthContextType {
  user: { name: string } | null;
  login: (name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    // Ao carregar a aplicação, verifica se há um usuário salvo no localStorage
    const storedUser = localStorage.getItem('cine-star-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (name: string) => {
    const userData = { name };
    localStorage.setItem('cine-star-user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('cine-star-user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}