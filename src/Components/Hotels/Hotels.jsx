import { Box, Divider, Flex, Text, Circle } from "@chakra-ui/react";
import { AiOutlineHeart, AiTwotoneStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import ImageSlider from "../HotelImages/HotelImages";
import React, { useEffect, useRef, useState } from "react";
import Footer from "../Footer/Footer";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useParams } from "react-router";
import axios from "axios";

export default function Hotels() {
  const { location } = useSelector((store) => store);
  const size = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  const param = useParams();
  const [cityDetails, setcityDetails] = useState();
  const instance = axios.create({
    baseURL: "http://localhost:1111/",
    timeout: 1000,
  });

  useEffect(async () => {
    const result = await axios.get(
      `http://localhost:1111/cityDetails/${param.location}`
    );
    setcityDetails(result);
  }, []);

  // console.log("Requested hotel info", cityDetails.data);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Box padding="1.3rem 1.5rem">
        <Text fontSize="14px" fontWeight="500">
          300+ stays in {location}
        </Text>
        <Divider margin="1.2rem 0"></Divider>
        {size.map((a, b) => {
          return (
            <Box key={b}>
              <Box background="" position="relative">
                <Flex
                  style={{
                    position: "absolute",
                    right: "-1%",
                    width: "3rem",
                    borderRadius: "100px",
                    height: "3rem",
                    justifyContent: "center",
                    alignItems: "center",
                    top: "-1%",
                  }}
                  _hover={{
                    background: "#F7F7F7",
                    cursor: "pointer",
                  }}
                >
                  <AiOutlineHeart
                    style={{
                      fontSize: "1.7rem",
                    }}
                  ></AiOutlineHeart>
                </Flex>
                <Box padding=".3rem 0">
                  <Box>
                    <Flex
                      minHeight="12.5rem"
                      justifyContent="space-between"
                      boxSizing="border-box"
                    >
                      <Box
                        flexBasis="40.5%"
                        borderRadius="15px"
                        overflow="hidden"
                        height="12.5rem"
                      >
                        <ImageSlider />
                      </Box>
                      <Box
                        flexBasis="57.5%"
                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        paddingRight="2.7rem"
                      >
                        <Text fontSize="15px" color="grey">
                          Entire rental unit in Candolim
                        </Text>
                        <Text
                          letterSpacing="-.3px"
                          fontSize="1.2rem"
                          white-space="nowrap"
                          overflow="hidden"
                          textOverflow="ellipsis"
                        >
                          Modern & well-equipped Apt. 7 mins to the beach
                        </Text>
                        <Divider width="2rem" margin=".5rem 0"></Divider>
                        <Text fontSize="15px" color="grey">
                          2 guests.1bedroom.1bed.1bathroom
                        </Text>
                        <Text fontSize="15px" color="grey">
                          Wifi.Air conditioning.kitchen
                        </Text>
                        <Flex
                          height="44%"
                          width="110%"
                          justifyContent="space-between"
                          alignItems="flex-end"
                        >
                          <Flex alignItems="center">
                            <AiTwotoneStar
                              style={{ color: "#FF385C", marginTop: "4px" }}
                            ></AiTwotoneStar>
                            <span
                              style={{
                                marginLeft: "2px",
                                fontSize: ".9rem",
                                fontWeight: "550",
                              }}
                            >
                              4.75{" "}
                              <span
                                style={{
                                  color: "gray",
                                  fontWeight: "500",
                                  fontSize: ".9rem",
                                }}
                              >
                                (53 reviews)
                              </span>
                            </span>
                          </Flex>
                          <Flex alignItems="center" fontSize="1.2rem">
                            <BiRupee style={{ marginTop: "4px" }}></BiRupee>
                            <span style={{ marginLeft: "-5px" }}>
                              <span
                                style={{
                                  fontWeight: "550",
                                  fontSize: "1.2rem",
                                  marginRight: "3px",
                                }}
                              >
                                1,197
                              </span>
                              / night
                            </span>
                          </Flex>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                </Box>
                <Divider margin="1.2rem 0"></Divider>
              </Box>
            </Box>
          );
        })}
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide></SwiperSlide>
        </Swiper>
        <Flex height="6rem" alignItems="center" flexDirection="column">
          <Flex
            alignItems="center"
            width="50%"
            justifyContent="center"
            gap="10px"
            marginBottom="1rem"
          >
            <MdOutlineArrowBackIosNew
              style={{ marginRight: "1rem" }}
            ></MdOutlineArrowBackIosNew>
            <Circle
              size="30px"
              color="white"
              transition=".2s"
              background="blackAlpha.900"
              _hover={{ background: "#F7F7F7", cursor: "pointer" }}
            >
              1
            </Circle>
            <Circle
              size="40px"
              transition=".2s"
              _hover={{ background: "#F7F7F7", cursor: "pointer" }}
            >
              2
            </Circle>
            <Circle
              size="40px"
              transition=".2s"
              _hover={{ background: "#F7F7F7", cursor: "pointer" }}
            >
              3
            </Circle>
            <Circle
              size="40px"
              transition=".2s"
              _hover={{ background: "#F7F7F7", cursor: "pointer" }}
            >
              4
            </Circle>
            <Circle
              size="40px"
              transition=".2s"
              _hover={{ background: "#F7F7F7", cursor: "pointer" }}
            >
              5
            </Circle>
            <MdOutlineArrowForwardIos
              style={{ marginLeft: "1rem" }}
            ></MdOutlineArrowForwardIos>
          </Flex>
          <div style={{ fontSize: "14.5px" }}>
            1 – 20 of 300+ places to stay
          </div>

          <div style={{ fontSize: "12.5px", color: "gray", margin: "2rem 0" }}>
            Enter dates to see full pricing. Additional fees apply. Taxes may be
            added.
          </div>
          <Footer></Footer>
        </Flex>
      </Box>
    </>
  );
}
