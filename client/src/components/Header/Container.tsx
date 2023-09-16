import React from "react";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import hero from "../../../public/hero-cover-1.png";
import Image from "next/image";

const Container = () => {
  return (
    <Flex
      h={"682px"}
      gap={"30px"}
      alignItems={"center"}
      justifyContent={"right"}
    >
      <VStack
        w={"573px"}
        h={"386px"}
        textAlign="left"
        align={"left"}
        spacing={"30px"}
      >
        <Text
          w={"77px"}
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
          w={"542px"}
          h={"160px"}
          color={"quvor.dark"}
          fontSize="58px"
          fontWeight="700"
          lineHeight="80px"
          letterSpacing="0.2px"
        >
          Best Learning Opportunities
        </Text>
        <Text
          width={"338px"}
          h={"60px"}
          color={"quvor.gray"}
          fontSize="20px"
          fontWeight="400"
          lineHeight="30px"
          letterSpacing="0.2px"
        >
          Our goal is to make online education work for everyone
        </Text>
        <HStack w={"305px"} h={"52px"} spacing={"10px"}>
          <Box
            w={"133px"}
            height="52px"
            padding="15px 40px 15px 40px"
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
          <Box
            w={"162px"}
            height="52px"
            padding="15px 40px 15px 40px"
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
        </HStack>
      </VStack>
      <Box w={"704px"} h={"682px"}>
        <Image src={hero} alt={"hero"} />
      </Box>
    </Flex>
  );
};

export default Container;
