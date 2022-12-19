import React from "react";
import { Heading, Box, Button, Image } from "@chakra-ui/react";
import ordersuccess from "../assets/orders2.jpg";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <Box mt="30px">
      <Heading my={15} textAlign={"center"} fontWeight={600} size={"md"}>
        Your order has been successfully placed
      </Heading>
      <Box>
        <Image
          m="auto"
          h="auto"
          w={"250px"}
          src={ordersuccess}
          alt="Order success"
        />
      </Box>
      <Link to="/">
        <Button
          display={"block"}
          m="auto"
          colorScheme={"red"}
          minW={"150px"}
          my={"50px"}
        >
          Shop More
        </Button>
      </Link>
    </Box>
  );
};

export default OrderSuccess;
