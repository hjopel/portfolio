import { Container, Flex, Center, Heading, Box } from "@chakra-ui/react";

// import { motion, AnimatePresence,  } from "framer-motion";

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
        Loading projects...
      </Heading>
    </Center>
  );
};

const ProjectPage = () => {
  return <Loading />;
};

export default ProjectPage;
