import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { GiWallet, GiPayMoney } from "react-icons/gi";

import { useModal } from "hooks/useModal";
import { useCategories } from "hooks/useCategories";
import { useTransactions } from "hooks/useTransactions";
import { maskCurrency } from "common/utils/validators/masks";
import RequestCategories from "common/services/RequestCategories";
import RequestTransactions from "common/services/RequestTransaction";

import { ButtonComponent } from "components/Button";
import { CategoryComponent } from "components/Category";
import { InputFieldComponent } from "components/InputField";
import { TypographicComponent } from "components/Typographic";
import { SelectOptionComponent } from "components/SelectOption";

import edit from "assets/svg/editGray.svg";

import styles from "./styles.module.scss";

export function NewTransactionForm() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [categoryOption, setCategoryOption] = useState({
    id: "",
    option: "",
    value: "",
  });
  const [type, setType] = useState({
    position: 0,
    title: "Entrada",
  });

  const router = useRouter();
  const { categories } = useCategories();
  const services = new RequestTransactions();
  const serviceCategory = new RequestCategories();
  const { editSuccess, setEditSuccess } = useTransactions();

  const newTransactions = async (event: SyntheticEvent) => {
    event.preventDefault();

    const valueFormated = value.replace(",", ".");

    const data = {
      title,
      value: parseFloat(valueFormated),
      id: uuidv4(),
      type: type.title,
      date: new Date(),
      category: categoryOption,
    };

    try {
      await services.registerTransactions(data);
      setEditSuccess(!editSuccess);
      router.push("/dashboard/list");
    } catch (error) {
      toast.error("Ops, tente novamente mais tarde.");
    }
  };

  const handleDeleteCategory = async (id: string) => {
    try {
      setEditSuccess(!editSuccess);
      toast.success("Excluiu com sucesso!");

      await serviceCategory.deleteCategory(id);

      setCategoryOption({
        id: "",
        option: "",
        value: "",
      });
    } catch (error) {
      throw new Error("Algo deu errado ao editar a transação");
    }
  };

  const validator = title === "" || value === "" || categoryOption.value === "";

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
          type="text"
          value={value}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setValue(maskCurrency(event))
          }
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

      <div className={styles.categories}>
        <div>
          <TypographicComponent title="Categorias" variant="h4" />
          <Image
            src={edit}
            alt="Icone para edição de categoria"
            onClick={() => router.push("/dashboard/categories")}
          />
        </div>

        {Object.values(categories)?.length > 0 ? (
          <div className={styles.containerCategories}>
            {Object.entries(categories).map(([key, category]) => {
              return (
                <CategoryComponent
                  key={key}
                  title={category?.value}
                  selected={category?.option === categoryOption.option}
                  onClick={() =>
                    setCategoryOption({
                      ...categoryOption,
                      option: category?.option,
                      value: category?.value,
                      id: key,
                    })
                  }
                  deleteCategory={() => handleDeleteCategory(key)}
                />
              );
            })}
          </div>
        ) : (
          <div className={styles.registerCategory}>
            <TypographicComponent
              title="Você precisa cadastrar uma categoria"
              variant="p"
            />

            <span onClick={() => router.push("/dashboard/category")}>
              Clique aqui
            </span>
          </div>
        )}
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
