import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout";
import { Hydrate } from "react-query";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </Layout>
    </>
  );
}
