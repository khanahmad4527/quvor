import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { middleLayout1CardInterface } from "@/utils/types";

const Card = ({ img, title, paragraph }: middleLayout1CardInterface) => {
  return (
    <Flex
      width="249px"
      height="292px"
      padding="35px 40px 35px 40px"
      gap="20px"
      boxShadow="0px 13px 19px 0px #00000012"
      flexDirection={"column"}
    >
      <Box
        width="70px"
        height="76px"
        padding="22px 19px 22px 19px"
        borderRadius="10px"
        gap="10px"
        bg="quvor.green"
      >
        <Image src={img} alt={title} />
      </Box>
      <Text
        fontSize="16px"
        fontWeight={700}
        lineHeight="24px"
        letterSpacing="0.1px"
        textAlign="left"
      >
        {title}
      </Text>
      <Box width="50px" height="2px" bg="quvor.red"></Box>
      <Text
        fontSize="14px"
        fontWeight={400}
        lineHeight="20px"
        letterSpacing="0.2px"
        textAlign="left"
      >
        {paragraph}
      </Text>
    </Flex>
  );
};

export default Card;
