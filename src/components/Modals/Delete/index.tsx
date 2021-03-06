import { useRef, useEffect, useCallback, MouseEvent } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

import { useModal } from "hooks/useModal";
import { useTransactions } from "hooks/useTransactions";
import RequestCategories from "common/services/RequestCategories";
import RequestTransactions from "common/services/RequestTransaction";

import { ButtonComponent } from "components/Button";
import { TypographicComponent } from "components/Typographic";

import close from "assets/svg/close.svg";

import styles from "./styles.module.scss";
import { AnimationContainerTop } from "styles/Animated";

interface Props {
  isEditing?: boolean;
}

export function DeleteModalComponent({ isEditing }: Props) {
  const modalRef = useRef<any>();
  const service = new RequestTransactions();
  const serviceCategory = new RequestCategories();
  const { setEditSuccess, editSuccess } = useTransactions();
  const { modal, handleCloseDelete, setModal } = useModal();

  const closeModal = (event: MouseEvent) => {
    if (modalRef.current === event.target) {
      setModal({ ...modal, delete: false });
    }
  };

  const keyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && modal.delete) {
        setModal({ ...modal, delete: false });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setModal, modal.delete]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);

    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const handleRemove = async () => {
    try {
      if (isEditing) {
        await serviceCategory.deleteCategory(modal.data.data);
      } else {
        await service.deleteTransaction(modal.data.data);
      }

      toast.success("Excluido com sucesso!");

      setTimeout(() => {
        setEditSuccess(!editSuccess);
        setModal({ ...modal, delete: false });
      }, 3000);
    } catch (error) {
      throw new Error("Algo deu errado ao excluir a transação");
    }
  };

  return (
    <div
      className={styles.background}
      ref={modalRef}
      onClick={(event) => closeModal(event)}
    >
      <AnimationContainerTop className={styles.wrapper}>
        <button onClick={() => handleCloseDelete()} className={styles.close}>
          <Image
            src={close}
            alt="Um icone com formato de um X"
            width={32}
            height={32}
          />
        </button>

        <TypographicComponent title="Deletar" variant="h3" />
        <TypographicComponent
          title="Tem certeza que deseja realizar essa ação? não poderá ser revertida."
          variant="p"
        />
        <ButtonComponent
          title="Confirmar"
          onClick={() => handleRemove()}
          color="primary"
        />
      </AnimationContainerTop>
    </div>
  );
}
