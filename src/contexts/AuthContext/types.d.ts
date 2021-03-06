import { User } from "firebase/auth";
import { ReactNode } from "react";

interface AuthProviderProps {
  user: User | null;
  logout: () => void;
  setUser: (user: User) => void;
  signUp: (email: string, password: string) => void;
  signIn: (email: string, password: string) => Promise<void>;
}

interface AuthContextProps {
  children: ReactNode;
}

export { AuthContextProps, AuthProviderProps };
