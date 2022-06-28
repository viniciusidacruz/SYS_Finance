/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState, useEffect, createContext } from "react";

import RequestTransactions from "common/services/RequestTransaction";

import { ITransactionsContextProps, ITransactionsProviderProps } from "./types";

export const TransactionsContext = createContext(
  {} as ITransactionsContextProps
);

export const TransactionsProvider = ({
  children,
}: ITransactionsProviderProps) => {
  const [search, setSearch] = useState("");
  const [transactions, setTransactions] = useState({});
  const [editSuccess, setEditSuccess] = useState(false);

  const serviceTransactions = new RequestTransactions();

  useEffect(() => {
    const getUserTransactions = () => {
      serviceTransactions
        .getTransactions()
        .then((response) => {
          setTransactions(response);
        })
        .catch(() => setTransactions([]));
    };

    getUserTransactions();
  }, [editSuccess]);

  const values = useMemo(
    () => ({
      search,
      setSearch,
      editSuccess,
      transactions,
      setEditSuccess,
    }),
    [transactions, search]
  );

  return (
    <TransactionsContext.Provider value={values}>
      {children}
    </TransactionsContext.Provider>
  );
};
