import { ReactNode, InputHTMLAttributes } from "react";

export interface IContentInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  htmlFor?: string;
  mask?: "cep" | "phone" | "cnpj" | "cpf" | "cep" | "currency" | "pis";
}
