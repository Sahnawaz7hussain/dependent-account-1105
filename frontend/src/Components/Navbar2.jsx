import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  useDisclosure,
  Image,
  InputGroup,
  InputRightAddon,
  Input,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import finest from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutActionFn } from "../Redux/AuthReducer/AuthActions";
import { useEffect } from "react";
import { getCartItemsActionFn } from "../Redux/CartReducer/cartActions";

export default function Navbar2() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const cartItems = useSelector((store) => store.cartReducer.cartItems);
  let tcarts = 0;
  cartItems?.length > 0 && (tcarts = cartItems.length);
  console.log("isAth", isAuth);
  const handleUserLogout = () => {
    dispatch(userLogoutActionFn());
  };
  // useEffect(() => {
  //   dispatch(getCartItemsActionFn());
  // }, []);
  return (
    <Box
      position={"sticky"}
      zIndex={1000}
      top={0}
      borderBottom={"1px solid gray"}
      bg={colorMode === "light" ? "gray.200" : "black"}
    >
      <Flex
        justifyContent={"space-between"}
        minH={"75px"}
        align={"center"}
        px={{ base: "1%", md: "2%", xl: "7%" }}
        border={"0px solid blue"}
      >
        {/* FIRST BOX  */}

        <Flex alignItems={"center"}>
          <Link to="/">
            <Box
              h={{ base: "37px", md: "37px", xl: "40px" }}
              w={{ base: "60px", md: "80px", xl: "100px" }}
              border={"0px solid gray"}
            >
              <Image
                h={"100%"}
                w={"100%"}
                objectFit={"cover"}
                src={finest}
                alt="Finest"
              />
            </Box>
          </Link>
          <Stack
            display={{ base: "none", md: "none", xl: "flex" }}
            direction={"row"}
            spacing={3}
            ml={{ xl: "15px" }}
          >
            <Link to="/products">
              <Text fontWeight={500} fontSize={"15px"}>
                All Products
              </Text>
            </Link>
            <Link to="/products">
              <Text fontWeight={500} fontSize={"15px"}>
                Top Products
              </Text>
            </Link>
            <Link to="/products">
              <Text fontWeight={500} fontSize={"15px"}>
                Vegetables
              </Text>
            </Link>
            <Link to="/products">
              <Text fontWeight={500} fontSize={"15px"}>
                Grocery
              </Text>
            </Link>
          </Stack>
        </Flex>

        {/* SECOND BOX  */}
        <Flex
          minW={{ base: "60%", md: "60%", xl: "30%" }}
          borderWidth="1px"
          borderColor={"gray"}
        >
          <InputGroup w={"100%"}>
            <Input
              rounded={"none"}
              pl={2}
              fontSize={"16px"}
              variant={"unstyled"}
              placeholder="mysite"
            />
            <InputRightAddon
              bg="transparent"
              borderLeft={"1px solid gray"}
              rounded={"none"}
              children={<SearchIcon />}
            />
          </InputGroup>
        </Flex>
        {/* THIRD BOX  */}
        <Stack
          display={{ base: "none", md: "nonde", xl: "flex" }}
          direction={"row"}
          spacing={3}
        >
          <Link to="/cart">
            <Box position={"relative"}>
              <IconButton
                onClick={onClose}
                fontSize={"20px"}
                bg="transparent"
                icon={<AiOutlineShoppingCart />}
              />
              <Text
                bg="red"
                w="15px"
                rounded={"100px"}
                textAlign={"center"}
                top={-1}
                right={0}
                position={"absolute"}
              >
                {tcarts}
              </Text>
            </Box>
          </Link>
          <IconButton
            bg={"transparent"}
            fontSize={"25px"}
            onClick={toggleColorMode}
            icon={
              colorMode === "light" ? (
                <BsToggle2Off />
              ) : (
                <BsToggle2On color={"blue"} />
              )
            }
          />
          {isAuth ? (
            <Button onClick={handleUserLogout} colorScheme={"red"}>
              Logout
            </Button>
          ) : (
            <>
              <Link to="login">
                <Button bg="transparent" variant={"outline"} colorScheme="blue">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant={"solid"} colorScheme="blue">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </Stack>

        {/* HAMBERGER  */}
        <Flex
          display={{ base: "flex", md: "flex", xl: "none" }}
          w={"fit-content"}
        >
          <DrawerD />
        </Flex>
      </Flex>
    </Box>
  );
}

const DrawerD = () => {
  const { isOpen, onOpen, onToggle, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const cartItems = useSelector((store) => store.cartReducer.cartItems);
  useEffect(() => {
    dispatch(getCartItemsActionFn());
  }, []);
  let tcarts = 0;
  cartItems?.length > 0 && (tcarts = cartItems.length);
  //console.log("isAth dra", cartItems);
  const handleUserLogout = () => {
    dispatch(userLogoutActionFn());
  };
  return (
    <>
      <IconButton
        onClick={onToggle}
        icon={
          isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
        }
        variant={"ghost"}
        aria-label={"Toggle Navigation"}
      />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* HEADER  */}
          <DrawerHeader>
            <Heading>Welcome Back.</Heading>
          </DrawerHeader>
          {/* BODY  */}

          <DrawerBody>
            {!isAuth && (
              <Flex justifyContent={"space-around"} mb={"15px"}>
                <Link to="/login">
                  <Button colorScheme={"blue"} minW={"80px"}>
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button colorScheme={"blue"} minW={"80px"}>
                    Signup
                  </Button>
                </Link>
              </Flex>
            )}
            <hr />
            <Link to="/cart">
              <Flex
                onClick={onClose}
                my={"6px"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontWeight={400} fontSize={"19px"}>
                  Cart
                </Text>
                <Text fontWeight={400} fontSize={"19px"}>
                  {tcarts}
                </Text>
              </Flex>
            </Link>
            <hr />

            <Flex my={"7px"} justifyContent={"space-between"}>
              <Text fontWeight={400} fontSize={"19px"}>
                Toggle Theme
              </Text>
              <IconButton
                fontSize={"25px"}
                onClick={toggleColorMode}
                icon={
                  colorMode === "light" ? (
                    <BsToggle2Off />
                  ) : (
                    <BsToggle2On color={"blue"} />
                  )
                }
              />
            </Flex>
            <hr />

            <Text fontSize={"20px"} fontWeight={500}>
              Categories
            </Text>

            <Stack
              display={{ base: "block", md: "block", xl: "none" }}
              direction={"column"}
              spacing={13}
              ml={{ xl: "15px" }}
            >
              <Link to="/products">
                <Text onClick={onClose} fontWeight={400} fontSize={"16px"}>
                  All Products
                </Text>
              </Link>
              <Link to="/products">
                <Text onClick={onClose} fontWeight={400} fontSize={"16px"}>
                  Top Products
                </Text>
              </Link>
              <Link to="/products">
                <Text onClick={onClose} fontWeight={400} fontSize={"16px"}>
                  Vegetables
                </Text>
              </Link>
              <Link to="/products">
                <Text onClick={onClose} fontWeight={400} fontSize={"16px"}>
                  Grocery
                </Text>
              </Link>
            </Stack>
            <hr />
            {isAuth && (
              <Button
                onClick={handleUserLogout}
                mt={"10px"}
                variant={"outline"}
                colorScheme={"red"}
              >
                Logout
              </Button>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
