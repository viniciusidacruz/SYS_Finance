import { User } from "firebase/auth";
import { ReactNode } from "react";

interface AuthProviderProps {
  isAdmin: boolean;
  user: User | null;
  logout: () => void;
  setUser: (user: User) => void;
  setIsAdmin: (state: boolean) => void;
  signUp: (email: string, password: string) => void;
  signIn: (email: string, password: string) => Promise<void>;
}

interface AuthContextProps {
  children: ReactNode;
}

export { AuthContextProps, AuthProviderProps };
