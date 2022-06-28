import React, { SyntheticEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { GiWallet, GiPayMoney } from "react-icons/gi";

import { useCategories } from "hooks/useCategories";
import { useTransactions } from "hooks/useTransactions";
import RequestTransactions from "common/services/RequestTransaction";

import { ButtonComponent } from "components/Button";
import { InputFieldComponent } from "components/InputField";
import { SelectOptionComponent } from "components/SelectOption";

import styles from "./styles.module.scss";

export function NewTransactionForm() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState({
    position: 0,
    title: "Entrada",
  });

  const router = useRouter();
  const { categories } = useCategories();
  const services = new RequestTransactions();
  const { editSuccess, setEditSuccess } = useTransactions();

  const newTransactions = async (event: SyntheticEvent) => {
    event.preventDefault();

    const data = {
      title,
      value,
      id: uuidv4(),
      type: type.title,
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

  const validator = title === "" || value === "";

  console.log(categories);

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
          placeholder="Exemplo: conta de luz..."
        />

        <InputFieldComponent
          type="number"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          required
          label="Valor da transação"
          htmlFor="valueTransaction"
          id="valueTransaction"
          placeholder="Exemplo: R$50,00..."
        />
      </div>

      <div className={styles.groupSelects}>
        <SelectOptionComponent
          selected={type.position === 0}
          title="Entrada"
          description="Selecione essa opção caso queira efetuar um cadastro de um recebimento"
          icon={<GiWallet size={32} />}
          onClick={() => setType({ title: "Entrada", position: 0 })}
        />

        <SelectOptionComponent
          selected={type.position === 1}
          title="Saida"
          description="Selecione essa opção caso queira efetuar um pagamento"
          icon={<GiPayMoney size={32} />}
          onClick={() => setType({ title: "Saida", position: 1 })}
        />
      </div>

      <div className={styles.footerForm}>
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
