import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const CartProductDetails = () => {
  const cartData = useSelector((store) => {
    return store.cartReducer;
  });
  console.log("cartReducer ", cartData);
  return (
    <Box
      position={"relative"}
      w={{ base: "100%", md: "63%", xl: "68%" }}
      boxShadow={"0 0 5px 1px grey"}
      border={"0px solid red"}
      pb="65px"
      m="auto"
    >
      <Heading my="5px" ml="2%" as="h2" size="sm">
        Your Carts
      </Heading>

      <Box
        display={{ sm: "block", md: "flex", xl: "flex" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        boxSizing="border-box"
        p="10px"
        borderBottom={"0px solid grey"}
        boxShadow="0px 1px 1px 0px lightgray"
      >
        <Stack border={"0px solid teal"} width="95%" direction="flex">
          <Image
            w="100px"
            src="https://rukminim1.flixcart.com/image/120/120/l5jxt3k0/coffee/j/2/r/-original-imagg7asw99yzg3h.jpeg"
          />
          <Stack ml={{ xl: "4%" }} border={"0px solid red"}>
            <Text as="b">Nescafe Sunrise Instant Coffee</Text>
            <Text> wgt - 200 g</Text>
            <Flex>
              <Text>₹708</Text>
              <Text color="red" as="del" ml="20px">
                ₹53
              </Text>
            </Flex>
          </Stack>
        </Stack>
        <Box
          mt={["10px"]}
          display={"flex"}
          direction={{ sm: "row" }}
          spacing="60px"
          border={"0px solid red"}
        >
          <Flex alignItems={"center"}>
            <Button size="sm" variant={"ghost"} fontSize={"23px"}>
              -
            </Button>
            <Button
              rounded={"none"}
              mx="5px"
              size="sm"
              variant={"outline"}
              colorScheme="gray"
            >
              4
            </Button>
            <Button size="sm" variant={"ghost"} fontSize={"20px"}>
              +
            </Button>
          </Flex>

          <Button ml="20px" variant={"outline"} colorScheme="green" size="sm">
            Remove
          </Button>
        </Box>
      </Box>

      <Button
        rounded={"none"}
        position={"absolute"}
        bottom={3}
        right={3}
        colorScheme={"orange"}
      >
        PLACE ORDER
      </Button>
    </Box>
  );
};

export { CartProductDetails };
