import { Flex, Divider, Text, Center, Input, Box } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addLat, addLang } from "../GlobalStatesRedux/action";
import { useEffect, useState } from "react";

export default function SearchBar({
  styleColor,
  getLocations,
  onOpenCalender,
  onOpen,
  onOpenSearchSuggestion,
  onOpenLocationBox,
  isOpenLocationBox,
  setShowLoc,
  setShowSuggestion,
}) {
  const handleData = (a) => {
    getLocations(a);
  };
  const { location, startDate, endDate, adults, childrens, infants, pets } =
    useSelector((store) => store);
  const dispatch = useDispatch();
  const [locationWidth, setLocationWidth] = useState("30%");
  // useEffect(() => {
  //   setLocationWidth(isOpenLocationBox === true ? "20%" : "30%");
  // }, [isOpenLocationBox]);
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      background={styleColor}
      width="64%"
      minHeight="7%"
      margin="0 auto 2rem auto"
      borderRadius="full"
      position="relative"
      border="1px solid lightgrey"
    >
      {/* ************************** FIRST COMPONENT ************************************************ */}
      <Box
        flexBasis={locationWidth}
        borderRadius="40px"
        textAlign="left"
        _hover={{ background: "#DDDDDD" }}
        transition=".2s"
        cursor="pointer"
        padding="1.2% 0"
        height="100%"
        onClick={() => {
          onOpenLocationBox();
          // setLocationWidth("20%");
        }}
      >
        <Text
          fontSize="14px"
          fontWeight="600"
          marginLeft="1.8rem"
          cursor="pointer"
          onClick={() => {
            onOpenLocationBox();
          }}
        >
          Location
        </Text>
        <Input
          borderRadius="30px"
          marginTop="-.7rem"
          marginLeft="1.7rem"
          variant="unstyled"
          placeholder="Where are you going?"
          border="none"
          fontWeight="600"
          background="transparent"
          _hover={{ background: "transparent" }}
          fontSize="14px"
          focusBorderColor="white"
          _placeholder={{ color: "#222222" }}
          cursor="text"
          onClick={() => onOpenLocationBox()}
          onChange={(a) => {
            if (a.target.value.length === 0) {
              onOpenLocationBox();
              setShowSuggestion(false);
              setShowLoc(true);
            } else {
              setShowSuggestion(true);
              setShowLoc(false);
              onOpenSearchSuggestion();
              handleData(a.target.value);
            }
          }}
        ></Input>
      </Box>
      {/* ************************** SECOND COMPONENT ************************************************ */}
      <Center height="35px">
        <Divider orientation="vertical" />
      </Center>
      <Box
        background="white"
        flexBasis="20%"
        borderRadius="40px"
        _hover={{ background: "#DDDDDD" }}
        transition=".2s"
        cursor="pointer"
        padding="1.2% 0"
        onClick={() => {
          onOpenCalender();
        }}
      >
        <Text
          fontSize="14px"
          fontWeight="600"
          marginLeft="1.7rem"
          cursor="pointer"
          onClick={() => {
            onOpenCalender();
          }}
        >
          Check in
        </Text>
        <Text
          cursor="pointer"
          marginLeft="1.7rem"
          fontSize="14px"
          variant="unstyled"
          placeholder="Add dates"
          border="none"
          color="grey"
          background="transparent"
          _hover={{ background: "transparent" }}
          onClick={() => {
            onOpenCalender();
          }}
        >
          Ad dates
        </Text>
      </Box>
      {/* ************************** THIRD COMPONENT ************************************************ */}
      <Center height="35px">
        <Divider orientation="vertical" />
      </Center>
      <Box
        background="white"
        flexBasis="20%"
        padding="1.2% 0"
        borderRadius="40px"
        _hover={{ background: "#DDDDDD" }}
        transition=".2s"
        fontSize="14px"
        cursor="pointer"
        onClick={() => {
          onOpenCalender();
        }}
      >
        <Text
          fontSize="14px"
          fontWeight="600"
          marginLeft="1.7rem"
          cursor="pointer"
          onClick={() => {
            onOpenCalender();
          }}
        >
          Check out
        </Text>
        <Text
          cursor="pointer"
          marginLeft="1.7rem"
          variant="unstyled"
          placeholder="Add dates"
          border="none"
          background="transparent"
          _hover={{ background: "transparent" }}
          fontSize="14px"
          color="grey"
          onClick={() => {
            onOpenCalender();
          }}
        >
          Add dates
        </Text>
      </Box>
      {/* ************************************************************************** */}
      <Center height="35px">
        <Divider orientation="vertical" />
      </Center>
      <Box
        cursor="pointer"
        background="white"
        height="7%"
        flexBasis="30%"
        padding="1.2% 0"
        borderRadius="40px"
        _hover={{ background: "#DDDDDD" }}
        transition=".2s"
        onClick={() => onOpen()}
      >
        <Text
          fontSize="14px"
          fontWeight="600"
          marginLeft="1.7rem"
          cursor="pointer"
          onClick={() => {
            onOpen();
          }}
        >
          Guests
        </Text>
        <Text
          cursor="pointer"
          marginLeft="1.7rem"
          background="transparent"
          fontSize="14px"
          color="grey"
          onClick={() => {
            onOpen();
          }}
        >
          Add guests
        </Text>
      </Box>
      {/* ************************************************************************** */}
      <Flex
        cursor="pointer"
        position="absolute"
        right="10px"
        height="3rem"
        width="3rem"
        borderRadius="50%"
        background="#FF385C"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        _hover={{ background: "#92174D" }}
      >
        {/* <Link to={`/hotelinfo/${location}`}> */}
        <Link
          to={`/hotelinfo/${location}/?page=${1}`}
          onClick={async () => {
            const [{ lat, lng }] = await gerRecords(location);
            dispatch(addLat(lat));
            dispatch(addLang(lng));
            console.log("this is lat & lang info", lat, lng);
          }}
        >
          <BiSearch fontSize="1.5rem" color="white" cursor="pointer"></BiSearch>
        </Link>
      </Flex>
    </Flex>
  );
}

const gerRecords = async (location) => {
  const result = await axios.get(
    `http://localhost:1111/cityDetails/${location}`
  );

  if (result.data.length >= 0) {
    return result.data;
  } else {
    return "";
  }
};
