import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";

const Header = () => {
  return (
    <Box bg={"quvor.pink"}>
      <Navbar />
      <Container />
    </Box>
  );
};

export default Header;
