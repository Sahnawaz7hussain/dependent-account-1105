import { Box } from "@chakra-ui/react";
import React from "react";
import { BillingDetails } from "../Components/Cartpage/BillingDetails";
import { CartProductDetails } from "../Components/Cartpage/CartProductDetails";

const Cartpage = () => {
  document.title = "Finest | Cart Items";
  return (
    <Box
      display={{ base: "block", md: "flex", xl: "flex" }}
      justifyContent={"space-between"}
      border={"0px solid blue"}
      w={{ base: "95%", md: "95%", xl: "90%" }}
      p="0px"
      m="auto"
      mt="20px"
    >
      <CartProductDetails />
      <BillingDetails />
    </Box>
  );
};

export default Cartpage;
