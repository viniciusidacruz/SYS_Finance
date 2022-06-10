import { ReactNode } from "react";

interface ITransactionsContextProps {
  search: string;
  transactions: object;
  editSuccess: boolean;
  setSearch: (value: string) => void;
  setEditSuccess: (state: boolean) => void;
}

interface ITransactionsProviderProps {
  children: ReactNode;
}

interface IResponseProps {
  value: string;
}

export {
  ITransactionsProviderProps,
  ITransactionsContextProps,
  IResponseProps,
};
