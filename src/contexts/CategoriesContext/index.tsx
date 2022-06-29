import { useState, createContext, useEffect } from "react";

import { useTransactions } from "hooks/useTransactions";
import RequestCategories from "common/services/RequestCategories";

import { ContextProps, ProviderProps } from "./types";

export const CategoriesContext = createContext({} as ContextProps);

export const CategoriesProvider = ({ children }: ProviderProps) => {
  const [categories, setCategories] = useState({});
  const [categorieRegisteredSuccess, setCategorieRegisteredSuccess] =
    useState(false);

  const serviceCategories = new RequestCategories();
  const { editSuccess } = useTransactions();

  useEffect(() => {
    const getCategories = () => {
      serviceCategories
        .requestCategory()
        .then((response) => {
          setCategories(response);
        })
        .catch((error) => {
          setCategories({});
        });
    };

    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editSuccess, categorieRegisteredSuccess]);

  const resetCategorie = () =>
    setCategorieRegisteredSuccess(!categorieRegisteredSuccess);

  return (
    <CategoriesContext.Provider
      value={{ categorieRegisteredSuccess, categories, resetCategorie }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
