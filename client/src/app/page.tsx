"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "@/components/Header/Header";
import MiddleLayout from "@/components/Middle/MiddleLayout";
import Footer from "@/components/Footer/Footer";

const page = () => {
  return (
    <Box fontFamily={"Montserrat"}>
      <Header />
      <MiddleLayout />
      <Footer />
    </Box>
  );
};

export default page;
