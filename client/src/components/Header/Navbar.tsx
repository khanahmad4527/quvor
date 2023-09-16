import React from "react";
import Link from "next/link";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Navbar = () => {
  return (
    <Flex
      width={"1322px"}
      height={"91px"}
      margin={"auto"}
      alignItems={"center"}
      justifyContent={"space-around"}
      fontFamily={"Montserrat"}
    >
      <Box>
        <Text
          fontWeight={700}
          fontSize={"24px"}
          lineHeight={"32px"}
          color={"quvor.dark"}
        >
          Quvor
        </Text>
      </Box>

      <Flex
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
            <Text>JOIN US</Text>
            <Center w={"12px"} h={"10px"}>
              <AiOutlineArrowRight />
            </Center>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
