//  this is card page

import {
  Box,
  Text,
  Stack,
  Image,
  Flex,
  Button,
  useToast,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import "./ProductCom.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getCartItemsActionFn,
  postCartItmeActionFn,
} from "../../Redux/CartReducer/cartActions";
import userHeader from "../../utils/headers";
// import { addtoCart, addtocartaction } from "../../Redux/product/action";
export const ProductComponent = ({ props }) => {
  const { brand, image, _id, cost, title } = props;
  const dispatch = useDispatch();
  const toast = useToast();

  const handleAddToCart = () => {
    const payload = {
      product: _id,
    };
    dispatch(postCartItmeActionFn(payload, userHeader))
      .then((res) => {
        console.log(res);
        if (res.type === "POST_CART_ITEMS_SUCCESS") {
          dispatch(getCartItemsActionFn());
          return toast({
            title: "Cart Status.",
            description: "Item added successfully to cart",
            status: "success",
            duration: 2000,
            position: "top",
            isClosable: true,
          });
        } else {
          toast({
            title: "Cart Status.",
            description: "Item already present in cart.",
            status: "error",
            duration: 2000,
            position: "top",
            isClosable: true,
          });
        }
        console.log("cart post res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <Box width={"33%"} border="0px solid blue" m="auto" mt={"100px"}>
      <Box
        className="transition"
        role={"group"}
        p={6}
        // border="1px solid blue"
        boxShadow={"md"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        margin="1rem"
      >
        <Link to={`/singleproduct/${_id}`}>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            //   border="1px solid transparent"
          >
            <Image
              rounded={"lg"}
              objectFit={"cover"}
              // border="1px solid red"
              src={image}
            />
          </Flex>
        </Link>
        <Stack textAlign={"left"}>
          <Text color={"gray.500"} fontSize={"sm"}>
            {brand}
          </Text>
          <Text color={"black"} fontSize={"12px"}>
            {title}
          </Text>
          <Text color={"black"} fontSize={"13px"}>
            Rs{cost}{" "}
          </Text>
          <Stack direction={"row"} textAlign={"center"}>
            <Text color={"black"} fontSize={"12px"}>
              Rs {Math.floor(cost - (10 * cost) / 100)}
            </Text>
            <Text fontSize={"12px"} color={"black"}>
              MRP{" "}
              <span className="linethrough" textDecoration={"line-through"}>
                Rs{cost}
              </span>
            </Text>
          </Stack>
          <Button
            variant={"outline"}
            p="0"
            bg="brand.100"
            color={"brand.white"}
            onClick={handleAddToCart}
          >
            Add to cart
          </Button>
          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping size={28} />
            <Text fontSize={"sm"} color={"black"}>
              It will take {Math.floor(Math.random() * 4) + 1} days to deliver
              your home
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
