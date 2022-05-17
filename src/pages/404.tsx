import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { ButtonComponent } from "components/Button";
import { TypographicComponent } from "components/Typographic";

import deslike from "assets/gif/notfound.gif";

import styles from "styles/notfound.module.scss";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="container">
      <section className={styles.content}>
        <div>
          <Image
            src={deslike}
            alt="Imagem ilustratia de uma mão fazendo o sinal de negatividade."
            width={200}
            height={200}
          />
        </div>
        <div>
          <TypographicComponent
            title="Ops, parece que essa página não existe"
            variant="h1"
          />
          <ButtonComponent
            title="Voltar para página inicial"
            color="primary"
            onClick={() => router.push("/")}
          />
        </div>
      </section>
    </main>
  );
}
