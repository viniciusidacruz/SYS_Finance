import { FormEvent, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

import { useAuth } from "hooks/useAuth";

import { ButtonComponent } from "components/Button";
import { InputFieldComponent } from "components/InputField";
import { TypographicComponent } from "components/Typographic";

import styles from "./styles.module.scss";

export function RegisterComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signUp } = useAuth();

  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault();

    if (password.trim() !== confirmPassword.trim()) {
      toast.error("Senhas não conferem");
    } else {
      try {
        await signUp(email, password);
      } catch (err) {
        toast.error("Tente novamente mais tarde");
      }
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.content} onSubmit={handleSubmitForm}>
        <TypographicComponent title="Cadastrar" variant="h3" />

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

        <InputFieldComponent
          htmlFor="confirmPassword"
          label="Confirmar senha"
          id="confirmPassword"
          type="password"
          required
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />

        <ButtonComponent title="Cadastrar" color="primary" type="submit" />

        <div className={styles.accessButton}>
          <Link href="/signin">Já tem conta? clique aqui</Link>
        </div>
      </form>
    </div>
  );
}
