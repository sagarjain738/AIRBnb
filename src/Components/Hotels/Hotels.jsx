import { Box, Divider, Flex, Text, Image } from "@chakra-ui/react";
import { AiOutlineHeart, AiTwotoneStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import ImageSlider from "../HotelImages/HotelImages";
import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Hotels() {
  const size = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Divider margin="1.2rem 0"></Divider>
      <Swiper
        navigation={true}
        pagination={pagination}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{
          paddingBottom: "4rem",
        }}
      >
        <SwiperSlide>
          {size.map((a) => {
            return (
              <Box>
                <Box background="" position="relative">
                  <Flex
                    style={{
                      position: "absolute",
                      right: "-15px",
                      width: "3rem",
                      borderRadius: "100px",
                      height: "3rem",
                      justifyContent: "center",
                      alignItems: "center",
                      top: "12px",
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
                          paddingRight="2rem"
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
        </SwiperSlide>
        <SwiperSlide>
          {size.map((a) => {
            return (
              <Box>
                <Box background="" position="relative">
                  <Flex
                    style={{
                      position: "absolute",
                      right: "-15px",
                      width: "3rem",
                      borderRadius: "100px",
                      height: "3rem",
                      justifyContent: "center",
                      alignItems: "center",
                      top: "12px",
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
                          paddingRight="2rem"
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
        </SwiperSlide>
      </Swiper>
      <Flex height="6rem" alignItems="center" flexDirection="column">
        <div style={{ fontSize: "14.5px" }}>1 – 20 of 300+ places to stay</div>

        <div style={{ fontSize: "12.5px", color: "gray", marginTop: "2rem" }}>
          Enter dates to see full pricing. Additional fees apply. Taxes may be
          added.
        </div>
      </Flex>
    </>
  );
}
