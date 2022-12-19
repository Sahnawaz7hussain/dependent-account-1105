import { Box, Heading, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BillingDetails } from "../Components/Cartpage/BillingDetails";
import BuyerAddress from "../Components/Checkoutpage/BuyerAddress";
import PaymentMethod from "../Components/Checkoutpage/PaymentMethod";
import { useDispatch, useSelector } from "react-redux";
import { getAddressActionFn } from "../Redux/AddressReducer/addressActions";
import Loading from "../Components/Loading";

const Checkoutpage = () => {
  document.title = "Finest | Checkout";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((store) => {
    return store.addressReducer;
  });
  const { isAddressLoading, address } = data;
  //console.log("adress", data);

  useEffect(() => {
    dispatch(getAddressActionFn())
      .then((res) => {
        if (res.type === "GET_ADDRESS_FAILURE") {
          navigate("/address");
        }
        //console.log("res: ", res);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  return (
    <>
      {isAddressLoading ? (
        <Loading />
      ) : (
        <>
          <Box
            w={{ base: "99%", md: "90%", xl: "65%" }}
            p="20px"
            m="auto"
            mt="10px"
          >
            <Heading mb="10px" as="h1" fontWeight={500} fontSize={"20px"}>
              Checkout
            </Heading>
            <hr />
            <Stack
              mt={"15px"}
              direction={{ base: "column", md: "row", xl: "row" }}
            >
              {address.fullname && <BuyerAddress Address={address} />}
              <BillingDetails baseW={50} mdW={50} xlW={50} />
            </Stack>
          </Box>
          <Box
            // border={"2px solid teal"}
            w={{ base: "100%", md: "90%", xl: "65%" }}
            p={{ base: "5px", md: "20px", xl: "20px" }}
            m="auto"
          >
            <Heading mb="10px" as="h1" fontWeight={500} fontSize={"20px"}>
              Payment Options
            </Heading>
            <PaymentMethod />
          </Box>
        </>
      )}
    </>
  );
};

export default Checkoutpage;
