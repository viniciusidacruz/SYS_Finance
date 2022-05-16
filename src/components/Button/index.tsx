import { IContentButtonProps } from "./types";

import styles from "./styles.module.scss";

export function ButtonComponent({ title, icon, ...rest }: IContentButtonProps) {
  return (
    <button {...rest} className={styles.content}>
      <span>{title}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
}
