import { Fragment } from "react";
import type { AppProps } from "next/app";

import { HeaderComponent } from "components/Header";

import "styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <HeaderComponent />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
