/* eslint-disable react-hooks/exhaustive-deps */
import RequestService from "common/services/request";
import { useRouter } from "next/router";
import { parseCookies, setCookie } from "nookies";
import {
  useMemo,
  useState,
  useEffect,
  useCallback,
  createContext,
} from "react";
import { toast } from "react-toastify";

import {
  IBalanceContextProps,
  IBalanceProviderProps,
  IResponseProps,
} from "./types";

export const BalanceContext = createContext({} as IBalanceContextProps);

export const BalanceProvider = ({ children }: IBalanceProviderProps) => {
  const [balance, setBalance] = useState("");
  const [isValid, setIsValid] = useState(false);

  const router = useRouter();
  const serviceBalance = new RequestService();

  useEffect(() => {
    const getUser = () => {
      serviceBalance.getBalance().then((response: IResponseProps) => {
        setBalance(response.value);
      });
    };

    getUser();
  }, [isValid]);

  const addToBalance = async (value: {}) => {
    try {
      await serviceBalance.registerBalance(value).then(() => {
        toast.success("Cadastro realizado com sucesso!");
        setIsValid(true);
      });

      setTimeout(() => {
        router.push("/dashboard/list");
      }, 2000);
    } catch (err) {
      toast.error("Erro ao realizar o saldo");
    }
  };

  const values = useMemo(
    () => ({
      balance,
      addToBalance,
    }),
    [balance]
  );

  return (
    <BalanceContext.Provider value={values}>{children}</BalanceContext.Provider>
  );
};
