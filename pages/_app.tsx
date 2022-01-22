import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Box, Container, Flex } from "@chakra-ui/react";
import theme from "../src/theme";
import "../src/theme/styles.css";
import Layout from "../src/layout/layout";
import Background from "../src/components/background";
import Nav from "../src/components/nav";
import Footer from "../src/components/footer";

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
