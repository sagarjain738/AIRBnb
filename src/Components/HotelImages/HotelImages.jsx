import React, { useRef, useState } from "react";
import { Image } from "@chakra-ui/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";

// import required modules

export default function ImageSlider() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/500x350/?hotel room"
            fir="cover"
            width="100%"
            height="100%"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/500x350/?hotel room"
            fir="cover"
            width="100%"
            height="100%"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/500x350/?hotel room"
            fir="cover"
            width="100%"
            height="100%"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/500x350/?hotel room"
            fir="cover"
            width="100%"
            height="100%"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/500x350/?hotel room"
            fir="cover"
            width="100%"
            height="100%"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/500x350/?hotel room"
            fir="cover"
            width="100%"
            height="100%"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/500x350/?hotel room"
            fir="cover"
            width="100%"
            height="100%"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/500x350/?hotel room"
            fir="cover"
            width="100%"
            height="100%"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/500x350/?hotel room"
            fir="cover"
            width="100%"
            height="100%"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/500x350/?hotel room"
            fir="cover"
            width="100%"
            height="100%"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/500x350/?hotel room"
            fir="cover"
            width="100%"
            height="100%"
          ></Image>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
