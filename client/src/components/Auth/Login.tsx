import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  InputGroup,
  InputRightElement,
  useToast,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import * as Yup from "yup";

interface LoginFormValues {
  email: string;
  password: string;
}

const initialForm: LoginFormValues = {
  email: "",
  password: "",
};

/************************ loginSchema *****************************/

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(128)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\[\]!@#\$%\^&\*])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const toast = useToast();
  const [isButton, setIsButton] = useState<boolean>(false);

  /*********************** formik and yup validation to handle login **********************************/

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik<LoginFormValues>({
      initialValues: initialForm,
      validationSchema: loginSchema,
      onSubmit: async (values: LoginFormValues, action) => {
        const { email, password } = values;

        setIsButton(true);

        setTimeout(() => {
          console.log("login");
          setIsButton(false);
          action.resetForm();
        }, 2000);
      },
    });

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} color="quvor.dark">
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} w="max-content">
        <Stack align={"center"}>
          <Heading fontSize={"36px"} fontWeight={400} color="quvor.dark">
            Login to your account
          </Heading>
        </Stack>
        <Box rounded={"lg"} boxShadow={"lg"} p={8} bgColor={"white"}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl
                height="90px"
                isInvalid={touched.email && errors.email ? true : undefined}
              >
                <FormLabel>Email address</FormLabel>
                <Input
                  border="2px solid"
                  borderColor={"green.500"}
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
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                ) : null}
              </FormControl>

              <FormControl
                height="90px"
                isInvalid={
                  touched.password && errors.password ? true : undefined
                }
              >
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    border="2px solid"
                    borderColor={"green.500"}
                    _focus={
                      touched.password && errors.password
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
                      touched.password && errors.password
                        ? {
                            border: "2px solid",
                            borderColor: "red.500",
                          }
                        : {
                            border: "2px solid",
                            borderColor: "green.500",
                          }
                    }
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <InputRightElement h={"full"}>
                    <Button
                      bg="none"
                      _hover={{ bg: "none" }}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.password && touched.password ? (
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                ) : null}
              </FormControl>

              <Stack spacing={5} pt={2}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox colorScheme={"green"}>Remember me</Checkbox>
                  <Link href="/reset/forgotpassword">Forgot password?</Link>
                </Stack>

                <Button
                  type="submit"
                  isLoading={isButton}
                  loadingText="Checking"
                  size="lg"
                  bg="quvor.dark"
                  color="green.500"
                  textTransform={"uppercase"}
                  _hover={{
                    color: "quvor.dark",
                    bg: "green.500",
                  }}
                >
                  Login
                </Button>

                <Stack pt={6}>
                  <Text align={"center"}>
                    No account?{" "}
                    <Link href="/signup" color="green.500">
                      Create one!
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
