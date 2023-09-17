import { Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { footerCardDataInterface } from "@/utils/types";

const FooterCard = ({ heading, links }: footerCardDataInterface) => {
  return (
    <Stack spacing={"20px"}>
      <Text
        h={"24px"}
        color={"quvor.dark"}
        fontSize="16px"
        fontWeight="700"
        lineHeight="24px"
        letterSpacing="0.1px"
        textAlign="left"
      >
        {heading}
      </Text>

      <Stack
        spacing={"10px"}
        color={"quvor.gray"}
        fontSize="14px"
        fontWeight={700}
        lineHeight="24px"
        letterSpacing="0.2px"
        textAlign="left"
      >
        {links.map((link) => {
          return (
            <Link key={Date.now() + Math.random()} href={link.link}>
              {link.title}
            </Link>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default FooterCard;
