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
// import { useDispatch, useSelector } from "react-redux";
// import { fetchData } from "../../Redux/product/action";
// import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";
// import { Topnavbar } from "../Navbar/Topnavbar";
import axios from "axios";
import LoadingComp from "../Components/Productspage/LoadingComponent";
import { SiderBar } from "./../Components/Productspage/SiderBar";
export const ProductsPage = () => {
  const product = [
    {
      imgUrl:
        "https://media.istockphoto.com/id/1253594253/photo/orange-and-half-of-it-is-cut-into-pieces.jpg?b=1&s=170667a&w=0&k=20&c=Wo78fmL9k3LNrBcJKfNf8fefOj6F-IkrvKZJHsGiLL0=",
      price: 200,
      quantity: 2,
      title: "Oranges",
      brand: "Top",
    },
    {
      imgUrl:
        "https://media.istockphoto.com/id/1253594253/photo/orange-and-half-of-it-is-cut-into-pieces.jpg?b=1&s=170667a&w=0&k=20&c=Wo78fmL9k3LNrBcJKfNf8fefOj6F-IkrvKZJHsGiLL0=",
      price: 200,
      quantity: 2,
      title: "Oranges",
      brand: "Top",
    },
    {
      imgUrl:
        "https://media.istockphoto.com/id/1253594253/photo/orange-and-half-of-it-is-cut-into-pieces.jpg?b=1&s=170667a&w=0&k=20&c=Wo78fmL9k3LNrBcJKfNf8fefOj6F-IkrvKZJHsGiLL0=",
      price: 200,
      quantity: 2,
      title: "Oranges",
      brand: "Top",
    },
    {
      imgUrl:
        "https://media.istockphoto.com/id/1253594253/photo/orange-and-half-of-it-is-cut-into-pieces.jpg?b=1&s=170667a&w=0&k=20&c=Wo78fmL9k3LNrBcJKfNf8fefOj6F-IkrvKZJHsGiLL0=",
      price: 200,
      quantity: 2,
      title: "Oranges",
      brand: "Top",
    },
    {
      imgUrl:
        "https://media.istockphoto.com/id/1253594253/photo/orange-and-half-of-it-is-cut-into-pieces.jpg?b=1&s=170667a&w=0&k=20&c=Wo78fmL9k3LNrBcJKfNf8fefOj6F-IkrvKZJHsGiLL0=",
      price: 200,
      quantity: 2,
      title: "Oranges",
      brand: "Top",
    },
    {
      imgUrl:
        "https://media.istockphoto.com/id/1253594253/photo/orange-and-half-of-it-is-cut-into-pieces.jpg?b=1&s=170667a&w=0&k=20&c=Wo78fmL9k3LNrBcJKfNf8fefOj6F-IkrvKZJHsGiLL0=",
      price: 200,
      quantity: 2,
      title: "Oranges",
      brand: "Top",
    },
    {
      imgUrl:
        "https://media.istockphoto.com/id/1253594253/photo/orange-and-half-of-it-is-cut-into-pieces.jpg?b=1&s=170667a&w=0&k=20&c=Wo78fmL9k3LNrBcJKfNf8fefOj6F-IkrvKZJHsGiLL0=",
      price: 200,
      quantity: 2,
      title: "Oranges",
      brand: "Top",
    },
    {
      imgUrl:
        "https://media.istockphoto.com/id/1253594253/photo/orange-and-half-of-it-is-cut-into-pieces.jpg?b=1&s=170667a&w=0&k=20&c=Wo78fmL9k3LNrBcJKfNf8fefOj6F-IkrvKZJHsGiLL0=",
      price: 200,
      quantity: 2,
      title: "Oranges",
      brand: "Top",
    },
  ];

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

  return (
    <Box width={"100%"}>
      {/* <Topnavbar /> */}
      {product.length == 0 ? (
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
                  Category
                </Text>
                <Text color={" #84c225"} fontSize={"12px"} fontWeight={500}>
                  Fruites & Vegetables
                </Text>
                <Flex>
                  <Box width={"100%"} mt={"1.5rem"}>
                    <Box mb="1rem" borderBottom="1px solid #e8e8e8" pb={"1rem"}>
                      <Text fontSize={"14px"} fontWeight={"500"} mb={"1rem"}>
                        filter by Price
                      </Text>
                      <CheckboxGroup colorScheme="green">
                        <VStack
                          direction={["column", "row"]}
                          alignItems={"baseline"}
                          fontSize={"12px"}
                          fontWeight={"375"}
                        >
                          <Checkbox value="asc">Low to high</Checkbox>
                          <Checkbox value="desc">High to Low</Checkbox>
                        </VStack>
                      </CheckboxGroup>
                      <Text fontSize={"14px"} fontWeight={"500"} mb={"1rem"}>
                        Brand
                      </Text>
                      <CheckboxGroup colorScheme="green">
                        <VStack
                          direction={["column", "row"]}
                          alignItems={"baseline"}
                          fontSize={"12px"}
                          fontWeight={"375"}
                        >
                          <Checkbox value="Organic">Organic</Checkbox>
                          <Checkbox value="Hoovu Fresh">Hoovu Fresh</Checkbox>
                          <Checkbox value="Brotos">Brotos</Checkbox>
                          <Checkbox value="Fresho">Fresho</Checkbox>
                        </VStack>
                      </CheckboxGroup>
                    </Box>
                    <Box pb={"1rem"} mb="1rem" borderBottom="1px solid #e8e8e8">
                      <Text fontSize={"14px"} fontWeight={"500"} mb={"1rem"}>
                        Pack Size
                      </Text>
                      <CheckboxGroup colorScheme="green">
                        <VStack
                          direction={["column", "row"]}
                          alignItems={"baseline"}
                          fontSize={"12px"}
                          fontWeight={"375"}
                        >
                          <Checkbox value="1">1 kg</Checkbox>
                          <Checkbox value="2">2 pcs</Checkbox>
                          <Checkbox value="40">40cm</Checkbox>
                          <Checkbox value="100">100 g</Checkbox>
                          <Checkbox value="250">250 g</Checkbox>
                        </VStack>
                      </CheckboxGroup>
                    </Box>
                    <Box pb={"1rem"} mb="1rem" borderBottom="1px solid #e8e8e8">
                      <Text fontSize={"14px"} fontWeight={"500"} mb={"1rem"}>
                        Price
                      </Text>
                      <CheckboxGroup colorScheme="green">
                        <VStack
                          direction={["column", "row"]}
                          alignItems={"baseline"}
                          fontSize={"12px"}
                          fontWeight={"375"}
                        >
                          <Checkbox value="0-50">0-50</Checkbox>
                          <Checkbox value="51-100">51-100</Checkbox>
                          <Checkbox value="101-150">101-150</Checkbox>
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
                    Fruits & Vegetables ({product.length})
                  </Text>
                </Stack>
                <Flex flexWrap={"wrap"} borderTop={"1px solid #e8e8e8"}>
                  {product &&
                    product.map((e) => {
                      return <ProductComponent key={e._id} props={e} />;
                    })}
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      )}
    </Box>
  )
}