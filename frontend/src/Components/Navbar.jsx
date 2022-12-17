import React, { useCallback, useState } from "react";

import { json, Link } from "react-router-dom";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  // Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Input,
  Spacer,
  InputGroup,
  InputRightElement,
  useColorMode,
  FormLabel,
  FormControl,
  Switch,
  Drawer,
  Show,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
  Search2Icon,
} from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  const [width, setWidth] = React.useState(window.innerWidth);

  const breakpoint = 700;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  //-----------------------------------------------
  return (
    <>
      <Box position="fixed" top={0} zIndex={5}>
        <Flex
          w="80%"
          style={{
            zIndex: 2,
            flex: 1,
            width: "100%",
            margin: "0 auto",
          }}
          //#f5f5f5
          //#fae9d3
          bg={useColorModeValue("#f5f5f5", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 9 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <DrawerExample
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>

          <Stack direction={"row"} spacing={6} ml={10}>
            <Finest />
            {/* <Image
              boxSize="60px"
              src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-14/Screenshot_20221214_185210_946350.png"
              alt="Icon"
            /> */}
          </Stack>

          <Flex flex={{ base: 1 }} justify={{ base: "space-around", md: "" }}>
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
          <Flex>
            <SignLog />
          </Flex>

          {/* <Stack>
                  {navItemss.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack> */}
          {/* <Stack>
          {search?.length > 0 &&
                <div className={'autocomplete'}>
                  {search.map((el) => 
                    <div key={el} className={'autocomplateItem'}>
                      <div>{el.title}</div>
                    </div>)}
                </div>}
          </Stack> */}
        </Flex>
        {/* <Flex spacing={8} pr={'45rem'}>
        <DesktopNav2 />
      </Flex> */}

        <Collapse in={isOpen} animateOpacity>
          {/* <DrawerExample > */}
          <MobileNav />
          {/* </DrawerExample> */}
        </Collapse>
      </Box>
    </>
  );
}

const Finest = () => {
  return (
    <div>
      <Image
        boxSize="60px"
        src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-14/Screenshot_20221214_185210_946350.png"
        alt="Icon"
      />
    </div>
  );
};

const SignLog = () => {
  return (
    <div>
      <Stack
        // justify={{ base: "end", md: "end" }}
        flex={{ base: 2, md: 0.45 }}
        justify={{ md: "end" }}
        direction={"row"}
        spacing={4}
      >
        <Link to="/login">
          <Button
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"blue.400"}
            _hover={{
              bg: "brand.100",
            }}
          >
            Log In
          </Button>
        </Link>
        <Link to="/signup">
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"brand.100"}
            href={"#"}
            _hover={{
              bg: "blue.400",
            }}
          >
            Sign Up
          </Button>
        </Link>
      </Stack>
    </div>
  );
};

const DesktopNav2 = () => {
  const [search, setSearch] = useState();

  //--------------------------------------------
  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (event) => {
    const { value } = event.target;
    fetch(
      `https://hilarious-kerchief-crab.cyclic.app/product/search?q=${value}`
    )
      .then((data) => {
        return data.json();
      })
      .then((resp) => {
        setSearch(json.resp);
        console.log(...resp);
      });
    // console.log(resp);
  };

  const optimisedVersion = useCallback(debounce(handleChange), []);

  return (
    <div>
      <Stack borderColor={"red"} border="2px" flex={{ base: 1, md: 0.7 }}>
        <InputGroup size="md" background={"white"}>
          <Input
            minW={"350px"}
            placeholder="Search Products"
            type={"text"}
            name={"search"}
            className={"search"}
            onChange={optimisedVersion}
          />
          <InputRightElement width="4.5rem">
            <Button h="2.4rem" size="lg">
              <Search2Icon />
            </Button>
          </InputRightElement>
        </InputGroup>
        {/* <Dropdown>
                    {data b
                      .filter((item) => {
                        const searchTerm = value.toLowerCase();
                        const fullName = item.full_name.toLowerCase();
          
                        return (
                          searchTerm &&
                          fullName.startsWith(searchTerm) &&
                          fullName !== searchTerm
                        );
                      })
                      .slice(0, 10)
                      .map((item) => (
                        <div
                          onClick={() => onSearch(item.full_name)}
                          className="dropdown-row"
                          key={item.full_name}
                        >
                          {item.full_name}
                        </div>
                      ))}
            </Dropdown> */}
      </Stack>
    </div>
  );
};
const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack direction={"row"} spacing={9}>
      {NAV_ITEMS.map((navItemss) => (
        <Box fontWeight={500} key={navItemss.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItemss.href ?? "products"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                to="/products"
              >
                {navItemss.label}
              </Link>
            </PopoverTrigger>

            {navItemss.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItemss.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
      <Button onClick={toggleColorMode} spacing={4}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
      <Flex spacing={8} pl={"15rem"}>
        <DesktopNav2 />
      </Flex>
      {/* <Flex>
        <SignLog />
      </Flex> */}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileView = () => {
  const [search, setSearch] = useState();

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (event) => {
    const { value } = event.target;
    fetch(
      `https://hilarious-kerchief-crab.cyclic.app/product/search?q=${value}`
    )
      .then((data) => {
        return data.json();
      })
      .then((resp) => {
        setSearch(json.resp);
        console.log(...resp);
      });
    // console.log(resp);
  };

  const optimisedVersion = useCallback(debounce(handleChange), []);

  return (
    <div>
      const [search, setSearch] = useState();
      <Stack>
        {/* <InputGroup>
    <Input>
    </Input>
    </InputGroup> */}
        {/* <InputGroup background={"white"} border="pink">
          <Input placeholder="Search product here" />
          <InputRightElement width="3.5rem">
            <Button h="2.4rem" size="lg">
              <Search2Icon />
            </Button>
          </InputRightElement>
        </InputGroup> */}
      </Stack>
    </div>
  );
};

const MobileNav = () => {
  return (
    <>
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        p={7}
        display={{ md: "none" }}
      >
        {NAV_ITEMS.map((navItemss) => (
          <MobileNavItemss key={navItemss.label} {...navItemss} />
        ))}
      </Stack>
      <Flex spacing={4} pl={"20rem"}>
        <DesktopNav2 />
      </Flex>
    </>
  );
};

const MobileNavItemss = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        mt={1}
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Brands",
    children: [
      {
        label: "Top Brands",
        subLabel: "Trending Brands to inspire you",
        href: "/products",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/products",
      },
    ],
  },
  {
    label: "Shop By Categarys",
    children: [
      {
        label: "Grocery",
        subLabel: "Find your grocery",
        href: "/products",
      },
      {
        label: "Categary",
        subLabel: "An exclusive list ",
        href: "/products",
      },
    ],
  },
  {
    label: "Grocery Offers",
    href: "/products",
  },
  {
    label: "Top Products",
    href: "/products",
  },
];

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <br />
            <DesktopNav2 />

            <DrawerCloseButton />
            <DrawerHeader>
              {" "}
              <Stack
                bg={useColorModeValue("white", "gray.800")}
                p={7}
                display={{ md: "none" }}
              >
                {NAV_ITEMS.map((navItemss) => (
                  <MobileNavItemss key={navItemss.label} {...navItemss} />
                ))}
              </Stack>
            </DrawerHeader>
          </DrawerHeader>

          <DrawerBody>
            <Link to="./login">
              <Button mr={9} colorScheme="blue">
                Login
              </Button>
            </Link>
            <Link to="./signup">
              <Button colorScheme="blue">Signup</Button>
            </Link>
            {/* <DesktopNav2 /> */}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
