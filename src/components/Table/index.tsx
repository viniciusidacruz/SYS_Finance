import { Fragment } from "react";
import Image from "next/image";

import { useModal } from "hooks/useModal";
import { useTransactions } from "hooks/useTransactions";
import { formatedCurrency, formatedDate } from "common/utils/formats";

import { LoadingComponent } from "components/Loading";

import edit from "assets/svg/edit.svg";
import trash from "assets/svg/trash.svg";

import { IContentProps } from "./types";
import styles from "./styles.module.scss";

export function TableComponent({ data }: IContentProps) {
  const { search } = useTransactions();
  const { handleOpenDelete, handleOpenEdit } = useModal();

  const filteredSearch = Object.entries(data).filter((val) => {
    if (search == "") {
      return val;
    } else if (
      val[1].title.toLowerCase().includes(search.toLowerCase()) ||
      val[1].type.toLowerCase().includes(search.toLowerCase())
    ) {
      return val;
    }
  });

  return (
    <Fragment>
      {data ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Criado em</th>
              <th>Ação</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              filteredSearch.map(([key, transaction]) => {
                const id = transaction.id.split("-", 1);
                const isNegative =
                  transaction.type === "Saida"
                    ? styles.isNegative
                    : styles.isPositive;
                const value = Number(transaction.value);
                const newObject = {
                  id: key,
                  uid: transaction.id,
                  title: transaction.title,
                  category: transaction.category?.value,
                  type: transaction.type,
                  date: transaction.date,
                  value: transaction.value,
                };

                return (
                  <tr key={transaction.id}>
                    <td data-label="Id">{id}</td>
                    <td data-label="Nome">{transaction.title}</td>
                    <td data-label="Categoria">
                      {transaction.category ? (
                        transaction.category.value
                      ) : (
                        <span>Nenhum</span>
                      )}
                    </td>
                    <td data-label="Tipo">{transaction.type}</td>
                    <td data-label="Valor" className={isNegative}>
                      {transaction.type === "Saida" && "- "}
                      {formatedCurrency(value)}
                    </td>
                    <td data-label="Criado em">
                      {formatedDate(transaction.date)}
                    </td>
                    <td data-label="Ação">
                      <div className={styles.buttons}>
                        <button onClick={() => handleOpenEdit(newObject)}>
                          <Image
                            src={edit}
                            alt="Icone representando uma folha sendo escrita pelo um lapis"
                          />
                        </button>

                        <button onClick={() => handleOpenDelete(key)}>
                          <Image
                            src={trash}
                            alt="Icone representando uma cesta de lixo"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <LoadingComponent />
      )}
    </Fragment>
  );
}
