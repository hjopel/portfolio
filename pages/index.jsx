import { Container, Flex, Center, Heading, Box } from "@chakra-ui/react";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

const Loading = () => {
  return (
    <Center
      w="100vw"
      h="100vh"
      zIndex={200}
      bg="gray.800"
      top={0}
      left={0}
      position="absolute"
    >
      <Heading display="block" margin="auto">
        Loading the portfolio...
      </Heading>
    </Center>
  );
};
const Main = loadable(() => pMinDelay(import("../src/components/main"), 3000), {
  fallback: <Loading />,
});
const IndexPage = () => {
  return <Main />;
};

export default IndexPage;
