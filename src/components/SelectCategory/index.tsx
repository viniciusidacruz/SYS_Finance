import { IContentProps } from "./types";

import styles from "./styles.module.scss";

export function SelectCategoryComponent({
  options,
  handleChangeOptions,
}: IContentProps) {
  return (
    <select
      className={styles.container}
      onChange={(event) => handleChangeOptions(event.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
}
