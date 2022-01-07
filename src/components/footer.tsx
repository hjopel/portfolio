import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { ReactNode } from "react";
const SocialButton = ({
  children,
  label,
  href,
  target,
}: {
  children: ReactNode;
  label: string;
  href: string;
  target?: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target={target}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      // bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      {/* <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>
          © {new Date(Date.now()).getFullYear()} Jan Hoppel. All rights reserved
        </Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"LinkedIn"}
            href={"https://www.linkedin.com/in/jan-hoppel-4b4a35214"}
            target="_blank"
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton
            label={"Github"}
            href={"https://github.com/hjopel"}
            target="_blank"
          >
            <FaGithub />
          </SocialButton>

          <SocialButton
            label={"Mail"}
            href={"mailto:jan.hoppel@protonmail.com"}
            target="_blank"
          >
            <FaEnvelope />
          </SocialButton>
        </Stack>
      </Container> */}
    </Box>
  );
}
