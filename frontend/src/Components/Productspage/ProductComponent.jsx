
//  this is card page



import { Box, Text, Stack, Image, Flex, Center, Button } from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import "./ProductCom.css";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addtoCart, addtocartaction } from "../../Redux/product/action";
export const ProductComponent = ({props}) => {

  const {brand,image,_id,category,cost,title,stock}=props

  // console.log(title,"props")
  // console.log(category,"props")
  // console.log(props.image,"props")
  
  
  const handleCart=()=>{
    // console.log("data",data)
    // dispatch(addtocartaction(data))
    // dispatch(addtoCart(data));
  }

  return (
    <Box
      width={"33%"}
      // border="1px solid blue"
    >
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
          <Button variant={"outline"} p="0" onClick={() => handleCart()}>
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


