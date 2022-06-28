import { ReactNode } from "react";

interface CaterieProps {
  id: string;
  value: string;
}

interface ContextProps {
  categories: object;
  resetCategorie: () => void;
  categorieRegisteredSuccess: boolean;
}

interface ProviderProps {
  children: ReactNode;
}

export { CaterieProps, ProviderProps, ContextProps };
