/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import { parseCookies } from "nookies";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

import { RegisterComponent } from "components/Forms/Register";

import login from "assets/svg/login.svg";

import styles from "./styles.module.scss";

export default function SignIn() {
  return (
    <Fragment>
      <Head>
        <title>Registrar - Desenvolvido por Vinicius Italo</title>
      </Head>

      <main className="container contentFull">
        <section className={styles.content}>
          <div>
            <RegisterComponent />
          </div>

          <div className={styles.groupLeft}>
            <Image
              src={login}
              width={550}
              height={500}
              alt="Imagem ilustrativa de um rapaz saindo pela porta"
            />
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["@U_Info"]: accountUser } = parseCookies(ctx);
  const { ["next-auth.session-token"]: tokenNext } = parseCookies(ctx);

  if (accountUser || tokenNext) {
    return {
      redirect: {
        destination: "/dashboard/graphic",
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
