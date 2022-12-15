import React from "react";
import {
  border,
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
  VStack,
} from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";
import randomcards from "../../assests/randomcards.png";
import { useState } from "react";
const PayingCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [mmyy, setMmyy] = useState("");
  const [holderName, setHolderName] = useState("");
  const [cvv, setCvv] = useState("");
  const handleOnChangeCvv = (e) => {
    setCvv(e.target.value);
  };
  console.log("name: ", cvv);
  // console.log("card number: ", cardNumber);
  return (
    <Box>
      <Box
        w={{ base: "350px", md: "370px", xl: "370px" }}
        padding="15px"
        h="230px"
        m="auto"
        // boxShadow={"0 0 5px 1px grey"}
        rounded={5}
      >
        <Box display={"flex"} flexDir={"row-reverse"} h="40px">
          <Image src={randomcards} alt="" />
        </Box>

        <Text mb="5px" fontSize={"14px"}>
          Card Number
        </Text>
        <HStack>
          <PinInput
            value={cardNumber}
            onChange={(value) => setCardNumber(value)}
            size="sm"
          >
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>

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
              onChange={handleOnChangeCvv}
              maxLength={3}
              type={"text"}
              w="50%"
              h="20px"
              rounded={"none"}
              variant={"flushed"}
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
            size={"sm"}
            rounded={"full"}
            variant={"outline"}
            colorScheme={"pink"}
            fontSize={"14px"}
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
