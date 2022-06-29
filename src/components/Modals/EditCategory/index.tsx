import {
  useRef,
  useState,
  FormEvent,
  useEffect,
  MouseEvent,
  useCallback,
} from "react";
import Image from "next/image";
import { toast } from "react-toastify";

import { useModal } from "hooks/useModal";
import { useTransactions } from "hooks/useTransactions";
import RequestCategories from "common/services/RequestCategories";

import { ButtonComponent } from "components/Button";
import { InputFieldComponent } from "components/InputField";
import { TypographicComponent } from "components/Typographic";

import close from "assets/svg/close.svg";

import styles from "./styles.module.scss";
import { AnimationContainerTop } from "styles/Animated";

export function EditCategoryModalComponent() {
  const { modal, handleCloseEditCategory } = useModal();

  const [name, setName] = useState(modal.data.data.value);

  const modalRef = useRef<any>();
  const service = new RequestCategories();
  const { setEditSuccess, editSuccess } = useTransactions();

  const closeModal = (event: MouseEvent) => {
    if (modalRef.current === event.target) {
      handleCloseEditCategory();
    }
  };

  const keyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && modal.edit) {
        handleCloseEditCategory();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [handleCloseEditCategory, modal.edit]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);

    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const handleEditCategory = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await service.deleteCategory(modal.data.data.id);

      toast.success("Editado com sucesso!");

      setTimeout(() => {
        setEditSuccess(!editSuccess);
        handleCloseEditCategory();
      }, 3000);
    } catch (error) {
      throw new Error("Algo deu errado ao editar a transação");
    }
  };

  const isDisabled = name === "";

  return (
    <div
      className={styles.background}
      ref={modalRef}
      onClick={(event) => closeModal(event)}
    >
      <AnimationContainerTop className={styles.wrapper}>
        <button
          onClick={() => handleCloseEditCategory()}
          className={styles.close}
        >
          <Image
            src={close}
            alt="Um icone com formato de um X"
            width={32}
            height={32}
          />
        </button>

        <TypographicComponent title="Editar categoria" variant="h3" />

        <form className={styles.form} onSubmit={handleEditCategory}>
          <InputFieldComponent
            label="Nome da categoria"
            htmlFor="category"
            id="category"
            placeholder="Ex: Escritório, Casa, etc..."
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <ButtonComponent
            title="Confirmar"
            color="primary"
            type="submit"
            disabled={isDisabled}
          />
        </form>
      </AnimationContainerTop>
    </div>
  );
}
