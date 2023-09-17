import React from "react";
import { Box, Text, Stack } from "@chakra-ui/react";
import facebookIcon from "../../../../public/facebook.svg";
import twitterIcon from "../../../../public/twitter.svg";
import instagramIcon from "../../../../public/instagram.svg";
import Image from "next/image";
import { Image as ChakraImage } from "@chakra-ui/react";
import { carouselDataInterface } from "@/utils/types";
import Link from "next/link";

const CarouselCard = ({
  image,
  name,
  profession,
  socialMedia,
}: carouselDataInterface) => {
  return (
    <Box p={"10px"}>
      <Box
        w={"238px"}
        margin={"auto"}
        h={"375px"}
        boxShadow="0px 13px 19px 0px #00000012"
        bg="white"
        borderRadius={"20px"}
      >
        <ChakraImage
          width={"100%"}
          alt={name}
          src={image}
          borderTopRadius={"20px"}
          objectFit={"contain"}
        />

        <Stack
          direction={"column"}
          spacing={"10px"}
          p={"30px"}
          textAlign={"center"}
        >
          <Text
            fontSize="16px"
            fontWeight={700}
            lineHeight="24px"
            letterSpacing="0.1px"
            color="quvor.dark"
          >
            {name}
          </Text>

          <Text
            fontSize="12px"
            fontWeight={400}
            lineHeight="16px"
            letterSpacing="0.2px"
            color="quvor.gray"
          >
            {profession}
          </Text>

          <Stack
            w={"112px"}
            margin={"auto"}
            direction={"row"}
            justify={"center"}
            spacing={"20px"}
          >
            <Link href={socialMedia.facebook}>
              <Image
                src={facebookIcon}
                alt={"facebook"}
                width={24}
                height={24}
                style={{ cursor: "pointer" }}
              />
            </Link>

            <Link href={socialMedia.instagram}>
              <Image
                src={instagramIcon}
                alt={"instagram"}
                width={24}
                height={24}
                style={{ cursor: "pointer" }}
              />
            </Link>

            <Link href={socialMedia.twitter}>
              <Image
                src={twitterIcon}
                alt={"twitter"}
                width={24}
                height={24}
                style={{ cursor: "pointer" }}
              />
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default CarouselCard;
