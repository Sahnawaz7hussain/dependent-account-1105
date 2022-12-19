import { Box, Heading, Image, Button, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BillingDetails } from "../Components/Cartpage/BillingDetails";
import { CartProductDetails } from "../Components/Cartpage/CartProductDetails";
import Loading from "../Components/Loading";
import emptyCart from "../assets/emptyCart.png";
import { Link } from "react-router-dom";
import {
  getCartItemsActionFn,
  deleteCartItemsActionFn,
  updateCartItemsActionFn,
} from "../Redux/CartReducer/cartActions";

// MAIN FUNCTION.
const Cartpage = () => {
  document.title = "Finest | Cart Items";
  const dispatch = useDispatch();
  const toast = useToast();

  const getCartItems = () => {
    return dispatch(getCartItemsActionFn());
  };

  useEffect(() => {
    getCartItems();
  }, []);
  const cartData = useSelector((store) => {
    return store.cartReducer;
  });
  let { cartItems, isCartLoading } = cartData;

  // HANDLE INC CART COUNT
  const handleIncCartQty = (id, qty) => {
    dispatch(updateCartItemsActionFn(id, { qty }))
      .then((res) => {
        getCartItems();
        console.log("res: ", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  // HANDLE DEC CART COUNT
  const handleDecCartQty = (id, qty) => {
    dispatch(updateCartItemsActionFn(id, { qty }))
      .then((res) => {
        getCartItems();
        console.log("res: ", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  //  HANDLE DELETE CART ITEM.
  const handleDeleteCartItem = (id) => {
    dispatch(deleteCartItemsActionFn(id))
      .then((res) => {
        if (res.type === "DELETE_CART_ITEMS_SUCCESS") {
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            position: "top",
            duration: 900,
            isClosable: true,
          });
          getCartItems();
        } else {
          toast({
            title: "Cart Items.",
            description: "Something went wrong can't delete.",
            status: "error",
            position: "top",
            duration: 900,
            isClosable: true,
          });
        }
        // console.log("delete cart res", res);
      })
      .catch((err) => {
        toast({
          title: "Cart Items.",
          description: "Something went wrong can't delete.",
          status: "error",
          position: "top",
          duration: 900,
          isClosable: true,
        });
        // console.log("delete cart res; ", err);
      });
  };

  console.log("cartPage/Carts:", cartItems);
  return (
    <>
      {isCartLoading && cartItems.length === 0 ? (
        <Loading mt={"200"} />
      ) : !cartItems.length > 0 ? (
        <Box mt={"130px"}>
          <Heading fontWeight={400} size={"xl"} my={10} textAlign={"center"}>
            Your Cart is empty.
          </Heading>
          <Image
            w={"200px"}
            h={"fit-content"}
            m="auto"
            src={emptyCart}
            alt="Your Cart is Empty"
          />
          <Link to="/">
            <Button
              display={"block"}
              w={"fit-content"}
              m="auto"
              my={10}
              _hover={{ bg: "brand.100" }}
              bg={"brand.100"}
              color={"brand.white"}
            >
              Start Shoping
            </Button>
          </Link>
        </Box>
      ) : (
        <Box
          display={{ base: "block", md: "flex", xl: "flex" }}
          justifyContent={"space-between"}
          border={"0px solid blue"}
          w={{ base: "95%", md: "95%", xl: "88%" }}
          p="0px"
          m="auto"
          mt="20px"
        >
          <CartProductDetails
            data={cartData.cartItems}
            handleDeleteCartItem={handleDeleteCartItem}
            handleIncCartQty={handleIncCartQty}
            handleDecCartQty={handleDecCartQty}
          />
          {cartItems.length > 0 && (
            <BillingDetails allCarts={cartData?.cartItems} />
          )}
        </Box>
      )}
    </>
  );
};

export default Cartpage;
