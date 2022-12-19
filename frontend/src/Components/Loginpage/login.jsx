import React, { useState } from "react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoginActionFn } from "../../Redux/AuthReducer/AuthActions";
import logo from "../../assets/logo.png";

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const user = useSelector((store) => {
    return store.authReducer;
  });
  let { isAuthLoading } = user;
  const handleOnChangeLogin = (e) => {
    let { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  console.log("login redux: ", user);
  const handleLoginOnClick = () => {
    let { email, password } = loginData;
    if (!email || !password) {
      return toast({
        title: "Login Status.",
        description: "All fields are required.",
        status: "error",
        duration: 1500,
        position: "top",
        isClosable: true,
      });
    }
    if (!validateEmail(email)) {
      toast({
        title: "Login Status.",
        description: "Invalid Email.",
        status: "error",
        duration: 1500,
        position: "top",
        isClosable: true,
      });
      return;
    }
    dispatch(userLoginActionFn(loginData))
      .then((res) => {
        if (res.type === "USER_LOGIN_SUCCESS") {
          toast({
            title: "Login Status",
            description: "Login Successfull.",
            status: "success",
            position: "top",
            duration: 2000,
            isClosable: true,
          });
          navigate("/");
          console.log(res);
        } else {
          toast({
            title: "Login Status.",
            description: "Something went wrong please try again.",
            status: "error",
            duration: 2000,
            position: "top",
            isClosable: true,
          });
        }
        console.log("login res:", res);
      })
      .catch((err) => {
        console.log("login Err;", err);
      });
    // console.log("login Data; ", loginData);
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      mt="-80px"
      mb="-80px"
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Box display={"none"} border={"1px"} h={"100px"} minW={"200px"}>
            <Image
              // w={"100%"}
              // h={"100%"}
              objectFit={"cover"}
              src={logo}
              alt="Finest"
            />
          </Box>
          <Heading fontSize={"xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            <Link color={"blue.400"}>Finest</Link>
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={loginData.email}
                onChange={handleOnChangeLogin}
                name="email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={loginData.password}
                onChange={handleOnChangeLogin}
                name="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                onClick={handleLoginOnClick}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                {isAuthLoading ? <Spinner /> : "LOGIN"}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
function validateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}
