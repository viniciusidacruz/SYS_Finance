import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

import { LogoComponent } from "../Logo";
import { ButtonComponent } from "../Button";

import { dataNavigation } from "./data";
import close from "assets/svg/logout.svg";

import styles from "./styles.module.scss";

export function HeaderComponent() {
  const router = useRouter();
  const session = useSession();

  const isAuthenticated = session.data?.user;
  const haveAvatarProfile = isAuthenticated?.image;

  const redirectForDashboard = () => {};

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
            <span>{isAuthenticated.name}</span>

            <div className={styles.avatarProfile}>
              {haveAvatarProfile && (
                <Image
                  src={haveAvatarProfile}
                  alt="Foto de perfil do usuário"
                  width={48}
                  height={48}
                />
              )}
            </div>

            <span className={styles.signOut} onClick={() => signOut()}>
              <Image src={close} alt="Icone em formato de X para fechar" />
            </span>
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
