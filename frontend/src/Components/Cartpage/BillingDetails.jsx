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
      border={"1px solid lightgray"}
      // boxShadow={"0 0 5px 1px grey"}

      m="auto"
    >
      <Heading fontWeight={600} my="7px" ml="1%" as="h2" size="md">
        Price Details
      </Heading>
      <hr />
      <Stack>
        <Flex mt={2}>
          <Text fontWeight={400} fontSize={16}>
            Estimated
          </Text>
          <Spacer />
          <Text fontSize={16} fontWeight={400}>
            16/12/2022
          </Text>
        </Flex>
        <Flex>
          <Text fontWeight={400} fontSize={16}>
            MRP (2 items)
          </Text>
          <Spacer />
          <Text fontSize={16} fontWeight={400}>
            ₹1,500
          </Text>
        </Flex>
        <Flex>
          <Text fontWeight={400} fontSize={16}>
            Product Discount
          </Text>
          <Spacer />
          <Text fontSize={16} fontWeight={400}>
            − ₹150
          </Text>
        </Flex>
        <Flex>
          <Text fontWeight={400} fontSize={16}>
            Delivery Fee
          </Text>
          <Spacer />
          <Text fontSize={16} fontWeight={400}>
            Free
          </Text>
        </Flex>
        <Divider />
        <Flex>
          <Heading fontWeight={500} size="md">
            Total Amount
          </Heading>
          <Spacer />
          <Heading fontWeight={500} size="md">
            ₹1,350
          </Heading>{" "}
        </Flex>
      </Stack>
    </Box>
  );
};

export { BillingDetails };
