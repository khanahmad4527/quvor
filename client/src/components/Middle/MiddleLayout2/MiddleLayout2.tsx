import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Carousel from "./Carousel";

const MiddleLayout2 = () => {
  return (
    <Box margin={"auto"} height={{ base: "100%", lg: "849px" }}>
      <Flex
        width={{ base: "100%", lg: "1050px" }}
        height={{ base: "100%", lg: "827px" }}
        margin={"auto"}
        padding={{ base: "50px 10px", lg: "112px 0px" }}
        flexDirection={"column"}
        gap={"112px"}
      >
        <Flex
          width={{ base: "100%", lg: "961px" }}
          height={{ base: "100%", lg: "116px" }}
          flexDirection={"column"}
          gap={"10px"}
        >
          <Text
            height={{ base: "100%", lg: "24px" }}
            fontSize="14px"
            fontWeight={700}
            lineHeight="24px"
            letterSpacing="0.2px"
            textAlign="left"
            color="quvor.green"
          >
            Team
          </Text>
          <Text
            height={{ base: "100%", lg: "32px" }}
            fontSize="24px"
            fontWeight={700}
            lineHeight="32px"
            letterSpacing="0.1px"
            textAlign="left"
            color="quvor.dark"
          >
            Get Quality Education
          </Text>
          <Text
            width={{ base: "100%", lg: "469px" }}
            height={{ base: "100%", lg: "40px" }}
            fontSize="14px"
            fontWeight={400}
            lineHeight="20px"
            letterSpacing="0.2px"
            textAlign="left"
            color="quvor.gray"
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </Text>
        </Flex>

        <Carousel />
      </Flex>
    </Box>
  );
};

export default MiddleLayout2;
