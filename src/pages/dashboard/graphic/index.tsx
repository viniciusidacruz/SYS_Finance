import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

import { AsideComponent } from "components/Aside";

import styles from "./styles.module.scss";

export default function Graphic() {
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    if (pathname) {
      router.replace("/dashboard/register");
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Gráfico | Desenvolvido por Vinicius Italo</title>
      </Head>

      <main className="container">
        <div className="content">
          <AsideComponent />

          <h1>Teste</h1>
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
