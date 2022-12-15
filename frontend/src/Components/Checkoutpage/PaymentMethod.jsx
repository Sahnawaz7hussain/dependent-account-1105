import React from "react";
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
} from "@chakra-ui/react";
import { useState } from "react";
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
  return (
    <Box
      display={{ base: "block", md: "flex", xl: "flex" }}
      m="auto"
      rounded={"5px"}
      border={"1px solid lightgray"}
    >
      {/* <Box w="30%" border={"1px solid blue"}>
        <RadioGroup onChange={setPmethod} value={pmethod}>
          <SimpleGrid columns={"1"} gap={"20px"}>
            <Flex
              onClick={() => setPmethod("card")}
              h="70px"
              bg={pmethod === "card" ? "gray.100" : ""}
              alignItems={"center"}
              // justifyContent={"center"}
              border="1px"
            >
              <Radio defaultChecked value="card">
                Debit Card
              </Radio>
            </Flex>
            <Flex
              onClick={() => setPmethod("upi")}
              h="70px"
              bg={pmethod === "cod" ? "gray.100" : ""}
              alignItems={"center"}
              // justifyContent={"center"}
              border={"0px solid blue"}
            >
              <Radio h="50px" value="upi">
                UPI
              </Radio>
            </Flex>
            <Flex
              onClick={() => setPmethod("cod")}
              h="70px"
              bg={pmethod === "cod" ? "gray.100" : ""}
              alignItems={"center"}
              boxSizing={"border-box"}
              pl={"15px"}
              // justifyContent={"center"}
              border={"0px solid blue"}
            >
              <Radio h="50px" value="cod">
                Cash on Delivery
              </Radio>
            </Flex>
          </SimpleGrid>
        </RadioGroup>
      </Box> */}
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
