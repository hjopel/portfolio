import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Box, Container, Flex } from "@chakra-ui/react";
import theme from "../src/theme";
import "../src/theme/styles.css";
import Layout from "../src/layout/layout";
import Background from "../src/components/background";
import Nav from "../src/components/nav";
import Footer from "../src/components/footer";
import InfoSectionAnimation from "../src/components/info-section-animation.jsx";

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Container maxWidth="container.xl" px={4} zIndex={100}>
          <Nav />
        </Container>

        <Box
          w="100vw"
          h="100vh"
          id="background"
          zIndex={-100}
          position="fixed"
          top={0}
          left={0}
        >
          <Component {...pageProps} />
        </Box>

        <Box
          w="100%"
          // maxWidth="container.xl"
          position="fixed"
          bottom={0}
          px={4}
          zIndex={100}
        >
          <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
};

export default App;
