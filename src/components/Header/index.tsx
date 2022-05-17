import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { LogoComponent } from "../Logo";
import { ButtonComponent } from "../Button";

import { dataNavigation } from "./data";

import styles from "./styles.module.scss";

export function HeaderComponent() {
  const router = useRouter();
  const isAuthenticated = false;
  const haveAvatarProfile = false;

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

        {isAuthenticated ? (
          <div className={styles.infoUser}>
            <span>Nome do usuário</span>

            <div className={styles.avatarProfile}>
              {haveAvatarProfile && (
                <Image
                  src="/"
                  alt="Foto de perfil do usuário"
                  width={48}
                  height={48}
                />
              )}
            </div>
          </div>
        ) : (
          <ButtonComponent
            title="Entrar"
            color="light"
            onClick={() => router.push("/signin")}
          />
        )}
      </nav>
    </header>
  );
}
