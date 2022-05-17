import React, { Fragment } from "react";

import { IContentProps } from "./types";

import styles from "./styles.module.scss";

export function TypographicComponent({
  title,
  variant,
  primary,
}: IContentProps) {
  const color = primary ? styles.primary : styles.dark;

  return (
    <Fragment>
      {variant === "p" && <p className={color}>{title}</p>}
      {variant === "h1" && <h1 className={color}>{title}</h1>}
      {variant === "h2" && <h2 className={color}>{title}</h2>}
      {variant === "h3" && <h3 className={color}>{title}</h3>}
      {variant === "h4" && <h4 className={color}>{title}</h4>}
      {variant === "h5" && <h5 className={color}>{title}</h5>}
      {variant === "h6" && <h6 className={color}>{title}</h6>}
    </Fragment>
  );
}
