import React, { SyntheticEvent, useState } from "react";

import { useBalance } from "hooks/useBalance";

import { ButtonComponent } from "components/Button";
import { InputFieldComponent } from "components/InputField";

import styles from "./styles.module.scss";

export function NewBalanceForm() {
  const [value, setValue] = useState("");

  const { addToBalance } = useBalance();

  const newBalance = async (event: SyntheticEvent) => {
    event.preventDefault();

    await addToBalance({ value });
  };

  return (
    <form onSubmit={newBalance}>
      <div className={styles.gridSecondary}>
        <InputFieldComponent
          required
          type="text"
          value={value}
          id="valueBalance"
          label="Valor do saldo"
          htmlFor="valueBalance"
          onChange={(event) => setValue(event.target.value)}
        />

        <ButtonComponent
          title="Cadastrar"
          type="submit"
          color="primary"
          disabled={!value}
        />
      </div>
    </form>
  );
}
