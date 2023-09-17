import React, { useState } from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { MdArrowForwardIos } from "react-icons/md";
import "./style.css";
import board from "../../../../public/012-blackboards.svg";
import telescope from "../../../../public/013-telescope-1.svg";
import { middleLayout1CardInterface } from "@/utils/types";
import Card from "./Card";
import Link from "next/link";

const MiddleLayout1 = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const cardData: Array<middleLayout1CardInterface> = [
    {
      id: 1,
      img: board,
      title: "Certified Teacher",
      paragraph: "The gradual accumulation of information about",
    },
    {
      id: 2,
      img: telescope,
      title: "Expert instruction",
      paragraph: "The gradual accumulation of information about",
    },
  ];

  return (
    <Box height={{ base: "100%", lg: "671px" }} paddingTop={"14px"}>
      <Box
        width={{ base: "100%", lg: "1050px" }}
        margin={"auto"}
        height={{ base: "100%", lg: "612px" }}
        padding={{ base: "50px 10px", lg: "160px 0px 160px 0px" }}
      >
        <Flex
          width={{ base: "100%", lg: "1045px" }}
          height={{ base: "100%", lg: "292px" }}
          gap="30px"
          alignItems={"center"}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Flex
            flexDirection={"column"}
            width={{ base: "100%", lg: "507px" }}
            height={{ base: "100%", lg: "246px" }}
            gap={{ base: "10px", lg: "35px" }}
          >
            <Box width="94px" height="7px" bg="quvor.red"></Box>
            <Text
              width={{ base: "100%", lg: "464px" }}
              height={{ base: "100%", lg: "50px" }}
              fontSize="40px"
              fontWeight={700}
              lineHeight="50px"
              letterSpacing="0.2px"
              textAlign="left"
            >
              Approdable Packages
            </Text>
            <Text
              width={{ base: "100%", lg: "351px" }}
              height={{ base: "100%", lg: "60px" }}
              fontSize="14px"
              fontWeight={400}
              lineHeight="20px"
              letterSpacing="0.2px"
              textAlign="left"
            >
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </Text>
            <Link href="/about">
              <Flex
                alignItems={"center"}
                height="24px"
                gap="10px"
                color="quvor.green"
                cursor={"pointer"}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Text
                  fontSize="14px"
                  fontWeight={700}
                  lineHeight="24px"
                  letterSpacing="0.2px"
                  textAlign="left"
                >
                  Learn More
                </Text>
                <Center
                  width="9px"
                  height="16px"
                  padding="0px 0.38px 0px 0px"
                  className={isHovered ? "arrow-hovered" : ""}
                >
                  <MdArrowForwardIos />
                </Center>
              </Flex>
            </Link>
          </Flex>

          <Flex
            flexDirection={{ base: "column", md: "row", lg: "row" }}
            width={{ base: "100%", lg: "508px" }}
            height={{ base: "100%", lg: "292px" }}
            gap="30px"
          >
            {cardData.map((card) => {
              return <Card key={card.id} {...card} />;
            })}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default MiddleLayout1;
