/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { parseCookies } from "nookies";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

import { LoginComponent } from "components/Forms/Login";

import login from "assets/svg/login.svg";

import styles from "./styles.module.scss";

export default function SignIn() {
  return (
    <Fragment>
      <Head>
        <title>Entrar - Desenvolvido por Vinicius Italo</title>
      </Head>

      <main className="container contentFull">
        <section className={styles.content}>
          <div className={styles.groupLeft}>
            <Image
              src={login}
              width={550}
              height={500}
              alt="Imagem ilustrativa de um rapaz saindo pela porta"
            />
          </div>

          <div>
            <LoginComponent />
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["@U_Info"]: accountUser, ["next-auth.session-token"]: tokenNext } =
    parseCookies(ctx);

  if (accountUser || tokenNext) {
    return {
      redirect: {
        destination: "/dashboard/list",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session: await getSession(ctx),
    },
  };
};
