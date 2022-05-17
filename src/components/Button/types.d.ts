import { ReactNode, ButtonHTMLAttributes } from "react";

export interface IContentButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: ReactNode;
  color?: "primary" | "light";
}
