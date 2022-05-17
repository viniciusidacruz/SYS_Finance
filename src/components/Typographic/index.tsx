import React, { Fragment } from "react";

import { IColorProps } from "./types";

import styles from "./styles.module.scss";

export function TypographicComponent({
  title,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  primary,
}: IColorProps) {
  const color = primary ? styles.primary : styles.dark;

  return (
    <Fragment>
      {p && <p className={color}>{title}</p>}
      {h1 && <h1 className={color}>{title}</h1>}
      {h2 && <h2 className={color}>{title}</h2>}
      {h3 && <h3 className={color}>{title}</h3>}
      {h4 && <h4 className={color}>{title}</h4>}
      {h5 && <h5 className={color}>{title}</h5>}
      {h6 && <h6 className={color}>{title}</h6>}
    </Fragment>
  );
}
