import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorMode,
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
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { EditIcon } from "@chakra-ui/icons";

const BuyerAddress = () => {
  const { colorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();

  let getAddress = JSON.parse(localStorage.getItem("baddress"));

  const [address, setAddress] = useState(getAddress);
  const handleFormOnChange = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };
  const { fullname, street, state, city, mobile, landmark, zip } = getAddress;
  const updateBuyerData = () => {
    console.log("mobile::::::::::", address);
  };
  // console.log("get address:", address);
  return (
    <Box
      border={"0px solid blue"}
      boxShadow={"0 0 5px 1px grey;"}
      minW={{ base: "95%", md: "350px", xl: "390px" }}
      p={"10px"}
      h="fit-content"
    >
      <Heading size={"md"} my={"8px"}>
        Your Address...
      </Heading>
      <Divider />
      <Box position={"relative"}>
        <Heading fontSize={24}>Name: {fullname}</Heading>
        <Text fontWeight={700} fontSize={18}>
          Street:{" "}
          <Box fontSize={18} fontWeight={500} as="span">
            {street}
          </Box>
        </Text>

        <Flex>
          <Text fontWeight={700} fontSize={18} mr={15}>
            Mobile:{" "}
            <Box fontSize={18} fontWeight={500} as="span">
              {mobile}
            </Box>
          </Text>
          <Box borderLeft="1px solid black"></Box>
          <Text fontWeight={700} fontSize={18} ml={15}>
            Zip:{" "}
            <Box fontSize={18} fontWeight={500} as="span">
              {zip}
            </Box>
          </Text>
        </Flex>

        <Flex>
          <Text fontWeight={700} mr={15} fontSize={18}>
            City:{" "}
            <Box fontSize={18} fontWeight={500} as="span">
              {city}
            </Box>
          </Text>
          <Box borderLeft="1px solid black"></Box>
          <Text fontWeight={700} fontSize={18} ml={15}>
            State:{" "}
            <Box fontSize={18} fontWeight={500} as="span">
              {state}
            </Box>
          </Text>
        </Flex>
        <Text fontWeight={700} fontSize={18}>
          Landmark:{" "}
          <Box fontSize={18} fontWeight={500} as="span">
            {landmark}
          </Box>
        </Text>
        <Box>
          {/* <Button
            top={[2, 2, 3]}
            right={[0, 3, 5]}
            position={"absolute"}
            _active={{ bg: "green" }}
            _hover={{ bg: "blue.600" }}
            onClick={onOpen}
            px={{ base: -10, md: 0, xl: 0 }}
            py={{ base: -10, md: 0, xl: 0 }}
          >
            <EditIcon />
          </Button> */}
          <Flex flexDir={"row-reverse"}>
            <Button onClick={onOpen} colorScheme={"pink"}>
              EDIT
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
                <Button onClick={updateBuyerData} colorScheme="blue" mr={3}>
                  Update
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};

export default BuyerAddress;
