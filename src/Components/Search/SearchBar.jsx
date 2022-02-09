import { Flex, Divider, Text, Center, Input } from "@chakra-ui/react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchBar({
  styleColor,
  calender,
  searchBar,
  guestList,
  getLocations,
}) {
  const [seacrhQuery, setSearchQuery] = useState("");
  const handleData = (a) => {
    // setSearchQuery(a);
    getLocations(a, 1);
  };
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      background={styleColor}
      width="850px"
      height="10vh"
      margin="0 auto 2rem auto"
      borderRadius="40px"
      position="relative"
    >
      <Flex
        background="white"
        height="10vh"
        flexBasis="30%"
        direction="column"
        justifyContent="space-evenly"
        borderRadius="40px"
        textAlign="left"
        _hover={{ background: "#DDDDDD" }}
        transition=".2s"
        cursor="pointer"
        onClick={() => searchBar(1)}
      >
        <Text
          fontSize="14px"
          fontWeight="600"
          marginLeft="1.8rem"
          cursor="pointer"
          onClick={() => searchBar(1)}
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
          onClick={() => searchBar(1)}
          onChange={(a) => handleData(a.target.value, 1)}
        ></Input>
      </Flex>
      {/* ************************************************************************** */}
      <Center height="35px">
        <Divider orientation="vertical" />
      </Center>
      <Flex
        background="white"
        height="10vh"
        flexBasis="20%"
        direction="column"
        justifyContent="space-around"
        borderRadius="40px"
        _hover={{ background: "#DDDDDD" }}
        transition=".2s"
        cursor="pointer"
        onClick={() => calender(1)}
      >
        <Text
          fontSize="14px"
          fontWeight="600"
          marginLeft="1.7rem"
          cursor="pointer"
        >
          Check in
        </Text>
        <Text
          cursor="pointer"
          marginTop="-1.5rem"
          marginLeft="1.7rem"
          fontSize="14px"
          variant="unstyled"
          placeholder="Add dates"
          border="none"
          color="grey"
          background="transparent"
          _hover={{ background: "transparent" }}
        >
          Ad dates
        </Text>
      </Flex>
      {/* ************************************************************************** */}
      <Center height="35px">
        <Divider orientation="vertical" />
      </Center>
      <Flex
        background="white"
        height="10vh"
        flexBasis="20%"
        direction="column"
        justifyContent="space-around"
        borderRadius="40px"
        _hover={{ background: "#DDDDDD" }}
        transition=".2s"
        fontSize="14px"
        cursor="pointer"
        onClick={() => calender(1)}
      >
        <Text
          fontSize="14px"
          fontWeight="600"
          marginLeft="1.7rem"
          cursor="pointer"
        >
          Check out
        </Text>
        <Text
          cursor="pointer"
          marginTop="-1.5rem"
          marginLeft="1.7rem"
          variant="unstyled"
          placeholder="Add dates"
          border="none"
          background="transparent"
          _hover={{ background: "transparent" }}
          fontSize="14px"
          color="grey"
        >
          Add dates
        </Text>
      </Flex>
      {/* ************************************************************************** */}
      <Center height="35px">
        <Divider orientation="vertical" />
      </Center>
      <Flex
        cursor="pointer"
        background="white"
        height="10vh"
        flexBasis="30%"
        direction="column"
        justifyContent="space-around"
        borderRadius="40px"
        _hover={{ background: "#DDDDDD" }}
        transition=".2s"
        onClick={() => guestList(1)}
      >
        <Text
          fontSize="14px"
          fontWeight="600"
          marginLeft="1.7rem"
          cursor="pointer"
          onClick={() => guestList(1)}
        >
          Guests
        </Text>
        <Text
          cursor="pointer"
          marginLeft="1.7rem"
          marginTop="-1.5rem"
          background="transparent"
          fontSize="14px"
          color="grey"
          onClick={() => guestList(1)}
        >
          Add guests
        </Text>
      </Flex>
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
        onClick={() => searchBar(1)}
      >
        <BiSearch fontSize="1.5rem" color="white" cursor="pointer"></BiSearch>
      </Flex>
    </Flex>
  );
}

// https://kiarash-z.github.io/react-modern-calendar-datepicker/
// https://reactnicedates.hernansartorio.com/
