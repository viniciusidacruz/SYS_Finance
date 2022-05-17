import { ReactNode, InputHTMLAttributes } from "react";

export interface IContentInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  htmlFor?: string;
}
