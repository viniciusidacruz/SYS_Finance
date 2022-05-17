import Link from "next/link";
import { useRouter } from "next/router";

import { LogoComponent } from "../Logo";
import { ButtonComponent } from "../Button";

import { dataNavigation } from "./data";

import styles from "./styles.module.scss";

export function HeaderComponent() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav className="container">
        <LogoComponent />

        <ul>
          {dataNavigation.map((nav, index) => (
            <li key={`${nav.title}-${index}`}>
              <Link href={nav.path} passHref>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        <ButtonComponent
          title="Entrar"
          color="light"
          onClick={() => router.push("/signin")}
        />
      </nav>
    </header>
  );
}
