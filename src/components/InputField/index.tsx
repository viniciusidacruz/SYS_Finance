import React, { FormEvent, useCallback } from "react";

import {
  maskCpf,
  maskCep,
  maskPis,
  maskCnpj,
  maskPhone,
  maskCurrency,
} from "common/utils/validators/masks";

import { IContentInputProps } from "./types";
import styles from "./styles.module.scss";

export function InputFieldComponent({
  mask,
  label,
  htmlFor,
  ...rest
}: IContentInputProps) {
  const handleKeyUp = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      if (mask === "currency") {
        maskCurrency(event);
      } else if (mask === "cep") {
        maskCep(event);
      } else if (mask === "cnpj") {
        maskCnpj(event);
      } else if (mask === "cpf") {
        maskCpf(event);
      } else if (mask === "phone") {
        maskPhone(event);
      } else if (mask === "pis") {
        maskPis(event);
      } else {
        return;
      }
    },
    [mask]
  );

  return (
    <div className={styles.field}>
      <input {...rest} onKeyUp={handleKeyUp} />
      <label htmlFor={htmlFor}>{label}</label>
      <span className={styles.focusBg}></span>
    </div>
  );
}
