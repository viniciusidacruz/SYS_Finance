import { signOut } from "next-auth/react";

import { MenuItemComponent } from "./MenuItem";
import { TypographicComponent } from "components/Typographic";

import { menuItems } from "./data";

import styles from "./styles.module.scss";

export function AsideComponent() {
  return (
    <aside className={styles.aside}>
      <div>
        <TypographicComponent title="Dashboard" variant="h4" />

        <ul>
          {menuItems.map((menu) => (
            <MenuItemComponent
              key={menu.title}
              title={menu.title}
              path={menu.path}
            />
          ))}
        </ul>
      </div>

      <div>
        <TypographicComponent title="Perfil" variant="h4" />

        <ul>
          <MenuItemComponent title="Perfil" path="/dashboard/profile" />
          <li onClick={() => signOut()}>Sair</li>
        </ul>
      </div>
    </aside>
  );
}
