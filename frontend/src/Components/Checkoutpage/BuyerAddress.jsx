import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Stack,
  VStack,
  Spacer,
  Spinner,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAddressActionFn,
  updateAddressActionFn,
} from "../../Redux/AddressReducer/addressActions";
import loadingimg from "../../assets/loading.gif";

const BuyerAddress = ({ Address }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [address, setAddress] = useState(Address);
  const dispatch = useDispatch();
  const { fullname, street, state, city, mobile, landmark, zipcode } = Address;
  const data = useSelector((store) => store.addressReducer);

  const handleFormOnChange = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };
  const updateBuyerData = () => {
    dispatch(updateAddressActionFn(address))
      .then((res) => {
        dispatch(getAddressActionFn());
        onClose();
        // console.log("update res", res);
      })
      .catch((err) => {
        console.log("addres er: ", err);
      });
    console.log("mobile::::::::::", address);
  };
  console.log("get address:", address);
  return (
    <Box
      // boxShadow={"0 0 5px 1px grey;"}
      border={"1px solid lightgray"}
      minW={{ base: "95%", md: "350px", xl: "390px" }}
      p={"10px"}
      h="fit-content"
    >
      {!data.isAddressLoading ? (
        <>
          <Heading fontWeight={500} size={"md"} as="h2" my={"9px"}>
            Deliver To
          </Heading>
          <hr />
          <Box position={"relative"}>
            <Text mt={2} fontSize={18} fontWeight={400}>
              Name: {fullname}
            </Text>

            <Text mt={0.5} fontWeight={400} fontSize={16}>
              Street:{" "}
              <Box fontSize={16} fontWeight={400} as="span">
                {street}
              </Box>
            </Text>

            <Flex mt={0.5}>
              <Text fontWeight={400} fontSize={16} mr={15}>
                Mobile:{" "}
                <Box fontSize={16} fontWeight={400} as="span">
                  {mobile}
                </Box>
              </Text>
              <Box borderLeft="1px solid black"></Box>
              <Text fontWeight={400} fontSize={16} ml={15}>
                Zip:{" "}
                <Box fontSize={16} fontWeight={400} as="span">
                  {zipcode}
                </Box>
              </Text>
            </Flex>

            <Flex mt={0.5}>
              <Text fontWeight={400} mr={15} fontSize={16}>
                City:{" "}
                <Box fontSize={16} fontWeight={400} as="span">
                  {city}
                </Box>
              </Text>
              <Box borderLeft="1px solid black"></Box>
              <Text fontWeight={400} fontSize={16} ml={15}>
                State:{" "}
                <Box fontSize={16} fontWeight={400} as="span">
                  {state}
                </Box>
              </Text>
            </Flex>

            <Text mt={0.5} fontWeight={400} fontSize={16}>
              Landmark:{" "}
              <Box fontSize={16} fontWeight={400} as="span">
                {landmark}
              </Box>
            </Text>

            <Box>
              <Flex flexDir={"row-reverse"}>
                <Button
                  onClick={onOpen}
                  color={"#fff"}
                  _hover={{ bg: "brand.200" }}
                  bg={"brand.100"}
                >
                  Change
                </Button>
              </Flex>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Update Your Address</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
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
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      onClick={updateBuyerData}
                      color="brand.white"
                      bg="brand.100"
                      _hover={{ bg: "brand.200" }}
                      mr={3}
                    >
                      {data.isAddressLoading ? <Spinner /> : "Update"}
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Box>
        </>
      ) : (
        <Box>
          <Image src={loadingimg} alt="Loading..." />
        </Box>
      )}
    </Box>
  );
};

export default BuyerAddress;
