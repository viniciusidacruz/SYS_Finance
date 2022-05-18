import { Fragment } from "react";
import Image from "next/image";

import { LoadingComponent } from "components/Loading";

import edit from "assets/svg/edit.svg";
import trash from "assets/svg/trash.svg";

import styles from "./styles.module.scss";

export function TableComponent() {
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
            <tr>
              <td data-label="ID">001</td>
              <td data-label="Nome">Aluguel</td>
              <td data-label="Categoria">Divida</td>
              <td data-label="Criado em">01 de Jan, 2022</td>
              <td data-label="Ação">
                <div className={styles.buttons}>
                  <button>
                    <Image
                      src={edit}
                      alt="Icone representando uma folha sendo escrita pelo um lapis"
                    />
                  </button>

                  <button>
                    <Image
                      src={trash}
                      alt="Icone representando uma cesta de lixo"
                    />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <LoadingComponent />
      )}
    </Fragment>
  );
}
