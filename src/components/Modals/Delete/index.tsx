import { useRef, useEffect, useCallback, MouseEvent } from "react";
import Image from "next/image";

import { ButtonComponent } from "components/Button";
import { TypographicComponent } from "components/Typographic";

import { useModal } from "hooks/useModal";

import close from "assets/svg/close.svg";

import styles from "./styles.module.scss";

export function DeleteModalComponent() {
  const modalRef = useRef<any>();
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
    [setModal, modal.delete]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);

    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <div
      className={styles.background}
      ref={modalRef}
      onClick={(event) => closeModal(event)}
    >
      <div className={styles.wrapper}>
        <button onClick={() => handleCloseDelete()} className={styles.close}>
          <Image
            src={close}
            alt="Um icone com formato de um X"
            width={32}
            height={32}
          />
        </button>

        <TypographicComponent title="Deletar transação" variant="h3" />
        <TypographicComponent
          title="Tem certeza que deseja excluir essa transação? não poderá ser revertida."
          variant="p"
        />
        <ButtonComponent title="Confirmar" color="primary" />
      </div>
    </div>
  );
}