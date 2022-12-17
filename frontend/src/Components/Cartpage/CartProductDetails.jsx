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
import { useSelector, useDispatch } from "react-redux";
import {
  deleteCartItemsActionFn,
  updateCartItemsActionFn,
} from "../../Redux/CartReducer/cartActions";

const CartProductDetails = ({ data }) => {
  const dispatch = useDispatch();
  // const cartData = useSelector((store) => {
  //   return store.cartReducer;
  // });

  const handleIncCartQty = (id, qty) => {
    dispatch(updateCartItemsActionFn(id, { qty }))
      .then((res) => {
        console.log("res: ", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const handleDecCartQty = (id, qty) => {
    dispatch(updateCartItemsActionFn(id, { qty }))
      .then((res) => {
        console.log("res: ", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleDeleteCartItem = (id) => {
    dispatch(deleteCartItemsActionFn(id))
      .then((res) => {
        console.log("delete cart res", res);
      })
      .catch((err) => {
        console.log("delete cart res; ", res);
      });
  };

  console.log("cartData ", data);
  return (
    <Box
      boxSizing={"border-box"}
      w={{ base: "100%", md: "63%", xl: "68%" }}
      border={"1px solid"}
      borderColor="brand.lightgray"
      m="auto"
      pt={"14px"}
    >
      <Heading ml="2%" as="h2" fontWeight={600} size="md" mb="7px">
        Cart Items
      </Heading>
      <hr />

      {data.length > 0 &&
        data.map((el) => (
          <Box
            key={el._id}
            display={{ sm: "block", md: "flex", xl: "flex" }}
            justifyContent={"space-between"}
            alignItems={"center"}
            boxSizing="border-box"
            p="10px"
            border={"2px solid blue"}
            // borderBottom={"0px solid grey"}
            boxShadow="0px 1px 1px 0px lightgray"
          >
            <Stack border={"0px solid teal"} width="95%" direction="flex">
              <Image w="100px" src={el.product.image} />
              <Stack ml={{ xl: "4%" }} border={"0px solid red"}>
                <Text as="b">{el.product.title}</Text>
                <Text>{el.product.category}</Text>

                <Text>₹{el.product.cost}</Text>
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
                <Button
                  onClick={() => handleDecCartQty(el._id, el.qty - 1)}
                  size="sm"
                  variant={"ghost"}
                  fontSize={"23px"}
                >
                  -
                </Button>
                <Button
                  rounded={"none"}
                  mx="5px"
                  size="sm"
                  variant={"outline"}
                  colorScheme="gray"
                >
                  {el.qty}
                </Button>
                <Button
                  onClick={() => handleIncCartQty(el._id, el.qty + 1)}
                  size="sm"
                  variant={"ghost"}
                  fontSize={"20px"}
                >
                  +
                </Button>
              </Flex>

              <Button
                onClick={() => handleDeleteCartItem(el._id)}
                ml="20px"
                variant={"outline"}
                colorScheme="green"
                size="sm"
              >
                Remove
              </Button>
            </Box>
          </Box>
        ))}

      {/* CHECKOUT BUTTON  */}
      <Flex boxSizing="border-box" p={2} flexDir={"row-reverse"}>
        <Button
          rounded={"none"}
          left={0}
          bg={"brand.100"}
          color={"brand.white"}
          _hover={{ bg: "brand.200" }}
        >
          CHECKOUT
        </Button>
      </Flex>
    </Box>
  );
};

export { CartProductDetails };
