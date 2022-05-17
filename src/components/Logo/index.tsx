import Image from "next/image";
import Link from "next/link";

import logo from "assets/svg/icon.svg";

import styles from "./styles.module.scss";

export function LogoComponent() {
  return (
    <Link href="/" passHref>
      <div className={styles.container}>
        <Image src={logo} alt="Logo completo do SYS Finance" />
        <span>YS</span>
      </div>
    </Link>
  );
}
