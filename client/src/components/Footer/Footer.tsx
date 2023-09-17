import {
  Box,
  SimpleGrid,
  Stack,
  Flex,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import FooterCard from "./FooterCard";
import { footerCardDataInterface } from "@/utils/types";
import contact from "../../../public/contact.svg";
import email from "../../../public/email.svg";
import location from "../../../public/location.svg";
import facebookIcon from "../../../public/facebook.svg";
import instagramIcon from "../../../public/instagram.svg";
import twitterIcon from "../../../public/twitter.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const footerCardData: Array<footerCardDataInterface> = [
    {
      id: 1,
      heading: "Company Info",
      links: [
        {
          title: "About Us",
          link: "/",
        },
        {
          title: "Carrier",
          link: "/",
        },
        {
          title: "We are hiring",
          link: "/",
        },
        {
          title: "Blog",
          link: "/",
        },
      ],
    },
    {
      id: 2,
      heading: "Legal",
      links: [
        {
          title: "About Us",
          link: "/",
        },
        {
          title: "Carrier",
          link: "/",
        },
        {
          title: "We are hiring",
          link: "/",
        },
        {
          title: "Blog",
          link: "/",
        },
      ],
    },
    {
      id: 3,
      heading: "Features",
      links: [
        {
          title: "Business Marketing",
          link: "/",
        },
        {
          title: "User Analytic",
          link: "/",
        },
        {
          title: "Live Chat",
          link: "/",
        },
        {
          title: "Unlimited Support",
          link: "/",
        },
      ],
    },
    {
      id: 4,
      heading: "Resources",
      links: [
        {
          title: "IOS & Android",
          link: "/",
        },
        {
          title: "Watch a Demo",
          link: "/",
        },
        {
          title: "Customers",
          link: "/",
        },
        {
          title: "API",
          link: "/",
        },
      ],
    },
  ];

  return (
    <Box h={{ base: "100%", lg: "346px" }} bg="#FAFAFA">
      <Box
        margin={"auto"}
        h={{ base: "100%", lg: "270px" }}
        p={{ base: "50px 10px", lg: "50px 0px" }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 3, lg: 5 }}
          w={{ base: "100%", lg: "1041px" }}
          h={{ base: "100%", lg: "170px" }}
          margin={"auto"}
          spacing={"30px"}
        >
          {footerCardData.map((item) => {
            return <FooterCard key={item.id} {...item} />;
          })}

          <Stack h={{ base: "100%", lg: "162px" }} spacing={"20px"}>
            <Text
              h={{ base: "100%", lg: "24px" }}
              color={"quvor.dark"}
              fontSize="16px"
              fontWeight="700"
              lineHeight="24px"
              letterSpacing="0.1px"
              textAlign="left"
            >
              Get In Touch
            </Text>

            <Stack
              spacing="10px"
              w={{ base: "100%", lg: "290px" }}
              h={{ base: "100%", lg: "118px" }}
            >
              <Stack direction={"row"} spacing="10px">
                <Image src={contact} alt="contact" width={24} height={24} />
                <Text
                  h={{ base: "100%", lg: "24px" }}
                  color={"quvor.gray"}
                  fontSize="14px"
                  fontWeight="700"
                  lineHeight="24px"
                  letterSpacing="0.2px"
                  textAlign="left"
                >
                  (480) 555-0103
                </Text>
              </Stack>

              <Stack direction={"row"} spacing="10px">
                <Image src={location} alt="location" width={24} height={24} />
                <Text
                  color={"quvor.gray"}
                  fontSize="14px"
                  fontWeight={700}
                  lineHeight="24px"
                  letterSpacing="0.2px"
                  textAlign="left"
                >
                  4517 Washington Ave. Manchester, Kentucky 39495
                </Text>
              </Stack>

              <Stack direction={"row"} spacing="10px">
                <Image src={email} alt="email" width={24} height={24} />
                <Text
                  h={{ base: "100%", lg: "24px" }}
                  color={"quvor.gray"}
                  fontSize="14px"
                  fontWeight="700"
                  lineHeight="24px"
                  letterSpacing="0.2px"
                  textAlign="left"
                >
                  debra.holt@example.com
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Box>

      <Box
        h={{ base: "100%", lg: "74px" }}
        p={{ base: "50px 10px", lg: "25px 0px" }}
      >
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          w={{ base: "100%", lg: "1049px" }}
          margin={"auto"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={{ base: "10px", lg: "213px" }}
        >
          <Text
            w={{ base: "100%", lg: "600px" }}
            h={{ base: "100%", lg: "24px" }}
            color={"quvor.gray"}
            fontSize="14px"
            fontWeight="700"
            lineHeight="24px"
            letterSpacing="0.1px"
            textAlign="left"
          >
            Made With Love By Figmaland All Right Reserved
          </Text>

          <Box w={{ base: "100%", lg: "236px" }}>
            <Stack
              direction={"row"}
              margin={"auto"}
              align={"center"}
              w={{ base: "100%", lg: "112px" }}
              spacing="20px"
            >
              <Link href="/facebook">
                <Image
                  src={facebookIcon}
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </Link>

              <Link href="/instagram">
                <Image
                  src={instagramIcon}
                  alt="instagram"
                  width={24}
                  height={24}
                />
              </Link>

              <Link href="/twitter">
                <Image src={twitterIcon} alt="twitter" width={24} height={24} />
              </Link>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
