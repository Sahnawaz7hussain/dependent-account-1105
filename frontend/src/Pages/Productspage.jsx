//  this is  product page

import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  Checkbox,
  CheckboxGroup,
  VStack,
} from "@chakra-ui/react";
import { ProductComponent } from "../Components/Productspage/ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
// import { useNavigate } from "react-router";
import LoadingComp from "../Components/Productspage/LoadingComponent";
import { SiderBar } from "./../Components/Productspage/SiderBar";
import { getProductsActionFn } from "../Redux/ProductReducer/ProductAction";

export const ProductsPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productReducer);
  console.log("data", data);
  const getProducts = () => {
    dispatch(getProductsActionFn());
  };

  useEffect(() => {
    getProducts();
  }, []);
  //  below this we user search params for products

  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setfilter] = useState(searchParams.get("filter"));
  const [brand, setbrand] = useState(searchParams.getAll("brand"));
  const [category, setcategory] = useState(searchParams.getAll("category"));
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (data.length >= 1) {
      setLoading(true);
    }
  });

  const filterHandler = (value) => {
    setfilter(value);
  };

  const brandHandler = (value) => {
    setbrand(value);
  };

  const categoryHandler = (value) => {
    setcategory(value);
  };

  useEffect(() => {
    setLoading(false);
    if (filter != null || brand.length !== 0 || category !== 0) {
      setSearchParams(
        { brand: brand, category: category, filter: filter },
        { replace: true }
      );
      const params = {
        brand: searchParams.getAll("brand") || [],
        filter: searchParams.get("filter") || 1,
        category: searchParams.getAll("category") || [],
      };
      // console.log("SERARCH",params.order)
      dispatch(getProductsActionFn(params));
    }
    setLoading(true);
  }, [brand, searchParams, filter, category, setSearchParams]);

  return (
    <Box width={"100%"}>
      {/* <Topnavbar /> */}
      {data.product?.length == 0 ? (
        <Box width="98%">
          <LoadingComp />
        </Box>
      ) : (
        <Box width={"75%"} margin="auto" mt="1rem">
          <SiderBar />
          <Box mt={"20px"} mb={"20px"}>
            <img
              src="https://www.bigbasket.com/media/uploads/flatpages/test-1/Fruits%20&%20vegetables.jpg"
              alt="..."
            />
          </Box>
          <Box border={"1px solid #e8e8e8"}>
            <Flex>
              <Box width={"15%"} textAlign={"left"} m={"1rem"} fontWeight={300}>
                <Text
                  fontSize={"14px"}
                  fontWeight={500}
                  borderBottom={"1px solid #e8e8e8"}
                >
                  Apply Filters
                </Text>
                <Text color={" #84c225"} fontSize={"12px"} fontWeight={500}>
                  Fruites & Vegetables
                </Text>
                <Flex>
                  <Box width={"100%"} mt={"1.5rem"}>
                    <Box mb="1rem" borderBottom="1px solid #e8e8e8" pb={"1rem"}>
                      <Text fontSize={"14px"} fontWeight={"500"} mb={"1rem"}>
                        Filter by Price
                      </Text>
                      <CheckboxGroup
                        colorScheme="green"
                        defaultValue={filter}
                        onChange={filterHandler}
                      >
                        <VStack
                          direction={["column", "row"]}
                          alignItems={"baseline"}
                          fontSize={"12px"}
                          fontWeight={"375"}
                        >
                          <Checkbox value="1">Low to high</Checkbox>
                          <Checkbox value="-1">High to Low</Checkbox>
                        </VStack>
                      </CheckboxGroup>
                      <Text fontSize={"14px"} fontWeight={"500"} mb={"1rem"}>
                        Brand
                      </Text>
                      <CheckboxGroup
                        colorScheme="green"
                        defaultValue={brand}
                        onChange={brandHandler}
                      >
                        <VStack
                          direction={["column", "row"]}
                          alignItems={"baseline"}
                          fontSize={"12px"}
                          fontWeight={"375"}
                        >
                          <Checkbox value="The Moms Co">The Moms Co</Checkbox>
                          <Checkbox value="Amul">Amul</Checkbox>
                          <Checkbox value="Amule">Amule</Checkbox>
                          <Checkbox value="Fresho">Fresho</Checkbox>
                          <Checkbox value="Nivea">Nivea</Checkbox>
                          <Checkbox value="ColorBar">ColorBar</Checkbox>
                          <Checkbox value="Vi-jhon">Vi-jhon</Checkbox>
                          <Checkbox value="Better Body Bombay">
                            Better Body Bombay
                          </Checkbox>
                          <Checkbox value="Himalay">Himalay</Checkbox>
                        </VStack>
                      </CheckboxGroup>
                    </Box>
                    <Box pb={"1rem"} mb="1rem" borderBottom="1px solid #e8e8e8">
                      <Text fontSize={"14px"} fontWeight={"500"} mb={"1rem"}>
                        Category
                      </Text>
                      <CheckboxGroup
                        colorScheme="green"
                        defaultValue={category}
                        onChange={categoryHandler}
                      >
                        <VStack
                          direction={["column", "row"]}
                          alignItems={"baseline"}
                          fontSize={"12px"}
                          fontWeight={"375"}
                        >
                          <Checkbox value="All">All</Checkbox>
                          <Checkbox value="Beauty">Beauty</Checkbox>
                          <Checkbox value="bakery">Bakery</Checkbox>
                          <Checkbox value="fruitsvegetabls">
                            Fruits&vegetables
                          </Checkbox>
                          <Checkbox value="kitchen">Kitchen</Checkbox>
                          <Checkbox value="vegetables">vegetables</Checkbox>
                          <Checkbox value="fruits">Fruits</Checkbox>
                        </VStack>
                      </CheckboxGroup>
                    </Box>
                  </Box>
                </Flex>
              </Box>
              <Box width="85%" borderLeft={"1px solid #e8e8e8"}>
                <Stack
                  width={"97%"}
                  direction="row"
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Text
                    textAlign={"left"}
                    m={"1rem"}
                    fontSize={"20px"}
                    fontWeight={400}
                  >
                    Fruits & Vegetables ({data.product.length})
                  </Text>
                </Stack>
                <Flex flexWrap={"wrap"} borderTop={"1px solid #e8e8e8"}>
                  {data.product &&
                    data.product.map((e) => {
                      return <ProductComponent key={e._id} props={{ ...e }} />;
                    })}
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      )}
    </Box>
  );
};

//! this is previously use code
//   const dispatch = useDispatch();
//   const product = useSelector((state) => state.products.product);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [orderValue, setOrderValue] = useState(searchParams.get("order") );
//   const [brandValue, setbrandValue] = useState(searchParams.getAll("brand"));
//   const [sizeValue, setsizeValue] = useState(searchParams.getAll("quantity"));
//   const [priceValue, setPriceValue] = useState();
//   const [loading,setLoading]=useState(false);
//   useEffect(()=>{
//     if(product.length>=1){
//       setLoading(true)
//     }
//   })

//   const priceHandler = (value) => {
//     setOrderValue(value);
//   };

//   const brandHandler = (value) => {
//     setbrandValue(value);
//   };

//   const sizeHandler = (value) => {
//     setsizeValue(value);
//   };

//   useEffect(() => {
//     setLoading(false)
//     if (orderValue!=null  || brandValue.length !== 0 || sizeValue !== 0) {
//       setSearchParams(
//             { brand: brandValue, quantity: sizeValue, order: orderValue },
//             { replace: true }
//           )
//       const params = {
//         brand: searchParams.getAll("brand"),
//         order: searchParams.get("order"),
//         quantity: searchParams.getAll("quantity"),
//       };
// // console.log("SERARCH",params.order)
//       dispatch(fetchData(params));
//     }
//     setLoading(true)
//   }, [brandValue, searchParams, orderValue, sizeValue, setSearchParams]);
