import { Box, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { BillingDetails } from "../Components/Cartpage/BillingDetails";
import BuyerAddress from "../Components/Checkoutpage/BuyerAddress";
import PaymentMethod from "../Components/Checkoutpage/PaymentMethod";

const Checkoutpage = () => {
  const navigate = useNavigate();
  const [isAddressPresent] = useState(true);
  if (!isAddressPresent) {
    return <Navigate to="/address" />;
  }
  return (
    <>
      <Box w={{ base: "99%", md: "90%", xl: "65%" }} p="20px" m="auto">
        <Heading mb="10px" as="h1" fontSize={"25px"}>
          Checkout
        </Heading>
        <hr />
        <Stack direction={{ base: "column", md: "row", xl: "row" }}>
          <BuyerAddress />
          <BillingDetails baseW={50} mdW={50} xlW={50} />
        </Stack>
      </Box>
      <Box
        // border={"2px solid teal"}
        w={{ base: "100%", md: "90%", xl: "65%" }}
        p={{ base: "5px", md: "20px", xl: "20px" }}
        m="auto"
      >
        <Heading mb="10px" as="h1" fontSize={"25px"}>
          Payment Options
        </Heading>
        <PaymentMethod />
      </Box>
    </>
  );
};

export default Checkoutpage;
