import { Fragment } from "react";
import Head from "next/head";
import { parseCookies } from "nookies";
import { GetServerSideProps } from "next";

import { useModal } from "hooks/useModal";

import { AsideComponent } from "components/Aside";
import { TypographicComponent } from "components/Typographic";
import { FooterTableComponent } from "components/FooterTable";
import { NewTransactionForm } from "components/Forms/NewTransaction";

import styles from "./styles.module.scss";
import { AnimationContainerRight } from "styles/Animated";

export default function Register() {
  return (
    <Fragment>
      <Head>
        <title>Cadastrar transação | Desenvolvido por Vinicius Italo</title>
      </Head>

      <main className="container">
        <div className="content">
          <AsideComponent />

          <AnimationContainerRight className={styles.section}>
            <TypographicComponent title="Cadastrar transações" variant="h1" />

            <NewTransactionForm />

            <FooterTableComponent />
          </AnimationContainerRight>
        </div>
      </main>
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
