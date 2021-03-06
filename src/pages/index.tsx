import { Fragment, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { useModal } from "hooks/useModal";

import { ButtonComponent } from "components/Button";
import { TypographicComponent } from "components/Typographic";
import { CountModalComponent } from "components/Modals/Count";

import hero from "assets/svg/hero.svg";

import styles from "../styles/home.module.scss";
import {
  AnimationContainerLeft,
  AnimationContainerRight,
} from "styles/Animated";

const Home: NextPage = () => {
  const router = useRouter();
  const { modal, handleOpenCount } = useModal();

  useEffect(() => {
    setTimeout(() => {
      handleOpenCount();
    }, 8000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Head>
        <title>SYS Finance | Developed by Vinicius Italo</title>
      </Head>

      <main className="contentFull container">
        <section className={styles.hero}>
          <AnimationContainerLeft>
            <div className={styles.infoGroup}>
              <TypographicComponent variant="h5" title="Vida em ordem" />
              <TypographicComponent
                variant="h1"
                title="Faça agora mesmo sua cotação!"
                primary
              />

              <TypographicComponent
                variant="p"
                title="Nada melhor que ter suas contas em ordem, a organização é a base de toda a vida então venha fazer parte desse time e deixe agora o seu mês organizado junto com suas contas."
              />

              <ButtonComponent
                title="Faça sua cotação!"
                color="primary"
                onClick={() => router.push("/dashboard/register")}
              />
            </div>
          </AnimationContainerLeft>

          <AnimationContainerRight>
            <Image
              src={hero}
              width={430}
              height={400}
              alt="Uma imagem ilustrativa de um boneco colocando uma moeda dentro de um cofrinho em formato de porco"
            />
          </AnimationContainerRight>
        </section>
      </main>

      {modal.count && <CountModalComponent />}
    </Fragment>
  );
};

export default Home;
