import { ReactNode } from "react";

interface IBalanceContextProps {
  balance: string;
  addToBalance: (value: {}) => void;
}

interface IBalanceProviderProps {
  children: ReactNode;
}

interface IResponseProps {
  value: string;
}

export { IBalanceProviderProps, IBalanceContextProps, IResponseProps };
