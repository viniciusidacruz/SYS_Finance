import { Fragment } from "react";
import Head from "next/head";
import { parseCookies } from "nookies";
import { GetServerSideProps } from "next";

import { AsideComponent } from "components/Aside";
import { TypographicComponent } from "components/Typographic";
import { NewTransactionForm } from "components/Forms/NewTransaction";

import styles from "./styles.module.scss";

export default function Register() {
  return (
    <Fragment>
      <Head>
        <title>Cadastrar transação | Desenvolvido por Vinicius Italo</title>
      </Head>

      <main className="container">
        <div className="content">
          <AsideComponent />

          <section className={styles.section}>
            <TypographicComponent title="Cadastrar transações" variant="h1" />

            <NewTransactionForm />
          </section>
        </div>
      </main>
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
