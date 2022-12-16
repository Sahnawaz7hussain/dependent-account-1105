import React from "react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { userSignupActionFn } from "../../Redux/AuthReducer/AuthActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const signupData = {
  email: "",
  first_name: "",
  last_name: "",
  password: "",
};

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [signUpData, setSignupData] = useState(signupData);
  const dispatch = useDispatch();

  const hadleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signUpData,
      [name]: value,
    });
  };

  const handleSignupClick = () => {
    const { first_name, email, password } = signUpData;
    if (!first_name || !email || !password) {
      alert("All field required: ");
      return;
    }
    let isCorrectEmail = validateEmail(email);
    if (!isCorrectEmail) {
      alert("inValid Email:");
      return;
    }
    console.log("signup Data2: ", signUpData);
    dispatch(userSignupActionFn(signUpData))
      .then((res) => {
        console.log("Signupres: ", res);
      })
      .catch((err) => {
        console.log("signup Error: ", err);
      });
  };
  const x = process.env.REACT_APP_BASE_URL;
  console.log("enfurl: ", x);
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Finest✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    name="first_name"
                    onChange={hadleSignupChange}
                    value={signUpData.first_name}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    name="last_name"
                    onChange={hadleSignupChange}
                    value={signUpData.last_name}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={hadleSignupChange}
                value={signUpData.email}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={hadleSignupChange}
                  value={signUpData.password}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSignupClick}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link to="/login" color={"blue.400"}>
                  Login
                </Link>
              </Text>
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
