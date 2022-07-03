import Image from "next/image";

import edit from "assets/svg/edit.svg";
import trash from "assets/svg/trash.svg";

import ContentProps from "./types";
import styles from "./styles.module.scss";

export function CategorySettingComponent({
  data,
  onEdit,
  onDelete,
}: ContentProps) {
  return (
    <div className={styles.container}>
      <span>{data.value}</span>

      <div className={styles.contentButtons}>
        <Image
          src={edit}
          alt="Icone representando uma folha sendo escrita pelo um lapis"
          className={styles.button}
          onClick={onEdit}
        />

        <Image
          src={trash}
          alt="Icone representando uma cesta de lixo"
          className={styles.button}
          onClick={onDelete}
        />
      </div>
    </div>
  );
}
