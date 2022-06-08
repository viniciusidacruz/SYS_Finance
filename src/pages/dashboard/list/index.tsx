/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { parseCookies } from "nookies";
import { GetServerSideProps } from "next";

import { useModal } from "hooks/useModal";
import { useBalance } from "hooks/useBalance";
import RequestService from "common/services/request";

import { TableComponent } from "components/Table";
import { AsideComponent } from "components/Aside";
import { SearchComponent } from "components/Search";
import { SelectComponent } from "components/Select";
import { EditModalComponent } from "components/Modals/Edit";
import { DeleteModalComponent } from "components/Modals/Delete";

import styles from "./styles.module.scss";

export default function List() {
  const [transactions, setTransactions] = useState({});

  const { modal } = useModal();
  const { balance } = useBalance();

  const services = new RequestService();

  useEffect(() => {
    const getUser = () => {
      services.getTransactions().then((response) => {
        setTransactions(response);
      });
    };

    getUser();
  }, []);

  const data = transactions && Object.values(transactions);

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

            <TableComponent data={data} />

            <div className={styles.total}>
              <span>Saldo: {balance}</span>
              <span>Total: </span>
            </div>
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
