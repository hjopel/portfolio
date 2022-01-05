import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import { AppProps } from "next/dist/shared/lib/router/router";

const Layout = ({ children, router }: AppProps) => {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hjopel's portfolio" />
        <meta name="author" content="Jan Hoppel" />
        <meta name="author" content="hjopel" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:site" content="@craftzdog" /> */}
        {/* <meta name="twitter:creator" content="@craftzdog" /> */}
        {/* <meta name="twitter:image" content="/card.png" /> */}
        <meta property="og:site_name" content="Jan Hoppel's Portfolio" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="/card.png" /> */}
        <title>Jan Hoppel | Portfolio</title>
      </Head>
      <Container maxW="container.lg" pt={14} bg="transparent">
        {children}
      </Container>
    </Box>
  );
};
export default Layout;
