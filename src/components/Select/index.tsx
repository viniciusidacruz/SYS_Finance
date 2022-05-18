import styles from "./styles.module.scss";

export function SelectComponent() {
  return (
    <select className={styles.select}>
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={15}>15</option>
    </select>
  );
}
