import React from "react";
import { Box, Flex, Text, Stack } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import facebookIcon from "../../../public/facebook.svg";
import twitterIcon from "../../../public/twitter.svg";
import instagramIcon from "../../../public/instagram.svg";
import Image from "next/image";
import { Image as ChakraImage } from "@chakra-ui/react";
import { carouselDataInterface } from "@/utils/types";

const MiddleLayout2 = () => {
  return (
    <Box margin={"auto"} height="849px">
      <Flex
        width="1050px"
        margin={"auto"}
        height="827px"
        padding="112px 0px 112px 0px"
        flexDirection={"column"}
        gap={"112px"}
      >
        <Flex
          width="691px"
          height="116px"
          flexDirection={"column"}
          gap={"10px"}
        >
          <Text
            height="24px"
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
            height="32px"
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
            width={"469px"}
            height="40px"
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
            <Image
              src={facebookIcon}
              alt={"facebook"}
              width={24}
              height={24}
              style={{ cursor: "pointer" }}
            />
            <Image
              src={instagramIcon}
              alt={"instagram"}
              width={24}
              height={24}
              style={{ cursor: "pointer" }}
            />
            <Image
              src={twitterIcon}
              alt={"twitter"}
              width={24}
              height={24}
              style={{ cursor: "pointer" }}
            />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

const Carousel = () => {
  const carouselData: Array<carouselDataInterface> = [
    {
      id: 1,
      image: "./user-cover-1.png",
      name: "Alice Johnson",
      profession: "Graphic Designer",
      socialMedia: {
        facebook: "alice.facebook",
        instagram: "alice.instagram",
        twitter: "alice.twitter",
      },
    },
    {
      id: 2,
      image: "./user-cover-2.png",
      name: "Bob Smith",
      profession: "Web Developer",
      socialMedia: {
        facebook: "bob.facebook",
        instagram: "bob.instagram",
        twitter: "bob.twitter",
      },
    },
    {
      id: 3,
      image: "./user-cover-3.png",
      name: "Charlie Brown",
      profession: "Photographer",
      socialMedia: {
        facebook: "charlie.facebook",
        instagram: "charlie.instagram",
        twitter: "charlie.twitter",
      },
    },
    {
      id: 4,
      image: "./user-cover-4.png",
      name: "David Lee",
      profession: "Marketing Manager",
      socialMedia: {
        facebook: "david.facebook",
        instagram: "david.instagram",
        twitter: "david.twitter",
      },
    },
    {
      id: 5,
      image: "./user-cover-2.png",
      name: "Eva Miller",
      profession: "Content Writer",
      socialMedia: {
        facebook: "eva.facebook",
        instagram: "eva.instagram",
        twitter: "eva.twitter",
      },
    },
    {
      id: 6,
      image: "./user-cover-1.png",
      name: "Frank Johnson",
      profession: "UI/UX Designer",
      socialMedia: {
        facebook: "frank.facebook",
        instagram: "frank.instagram",
        twitter: "frank.twitter",
      },
    },
    {
      id: 7,
      image: "./user-cover-3.png",
      name: "Grace Williams",
      profession: "Software Engineer",
      socialMedia: {
        facebook: "grace.facebook",
        instagram: "grace.instagram",
        twitter: "grace.twitter",
      },
    },
  ];

  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {carouselData.map((item) => (
          <CarouselCard key={item.id} {...item} />
        ))}
      </Slider>
    </>
  );
};
