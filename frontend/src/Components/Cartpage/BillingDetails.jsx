import {
  Box,
  Divider,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const BillingDetails = ({ baseW = 100, mdW = 34, xlW = 29 }) => {
  console.log("xl: ", xlW);

  return (
    <Box
      minW={{ base: `${baseW}%`, md: `${mdW}%`, xl: `${xlW}%` }}
      h="fit-content"
      boxSizing="borderBox"
      p={[5, 10, 15]}
      border={"0px solid blue"}
      boxShadow={"0 0 5px 1px grey"}
      m="auto"
    >
      <Heading my="5px" ml="1%" as="h2" size="md">
        Price Details
      </Heading>
      <Divider />
      <Stack>
        <Flex>
          <Text fontWeight={700} fontSize={18}>
            Estimated
          </Text>
          <Spacer />
          <Text fontSize={18} fontWeight={500}>
            16/12/2022
          </Text>
        </Flex>
        <Flex>
          <Text fontWeight={700} fontSize={18}>
            MRP (2 items)
          </Text>
          <Spacer />
          <Text fontSize={18} fontWeight={500}>
            ₹1,500
          </Text>
        </Flex>
        <Flex>
          <Text fontWeight={700} fontSize={18}>
            Product Discount
          </Text>
          <Spacer />
          <Text fontSize={18} fontWeight={500}>
            − ₹150
          </Text>
        </Flex>
        <Flex>
          <Text fontWeight={700} fontSize={18}>
            Delivery Fee
          </Text>
          <Spacer />
          <Text fontSize={18} fontWeight={500}>
            Free
          </Text>
        </Flex>
        <Divider />
        <Flex>
          <Heading size="md">Total Amount</Heading>
          <Spacer />
          <Heading size="md">₹1,350</Heading>{" "}
        </Flex>
      </Stack>
    </Box>
  );
};

export { BillingDetails };
