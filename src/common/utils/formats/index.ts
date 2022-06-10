const formatedCurrency = (value: number) => {
  let valueFormated = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  return valueFormated;
};

const formatedDate = (date: string) => {
  let dateFormated = new Intl.DateTimeFormat("pt-BR").format(new Date(date));

  return dateFormated;
};

export { formatedCurrency, formatedDate };
