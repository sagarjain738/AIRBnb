import {
  Flex,
  Text,
  Divider,
  Center,
  Link,
  Button,
  Box,
} from "@chakra-ui/react";
import { FaAirbnb } from "react-icons/fa";
import { BiSearch, BiGlobe } from "react-icons/bi";
import { GoThreeBars } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";

export default function () {
  return (
    <div
      style={{
        maxWidth: "1325px",
        margin: "auto",
        padding: "0 0px 0 10px",
        marginTop: "1rem",
      }}
    >
      <Flex justifyContent="space-between">
        <Flex flexBasis="35%" justifyContent="flex-start" alignItems="center">
          <FaAirbnb fontSize="2.2rem" color="rgb(255, 56, 92)"></FaAirbnb>
          <Text
            fontSize="1.44rem"
            fontWeight="650"
            color="rgb(255, 56, 92)"
            marginTop="-2px"
            letterSpacing="-1px"
          >
            ɑirbnb
          </Text>
        </Flex>
        <Flex flexBasis="30%" justifyContent="center">
          <Flex
            style={{
              minHeight: "3rem",
              borderRadius: "40px",
              alignItems: "center",
              border: "1px solid #DDDDDD",
              minWidth: "30%",
            }}
            shadow="md"
          >
            <Text fontSize=".9rem" fontWeight="550" marginLeft="1.5rem">
              Goa
            </Text>
            <Center margin="0 15px" height="25px">
              <Divider orientation="vertical"></Divider>
            </Center>
            <Text fontSize=".9rem" fontWeight="550">
              4 Mar - 3Apr
            </Text>
            <Center height="25px" margin="0 15px">
              <Divider orientation="vertical"></Divider>
            </Center>
            <Text color="#B0B0B0" fontSize="1rem">
              Add guests
            </Text>
            <Flex
              style={{
                background: "rgb(255, 56, 92)",
                borderRadius: "50%",
                height: "2rem",
                width: "2rem",
                marginRight: ".5rem",
                marginLeft: "1.2rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BiSearch fontSize=".9rem" color="white"></BiSearch>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexBasis="35%" justifyContent="flex-end">
          <Flex
            style={{
              alignItems: "center",
            }}
            justifyContent="space-evenly"
            minWidth="55%"
          >
            <Link
              style={{
                borderRadius: "40px",
                fontWeight: "520",
                fontSize: ".92rem",
              }}
              _hover={{ background: "#F7F7F7" }}
            >
              Become a host
            </Link>
            <BiGlobe fontSize="1.2rem"></BiGlobe>
            <Flex
              style={{
                borderRadius: "40px",
                // padding: ".25rem 1rem",
                border: ".5px solid grey",
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
    </div>
  );
}
