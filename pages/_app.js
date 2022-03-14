import "../styles/globals.css";
import Head from "next/head";
import { Fragment } from "react";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>اشتري</title>
        <meta httpEquiv="Content-Type" content="text/html"  charSet="windows-1256"/>
      </Head>
      <Header/>
        <Component {...pageProps} />
        <Footer/>
    </Fragment>
  );
}

export default MyApp;
