import styles from "./styles.module.scss";

interface IProps {
  onClose: (state: boolean) => void;
}

export function Drawer({ onClose }: IProps) {
  return (
    <div className={styles.navigation}>
      <ul>
        <li>Inicio</li>
      </ul>
    </div>
  );
}
