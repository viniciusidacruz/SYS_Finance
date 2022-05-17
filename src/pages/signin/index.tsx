import Image from "next/image";

import { LoginComponent } from "components/Forms/Login";

import login from "assets/svg/login.svg";

import styles from "./styles.module.scss";

export default function SignIn() {
  return (
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
  );
}
