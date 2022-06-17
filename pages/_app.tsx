import { ChakraProvider } from "@chakra-ui/react";
import Layout from "layout/Layout";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { wrapper } from "redux/store";
import { theme } from "theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);
