import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { ButtonComponent } from "components/Button";
import { TypographicComponent } from "components/Typographic";

import hero from "assets/svg/hero.svg";

import styles from "../styles/home.module.scss";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>SYS Finance | Developed by Vinicius Italo</title>
      </Head>

      <main className="contentFull container">
        <section className={styles.hero}>
          <div>
            <div className={styles.infoGroup}>
              <TypographicComponent variant="h5" title="Teste" />
              <TypographicComponent
                variant="h1"
                title="What is Lorem Ipsum?"
                primary
              />
              <TypographicComponent
                variant="p"
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 
1500s, when an unknown printer took a galley of type and scrambled it to
 make a type specimen book"
              />
              <ButtonComponent
                title="Faça sua cotação!"
                color="primary"
                onClick={() => router.push("/dashboard")}
              />
            </div>
          </div>

          <div>
            <Image
              src={hero}
              width={550}
              height={500}
              alt="Uma imagem ilustrativa de um boneco colocando uma moeda dentro de um cofrinho em formato de porco"
            />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
