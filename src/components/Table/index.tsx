import { Fragment } from "react";
import Image from "next/image";

import { LoadingComponent } from "components/Loading";

import { useModal } from "hooks/useModal";

import edit from "assets/svg/edit.svg";
import trash from "assets/svg/trash.svg";

import { IContentProps, IKeysProps } from "./types";
import styles from "./styles.module.scss";

export function TableComponent({ data }: IContentProps) {
  const { handleOpenDelete, handleOpenEdit } = useModal();

  const resultTable = true;

  return (
    <Fragment>
      {resultTable ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Criado em</th>
              <th>Ação</th>
            </tr>
          </thead>

          <tbody>
            {data.map((transaction: IKeysProps) => {
              const id = transaction.id.split("-", 1);

              return (
                <tr key={transaction.id}>
                  <td data-label="ID">{id}</td>
                  <td data-label="Nome">{transaction.title}</td>
                  <td data-label="Categoria">{transaction.category}</td>
                  <td data-label="Criado em">01 de Jan, 2022</td>
                  <td data-label="Ação">
                    <div className={styles.buttons}>
                      <button onClick={() => handleOpenEdit()}>
                        <Image
                          src={edit}
                          alt="Icone representando uma folha sendo escrita pelo um lapis"
                        />
                      </button>

                      <button onClick={() => handleOpenDelete()}>
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
