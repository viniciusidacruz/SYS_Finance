import React, { Fragment } from "react";
import Head from "next/head";

import { TableComponent } from "components/Table";
import { AsideComponent } from "components/Aside";
import { SearchComponent } from "components/Search";
import { SelectComponent } from "components/Select";
import { EditModalComponent } from "components/Modals/Edit";
import { DeleteModalComponent } from "components/Modals/Delete";

import { useModal } from "hooks/useModal";

import styles from "./styles.module.scss";

export default function List() {
  const { modal } = useModal();

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

      {modal.delete && <DeleteModalComponent />}
      {modal.edit && <EditModalComponent />}
    </Fragment>
  );
}
