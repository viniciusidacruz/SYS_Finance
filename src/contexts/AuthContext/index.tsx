import { createContext, useState, useEffect } from "react";
import { setCookie, destroyCookie, parseCookies } from "nookies";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import {
  User,
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { app } from "common/services/firebase";

import { AuthContextProps, AuthProviderProps } from "./types";

export const AuthContext = createContext({} as AuthProviderProps);

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const auth = getAuth(app);
  const router = useRouter();

  useEffect(() => {
    const { "@U_Info": user } = parseCookies();

    if (user) setUser(JSON.parse(user));
  }, []);

  const signIn = async (email: string, password: string) => {
    if (!email || !password) {
      toast.error("Email/Senha inválida");
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(async (account) => {
        if (account.user) {
          await setCookie(undefined, "@U_Info", JSON.stringify(account.user), {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });

          setUser(account.user);

          router.push(`/dashboard/graphic?isAdmin=${isAdmin}`);
        }
      })
      .catch((error) => {
        const { code } = error;

        if (code === "auth/user-not-found" || code === "auth/wrong-password") {
          toast.error("Email/Senha não encontrado");
        } else {
          toast.error("Não foi possível realizar o login");
        }
      });
  };

  const signUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push("/signin");
      })
      .catch((error) => {
        const { code } = error;

        if (code !== "") {
          toast.error("Ops, algo deu errado!");
        }
      });
  };

  const logout = () => {
    signOut(auth);
    destroyCookie(null, "@U_Info");
  };

  return (
    <AuthContext.Provider
      value={{ user, signIn, isAdmin, setIsAdmin, signUp, setUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
