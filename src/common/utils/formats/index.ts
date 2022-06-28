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

const removeCaracter = (value: string) => {
  let newString = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  return newString;
};

export { formatedCurrency, formatedDate, removeCaracter };
