import React, { Fragment } from "react";
import Head from "next/head";

import { TableComponent } from "components/Table";
import { AsideComponent } from "components/Aside";
import { SearchComponent } from "components/Search";
import { SelectComponent } from "components/Select";

import styles from "./styles.module.scss";

export default function List() {
  return (
    <Fragment>
      <Head>
        <title>Listagem de Transações | Desenvolvido por Vinicius Italo</title>
      </Head>

      <main className="container">
        <div className={styles.content}>
          <AsideComponent />

          <section className={styles.section}>
            <div className={styles.headerTable}>
              <SearchComponent />
              <SelectComponent />
            </div>

            <TableComponent />
          </section>
        </div>
      </main>
    </Fragment>
  );
}
