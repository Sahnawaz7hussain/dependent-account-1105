import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import PayingCard from "./PayingCard";
let methods = [
  {
    method: "card",
    content: "Credit / Debit Card",
  },
  {
    method: "upi",
    content: "UPI",
  },
  {
    method: "cod",
    content: "Cash On Delivery",
  },
];

const PaymentMethod = () => {
  const [pmethod, setPmethod] = useState("card");
  const toast = useToast();
  const handlePayment = () => {
    toast({
      title: "Order Status.",
      description: "Your order placed successfully.",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };
  return (
    <Box
      display={{ base: "block", md: "flex", xl: "flex" }}
      m="auto"
      rounded={"5px"}
      border={"1px solid lightgray"}
    >
      {/* ///////////////////////////////////////////////////  */}

      <Box
        w={{ base: "100%", md: "30%", xl: "30%" }}
        display={{ base: "flex", md: "block", xl: "block" }}
        // border={"1px solid black"}
      >
        {methods.map((el) => {
          return (
            <>
              <RadioGroup key={el.method} onChange={setPmethod} value={pmethod}>
                <Flex
                  key={el.method}
                  onClick={() => setPmethod(el.method)}
                  h="70px"
                  bg={pmethod === `${el.method}` ? "gray.200" : ""}
                  alignItems={"center"}
                  borderBottom="1px solid lightgrey"
                  // border="2px solid grey"
                >
                  <Radio ml="15px" value={el.method}>
                    {el.content}
                  </Radio>
                </Flex>
              </RadioGroup>
            </>
          );
        })}
      </Box>
      {/* ///////////////////////////////////////////////////  */}
      <Spacer />
      <Box w={{ base: "100%", md: "65%", xl: "65%" }} border={"0px solid blue"}>
        {pmethod === "card" && <PayingCard />}
        {pmethod === "cod" && (
          <Box boxSizing="border-box" p="20px" mt="15px ">
            <Heading mt="15px" size={"md"} color={"green"}>
              Payable amount ₹500
            </Heading>
            <Button
              onClick={handlePayment}
              _hover={{ bg: "brand.200" }}
              mt={"50px"}
              bg={"brand.100"}
              color={"brand.white"}
              rounded={"none"}
              w="100%"
            >
              PLACE ORDER
            </Button>
          </Box>
        )}

        {pmethod === "upi" && (
          <Box boxSizing="border-box" p="20px" mt="15px ">
            <Heading my="15px" size={"md"} color={"green"}>
              Payable amount ₹500
            </Heading>
            <Input variant={"flushed"} placeholder="user@bankname" />
            <Text color={"gray"} fontSize={"sm"}>
              A payment reqest will be sent to this UPI ID
            </Text>
            <Button
              my={"19px"}
              color={"brand.white"}
              _hover={{ bg: "brand.200" }}
              bg={"brand.100"}
              rounded={"none"}
              w="100%"
              onClick={handlePayment}
            >
              Pay
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PaymentMethod;
