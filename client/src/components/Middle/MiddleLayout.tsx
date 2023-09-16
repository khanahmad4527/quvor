import { Box } from "@chakra-ui/react";
import React from "react";
import MiddleLayout1 from "./MiddleLayout1";
import MiddleLayout2 from "./MiddleLayout2";
import MiddleLayout3 from "./MiddleLayout3";

const MiddleLayout = () => {
  return (
    <Box>
      <MiddleLayout1 />
      <MiddleLayout2 />
      <MiddleLayout3 />
    </Box>
  );
};

export default MiddleLayout;
