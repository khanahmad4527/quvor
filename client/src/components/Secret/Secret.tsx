import { UserAuth } from "@/context/AuthContext";
import AuthProtectedRoutes from "@/hoc/AuthProtectedRoutes";
import { Button, Stack, Text, useToast } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Secret = () => {
  const authContext = UserAuth();
  const toast = useToast();

  const handleValidateToken = async () => {
    const response = await authContext?.validateToken();

    if (response?.status === 200) {
      toast({
        title: "Successful",
        description: "Successfully validated token",
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "Invalid token",
        description: "Token is invalid",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <AuthProtectedRoutes>
      <Stack mt={"20px"} spacing="20px" align={"center"}>
        <Stack direction={"row"} spacing="20px" align={"center"}>
          <Text textAlign={"center"} fontSize={"20px"}>
            User is login
          </Text>
          <Button colorScheme="red" onClick={() => authContext?.logout()}>
            Logout
          </Button>
        </Stack>

        <Button colorScheme="green" onClick={handleValidateToken}>
          Validate Token
        </Button>

        <Link href="/">Home</Link>
      </Stack>
    </AuthProtectedRoutes>
  );
};

export default Secret;
