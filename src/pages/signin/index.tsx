import { Fragment, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import { LoginComponent } from "components/Forms/Login";

import login from "assets/svg/login.svg";

import styles from "./styles.module.scss";

export default function SignIn() {
  const router = useRouter();
  const session = useSession();

  const isAuthenticated = session.data?.user;

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/dashboard/graphic");
    }
  }, [session]);

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
