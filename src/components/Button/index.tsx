import Image from "next/image";

import url from "assets/gif/spinner.gif";

import { IContentButtonProps } from "./types";

import styles from "./styles.module.scss";

export function ButtonComponent({
  title,
  icon,
  color,
  loading,
  ...rest
}: IContentButtonProps) {
  const container = color === "primary" ? styles.primary : styles.light;

  return (
    <button {...rest} className={container}>
      {loading ? (
        <Image
          src={url}
          width={32}
          height={32}
          alt="Uma animação de um circulo dando voltas"
        />
      ) : (
        <span>{title}</span>
      )}
      {icon && <span>{icon}</span>}
    </button>
  );
}
