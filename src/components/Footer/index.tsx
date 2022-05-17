import Image from "next/image";
import React from "react";

import globe from "assets/svg/globe.svg";

import styles from "./styles.module.scss";

export function FooterComponent() {
  return (
    <footer className={styles.container}>
      <div className="container">
        <span>Desenvolvido por Vinicius Italo</span>

        <div>
          <Image src={globe} alt="Um globo branco" />
        </div>
      </div>
    </footer>
  );
}
