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
              filteredSearch.map((transaction: any) => {
                const id = transaction[1].id.split("-", 1);
                const isNegative =
                  transaction[1].type === "Saida"
                    ? styles.isNegative
                    : styles.isPositive;
                const value = Number(transaction[1].value);

                return (
                  <tr key={transaction[1].id}>
                    <td data-label="Id">{id}</td>
                    <td data-label="Nome">{transaction[1].title}</td>
                    <td data-label="Categoria">{transaction[1].category}</td>
                    <td data-label="Tipo">{transaction[1].type}</td>
                    <td data-label="Valor" className={isNegative}>
                      {transaction[1].type === "Saida" && "- "}
                      {formatedCurrency(value)}
                    </td>
                    <td data-label="Criado em">
                      {formatedDate(transaction[1].date)}
                    </td>
                    <td data-label="Ação">
                      <div className={styles.buttons}>
                        <button onClick={() => handleOpenEdit(transaction)}>
                          <Image
                            src={edit}
                            alt="Icone representando uma folha sendo escrita pelo um lapis"
                          />
                        </button>

                        <button onClick={() => handleOpenDelete(transaction)}>
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
