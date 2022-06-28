import { useState, createContext, useEffect } from "react";

import RequestCategories from "common/services/RequestCategories";

import { ContextProps, ProviderProps } from "./types";

export const CategoriesContext = createContext({} as ContextProps);

export const CategoriesProvider = ({ children }: ProviderProps) => {
  const [categories, setCategories] = useState({});
  const [categorieRegisteredSuccess, setCategorieRegisteredSuccess] =
    useState(false);

  const serviceCategories = new RequestCategories();

  useEffect(() => {
    const getCategories = async () => {
      await serviceCategories.requestCategory().then((response) => {
        if (response) {
          setCategories(response);
        }
      });
    };

    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorieRegisteredSuccess]);

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
