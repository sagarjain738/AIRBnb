import { FaAirbnb } from "react-icons/fa";
import { BiSearch, BiGlobe } from "react-icons/bi";
import { Box, Flex, Text, Link, Input } from "@chakra-ui/react";
import { GoThreeBars } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <Flex
      justifyContent="space-between"
      padding="1.3% 8%"
      background="white"
      shadow="md"
    >
      <Flex
        style={{
          alignItems: "center",
          flexBasis: "24%",
        }}
      >
        <FaAirbnb fontSize="2.2rem" color="rgb(255, 56, 92)"></FaAirbnb>
        <Link
          style={{
            fontSize: "1.44rem",
            fontWeight: "650",
            color: "rgb(255, 56, 92)",
            marginTop: "-2px",
            letterSpacing: "-1px",
            textDecoration: "none",
          }}
          to={"/"}
        >
          ɑirbnb
        </Link>
      </Flex>

      {/* Second Component */}

      <Flex
        flexBasis="26%"
        borderRadius="30px"
        border="1px solid lightgrey"
        padding="0 .5rem"
        alignItems="center"
        shadow="md"
      >
        <Input
          variant="unstyled"
          placeholder="Start Your Search"
          focusBorderColor="red"
          errorBorderColor="crimson"
          outline="none"
          paddingLeft="1rem"
          _placeholder={{ color: "black", fontWeight: "600" }}
        ></Input>
        <BiSearch
          style={{
            fontSize: "2rem",
            padding: "7px",
            borderRadius: "100px",
            background: "rgb(255, 56, 92)",
            color: "white",
            marginLeft: "10px",
          }}
        ></BiSearch>
      </Flex>

      {/* Third Component */}

      <Flex
        _hover={{
          cursor: "pointer",
        }}
        flexBasis="25%"
        justifyContent="center"
      >
        <Flex
          style={{
            alignItems: "center",
          }}
          justifyContent="space-evenly"
          minWidth="58%"
        >
          <Text
            style={{
              borderRadius: "40px",
              fontWeight: "520",
              fontSize: ".92rem",
              padding: ".7rem 1rem",
            }}
            _hover={{ background: "#F7F7F7" }}
          >
            Become a host
          </Text>
          <Flex
            padding=".9rem"
            _hover={{
              background: "#f8f8f8",
            }}
            justifyContent="center"
            alignItems="center"
            marginLeft="-.7rem"
            borderRadius="full"
          >
            <BiGlobe
              style={{
                fontSize: "1.2rem",
              }}
            ></BiGlobe>
          </Flex>
          <Flex
            style={{
              borderRadius: "40px",
              // padding: ".25rem 1rem",
              border: ".5px solid lightGrey",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <GoThreeBars
              fontSize="1rem"
              style={{ margin: ".3rem .7rem" }}
            ></GoThreeBars>
            <FaUserCircle
              fontSize="1.9rem"
              color="grey"
              style={{ margin: ".3rem 0", marginRight: ".3rem" }}
            ></FaUserCircle>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
