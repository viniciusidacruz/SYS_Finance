import { InputFieldComponent } from "components/InputField";
import { useState } from "react";

export function SearchComponent() {
  const [search, setSearch] = useState("");

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
