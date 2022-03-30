import { Flex, Text, Divider, Center } from "@chakra-ui/react";
import { FaAirbnb } from "react-icons/fa";
import { BiSearch, BiGlobe } from "react-icons/bi";
import { GoThreeBars } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import GuestList from "../Guests/GuestFunction";
import DatePicker from "../Calender/TripCalender2";
import {
  ModalOverlay,
  Modal,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";

import SearchBar from "../Search/SearchBar";

export default function () {
  const params = useParams();
  const {
    location,
    startDate,
    endDate,
    adults,
    childrens,
    infants,
    pets,
    lat,
    lang,
  } = useSelector((store) => store);

  const startingDate = dayjs(startDate).format("D MMM");
  const endingDate = dayjs(endDate).format("D MMM");
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const {
  //   isOpen: isOpenCalender,
  //   onOpen: onOpenCalender,
  //   onClose: onCloseCalender,
  // } = useDisclosure();

  return (
    <div
      style={{
        maxWidth: "96%",
        margin: "auto",
        marginTop: "1rem",
        // marginBottom: "1rem",
      }}
    >
      <Flex justifyContent="space-between">
        {/* First Component */}

        <Flex
          _hover={{
            cursor: "pointer",
          }}
          flexBasis="35%"
          justifyContent="flex-start"
          alignItems="center"
          onClick={() => {}}
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

        {/* second Component */}

        <Flex
          _hover={{
            cursor: "pointer",
          }}
          flexBasis="30%"
          justifyContent="center"
        >
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
              {params.location}
            </Text>
            <Center margin="0 15px" height="25px">
              <Divider orientation="vertical"></Divider>
            </Center>
            <Text fontSize=".9rem" fontWeight="600">
              {startingDate} - {endingDate}
            </Text>
            <Center height="25px" margin="0 15px">
              <Divider orientation="vertical"></Divider>
            </Center>
            <Text color="black" fontWeight="500" fontSize="1rem">
              {/* //color="#B0B0B0" */}
              {adults === 0
                ? childrens === 0
                  ? infants === 0
                    ? pets === 0
                      ? "add Guests"
                      : adults + childrens + " guests"
                    : adults + childrens + " guests"
                  : adults + childrens + " guests"
                : adults + childrens + " guests"}
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

        {/* Third Component */}

        <Flex
          _hover={{
            cursor: "pointer",
          }}
          flexBasis="35%"
          justifyContent="flex-end"
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
