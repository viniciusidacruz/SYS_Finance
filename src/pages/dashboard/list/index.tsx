/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

import { useModal } from "hooks/useModal";
import { useTransactions } from "hooks/useTransactions";

import eyes from "assets/gif/eyes.gif";

import { TableComponent } from "components/Table";
import { AsideComponent } from "components/Aside";
import { SearchComponent } from "components/Search";
import { ButtonComponent } from "components/Button";
import { EditModalComponent } from "components/Modals/Edit";
import { TypographicComponent } from "components/Typographic";
import { FooterTableComponent } from "components/FooterTable";
import { DeleteModalComponent } from "components/Modals/Delete";

import styles from "./styles.module.scss";
import { AnimationContainerRight } from "styles/Animated";

export default function List() {
  const router = useRouter();
  const { modal } = useModal();
  const { transactions } = useTransactions();

  const data = transactions && Object.values(transactions);

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
              <ButtonComponent
                title="Nova transação"
                color="primary"
                onClick={() => router.push("/dashboard/register")}
              />
            </div>

            {data.length > 0 ? (
              <TableComponent data={transactions && transactions} />
            ) : (
              <div className={styles.container}>
                <TypographicComponent
                  title="Cadastre uma transação"
                  variant="h2"
                />
                <Image
                  src={eyes}
                  alt="Um olhar olhando para os dois lados"
                  width={150}
                  height={120}
                />
              </div>
            )}

            <FooterTableComponent />
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
