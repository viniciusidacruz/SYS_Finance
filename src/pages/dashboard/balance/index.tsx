import { Fragment } from "react";
import Head from "next/head";
import { parseCookies } from "nookies";
import { GetServerSideProps } from "next";

import { AsideComponent } from "components/Aside";
import { NewBalanceForm } from "components/Forms/NewBalance";
import { TypographicComponent } from "components/Typographic";

import styles from "./styles.module.scss";
import { AnimationContainerRight } from "styles/Animated";

export default function Balance() {
  return (
    <Fragment>
      <Head>
        <title>Cadastrar saldo | Desenvolvido por Vinicius Italo</title>
      </Head>

      <AnimationContainerRight className="container">
        <div className="content">
          <AsideComponent />

          <section className={styles.section}>
            <TypographicComponent title="Cadastrar saldo" variant="h1" />

            <NewBalanceForm />
          </section>
        </div>
      </AnimationContainerRight>
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
