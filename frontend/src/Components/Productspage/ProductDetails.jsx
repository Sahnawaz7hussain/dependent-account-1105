//  this is single product page

import {
  Box,
  Stack,
  Text,
  Image,
  Flex,
  useColorModeValue,
  Link,
  ListItem,
  UnorderedList,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductsActionFn } from "../../Redux/ProductReducer/ProductAction";
import { MdLocalShipping } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
import { postCartItmeActionFn } from "../../Redux/CartReducer/cartActions";
import userHeader from "../../utils/headers";
import Loading from "../Loading";

export const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const toast = useToast();
  const data = useSelector((state) => state.productReducer);
  const { isProductLoading, isProductError, product } = data;
  const currentProduct = product?.find((el) => el._id === id);

  useEffect(() => {
    dispatch(getProductsActionFn());
  }, [dispatch]);

  const handleAddtoCart = () => {
    const payload = {
      product: id,
    };
    dispatch(postCartItmeActionFn(payload, userHeader))
      .then((res) => {
        dispatch(getProductsActionFn());
        return toast({
          title: "Add to Cart.",
          description: "Item added to cart successfully.",
          status: "success",
          position: "top",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <Box width={"100%"} mt={"100px"}>
    
        <Box
          width={"75%"}
          margin={"auto"}
          border="1px solid #e8e8e8"
          mt={"3rem"}
          mb={"3rem"}
          p={"1rem 1rem 2rem 0rem "}
        >
          <Flex justifyContent={"space-between"}>
            <Box
              borderRight={"1px solid #e8e8e8"}
              width="25%"
              textAlign={"left"}
              p="2rem 0 1rem 1rem"
            >
              <Text
                fontSize={"14px"}
                fontWeight={"500"}
                mb={"1rem"}
                borderBottom={"1px solid #e8e8e8"}
              >
                Category
              </Text>
              <Text
                fontSize={"12px"}
                fontWeight={"500"}
                mb={"0.5rem"}
                // borderBottom={"1px solid #e8e8e8"}
              >
                Fruits & Vegetables
              </Text>
              <Text
                fontSize={"12px"}
                fontWeight={"500"}
                ml={"1rem"}
                mb="0.5rem"
              >
                Fresh Vegetables
              </Text>
              <UnorderedList
                listStyleType={"none"}
                fontSize={"12px"}
                fontWeight={"380"}
                ml={"1.5rem"}
                mb={"1rem"}
              >
                <ListItem _hover={{ color: "#84c225" }} mb={"0.25rem"}>
                  Beans,Bringles & Okra
                </ListItem>
                <ListItem _hover={{ color: "#84c225" }} mb={"0.25rem"}>
                  Cabbage & Cauliflower
                </ListItem>
                <ListItem mb={"0.25rem"} _hover={{ color: "#84c225" }}>
                  Cucumber & Capsicum
                </ListItem>
                <ListItem mb={"0.25rem"} _hover={{ color: "#84c225" }}>
                  Gourd, Pumpkin, DrumStick
                </ListItem>
                <ListItem mb={"0.25rem"} _hover={{ color: "#84c225" }}>
                  Leafy Vegetables
                </ListItem>
                <ListItem mb={"0.25rem"} _hover={{ color: "#84c225" }}>
                  Potato, Onion & Tomato
                </ListItem>
                <ListItem mb={"0.25rem"} _hover={{ color: "#84c225" }}>
                  Root Vegetables
                </ListItem>
                <ListItem mb={"0.25rem"} _hover={{ color: "#84c225" }}>
                  Specialty
                </ListItem>
              </UnorderedList>
              <Text
                fontSize={"14px"}
                fontWeight={"500"}
                mb={"1rem"}
                borderBottom={"1px solid #e8e8e8"}
              >
                Brands
              </Text>
              <Text
                fontSize={"12px"}
                fontWeight={"380"}
                mb={"0.25rem"}
                ml={"1rem"}
              >
                Fresho
              </Text>
              <Text
                fontSize={"12px"}
                fontWeight={"380"}
                mb={"0.25rem"}
                ml={"1rem"}
              >
                Fresho Potato, Onion & Tomato
              </Text>
            </Box>
            <Box width="35%">
              <Flex justifyContent={"center"}>
                <Image
                  rounded={"md"}
                  alt={"product image"}
                  src={currentProduct?.image}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  // border="1px solid #e8e8e8"
                  mt={"18%"}
                />
              </Flex>
            </Box>
            <Box border={"1px solid #e8e8e8"} width="35%" padding={"1rem"}>
              <Stack spacing={{ base: 6, md: 4 }} textAlign={"left"}>
                <Box as={"header"}>
                  <Text
                    mt={"20%"}
                    lineHeight={1.1}
                    fontWeight={400}
                    fontSize={"16px"}
                    pb="0.25rem"
                  >
                    {currentProduct?.brand}
                  </Text>
                  <Text
                    lineHeight={1.1}
                    fontWeight={400}
                    fontSize={"16px"}
                    pb="0.25rem"
                  >
                    {currentProduct?.brand} {"  "} {currentProduct?.title}
                  </Text>
                  <Text fontWeight={400} fontSize={"16px"}>
                    MRP : {""}{" "}
                    <span className="linethrough">
                      Rs{currentProduct?.cost}
                    </span>
                  </Text>
                  <Text fontWeight={400} fontSize={"18px"}>
                    cost :{" "}
                    {Math.floor(
                      currentProduct?.cost - (10 * currentProduct?.cost) / 100
                    )}
                  </Text>
                </Box>
                <Box margin={"auto"}>
                  <Button
                    mr={"5px"}
                    bg={"white"}
                    color={"gray.1001"}
                    rounded="0"
                    border="1px solid #84c225"
                  >
                    1
                  </Button>
                  {/* <Link as={RouterLink} to={"/cart"}> */}
                  <Button
                    rounded={"none"}
                    w={"50%"}
                    margin="auto"
                    p={"5px"}
                    mr={"5px"}
                    border="1px solid #84c225"
                    bg={"brand.100"}
                    color={"brand.white"}
                    _hover={{ bg: "brand.200" }}
                    onClick={() => handleAddtoCart(currentProduct._id)}
                  >
                    Add to cart
                  </Button>
                  {/* </Link> */}
                  <Button
                    ml="5px"
                    bg={useColorModeValue("white")}
                    color={useColorModeValue("gray.900")}
                    rounded="0"
                    border="1px solid #84c225"
                  >
                    SAVE
                  </Button>
                </Box>
                <Stack
                  direction="row"
                  alignItems="center"
                  //  border="1px"
                  //  marginTop={"-20px"}
                >
                  <MdLocalShipping />
                  <Text>2-3 business days delivery</Text>
                </Stack>
              </Stack>
            </Box>
          </Flex>
        </Box>
     
    </Box>
  );
};

// console.log("curr", data);
// const { id } = useParams();
// console.log("DDD",id)
// useEffect(() => {
//   dispatch(getSingleProduct(id));
// }, []);
// const handleAddproduct = (data) => {
//   dispatch(addtoCart(data));
// };
