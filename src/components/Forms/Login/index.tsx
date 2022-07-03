import { FormEvent, useState } from "react";
import Link from "next/link";

import { useAuth } from "hooks/useAuth";

import { ButtonComponent } from "components/Button";
import { InputFieldComponent } from "components/InputField";
import { TypographicComponent } from "components/Typographic";

import styles from "./styles.module.scss";

export function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault();

    await signIn(email, password);
  };

  return (
    <div className={styles.container}>
      <form className={styles.content} onSubmit={handleSubmitForm}>
        <TypographicComponent title="Entrar" variant="h3" />

        <InputFieldComponent
          htmlFor="email"
          label="E-mail"
          id="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <InputFieldComponent
          htmlFor="password"
          label="Senha"
          id="password"
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <ButtonComponent title="Entrar" color="primary" type="submit" />

        <div className={styles.redirect}>
          <Link href="/signup">Não tem uma conta? clique aqui</Link>
        </div>
      </form>
    </div>
  );
}
