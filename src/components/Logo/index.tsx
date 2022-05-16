import Image from "next/image";
import Link from "next/link";

import logo from "assets/svg/icon.svg";

export function LogoComponent() {
  return (
    <Link href="/" passHref>
      <Image src={logo} alt="Logo completo do SYS Finance" />
    </Link>
  );
}
