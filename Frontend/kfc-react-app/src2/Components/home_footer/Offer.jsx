import React from "react";
import { slider } from "./slider";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sticker from "./Sticker";
import {
  Heading,
  Box,
  Img,
  Spacer,
  Flex,
  Text,
  Center,
} from "@chakra-ui/react";


export default function Offer() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box >
      <Spacer h={"100px"} />
      <Box w={"100%"} bgColor={"#202124"}>
        <Box w={"80%"} m={"auto"}>
          <Sticker/>
          <Spacer h={"50px"} />
          <Flex color={"white"} justifyContent={"space-between"}>
            <Heading fontSize={"38px"}>OFFERS & DEALS</Heading>
            <NavLink to={"./menu"}>
              <Text fontWeight={"bold"} fontSize={"14px"}>
                View ALL Deals →
              </Text>
            </NavLink>
          </Flex>
          <Spacer h={"50px"} />
          <Box>
            {/* slider */}
            <Slider {...settings}>
              {slider.map((ele,i) => (
                <Box
                  key={i}
                  color={"white"}
                  h={"398px"}
                  maxW="310px"
                  borderRadius={"10px"}
                  bgColor={"#F8F7F5"}
                  // border={"1px solid red"}
                >
                  <Img
                    src={ele.image}
                    alt="image"
                    h={"234.8px"}
                    borderTopRadius={"10px"}
                  />
                  <Center>
                    <Heading fontSize={"25px"} color={"red"}>
                      {ele.title}
                    </Heading>
                  </Center>

                  <Text
                    fontSize={"14px"}
                    color={"grey"}
                    w={"250px"}
                    m="auto"
                    textAlign={"center"}
                  >
                    {ele.detail}
                  </Text>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
