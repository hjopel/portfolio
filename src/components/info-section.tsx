import {
  Text,
  VStack,
  Heading,
  Box,
  Image,
  AspectRatio,
  Divider,
  Stack,
  Flex,
  Container,
  useColorModeValue,
  HStack,
  Center,
  Grid,
  GridItem,
  SimpleGrid,
  Button,
  Link,
} from "@chakra-ui/react";
import InfoSectionAnimation from "./animation/info-section-animation";
import ProjectBox from "./projectCard";
import gsap from "gsap";
import { useEffect, useState } from "react";
import projects from "./projects";
const StatsGridWithImage = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".main-heading",
      {
        x: window.outerWidth / 5,
        y: window.outerHeight / 8,
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        // y: 0,
        stagger: 0.3,
        duration: 1,
        // x: 200,
        // delay: 3,
      }
      // "-=2.9"
    )
      .to(".main-heading", {
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        duration: 0.2,
        delay: 2,
        x: 0,
        y: 0,
      })
      .to([".main-heading", ".secondary-reveal"], {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        stagger: 0.3,
        duration: 0.3,
        delay: 0.5,
      });
    // .to(
    //   ".animation",
    //   {
    //     display: "inherit",
    //   }
    //   // "<"
    // );
    return () => {};
  });
  return (
    <Box w="100vw" h="100vh">
      <Box
        bg={"gray.800"}
        position={"relative"}
        bgGradient={"linear(to-b, gray.800 50%  , transparent)"}
        w="100%"
        h="100%"
      >
        <Box className="animation" display={{ base: "none", lg: "flex" }}>
          <InfoSectionAnimation />
        </Box>
        <Container
          maxW={"7xl"}
          zIndex={10}
          position={"relative"}
          pt={16}
          // pt={{ base: 16, md: 36, xl: 60 }}
        >
          <Stack direction={{ base: "column", lg: "row" }}>
            <Stack
              flex={1}
              color={"gray.400"}
              justify={{ lg: "center" }}
              py={{ base: 4, md: 20, xl: 60 }}
            >
              <Box mb={{ base: 8, md: 20 }} id="textBox">
                <Text
                  fontFamily={"heading"}
                  fontWeight={700}
                  textTransform={"uppercase"}
                  mb={3}
                  fontSize={"xl"}
                  color={"gray.500"}
                  className="main-heading"
                >
                  My name is Jan.
                </Text>
                <Heading
                  color={"white"}
                  mb={5}
                  fontSize={{ base: "3xl", md: "7xl" }}
                  className="main-heading"
                >
                  I write code.
                </Heading>
                <Text
                  fontSize={"xl"}
                  color={"gray.400"}
                  className="secondary-reveal"
                >
                  I&#39;m a 19-year-old software developer interested in
                  developing full-stack applications. Additionally, I spend way
                  too much time in the gym as well as experimenting with shaders
                  and 3D-stuff.
                </Text>
                <Stack
                  spacing={6}
                  direction={"row"}
                  pt={6}
                  className="secondary-reveal"
                >
                  <Button
                    rounded={"full"}
                    px={6}
                    bg="#2186B5"
                    color="whiteAlpha.800"
                    _hover={{ bg: "#3051E6" }}
                  >
                    <Link href="contact">Contact me</Link>
                  </Button>
                  <Button rounded={"full"} px={6} color="whiteAlpha.800">
                    <Link href="projects">Check out my projects</Link>
                  </Button>
                </Stack>
              </Box>
            </Stack>
            <Flex flex={1} />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

const WorkInfoSection = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  return (
    <>
      <Stack direction={{ base: "column", lg: "row" }}>
        <Stack
          flex={1}
          color={"gray.400"}
          justify={{ lg: "center" }}
          // pt={{ base: 4, md: 20 }}
        >
          <Heading color={"white"} mb={5} fontSize={{ base: "xl", md: "3xl" }}>
            Projects
          </Heading>
          <Stack direction={{ base: "column", lg: "row" }} flex={1}>
            <Box pr={40} id={activeProject.title}>
              <Heading
                color={"white"}
                mb={5}
                fontSize={{ base: "l", md: "2xl" }}
              >
                {activeProject.title}
              </Heading>
              <Image
                src={activeProject.img}
                alt={activeProject.alt}
                maxW="300px"
                className="image"
              />
              <HStack w="full" id="stack">
                {activeProject.tech.map((t) => {
                  return (
                    <Box key={t}>
                      <Text>{t}</Text>
                    </Box>
                  );
                })}
              </HStack>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
export default StatsGridWithImage;
