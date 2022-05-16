import Link from "next/link";

import { LogoComponent } from "../Logo";
import { ButtonComponent } from "../Button";

import styles from "./styles.module.scss";

export function HeaderComponent() {
  return (
    <header className={styles.header}>
      <nav className="container">
        <LogoComponent />

        <ul>
          <li>
            <Link href="/">Inicío</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
        </ul>

        <ButtonComponent title="Entrar" />
      </nav>
    </header>
  );
}
