import React, { Fragment } from "react";
import Head from "next/head";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

import { useModal } from "hooks/useModal";
import { useCategories } from "hooks/useCategories";

import { AsideComponent } from "components/Aside";
import { TypographicComponent } from "components/Typographic";
import { CategorySettingComponent } from "components/CategorySetting";
import { EditCategoryModalComponent } from "components/Modals/EditCategory";

import styles from "./styles.module.scss";
import { AnimationContainerRight } from "styles/Animated";
import { DeleteModalComponent } from "components/Modals/Delete";

export default function Categories() {
  const router = useRouter();
  const { categories } = useCategories();
  const { modal, handleOpenEditCategory, handleOpenDelete } = useModal();

  return (
    <Fragment>
      <Head>
        <title>Categories | Desenvolvido por Vinicius Italo</title>
      </Head>

      <main className="container">
        <div className="content">
          <AsideComponent />

          <AnimationContainerRight className={styles.section}>
            <TypographicComponent title="Listagem de Categorias" variant="h1" />

            {Object.values(categories)?.length > 0 ? (
              <>
                {Object.entries(categories).map(([key, category]) => {
                  const newObject = {
                    id: key,
                    value: category.value,
                    option: category.option,
                  };

                  return (
                    <div className={styles.line} key={key}>
                      <CategorySettingComponent
                        data={newObject}
                        onEdit={() => handleOpenEditCategory(newObject)}
                        onDelete={() => handleOpenDelete(key)}
                      />
                    </div>
                  );
                })}
              </>
            ) : (
              <div className={styles.registerCategory}>
                <TypographicComponent
                  title="Cadastra uma categoria"
                  variant="p"
                />

                <span onClick={() => router.push("/dashboard/category")}>
                  Clique aqui
                </span>
              </div>
            )}
          </AnimationContainerRight>
        </div>
      </main>

      {modal.editCategory && <EditCategoryModalComponent />}
      {modal.delete && <DeleteModalComponent isEditing />}
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["@U_Info"]: accountUser, ["next-auth.session-token"]: tokenNext } =
    parseCookies(ctx);

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
