import React, { Fragment } from "react";
import Head from "next/head";

import { TableComponent } from "components/Table";
import { AsideComponent } from "components/Aside";
import { SearchComponent } from "components/Search";
import { SelectComponent } from "components/Select";

import styles from "./styles.module.scss";

export default function Graphic() {
  return (
    <Fragment>
      <Head>
        <title>Gráfico | Desenvolvido por Vinicius Italo</title>
      </Head>

      <main className="container">
        <h1>Gráfico</h1>
      </main>
    </Fragment>
  );
}
