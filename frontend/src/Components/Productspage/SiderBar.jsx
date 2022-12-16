import React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
// import { img7, img8, img9 } from "./img";
// import { img1, img2, img3, img4, img5, img6 } from "./img";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const SiderBar=() =>{
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState();

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "https://www.bigbasket.com/media/uploads/banner_images/CXNP9513_1200x300_110322.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/YXNP1592_1200x300_270522.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/CXNP9519_1200x300_160322.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP2318-1200X300-15thJun22.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP1836-1200X300-1stJUN22.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/CXNP9519_1200x300_160322.jpg",
  ];

  return (
    <Box
      position={"relative"}
      height={"300px"}
      borderWidth="1px"
      overflow="hidden"
      margin={"auto"}
      mt={0}
      width={"All"}
      padding="0"
      //   border={"1px solid red"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        colorScheme="white"
        color="black"
        backgroundColor="transparent"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="black"
        color="black"
        backgroundColor="transparent"
        padding="10px"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={"300px"}
            padding="0"
            marginTop="0px"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundImage={`url(${url})`}
            overflow="hidden"
          />
        ))}
      </Slider>
    </Box>
  );
}
