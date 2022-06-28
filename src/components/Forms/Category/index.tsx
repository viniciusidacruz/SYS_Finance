import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/router";

import RequestCategories from "common/services/RequestCategories";

import { ButtonComponent } from "components/Button";
import { InputFieldComponent } from "components/InputField";

import styles from "./styles.module.scss";
import { removeCaracter } from "common/utils/formats";
import { toast } from "react-toastify";
import { useCategories } from "hooks/useCategories";

export function NewCategoryForm() {
  const [category, setCategory] = useState("");

  const router = useRouter();
  const { resetCategorie } = useCategories();
  const serviceRegistration = new RequestCategories();

  const handleRegisterCategory = async (event: SyntheticEvent) => {
    event.preventDefault();
    const formatedCategory = removeCaracter(category);

    const data = {
      value: category,
      option: formatedCategory.toLowerCase(),
    };

    try {
      await serviceRegistration.registerCategory(data).then((response) => {
        if (response) {
          toast.success("Categoria cadastrada com sucesso!");
          resetCategorie();
          router.push("/dashboard/register");
        }
      });
    } catch (error) {
      throw new Error("Ops, algo deu errado ao cadastrar a categoria");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleRegisterCategory}>
      <InputFieldComponent
        placeholder="Digite o nome da sua categoria. Ex: Casa, Escritório..."
        onChange={(event) => setCategory(event.target.value)}
        value={category}
      />

      <ButtonComponent
        title="Cadastrar"
        color="primary"
        type="submit"
        disabled={category === ""}
      />
    </form>
  );
}
