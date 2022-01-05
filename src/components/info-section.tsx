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
const InfoSection = () => {
  return (
    <>
      <Box h="100%" w="100%" position="relative">
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading>Jan Hoppel</Heading>
            <Text>Software developer & creative coder</Text>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/img/hoppel.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>
        <AboutMeSection />
        <WorkInfoSection />
        <CurrentProjects />
      </Box>
    </>
  );
};
const AboutMeSection = () => {
  return (
    <>
      <Box
        // bg={useColorModeValue("white", "gray.800")}
        position={"relative"}
        pt={0}
      >
        <Container maxW={"7xl"} zIndex={10} position={"relative"}>
          <Box>
            <VStack>
              <Stack
                color={useColorModeValue("white", "gray.800")}
                justify={{ lg: "center" }}
                pb={{ base: 4 }}
              >
                <Box>
                  <Text
                    fontFamily={"heading"}
                    fontWeight={700}
                    textTransform={"uppercase"}
                    mb={3}
                    fontSize={"md"}
                    color={"gray.500"}
                  >
                    Who am I?
                  </Text>
                  <Text
                    fontSize={"xl"}
                    color={useColorModeValue("gray.800", "white")}
                  >
                    I'm a 19-year-old software developer usually developing
                    full-stack applications, however I do enjoy creative coding
                    as well!
                  </Text>
                  <Text
                    fontSize={"xl"}
                    color={useColorModeValue("gray.800", "white")}
                    pt={6}
                  >
                    While usually working on full-stack applications with
                    Angular, Node.js + Express and MongoDB, I tend to write my
                    creative coding projects in React.
                  </Text>
                </Box>
              </Stack>
              {/* <Flex flex={1} /> */}
            </VStack>
          </Box>
        </Container>
      </Box>
    </>
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
                    Bio
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
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
              <Flex flex={1} />
            </Stack>
          </Container>
        </Box>
      </VStack>
    </>
  );
};
export default InfoSection;
