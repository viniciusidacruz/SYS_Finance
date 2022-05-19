import { useRef, useEffect, useCallback, MouseEvent, useState } from "react";
import Image from "next/image";

import { ButtonComponent } from "components/Button";
import { TypographicComponent } from "components/Typographic";

import { useModal } from "hooks/useModal";

import close from "assets/svg/close.svg";

import styles from "./styles.module.scss";
import { InputFieldComponent } from "components/InputField";

export function EditModalComponent() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [select, setSelect] = useState("");

  const modalRef = useRef<any>();
  const { modal, setModal, handleCloseEdit } = useModal();

  const closeModal = (event: MouseEvent) => {
    if (modalRef.current === event.target) {
      setModal({ ...modal, edit: false });
    }
  };

  const keyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && modal.edit) {
        setModal({ ...modal, edit: false });
      }
    },
    [setModal, modal.edit]
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
        <button onClick={() => handleCloseEdit()} className={styles.close}>
          <Image
            src={close}
            alt="Um icone com formato de um X"
            width={32}
            height={32}
          />
        </button>

        <TypographicComponent title="Editar transação" variant="h3" />

        <form className={styles.form}>
          <InputFieldComponent
            label="Nome da transação"
            htmlFor="name"
            id="name"
            placeholder="Ex: Compras no assai"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <div className={styles.gridForm}>
            <InputFieldComponent
              label="Categoria"
              htmlFor="category"
              id="category"
              placeholder="Selecione"
              required
              value={select}
              onChange={(event) => setSelect(event.target.value)}
            />

            <InputFieldComponent
              label="Valor"
              htmlFor="value"
              id="value"
              type="number"
              placeholder="0"
              min={0}
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </div>

          <ButtonComponent title="Confirmar" color="primary" type="submit" />
        </form>
      </div>
    </div>
  );
}
