import { Box, Heading, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BillingDetails } from "../Components/Cartpage/BillingDetails";
import { CartProductDetails } from "../Components/Cartpage/CartProductDetails";
import { getCartItemsActionFn } from "../Redux/CartReducer/cartActions";
import userHeaders from "../utils/headers";
import lodingimg from "../assets/loading.gif";

const Cartpage = () => {
  document.title = "Finest | Cart Items";
  const dispatch = useDispatch();

  const getCartItems = () => {
    return dispatch(getCartItemsActionFn(userHeaders));
  };

  useEffect(() => {
    getCartItems();
  }, []);
  const cartData = useSelector((store) => {
    return store.cartReducer;
  });

  console.log("cartPage:", cartData);
  return (
    <>
      {!cartData.isCartLoading ? (
        <Box
          display={{ base: "block", md: "flex", xl: "flex" }}
          justifyContent={"space-between"}
          border={"0px solid blue"}
          w={{ base: "95%", md: "95%", xl: "90%" }}
          p="0px"
          m="auto"
          mt="100px"
        >
          <CartProductDetails data={cartData.cartItems} />
          <BillingDetails />
          {/* {cartData.isCartLoading && <Heading>Loding.....</Heading>} */}
        </Box>
      ) : (
        <Box ml="45%" mt="55%">
          <Image src={lodingimg} alt="Cart Loading..." />
        </Box>
      )}
    </>
  );
};

export default Cartpage;
