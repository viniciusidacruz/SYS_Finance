import React, { SyntheticEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import categories from "./data";
import RequestService from "common/services/request";
import { useTransactions } from "hooks/useTransactions";

import { ButtonComponent } from "components/Button";
import { InputFieldComponent } from "components/InputField";
import { SelectCategoryComponent } from "components/SelectCategory";

import styles from "./styles.module.scss";

export function NewTransactionForm() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("Selecione");

  const router = useRouter();
  const services = new RequestService();
  const { editSuccess, setEditSuccess } = useTransactions();

  const newTransactions = async (event: SyntheticEvent) => {
    event.preventDefault();

    const data = {
      title,
      value,
      id: uuidv4(),
      category,
      date: new Date(),
    };

    try {
      await services.registerTransactions(data);
      setEditSuccess(!editSuccess);
      router.push("/dashboard/list");
    } catch (error) {
      toast.error("Ops, tente novamente mais tarde.");
    }
  };

  const validator = title === "" || value === "" || category === "Selecione";

  return (
    <form onSubmit={newTransactions}>
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
          type="number"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          required
          label="Valor da transação"
          htmlFor="valueTransaction"
          id="valueTransaction"
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
