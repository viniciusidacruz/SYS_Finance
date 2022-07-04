import { useRef, useEffect, useCallback, MouseEvent } from "react";
import Image from "next/image";

import { ButtonComponent } from "components/Button";
import { TypographicComponent } from "components/Typographic";

import { useModal } from "hooks/useModal";

import closeIcon from "assets/svg/close.svg";

import ContentModalProps from "./types";

import styles from "./styles.module.scss";
import { AnimationContainerTop } from "styles/Animated";

export function CountModalComponent() {
  const modalRef = useRef<any>();
  const { modal, handleCloseCount } = useModal();

  const closeModal = (event: MouseEvent) => {
    if (modalRef.current === event.target) {
      handleCloseCount();
    }
  };

  const keyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && modal.delete) {
        handleCloseCount();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [modal.count]
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
      <AnimationContainerTop className={styles.wrapper}>
        <button onClick={() => handleCloseCount()} className={styles.close}>
          <Image
            src={closeIcon}
            alt="Um icone com formato de um X"
            width={32}
            height={32}
          />
        </button>

        <TypographicComponent
          title="MVP 2 será lançado em breve, fique atento ao site para mais novidades!"
          variant="p"
        />
        <ButtonComponent
          title="Fechar"
          onClick={() => handleCloseCount()}
          color="primary"
        />
      </AnimationContainerTop>
    </div>
  );
}
