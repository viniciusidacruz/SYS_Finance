import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

import { AsideComponent } from "components/Aside";

import UrlParamsProps from "./types";
import styles from "./styles.module.scss";

export default function Graphic() {
  const router = useRouter();
  const params = new URLSearchParams(window.location.search);

  let urlParams: UrlParamsProps | undefined = undefined;
  params.forEach((value, key) => {
    urlParams = Object.assign({}, urlParams, {
      [key]: value.toString(),
    });
  });

  useEffect(() => {
    console.log(urlParams);
    if (urlParams?.isAdmin === false && !urlParams) {
      router.push("/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
