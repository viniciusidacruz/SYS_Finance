import { useContext } from "react";

import { TransactionsContext } from "contexts/TransactionsContext";

export function useTransactions<T = unknown>() {
  return useContext(TransactionsContext);
}
