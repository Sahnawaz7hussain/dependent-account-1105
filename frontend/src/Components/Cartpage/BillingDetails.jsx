import {
  Box,
  Divider,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItemsActionFn } from "../../Redux/CartReducer/cartActions";
import headers from "../../utils/headers";

const BillingDetails = ({ baseW = 100, mdW = 34, xlW = 29, allCarts = [] }) => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCartItemsActionFn(headers));
  // }, []);
  //console.log(cartItems, "hello");
  const cartData = useSelector((store) => store.cartReducer.cartItems);
  let cartItems = cartData || allCarts;
  console.log("cartItems billing", cartItems);
  let arr = [];
  let tcount = 0;
  let tsum = 0;

  cartItems?.length > 0 &&
    cartItems.map((el) =>
      el.product.cost ? arr.push(el.product.cost * el.qty) : ""
    );
  cartItems?.length > 0 && (tcount = cartItems.length);

  cartItems?.length > 0 && (tsum = arr.reduce((curr, acc) => curr + acc, 0));
  tsum = tsum.toFixed(2);

  console.log("arr", arr);
  console.log("tc", tsum);
  return (
    <Box
      minW={{ base: `${baseW}%`, md: `${mdW}%`, xl: `${xlW}%` }}
      h="fit-content"
      boxSizing="borderBox"
      p={[5, 10, 15]}
      border={"1px solid lightgray"}
      m="auto"
      mt="0"
    >
      <Heading fontWeight={600} my="7px" ml="1%" as="h2" size="md">
        Price Details
      </Heading>
      <hr />
      <Stack>
        <Flex mt={2}>
          <Text fontWeight={400} fontSize={16}>
            Estimated
          </Text>
          <Spacer />
          <Text fontSize={16} fontWeight={400}>
            21/12/2022
          </Text>
        </Flex>
        <Flex>
          <Text fontWeight={400} fontSize={16}>
            Total Products
          </Text>
          <Spacer />
          <Text fontSize={16} fontWeight={400}>
            {tcount}
          </Text>
        </Flex>
        <Flex>
          <Text fontWeight={400} fontSize={16}>
            MRP
          </Text>
          <Spacer />
          <Text fontSize={16} fontWeight={400}>
            {`₹ ${tsum}`}
          </Text>
        </Flex>

        <Flex>
          <Text fontWeight={400} fontSize={16}>
            Delivery Fee
          </Text>
          <Spacer />
          <Text color={"green"} fontSize={16} fontWeight={500}>
            Free
          </Text>
        </Flex>
        <Divider />
        <Flex>
          <Heading fontWeight={500} size="md">
            Total Amount
          </Heading>
          <Spacer />
          <Heading fontWeight={500} size="md">
            {`₹ ${tsum}`}
          </Heading>{" "}
        </Flex>
      </Stack>
    </Box>
  );
};

export { BillingDetails };
