import React, { Fragment } from "react";
import Head from "next/head";
import { parseCookies } from "nookies";
import { GetServerSideProps } from "next";

import { useModal } from "hooks/useModal";

import { TableComponent } from "components/Table";
import { AsideComponent } from "components/Aside";
import { SearchComponent } from "components/Search";
import { SelectComponent } from "components/Select";
import { EditModalComponent } from "components/Modals/Edit";
import { DeleteModalComponent } from "components/Modals/Delete";

import styles from "./styles.module.scss";

export default function List() {
  const { modal } = useModal();

  return (
    <Fragment>
      <Head>
        <title>Listagem de Transações | Desenvolvido por Vinicius Italo</title>
      </Head>

      <main className="container">
        <div className="content">
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["@U_Info"]: accountUser } = parseCookies(ctx);
  const { ["next-auth.session-token"]: tokenNext } = parseCookies(ctx);

  if (!accountUser && !tokenNext) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
