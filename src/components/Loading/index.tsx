import Image from "next/image";

import loading from "assets/gif/loading.gif";

import styles from "./styles.module.scss";

export function LoadingComponent() {
  return (
    <div className={styles.container}>
      <Image
        src={loading}
        alt="Uma animação com circulos"
        width={200}
        height={200}
      />
    </div>
  );
}
