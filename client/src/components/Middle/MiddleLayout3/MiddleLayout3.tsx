import React from "react";
import {
  Box,
  Text,
  Stack,
  InputGroup,
  Input,
  InputRightElement,
  FormControl,
  FormErrorMessage,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface emailInterface {
  email: string;
}

const initialForm: emailInterface = {
  email: "",
};

/************************ emailSchema *****************************/

const emailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const MiddleLayout3 = () => {
  const toast = useToast();
  /*********************** formik and yup validation to handle Newsletter **********************************/

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik<emailInterface>({
      initialValues: initialForm,
      validationSchema: emailSchema,
      onSubmit: async (values: emailInterface, action) => {
        const { email } = values;

        toast({
          title: "Subscribe Successful",
          description: "Subscribe to newsletter successfully",
          status: "success",
          duration: 1000,
          isClosable: true,
          position: "top",
        });

        action.resetForm();
      },
    });

  return (
    <Box h={{ base: "100%", lg: "594px" }} bg="quvor.pink">
      <Stack
        direction={"column"}
        width={{ base: "100%", lg: "1050px" }}
        margin={"auto"}
        height={{ base: "100%", lg: "574px" }}
        padding={{ base: "50px 10px", lg: "160px 0px" }}
        spacing={"80px"}
      >
        <Stack
          direction={"column"}
          width={{ base: "100%", lg: "692px" }}
          height={{ base: "100%", lg: "116px" }}
          margin={"auto"}
          spacing={"10px"}
        >
          <Text
            height={{ base: "100%", lg: "24px" }}
            fontSize="14px"
            fontWeight={700}
            lineHeight="24px"
            letterSpacing="0.2px"
            textAlign="center"
            color="quvor.green"
          >
            Newsletter
          </Text>
          <Text
            height={{ base: "100%", lg: "32px" }}
            fontSize="24px"
            fontWeight={700}
            lineHeight="32px"
            letterSpacing="0.1px"
            textAlign="center"
            color="quvor.dark"
          >
            Watch our Courses
          </Text>
          <Text
            width={{ base: "100%", lg: "469px" }}
            height={{ base: "100%", lg: "40px" }}
            margin={"auto"}
            fontSize="14px"
            fontWeight={400}
            lineHeight="20px"
            letterSpacing="0.2px"
            textAlign="center"
            color="quvor.gray"
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </Text>
        </Stack>

        <form onSubmit={handleSubmit}>
          <FormControl
            isInvalid={touched.email && errors.email ? true : undefined}
            textAlign={"left"}
          >
            <Box
              w={{ base: "100%", md: "60%", lg: "688px" }}
              h="58px"
              margin={"auto"}
            >
              <InputGroup
                w="100%"
                h="100%"
                margin={"auto"}
                borderRadius={"5px"}
              >
                <Input
                  type="email"
                  placeholder="Your Email"
                  _placeholder={{
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "28px",
                    letterSpacing: "0.2px",
                  }}
                  background="linear-gradient(0deg, #F9F9F9, #F9F9F9)"
                  color="linear-gradient(0deg, #E6E6E6, #E6E6E6)"
                  border="1px solid #E6E6E6"
                  h="100%"
                  _focus={
                    touched.email && errors.email
                      ? {
                          boxShadow: "none",
                          border: "2px solid",
                          borderColor: "red.500",
                        }
                      : {
                          boxShadow: "none",
                          border: "2px solid",
                          borderColor: "green.500",
                        }
                  }
                  _hover={
                    touched.email && errors.email
                      ? {
                          border: "2px solid",
                          borderColor: "red.500",
                        }
                      : {
                          border: "2px solid",
                          borderColor: "green.500",
                        }
                  }
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <InputRightElement width="117px" h="100%">
                  <Button
                    variant={"unstyled"}
                    width={"100%"}
                    h={"100%"}
                    textAlign={"center"}
                    bg="quvor.green"
                    color="white"
                    borderRadius="0px 5px 5px 0px"
                    border="1px"
                    type="submit"
                  >
                    Subscribe
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.email && touched.email ? (
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              ) : null}
            </Box>
          </FormControl>
        </form>
      </Stack>
    </Box>
  );
};

export default MiddleLayout3;
