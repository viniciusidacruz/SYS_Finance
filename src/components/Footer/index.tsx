import React from "react";
import Image from "next/image";

import globe from "assets/svg/globe.svg";

import styles from "./styles.module.scss";

export function FooterComponent() {
  return (
    <footer className={styles.container}>
      <div className="container">
        <span>Desenvolvido por Vinicius Italo</span>
      </div>
    </footer>
  );
}
