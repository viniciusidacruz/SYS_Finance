import { Fragment } from "react";
import type { AppProps } from "next/app";

import { HeaderComponent } from "components/Header";
import { FooterComponent } from "components/Footer";

import "styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <HeaderComponent />
      <Component {...pageProps} />
      <FooterComponent />
    </Fragment>
  );
}

export default MyApp;
