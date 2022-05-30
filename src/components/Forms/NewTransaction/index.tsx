import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

import categories from "./data";
import RequestService from "common/services/request";

import { ButtonComponent } from "components/Button";
import { InputFieldComponent } from "components/InputField";
import { SelectCategoryComponent } from "components/SelectCategory";

import styles from "./styles.module.scss";

export function NewTransactionForm() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("0");
  const [category, setCategory] = useState("Selecione");

  const services = new RequestService();

  const newTransactions = async () => {
    const data = {
      title,
      value,
      id: uuidv4(),
      category,
      date: new Date(),
    };

    try {
      await services.registerTransactions(data);
    } catch (error) {
      toast.error("Ops, tente novamente mais tarde.");
    }
  };

  const validator = title === "" || value === "0" || category === "Selecione";

  return (
    <form onSubmit={() => newTransactions()}>
      <div className={styles.gridPrimary}>
        <InputFieldComponent
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
          label="Nome da transação"
          htmlFor="nameTransaction"
          id="nameTransaction"
        />

        <InputFieldComponent
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          required
          label="Valor da transação"
          htmlFor="valueTransaction"
          id="valueTransaction"
          mask="currency"
        />
      </div>

      <div className={styles.gridSecondary}>
        <SelectCategoryComponent
          options={categories}
          handleChangeOptions={setCategory}
        />

        <ButtonComponent
          title="Cadastrar"
          type="submit"
          color="primary"
          disabled={validator}
        />
      </div>
    </form>
  );
}
