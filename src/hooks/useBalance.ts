import { BalanceContext } from "contexts/BalanceContext";
import { useContext } from "react";

export const useBalance = () => {
  return useContext(BalanceContext);
};
