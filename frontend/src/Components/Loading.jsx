import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import loadingimg from "../assets/loading.gif";

const Loading = ({ mt = 100 }) => {
  // console.log("md: ", mt);
  return (
    <Box m="auto" mt={`${mt}px`} w="fit-content" h="fit-content">
      <Image src={loadingimg} alt="Loading..." />
    </Box>
  );
};

export default Loading;
