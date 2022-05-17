import React from "react";

import { IContentInputProps } from "./types";

import styles from "./styles.module.scss";

export function InputFieldComponent({
  label,
  htmlFor,
  ...rest
}: IContentInputProps) {
  return (
    <div className={styles.field}>
      <input {...rest} />
      <label htmlFor={htmlFor}>{label}</label>
      <span className={styles.focusBg}></span>
    </div>
  );
}
