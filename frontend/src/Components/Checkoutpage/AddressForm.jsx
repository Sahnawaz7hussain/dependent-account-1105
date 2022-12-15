import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spacer,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const initialAddress = {
  fullname: "",
  street: "",
  landmark: "",
  city: "",
  state: "",
  zipcode: "",
  mobile: "",
};

const AddressForm = () => {
  const [address, setAddress] = useState(initialAddress);

  const handleFormOnChange = (e) => {
    let { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };

  const hanldeAddingAddress = () => {
    localStorage.setItem("baddress", JSON.stringify(address));
    console.log("buyer address: ", address);
    alert("hello world");
  };
  console.log("address: ", address);
  return (
    <Container>
      <Box
        w="auto"
        border={"0px solid grey"}
        boxSizing="border-box"
        px="20px"
        py="15px"
        rounded={"5px"}
        mb={10}
      >
        <Heading as="h2" size="md">
          Address
        </Heading>
        <FormControl>
          <FormLabel mb="0px" mt={2}>
            Full Name
          </FormLabel>
          <Input
            _focus={{ border: "0px" }}
            placeholder="Full Name"
            type="text"
            name="fullname"
            onChange={handleFormOnChange}
            value={address.fullname}
            rounded="none"
          />
          <FormLabel mb="0px" mt={2}>
            Street
          </FormLabel>
          <Input
            _focus={{ border: "0px" }}
            placeholder="Street"
            type="text"
            name="street"
            onChange={handleFormOnChange}
            value={address.street}
            rounded="none"
          />
          <FormLabel mb="0px" mt={2}>
            Land Mark (Optional)
          </FormLabel>
          <Input
            _focus={{ border: "0px" }}
            placeholder="Land Mark"
            type="text"
            name="landmark"
            onChange={handleFormOnChange}
            value={address.landmark}
            rounded="none"
          />
          <Stack direction={{ md: "row", xl: "row" }}>
            <VStack align={"left"}>
              <FormLabel mb="0px" mt={2}>
                City/Town
              </FormLabel>
              <Input
                _focus={{ border: "0px" }}
                placeholder="City / Town"
                type="text"
                name="city"
                onChange={handleFormOnChange}
                value={address.city}
                rounded="none"
              />
            </VStack>
            <Spacer />
            <VStack align={"left"}>
              <FormLabel mb="0px" mt={2}>
                State
              </FormLabel>
              <Input
                _focus={{ border: "0px" }}
                placeholder="State"
                type="text"
                name="state"
                onChange={handleFormOnChange}
                value={address.state}
                rounded="none"
              />
            </VStack>
          </Stack>
          <Stack direction={{ md: "row", xl: "row" }}>
            <VStack align={"left"}>
              <FormLabel mb="0px" mt={2}>
                Zip Code
              </FormLabel>
              <Input
                _focus={{ border: "0px" }}
                placeholder="Zip Code"
                type="number"
                name="zipcode"
                onChange={handleFormOnChange}
                value={address.zipcode}
                rounded="none"
              />
            </VStack>
            <Spacer />
            <VStack align={"left"}>
              <FormLabel mb="0px" mt={2}>
                Mobile
              </FormLabel>
              <Input
                _focus={{ border: "0px" }}
                placeholder="Mobile"
                type="number"
                name="mobile"
                onChange={handleFormOnChange}
                value={address.mobile}
                rounded="none"
              />
            </VStack>
          </Stack>
        </FormControl>

        <Button
          my={5}
          w="100%"
          onClick={hanldeAddingAddress}
          colorScheme={"pink"}
        >
          ADD
        </Button>
      </Box>
    </Container>
  );
};

export default AddressForm;
