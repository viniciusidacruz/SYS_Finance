import { Fragment, useState } from "react";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { parseCookies } from "nookies";
import { GetServerSideProps } from "next";

import { AsideComponent } from "components/Aside";
import { ButtonComponent } from "components/Button";
import { InputFieldComponent } from "components/InputField";
import { TypographicComponent } from "components/Typographic";
import { SelectCategoryComponent } from "components/SelectCategory";

import categories from "./data";
import RequestService from "common/services/request";

import styles from "./styles.module.scss";

export default function Register() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("0");
  const [category, setCategory] = useState("Selecione");

  const services = new RequestService();

  const registerTransactions = () => {
    const data = {
      title,
      value,
      id: uuidv4(),
      category,
      date: new Date(),
    };

    try {
      services.registerTransactions(data);
    } catch (error) {
      toast.error("Ops, tente novamente mais tarde.");
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Registrar | Desenvolvido por Vinicius Italo</title>
      </Head>

      <main className="container">
        <div className="content">
          <AsideComponent />

          <section className={styles.section}>
            <TypographicComponent title="Cadastrar transações" variant="p" />

            <form onSubmit={() => registerTransactions()}>
              <div className={styles.gridPrimary}>
                <InputFieldComponent
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  required
                />

                <InputFieldComponent
                  type="number"
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  required
                />
              </div>
              <div className={styles.gridSecondary}>
                <SelectCategoryComponent
                  options={categories}
                  handleChangeOptions={setCategory}
                />
                <ButtonComponent title="Cadastrar" type="submit" />
              </div>
            </form>
          </section>
        </div>
      </main>
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["@U_Info"]: accountUser } = parseCookies(ctx);
  const { ["next-auth.session-token"]: tokenNext } = parseCookies(ctx);

  if (!accountUser && !tokenNext) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
