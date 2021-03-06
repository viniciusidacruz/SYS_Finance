import {
  useRef,
  useState,
  FormEvent,
  useEffect,
  MouseEvent,
  useCallback,
} from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

import { useModal } from "hooks/useModal";
import { useTransactions } from "hooks/useTransactions";
import RequestTransactions from "common/services/RequestTransaction";

import { ButtonComponent } from "components/Button";
import { InputFieldComponent } from "components/InputField";
import { TypographicComponent } from "components/Typographic";

import close from "assets/svg/close.svg";

import styles from "./styles.module.scss";
import { AnimationContainerTop } from "styles/Animated";

export function EditModalComponent() {
  const { modal, setModal, handleCloseEdit } = useModal();

  const [name, setName] = useState(modal.data.data.title);
  const [value, setValue] = useState(modal.data.data.value);
  const [select, setSelect] = useState(modal.data.data.type);

  const modalRef = useRef<any>();
  const service = new RequestTransactions();
  const { setEditSuccess, editSuccess } = useTransactions();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setModal, modal.edit]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);

    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const handleEditPlan = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await service.editTransaction(modal.data.data.id, {
        title: name,
        value,
        type: select,
      });

      toast.success("Editado com sucesso!");

      setTimeout(() => {
        setEditSuccess(!editSuccess);
        setModal({ ...modal, edit: false });
      }, 3000);
    } catch (error) {
      throw new Error("Algo deu errado ao editar a transa????o");
    }
  };

  const isDisabled = name === "" || value === 0;

  return (
    <div
      className={styles.background}
      ref={modalRef}
      onClick={(event) => closeModal(event)}
    >
      <AnimationContainerTop className={styles.wrapper}>
        <button onClick={() => handleCloseEdit()} className={styles.close}>
          <Image
            src={close}
            alt="Um icone com formato de um X"
            width={32}
            height={32}
          />
        </button>

        <TypographicComponent title="Editar transa????o" variant="h3" />

        <form className={styles.form} onSubmit={handleEditPlan}>
          <InputFieldComponent
            label="Nome da transa????o"
            htmlFor="name"
            id="name"
            placeholder="Ex: Compras no assai"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <div className={styles.gridForm}>
            <InputFieldComponent
              label="Tipo"
              htmlFor="type"
              id="type"
              placeholder="Selecione"
              required
              value={select}
              onChange={(event) => setSelect(event.target.value)}
            />

            <InputFieldComponent
              label="Valor"
              htmlFor="value"
              id="value"
              type="text"
              placeholder="0"
              min={0}
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </div>

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
