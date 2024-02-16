import "../styles/bootstrap.min.css";
import "../styles/style.css";
import type { AppProps } from "next/app";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
       
      <Component {...pageProps} />

    </>
  );
}

export default MyApp;
