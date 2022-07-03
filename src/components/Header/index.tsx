import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuth } from "hooks/useAuth";

import { LogoComponent } from "../Logo";
import { ButtonComponent } from "../Button";

import userProfile from "assets/svg/user.svg";
import logoutIcon from "assets/svg/logout.svg";

import { dataNavigation } from "./data";
import styles from "./styles.module.scss";

export function HeaderComponent() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const isAuthenticated = user?.uid;

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
            <span>{user?.email}</span>

            <div className={styles.avatarProfile}>
              <Image
                src={userProfile}
                alt="Foto de perfil do usuário"
                width={24}
                height={24}
              />
            </div>

            <span className={styles.signOut} onClick={logout}>
              <Image src={logoutIcon} alt="Icone em formato de X para fechar" />
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
