import { ChangeEvent, FormEvent } from "react";

const maskCpf = (event: FormEvent<HTMLInputElement>) => {
  let value = event.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})/, "$1$-2");
  value = value.replace(/(-\d{2})\d+?$/, "$1");
  event.currentTarget.value = value;

  return event;
};

const maskCnpj = (event: FormEvent<HTMLInputElement>) => {
  let value = event.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1/$2");
  value = value.replace(/(\d{4})(\d)/, "$1-$2");
  value = value.replace(/(-\d{2})\d+?$/, "$1");
  event.currentTarget.value = value;

  return event;
};

const maskCep = (event: FormEvent<HTMLInputElement>) => {
  let value = event.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");
  value = value.replace(/(-\d{3})\d+?$/, "$1");
  event.currentTarget.value = value;

  return event;
};

const maskPis = (event: FormEvent<HTMLInputElement>) => {
  let value = event.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{5})(\d)/, "$1.$2");
  value = value.replace(/(\d{5}\.)(\d{2})(\d)/, "$1$2-$3");
  value = value.replace(/(-\d)\d+?$/, "$1");
  event.currentTarget.value = value;

  return event;
};

const maskPhone = (event: FormEvent<HTMLInputElement>) => {
  let value = event.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d{4})(\d)/, "$1-$2");
  value = value.replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3");
  value = value.replace(/(\d{4})\d+?$/, "$1");
  event.currentTarget.value = value;

  return event;
};

const maskCurrency = (event: ChangeEvent<HTMLInputElement>) => {
  let value = event.target.value;
  value = value?.replace(/\D/g, "");
  value = value?.replace(/(\d)(\d{2})$/, "$1,$2");

  event.target.value = value;
  return event.target.value;
};

export { maskPhone, maskCurrency, maskCep, maskCpf, maskPis, maskCnpj };
