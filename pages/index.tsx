import { Container, Flex, VStack, Box } from "@chakra-ui/react";
import InfoSection from "../src/components/info-section";
import Nav from "../src/components/nav";
import InfoSectionAnimation from "../src/components/info-section-animation";
const IndexPage = () => (
  <Box w="100%" h="100%">
    <Box w="100%" h="100%" id="animationBox" pt={15}>
      {/* <InfoSectionAnimation /> */}
    </Box>
    <InfoSection />
  </Box>
);

export default IndexPage;
