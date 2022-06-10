import { useTransactions } from "hooks/useTransactions";

import { InputFieldComponent } from "components/InputField";

export function SearchComponent() {
  const { search, setSearch } = useTransactions();

  return (
    <InputFieldComponent
      onChange={(event) => setSearch(event.target.value)}
      value={search}
      label="Pesquisar por"
      htmlFor="search"
      id="search"
      placeholder="Ex: Mercado, Shopping, etc..."
    />
  );
}
