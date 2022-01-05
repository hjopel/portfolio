import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Box, Container } from "@chakra-ui/react";
import theme from "../src/theme";
import "../src/theme/styles.css";
import Layout from "../src/layout/layout";
import Background from "../src/components/background";
import Nav from "../src/components/nav";
import Footer from "../src/components/footer";
import InfoSectionAnimation from "../src/components/info-section-animation";

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Box w="100%" h="100%" id="background" zIndex={-100}>
          <InfoSectionAnimation />
        </Box>
        <Box>
          <Nav />
        </Box>
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </ChakraProvider>
    </>
  );
};

export default App;
