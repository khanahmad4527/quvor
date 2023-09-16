import React, { useState } from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { MdArrowForwardIos } from "react-icons/md";
import "./style.css";
import board from "../../../public/012-blackboards.svg";
import telescope from "../../../public/013-telescope-1.svg";
import Image from "next/image";
import { middleLayout1CardInterface } from "@/utils/types";

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
    <Box height="671px" paddingTop={"14px"}>
      <Box
        width="1050px"
        margin={"auto"}
        height="612px"
        padding="160px 0px 160px 0px"
      >
        <Flex width="1045px" height="292px" gap="30px" alignItems={"center"}>
          <Flex
            flexDirection={"column"}
            width="507px"
            height="246px"
            gap="35px"
          >
            <Box width="94px" height="7px" bg="quvor.red"></Box>
            <Text
              width="464px"
              height="50px"
              fontSize="40px"
              fontWeight={700}
              lineHeight="50px"
              letterSpacing="0.2px"
              textAlign="left"
            >
              Approdable Packages
            </Text>
            <Text
              width="351px"
              height="60px"
              fontSize="14px"
              fontWeight={400}
              lineHeight="20px"
              letterSpacing="0.2px"
              textAlign="left"
            >
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </Text>
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
          </Flex>

          <Flex width="508px" height="292px" gap="30px">
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
