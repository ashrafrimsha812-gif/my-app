// app/context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  role: "user" | "doctor" | null;
  setRole: (role: "user" | "doctor") => void;
}

const AuthContext = createContext<AuthContextType>({
  role: null,
  setRole: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<"user" | "doctor" | null>(null);

  return (
    <AuthContext.Provider value={{ role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
