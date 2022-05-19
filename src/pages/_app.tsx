import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import { ModalProvider } from "contexts/ModalContext";

import { HeaderComponent } from "components/Header";
import { FooterComponent } from "components/Footer";

import "styles/global.scss";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ModalProvider>
        <HeaderComponent />
        <Component {...pageProps} />
        <FooterComponent />
      </ModalProvider>
    </SessionProvider>
  );
}

export default MyApp;
