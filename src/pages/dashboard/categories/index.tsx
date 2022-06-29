import React, { Fragment } from "react";
import Head from "next/head";

import { AsideComponent } from "components/Aside";

import styles from "./styles.module.scss";
import { AnimationContainerRight } from "styles/Animated";
import { TypographicComponent } from "components/Typographic";

export default function Categories() {
  return (
    <Fragment>
      <Head>
        <title>Categories | Desenvolvido por Vinicius Italo</title>
      </Head>

      <main className="container">
        <div className="content">
          <AsideComponent />

          <AnimationContainerRight className={styles.section}>
            <TypographicComponent title="Listagem de Categorias" variant="h1" />
          </AnimationContainerRight>
        </div>
      </main>
    </Fragment>
  );
}
