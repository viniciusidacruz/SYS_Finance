import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

import { ButtonComponent } from "components/Button";
import { InputFieldComponent } from "components/InputField";
import { TypographicComponent } from "components/Typographic";

import styles from "./styles.module.scss";

export function LoginComponent() {
  const [isAdmin, setIsAdmin] = useState(false);

  const router = useRouter();

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();

    router.push(`/dashboard/graphic?isAdmin=${isAdmin}`);
  };

  return (
    <div className={styles.container}>
      <form className={styles.content} onSubmit={handleSubmitForm}>
        <TypographicComponent title="Entrar" variant="h3" />

        <InputFieldComponent htmlFor="email" label="E-mail" />
        <InputFieldComponent htmlFor="password" label="Senha" />

        <div className={styles.accessButton}>
          <div>
            <input
              type="checkbox"
              id="admin"
              defaultChecked={isAdmin}
              onChange={() => setIsAdmin(!isAdmin)}
            />
            <label htmlFor="admin">Administrador</label>
          </div>

          <ButtonComponent title="Entrar" color="primary" type="submit" />
        </div>
      </form>

      <div className={styles.access}>
        <span>Acesse com</span>
        <ButtonComponent
          title="Github"
          style={{ backgroundColor: "#373737", color: "#fff" }}
          onClick={() => signIn()}
        />
      </div>
    </div>
  );
}
