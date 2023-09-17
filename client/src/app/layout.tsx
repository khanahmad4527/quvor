"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/utils/theme";
import { AuthContextProvider } from "@/context/AuthContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        />
      </head>

      <body>
        <AuthContextProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
