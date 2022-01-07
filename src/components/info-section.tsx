import {
  Text,
  VStack,
  Heading,
  Box,
  Image,
  AspectRatio,
  Divider,
  Stack,
  SimpleGrid,
  Flex,
  Container,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import InfoSectionAnimation from "./info-section-animation";
import ProjectBox from "./projectCard";
const StatsGridWithImage = () => {
  return (
    <Box w="100vw" h="100vh" id="help">
      <Box
        bg={"gray.800"}
        position={"relative"}
        bgGradient={"linear(to-b, gray.800 50%  , transparent)"}
        id="orsch"
        w="100%"
        h="100%"
      >
        <Flex
          flex={1}
          zIndex={0}
          display="flex"
          // backgroundImage="planet3.jpg"
          backgroundSize={"cover"}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          position={"absolute"}
          width={"70%"}
          insetY={0}
          right={0}
        >
          {/* <Box w="full" h="full"> */}
          {/* </Box> */}
          <Flex
            bgGradient={"linear(to-r, gray.800 , transparent)"}
            w={"full"}
            h={"full"}
          >
            <InfoSectionAnimation />
          </Flex>
        </Flex>
        <Container maxW={"7xl"} zIndex={10} position={"relative"} pt={16}>
          <Stack direction={{ base: "column", lg: "row" }}>
            <Stack
              flex={1}
              color={"gray.400"}
              justify={{ lg: "center" }}
              pt={{ base: 4, md: 20, xl: 60 }}
            >
              <Box mb={{ base: 8, md: 20 }}>
                <Text
                  fontFamily={"heading"}
                  fontWeight={700}
                  textTransform={"uppercase"}
                  mb={3}
                  fontSize={"xl"}
                  color={"gray.500"}
                >
                  My name is Jan.
                </Text>
                <Heading
                  color={"white"}
                  mb={5}
                  fontSize={{ base: "3xl", md: "7xl" }}
                >
                  I write code.
                </Heading>
                <Text fontSize={"xl"} color={"gray.400"}>
                  I&#39;m a 19-year-old software developer interested in
                  developing full-stack applications. Additionally, I spend way
                  too much time in the gym as well as experimenting with shaders
                  and 3D-stuff.
                </Text>
              </Box>
            </Stack>
            <Flex flex={1} />
          </Stack>
          {/* <WorkInfoSection /> */}
        </Container>
      </Box>
    </Box>
  );
};

const WorkInfoSection = () => {
  return (
    <>
      <VStack>
        <Box position={"relative"}>
          <Container maxW={"7xl"} zIndex={10} position={"relative"}>
            <Stack direction={{ base: "column", lg: "row" }}>
              <Stack
                // flex={2}
                color={useColorModeValue("white", "gray.800")}
                justify={{ lg: "center" }}
                // py={{ base: 4, md: 20, xl: 60 }}
              >
                <Box mb={{ base: 8, md: 20 }}>
                  <Text
                    fontFamily={"heading"}
                    fontWeight={700}
                    textTransform={"uppercase"}
                    mb={3}
                    fontSize={"md"}
                    color={"gray.500"}
                  >
                    Latest projects
                  </Text>
                  <Text
                    fontSize={"xl"}
                    color={useColorModeValue("gray.800", "white")}
                  >
                    Simply put: I like to code. Consequat culpa consequat sint
                    tempor esse labore consequat adipisicing officia nostrud ea
                    ipsum. Nulla sit quis et ipsum. Magna ad elit dolor id.
                    Dolor tempor irure sunt adipisicing proident. Minim non
                    dolor nulla ullamco pariatur. Eiusmod enim labore eu et
                    reprehenderit adipisicing enim voluptate anim ea laboris
                    culpa velit. Consectetur aliqua aute nulla do dolor enim
                    excepteur aliqua amet nisi ipsum anim.
                  </Text>
                </Box>
              </Stack>
              <Flex flex={1} />
            </Stack>
          </Container>
        </Box>
      </VStack>
    </>
  );
};
const CurrentProjects = () => {
  return (
    <>
      <VStack>
        <Box position={"relative"}>
          <Container maxW={"7xl"} zIndex={10} position={"relative"}>
            <Stack direction={{ base: "column", lg: "row" }}>
              {/* <ProjectBox />
              <ProjectBox />
              <ProjectBox /> */}
              <Flex flex={1} />
            </Stack>
          </Container>
        </Box>
      </VStack>
    </>
  );
};
export default StatsGridWithImage;
