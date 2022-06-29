import { MdClose } from "react-icons/md";

import ContentProps from "./types";
import styles from "./styles.module.scss";

export function CategoryComponent({
  title,
  onClick,
  selected,
  deleteCategory,
}: ContentProps) {
  const isActive = selected ? styles.activeCategory : styles.category;

  return (
    <div className={isActive} onClick={onClick}>
      <MdClose
        color="#000000"
        size={18}
        onClick={deleteCategory}
        className={styles.delete}
      />
      <span>{title}</span>
    </div>
  );
}
