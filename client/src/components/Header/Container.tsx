import React from "react";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import hero from "../../../public/hero-cover-1.png";
import Image from "next/image";
import Link from "next/link";

const Container = () => {
  return (
    <Flex
      h={{ base: "100%", lg: "682px" }}
      gap={"30px"}
      alignItems={"center"}
      justifyContent={{ base: "center", lg: "right" }}
      flexDirection={{ base: "column", lg: "row" }}
      p={{ base: "10px", lg: "0px" }}
    >
      <VStack
        w={{ base: "100%", lg: "573px" }}
        h={{ base: "100%", lg: "386px" }}
        textAlign="left"
        align={"left"}
        spacing={"30px"}
      >
        <Text
          h={"24px"}
          color={"quvor.green"}
          fontSize="16px"
          fontWeight="700"
          lineHeight="24px"
          letterSpacing="0.1px"
          textAlign="left"
        >
          Welcome
        </Text>
        <Text
          w={{ base: "100%", lg: "542px" }}
          h={{ base: "100%", lg: "160px" }}
          color={"quvor.dark"}
          fontSize={{ base: "20px", lg: "58px" }}
          fontWeight="700"
          lineHeight={{ base: "30px", lg: "80px" }}
          letterSpacing="0.2px"
        >
          Best Learning Opportunities
        </Text>
        <Text
          width={{ base: "100%", lg: "338px" }}
          h={{ base: "100%", lg: "60px" }}
          color={"quvor.gray"}
          fontSize="20px"
          fontWeight="400"
          lineHeight="30px"
          letterSpacing="0.2px"
        >
          Our goal is to make online education work for everyone
        </Text>
        <HStack w={{ base: "100%" }} h={"52px"} spacing={"10px"}>
          <Link href="/signup">
            <Box
              padding={{ base: "15px 20px", lg: "15px 40px 15px 40px" }}
              borderRadius="5px"
              bg="quvor.green"
              color={"white"}
              cursor={"pointer"}
              fontSize="14px"
              fontWeight={700}
              lineHeight="22px"
              letterSpacing="0.2px"
              textAlign="center"
            >
              Join Us
            </Box>
          </Link>
          <Link href="/about">
            <Box
              padding={{ base: "15px 20px", lg: "15px 40px 15px 40px" }}
              borderRadius="5px"
              color={"quvor.green"}
              cursor={"pointer"}
              fontSize="14px"
              fontWeight={700}
              lineHeight="22px"
              letterSpacing="0.2px"
              textAlign="center"
              border={"1px solid"}
              borderColor={"quvor.green"}
            >
              Learn More
            </Box>
          </Link>
        </HStack>
      </VStack>
      <Box w={{ base: "100%", lg: "704px" }} h={{ base: "100%", lg: "682px" }}>
        <Image src={hero} alt={"hero"} />
      </Box>
    </Flex>
  );
};

export default Container;
