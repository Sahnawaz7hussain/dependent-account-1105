import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  PinInput,
  PinInputField,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";
import randomcards from "../../assets/randomcards.png";
import { useState } from "react";
const PayingCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [mmyy, setMmyy] = useState("");
  const [cvv, setCvv] = useState("");
  const [holderName, setHolderName] = useState("");
  const toast = useToast();

  const handleOnChangeCvv = (e) => {
    setCvv(e.target.value);
  };
  console.log("name: ", cvv);
  // console.log("card number: ", cardNumber);
  const handleCardPayment = () => {
    if (!cardNumber || !mmyy || !cvv || !holderName) {
      return toast({
        title: "Invalid inputs.",
        description: "All fields are required.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
    if (cardNumber.length < 16) {
      return toast({
        title: "Order Status.",
        description: "Incorrect card number.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
    if (mmyy.length < 4) {
      return toast({
        title: "Order Status.",
        description: "Invalid MM/YY.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
    if (cvv.length < 3) {
      return toast({
        title: "Order Status.",
        description: "Invalid CVV.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "Order Status.",
        description: "Your order placed successfully.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };
  return (
    <Box>
      <Box
        w={{ base: "350px", md: "370px", xl: "370px" }}
        padding="15px"
        h="230px"
        m="auto"
        rounded={5}
      >
        <Box display={"flex"} flexDir={"row-reverse"} h="40px">
          <Image src={randomcards} alt="" />
        </Box>

        <Text mb="5px" fontSize={"14px"}>
          Card Number
        </Text>

        <Input
          _focus={{ border: "none", rounded: "none" }}
          border={"1px solid lightgray"}
          rounded={"none"}
          type="text"
          maxLength={16}
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />

        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Text mt="10px" mb="5px" fontSize={"12px"}>
              Valid Thru
            </Text>
            <HStack mb="15px">
              <PinInput
                value={mmyy}
                onChange={(mmyy) => setMmyy(mmyy)}
                m="88px"
                variant="flushed"
                size="xs"
              >
                <PinInputField />
                <PinInputField />
                <Text>/</Text>
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Box>
          <Box>
            <Text>cvv</Text>
            <Input
              value={cvv}
              _focus={{ border: "none", rounded: "none" }}
              onChange={handleOnChangeCvv}
              maxLength={3}
              type={"text"}
              w="50%"
              h="20px"
              pl="0px"
              rounded={"none"}
            />
          </Box>
        </Flex>
        <Flex alignItems={"center"}>
          <Input
            value={holderName}
            onChange={(e) => setHolderName(e.target.value)}
            w="70%"
            m="auto"
            h="30px"
            rounded={"none"}
            _focus={{ variant: "flushed", border: "0px solid green" }}
            // borderBottom={"1px solid grey"}
            placeholder="Card Holer Name"
          />
          <Spacer />
          <Button
            onClick={handleCardPayment}
            size={"sm"}
            rounded={"full"}
            variant={"outline"}
            bg={"brand.100"}
            color={"brand.white"}
            fontSize={"14px"}
            _hover={{
              bg: "brand.white",
              border: "1px solid tomato",
              color: "brand.100",
            }}
            rightIcon={<BsArrowRightShort fontSize={"20px"} />}
          >
            Pay
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default PayingCard;
