import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";

import { AuthProvider } from "contexts/AuthContext";
import { ModalProvider } from "contexts/ModalContext";
import { TransactionsProvider } from "contexts/TransactionsContext";

import { HeaderComponent } from "components/Header";
import { FooterComponent } from "components/Footer";

import "styles/global.scss";
import "react-toastify/dist/ReactToastify.min.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AuthProvider>
        <ModalProvider>
          <TransactionsProvider>
            <ToastContainer />
            <HeaderComponent />
            <Component {...pageProps} />
            <FooterComponent />
          </TransactionsProvider>
        </ModalProvider>
      </AuthProvider>
    </SessionProvider>
  );
}

export default MyApp;
