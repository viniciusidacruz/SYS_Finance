import Link from "next/link";
import { useRouter } from "next/router";

import { IContentProps } from "./types";

import styles from "./styles.module.scss";

export function MenuItemComponent({ title, path }: IContentProps) {
  const router = useRouter();
  const comparePathname = router.pathname === path;
  const isActive = comparePathname ? styles.active : styles.default;

  return (
    <li className={isActive}>
      <Link href={path}>{title}</Link>
    </li>
  );
}
