/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { parseCookies } from "nookies";
import { GetServerSideProps } from "next";

import { useModal } from "hooks/useModal";
import { useTransactions } from "hooks/useTransactions";
import { formatedCurrency } from "common/utils/formats";

import { TableComponent } from "components/Table";
import { AsideComponent } from "components/Aside";
import { SearchComponent } from "components/Search";
import { SelectComponent } from "components/Select";
import { EditModalComponent } from "components/Modals/Edit";
import { DeleteModalComponent } from "components/Modals/Delete";

import styles from "./styles.module.scss";
import { AnimationContainerRight } from "styles/Animated";

export default function List() {
  const { modal } = useModal();
  const { transactions } = useTransactions();

  const data = transactions && Object.values(transactions);

  const summary = data.reduce(
    (acc, transaction) => {
      if (transaction.category === "Entrada") {
        acc.deposits += Number(transaction.value);
        acc.total += Number(transaction.value);
      } else {
        acc.withdraws += Number(transaction.value);
        acc.total -= Number(transaction.value);
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Fragment>
      <Head>
        <title>Listagem de Transações | Desenvolvido por Vinicius Italo</title>
      </Head>

      <main className="container">
        <div className="content">
          <AsideComponent />

          <AnimationContainerRight className={styles.section}>
            <div className={styles.headerTable}>
              <SearchComponent />
              <SelectComponent />
            </div>

            <TableComponent data={transactions && transactions} />

            <div className={styles.footerSummary}>
              <span>Entrada: {formatedCurrency(summary.deposits)}</span>
              <span>Saidas: {formatedCurrency(summary.withdraws)}</span>
              <span>Total: {formatedCurrency(summary.total)}</span>
            </div>
          </AnimationContainerRight>
        </div>
      </main>

      {modal.delete && <DeleteModalComponent />}
      {modal.edit && <EditModalComponent />}
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["@U_Info"]: accountUser, ["next-auth.session-token"]: tokenNext } =
    parseCookies(ctx);

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
