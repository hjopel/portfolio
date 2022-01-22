import { Container, Flex, Center, Heading, Box } from "@chakra-ui/react";
import InfoSection from "./info-section";
import Nav from "./nav";
import Footer from "./footer";
const main = () => {
  return (
    <>
      <Container maxWidth="container.xl" px={4} zIndex={100}>
        <Nav />
      </Container>

      <Box w="100vw" h="100vh" zIndex={-100} position="fixed" top={0} left={0}>
        <InfoSection />
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
    </>
  );
};
export default main;
