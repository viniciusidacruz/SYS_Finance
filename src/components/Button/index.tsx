import { IContentButtonProps } from "./types";

import styles from "./styles.module.scss";

export function ButtonComponent({
  title,
  icon,
  color,
  ...rest
}: IContentButtonProps) {
  const container = color === "primary" ? styles.primary : styles.light;

  return (
    <button {...rest} className={container}>
      <span>{title}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
}
