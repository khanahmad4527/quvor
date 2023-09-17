import React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HamburgerIcon } from "@chakra-ui/icons";
import { UserAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const authContext = UserAuth();
  console.log(authContext?.isAuth);
  return (
    <Box bg="quvor.pink" w={{ base: "100%", lg: "1440px" }} margin={"auto"}>
      <Flex
        width={{ base: "100%", md: "100%", lg: "1322px" }}
        height={"91px"}
        margin={"auto"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Box>
          <Link href="/">
            <Text
              fontWeight={700}
              fontSize={"24px"}
              lineHeight={"32px"}
              color={"quvor.dark"}
              cursor={"pointer"}
            >
              Quvor
            </Text>
          </Link>
        </Box>

        {/* Hamburger icon for mobile view */}
        <Box display={{ base: "block", lg: "none" }}>
          <Icon
            boxSize="8"
            as={HamburgerIcon}
            color={"sm.buff"}
            onClick={onOpen}
          />
          <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent style={{ width: "200px" }}>
              <DrawerCloseButton />
              <DrawerBody>
                <Flex flexDirection="column" gap="10px" mt={"50px"}>
                  <Stack
                    spacing={"10px"}
                    color={"quvor.gray"}
                    fontSize={"14px"}
                    fontWeight={"700"}
                    lineHeight={"24px"}
                    letterSpacing={"0.2px"}
                  >
                    <Link href="/home">
                      <Text>Home</Text>
                    </Link>
                    <Link href="/product">
                      <Text>Product</Text>
                    </Link>
                    <Link href="/pricing">
                      <Text>Pricing</Text>
                    </Link>
                    <Link href="/contact">
                      <Text>Contact</Text>
                    </Link>
                  </Stack>

                  {authContext?.isAuth && (
                    <Button
                      colorScheme="red"
                      onClick={() => authContext?.logout()}
                    >
                      Logout
                    </Button>
                  )}

                  {!authContext?.isAuth && (
                    <Flex
                      flexDirection={"column"}
                      alignItems={"left"}
                      height={"52px"}
                      gap={"10px"}
                      fontWeight={700}
                      fontSize={"14px"}
                      letterSpacing={"0.2px"}
                      lineHeight={"22px"}
                    >
                      <Link
                        href="/login"
                        style={{
                          color: "#96BB7C",
                        }}
                      >
                        Login
                      </Link>
                      <Flex
                        alignItems={"center"}
                        height="52px"
                        padding="15px 25px 15px 25px"
                        borderRadius="5px"
                        gap="15px"
                        bg="quvor.green"
                        color={"white"}
                        cursor={"pointer"}
                      >
                        <Link href="/signup">
                          <Text>JOIN US</Text>
                        </Link>

                        <Center w={"12px"} h={"10px"}>
                          <AiOutlineArrowRight />
                        </Center>
                      </Flex>
                    </Flex>
                  )}
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
        {/* Hamburger icon for mobile view */}

        <Flex
          display={{ xs: "none", sm: "none", md: "none", lg: "flex" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          padding="3px 0px 3px 0px"
          width={"815px"}
          height={"58px"}
        >
          <Flex
            width={"275px"}
            height={"24px"}
            color={"quvor.gray"}
            fontSize={"14px"}
            fontWeight={"700"}
            lineHeight={"24px"}
            letterSpacing={"0.2px"}
            textAlign={"center"}
            gap={"21px"}
          >
            <Link href={"/about"}>Home</Link>
            <Link href={"/product"}>Product</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </Flex>

          {authContext?.isAuth && (
            <Button colorScheme="red" onClick={() => authContext?.logout()}>
              Logout
            </Button>
          )}

          {!authContext?.isAuth && (
            <Flex
              alignItems={"center"}
              width={"300px"}
              height={"52px"}
              gap={"45px"}
              fontWeight={700}
              fontSize={"14px"}
              letterSpacing={"0.2px"}
              lineHeight={"22px"}
            >
              <Link
                href="/login"
                style={{
                  textAlign: "right",
                  color: "#96BB7C",
                }}
              >
                Login
              </Link>
              <Flex
                alignItems={"center"}
                height="52px"
                padding="15px 25px 15px 25px"
                borderRadius="5px"
                gap="15px"
                bg="quvor.green"
                color={"white"}
                cursor={"pointer"}
              >
                <Link href="/signup">
                  <Text>JOIN US</Text>
                </Link>

                <Center w={"12px"} h={"10px"}>
                  <AiOutlineArrowRight />
                </Center>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
