import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Links = [{ name: "Projects", href: "projects" }];

const WithAction = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        zIndex={100}
        // bg={useColorModeValue("gray.100", "gray.900")}
        className="secondary-reveal"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <HStack>
                <Image
                  borderColor="whiteAlpha.800"
                  borderWidth={2}
                  borderStyle="solid"
                  maxWidth="40px"
                  display="inline-block"
                  borderRadius="full"
                  src="/img/hoppel.jpg"
                  alt="Profile image"
                />
                <Text>Jan Hoppel</Text>
              </HStack>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} justifyContent="space-between">
            {/* <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button> */}
            <Button
              variant={"solid"}
              bgColor="#2186B5"
              size={"sm"}
              rounded="full"
              mr={4}
              _hover={{ bg: "#3051E6" }}
              display={{ base: "none", lg: "unset" }}
              // leftIcon={<AddIcon />}
            >
              Contact
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
export default WithAction;
