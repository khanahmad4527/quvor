import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    quvor: {
      gray: "#737373",
      green: "#96BB7C",
      brown: "#A01A10",
      dark: "#252B42",
      cream: "#FEBC94",
      pink: "#FDF3F1",
      red: "#E74040",
    },
  },
  breakpoints: {
    xs: "120px",
    sm: "320px",
    md: "768px",
    lg: "1024px",
  },
});
