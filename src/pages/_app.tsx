import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import { AuthProvider } from "contexts/AuthContext";
import { ModalProvider } from "contexts/ModalContext";
import { CategoriesProvider } from "contexts/CategoriesContext";
import { TransactionsProvider } from "contexts/TransactionsContext";

import { HeaderComponent } from "components/Header";
import { FooterComponent } from "components/Footer";

import "styles/global.scss";
import "react-toastify/dist/ReactToastify.min.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <AuthProvider>
      <ModalProvider>
        <TransactionsProvider>
          <CategoriesProvider>
            <ToastContainer />
            <HeaderComponent />
            <Component {...pageProps} />
            <FooterComponent />
          </CategoriesProvider>
        </TransactionsProvider>
      </ModalProvider>
    </AuthProvider>
  );
}

export default MyApp;
