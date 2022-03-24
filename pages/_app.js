import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import { Provider } from "react-redux";
import store from "../components/store";
import ShowCart from "../components/Cart/ShowCart";


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>اشتري</title>
        <meta
          httpEquiv="Content-Type"
          content="text/html"
          charSet="windows-1256"
        />
      </Head>
      <Header />
      <ShowCart/>
      <Component {...pageProps} />
      <Footer />
      </Provider>
  );
}

export default MyApp;
