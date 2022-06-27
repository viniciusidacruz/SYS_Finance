import ContentProps from "./types";
import styles from "./styles.module.scss";

export function SelectOptionComponent({
  icon,
  title,
  onClick,
  selected,
  description,
}: ContentProps) {
  const container = selected ? styles.active : styles.container;

  return (
    <div className={container} onClick={onClick}>
      <div>{icon}</div>

      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
