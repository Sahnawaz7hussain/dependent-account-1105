import { Box, Text, Stack, Image, Flex, Center, Button } from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
// import { useNavigate } from "react-router";
import "./ProductCom.css";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addtoCart, addtocartaction } from "../../Redux/product/action";
export const ProductComponent = () => {
  const data={
    imgUrl:"https://media.istockphoto.com/id/1253594253/photo/orange-and-half-of-it-is-cut-into-pieces.jpg?b=1&s=170667a&w=0&k=20&c=Wo78fmL9k3LNrBcJKfNf8fefOj6F-IkrvKZJHsGiLL0=",
    price:200,
    quantity:2,
    title:"Oranges",
    brand:"Top"

  }
  // console.log("data",data)
  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  const handleCart=()=>{
    // console.log("data",data)
    // dispatch(addtocartaction(data))
    // dispatch(addtoCart(data));
  }
  // console.log("data.id",data._id)
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
        <Link to={`/products/${data._id}`}>
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
              src={data.imgUrl}
            />
          </Flex>
        </Link>
        <Stack textAlign={"left"}>
          <Text color={"gray.500"} fontSize={"sm"}>
            {data.brand}
          </Text>
          <Text color={"black"} fontSize={"12px"}>
            {data.title}
          </Text>
          <Text color={"black"} fontSize={"13px"}>
            {data.quantity}-Rs{data.price}{" "}
          </Text>
          <Stack direction={"row"} textAlign={"center"}>
            <Text color={"black"} fontSize={"12px"}>
              Rs {Math.floor(data.price - (10 * data.price) / 100)}
            </Text>
            <Text fontSize={"12px"} color={"black"}>
              MRP{" "}
              <span className="linethrough" textDecoration={"line-through"}>
                Rs{data.price}
              </span>
            </Text>
          </Stack>
          <Button variant={"outline"} p="0" onClick={() => handleCart(data)}>
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
