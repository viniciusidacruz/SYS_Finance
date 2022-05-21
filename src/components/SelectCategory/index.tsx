import React from "react";
import { IContentProps } from "./types";

export function SelectCategoryComponent({
  options,
  handleChangeOptions,
}: IContentProps) {
  return (
    <select onChange={(event) => handleChangeOptions(event.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
}
